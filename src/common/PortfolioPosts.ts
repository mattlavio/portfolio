const vsCodeIcon = "/images/vscode.png";
const mdnIcon = "/images/mdn.jpeg";
const braveIcon = "/images/brave.png";
const gotoIcon = "/images/goto.png";
const shopifyIcon = "/images/shopify.png";

import type { SocialPost } from "./SocialPost";

export const protfolioPosts: readonly SocialPost[] = [
  {
    name: "VSCode",
    image: vsCodeIcon,
    link: "https://github.com/mattlavio?org=microsoft",
    text: `Contributed to FAST, used for the VSCode Design System.`,
    type: "contribution",
  },
  {
    name: "MDN Web Docs",
    image: mdnIcon,
    link: "https://github.com/mattlavio?org=mdn",
    text: `Contributed some bug fixes`,
    type: "contribution",
  },
  {
    name: "Brave Browser",
    image: braveIcon,
    link: "https://github.com/mattlavio?org=brave",
    text: `Helped with a few contributions`,
    type: "contribution",
  },
  {
    name: "GoTo App",
    image: gotoIcon,
    text: `Built the design system for the app`,
    type: "contribution",
  },
  {
    name: "Shopify",
    image: shopifyIcon,
    link: "https://github.com/mattlavio?org=shopify",
    text: `Working in the admin, contributing to Polaris`,
    type: "contribution",
  },
  {
    name: "Shopify Editions Winter 2026 — Custom sender name on labels",
    image: shopifyIcon,
    link: "https://www.shopify.com/ca/editions/winter2026#shipping",
    text: `Shipped the Custom sender name on labels feature, featured in Shopify Editions Winter 2026.`,
    type: "contribution",
  },
  {
    type: "project",
    name: "webcomponents-starter",
    image:
      "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYxIiBoZWlnaHQ9IjEzMiIgdmlld0JveD0iMCAwIDE2MSAxMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PGxpbmVhckdyYWRpZW50IHgxPSIwJSIgeTE9IjUwJSIgeTI9IjUwJSIgaWQ9ImEiPjxzdG9wIHN0b3AtY29sb3I9IiMyQTNCOEYiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjMjlBQkUyIiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMCUiIHkxPSI1MCUiIHkyPSI1MCUiIGlkPSJiIj48c3RvcCBzdG9wLWNvbG9yPSIjMkEzQjhGIiBvZmZzZXQ9IjAlIi8+PHN0b3Agc3RvcC1jb2xvcj0iIzI5QUJFMiIgb2Zmc2V0PSIxMDAlIi8+PC9saW5lYXJHcmFkaWVudD48bGluZWFyR3JhZGllbnQgeDE9IjEwMCUiIHkxPSI1MCUiIHgyPSIwJSIgeTI9IjUwJSIgaWQ9ImMiPjxzdG9wIHN0b3AtY29sb3I9IiNCNEQ0NEUiIG9mZnNldD0iMCUiLz48c3RvcCBzdG9wLWNvbG9yPSIjRTdGNzE2IiBvZmZzZXQ9IjEwMCUiLz48L2xpbmVhckdyYWRpZW50PjxsaW5lYXJHcmFkaWVudCB4MT0iMTAwJSIgeTE9IjUwJSIgeDI9IjAlIiB5Mj0iNTAlIiBpZD0iZCI+PHN0b3Agc3RvcC1jb2xvcj0iI0I0RDQ0RSIgb2Zmc2V0PSIwJSIvPjxzdG9wIHN0b3AtY29sb3I9IiNFN0Y3MTYiIG9mZnNldD0iMTAwJSIvPjwvbGluZWFyR3JhZGllbnQ+PC9kZWZzPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+PHBhdGggZmlsbD0iIzE2NkRBNSIgZD0iTTE2MC42IDY1LjlsLTE3LjQgMjkuMy0yNC40LTI5LjcgMjQuNC0yOC45eiIvPjxwYXRoIGZpbGw9IiM4RkRCNjkiIGQ9Ik0xNDEuMyAxMDAuMmwtMjYuNS0zMS43LTE1LjkgMjYuNiAyNC43IDM2LjF6Ii8+PHBhdGggZmlsbD0iIzE2NkRBNSIgZD0iTTE0MSAzMS40bC0yNi4yIDMxLjgtMTUuOS0yNi42TDEyMy42Ljl6Ii8+PHBhdGggZmlsbD0idXJsKCNhKSIgb3BhY2l0eT0iLjk1IiBkPSJNNjEuMSAzMS40SDE0MUwxMjMuNC45SDc4Ljd6Ii8+PHBhdGggZmlsbD0idXJsKCNiKSIgb3BhY2l0eT0iLjk1IiBkPSJNMTE0LjggNjMuM0gxNTlsLTE1LjktMjYuOEg5OC44Ii8+PHBhdGggZmlsbD0idXJsKCNjKSIgb3BhY2l0eT0iLjk1IiBkPSJNMTQxLjMgMTAwLjNINjFsMTcuNiAzMC41aDQ1eiIvPjxwYXRoIGZpbGw9IiMwMTAxMDEiIGQ9Ik03OC42IDEzMC44TDQxIDY1LjggNzkuMS44SDM3LjlMLjQgNjUuOGwzNy41IDY1eiIvPjxwYXRoIGZpbGw9InVybCgjZCkiIG9wYWNpdHk9Ii45NSIgZD0iTTExNC44IDY4LjRIMTU5bC0xNS45IDI2LjhIOTguOCIvPjwvZz48L3N2Zz4=",
    text: `<p class="status">
      Git project template that include a ready-to-go project containing
      TypeScript/linting/SASS/Routing and more!
    </p>`,
    link: "https://github.com/mattlavio/webcomponents-starter",
  },
  {
    type: "contribution",
    name: "axe-browser-reporter",
    image: "https://www.deque.com/wp-content/uploads/2016/12/aXe-300x280.png",
    text: `<p class="status">
      Intrusive in-browser Axe reporter that lets you know as soon as you made
      an Accessibility error.
    </p>`,
    link: "https://github.com/mattlavio/axe-browser-reporter",
  },
  {
    type: "project",
    name: "sass-to-string",
    link: "https://www.npmjs.com/package/sass-to-string",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg",
    text: ` Toolset containing a nifty webpack loader that converts a
      <code>.scss</code> file into a javascript string and a node command that
      transforms <code>.scss</code> files in a transpiled CSS JavaScript module
      that can be read by any other JavaScript module.`,
  },
  {
    type: "publication",
    name: "How adding an agile coach to our team accelerated our work",
    text: ` <i>Posted in the internal engineering blog of GoTo</i>`,
    emoji: "📝",
  },
  {
    type: "publication",
    name: "Get started with [design system name] design tokens",
    text: ` <i>Posted in the internal engineering blog of GoTo</i>`,
    emoji: "📝",
  },
  {
    name: "Taking advantage of the quarantine as a developer",
    type: "publication",
    link: "https://dev.to/m4thieulavoie/taking-advantage-of-the-quarantine-as-a-developer-5elk",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
    text: `
      The current world situation is (hopefully) something we'll experience once
      in our lives. In a sense, for us developers, it is a unique opportunity to
      take advantage of all this free time to perfect our skills. If you did not
      do at least one of those items, you might have missed a great opportunity
      to take your career to the next level.
    `,
  },
  {
    type: "publication",
    name: "How I managed to use SCSS inside Web Components",
    link: "https://dev.to/m4thieulavoie/how-i-managed-to-use-scss-inside-web-components-3lk9",
    image:
      "https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png",
    text: ` A couple of years ago, I remember rushing to learn the fourth
    version of Angular to get up to speed with "moderns" web frameworks. About
    when I got okay-ish with it, we started writing more and more React at work,
    so I switched onto it. Then emerged Vue.js, svelte, and many others. Modern
    frameworks keep being easier to implement, to use, and being lighter.`,
  },
];
