/**
 * DOM utility functions for creating and manipulating elements
 */

/**
 * Create an element with optional attributes and children
 */
export function createElement<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  attributes?: Readonly<Record<string, string>>,
  children?: readonly (HTMLElement | string)[]
): HTMLElementTagNameMap[K] {
  const element = document.createElement(tag);

  if (attributes) {
    Object.entries(attributes).forEach(([key, value]) => {
      if (key === 'className') {
        element.className = value;
      } else if (key.startsWith('data-')) {
        element.setAttribute(key, value);
      } else {
        element.setAttribute(key, value);
      }
    });
  }

  if (children) {
    children.forEach(child => {
      if (typeof child === 'string') {
        element.appendChild(document.createTextNode(child));
      } else {
        element.appendChild(child);
      }
    });
  }

  return element;
}

/**
 * Clear all children from a container
 */
export function clearContainer(container: HTMLElement): void {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

/**
 * Render HTML string into container
 */
export function render(container: HTMLElement, html: string): void {
  container.innerHTML = html;
}

/**
 * Add event listener helper with type safety
 */
export function on<K extends keyof HTMLElementEventMap>(
  element: HTMLElement,
  event: K,
  handler: (e: HTMLElementEventMap[K]) => void
): void {
  element.addEventListener(event, handler as EventListener);
}

/**
 * Query selector helper with type safety
 */
export function qs<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: HTMLElement | Document = document
): T | null {
  return parent.querySelector<T>(selector);
}

/**
 * Query selector all helper with type safety
 */
export function qsa<T extends HTMLElement = HTMLElement>(
  selector: string,
  parent: HTMLElement | Document = document
): readonly T[] {
  return Array.from(parent.querySelectorAll<T>(selector));
}
