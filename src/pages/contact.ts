import { email, website, phoneNumber } from '../common/metadata';

export function renderContact(container: HTMLElement): void {
  container.innerHTML = `
    <section class="contact-page">
      <h1>Contact</h1>

      <div class="contact-info">
        <p>
          Feel free to reach out! I'm always happy to connect.
        </p>

        <ul class="contact-list">
          <li>
            <strong>Email:</strong>
            <a href="mailto:${email}">${email}</a>
          </li>
          <li>
            <strong>Website:</strong>
            <a href="https://${website}" target="_blank" rel="noopener">${website}</a>
          </li>
          <li>
            <strong>Phone:</strong>
            <a href="tel:${phoneNumber}">${phoneNumber}</a>
          </li>
          <li>
            <strong>GitHub:</strong>
            <a href="https://github.com/mattlavio" target="_blank" rel="noopener">@mattlavio</a>
          </li>
        </ul>
      </div>
    </section>
  `;
}
