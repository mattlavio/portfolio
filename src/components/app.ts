import { router } from '../common/router';
import { renderHome } from '../pages/home';
import { renderResume } from '../pages/resume';
import { renderPortfolio } from '../pages/portfolio';
import { renderContact } from '../pages/contact';
import { qs } from '../utils/dom';
import { renderFooter } from './footer';
import { renderHeader } from './header';

export function initApp(): void {
  const appContainer = qs<HTMLDivElement>('#app');
  if (!appContainer) {
    console.error('App container not found');
    return;
  }

  // Create app structure
  appContainer.innerHTML = `
    <div id="header"></div>
    <main id="router-outlet"></main>
    <div id="footer"></div>
  `;

  // Render header and footer
  const headerEl = qs<HTMLDivElement>('#header');
  const footerEl = qs<HTMLDivElement>('#footer');
  const outlet = qs<HTMLElement>('#router-outlet');

  if (headerEl) renderHeader(headerEl);
  if (footerEl) renderFooter(footerEl);

  if (!outlet) {
    console.error('Router outlet not found');
    return;
  }

  // Register routes
  router.on('/', () => renderHome(outlet));
  router.on('/resume', () => renderResume(outlet));
  router.on('/portfolio', () => renderPortfolio(outlet));
  router.on('/contact', () => renderContact(outlet));

  // Handle 404
  router.notFound(() => {
    outlet.innerHTML = `
      <div class="not-found">
        <h1>404 - Page Not Found</h1>
        <p>The page you're looking for doesn't exist.</p>
        <a href="/">Go Home</a>
      </div>
    `;
  });

  // Initialize router
  router.init();
}
