export function renderFooter(container: HTMLElement): void {
  const currentYear = new Date().getFullYear();

  container.innerHTML = `
    <footer class="site-footer">
      <div class="footer-divider">
        ─────────────────────────────────────────────────────────────────────────────
      </div>
      <div class="footer-content">
        <div class="footer-info">
          <span class="footer-prompt">visitor@m4thieulavoie.dev:~$</span>
          <span class="footer-text">cat footer.txt</span>
        </div>
        <p class="footer-copyright">
          © ${currentYear} Mathieu Lavoie • Built with vanilla TypeScript & Vite
        </p>
        <div class="footer-links">
          <a href="https://github.com/mattlavio" target="_blank" rel="noopener">
            [GitHub]
          </a>
        </div>
      </div>
    </footer>
  `;
}
