import { start, registerApplication } from "single-spa";

/**
 * Register applications here
 */
registerApplication(
  "mfeHeader",
  () => import("mfeHeader"),
  () => true
);

registerApplication(
  "mfeBooks",
  () => import("mfeBooks"),
  () => true
);

registerApplication(
  "mfeBooks",
  () => import("mfeBooks"),
  (location) => location.pathname.startsWith("/books")
);

registerApplication(
  "mfe-help",
  () => import("mfe-help"),
  (location) => location.pathname.startsWith("/help")
);

registerApplication(
  "mfe-login",
  () => System.import("mfe-login"),
  (location) => location.href.includes("overlay=login")
);

start();
