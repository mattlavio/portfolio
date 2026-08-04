/**
 * Lightweight custom router using History API
 * Handles navigation for 4 routes: /, /resume, /portfolio, /contact
 */

export type RouteHandler = () => void;

interface Route {
  readonly path: string;
  readonly handler: RouteHandler;
}

class Router {
  private routes: Route[] = [];
  private notFoundHandler: RouteHandler | null = null;

  /**
   * Register a route with its handler
   */
  on(path: string, handler: RouteHandler): void {
    this.routes.push({ path, handler });
  }

  /**
   * Set 404 handler
   */
  notFound(handler: RouteHandler): void {
    this.notFoundHandler = handler;
  }

  /**
   * Navigate to a path programmatically
   */
  navigate(path: string): void {
    window.history.pushState({}, '', path);
    this.handleRoute();
  }

  /**
   * Handle the current route
   */
  private handleRoute(): void {
    const path = window.location.pathname;

    // Find matching route
    const route = this.routes.find(r => {
      if (r.path === path) return true;
      // Also match paths with trailing slash
      if (r.path === path.replace(/\/$/, '')) return true;
      return false;
    });

    if (route) {
      route.handler();
    } else if (this.notFoundHandler) {
      this.notFoundHandler();
    }
  }

  /**
   * Initialize the router
   */
  init(): void {
    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.handleRoute();
    });

    // Intercept link clicks
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');

      if (link && link.href) {
        const url = new URL(link.href);

        // Only intercept internal links
        if (url.origin === window.location.origin) {
          // Don't intercept links that open in new tab
          if (link.target === '_blank') return;

          e.preventDefault();
          this.navigate(url.pathname);
        }
      }
    });

    // Handle initial route
    this.handleRoute();
  }
}

// Export singleton instance
export const router = new Router();
