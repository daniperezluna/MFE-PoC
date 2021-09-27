import { navigateToUrl, registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";
import microfrontendLayout from "./microfrontend-layout.html";

const routes = constructRoutes(microfrontendLayout);
const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);

registerApplication(
  "mfe-login",
  () => System.import("mfe-login"),
  (location) => location.href.includes("overlay=login")
);

window.addEventListener("mfe-login", (event: any) => {
  if (event.detail.hasOwnProperty("username")) {
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.delete("overlay");
    navigateToUrl(currentUrl.toString());
  }
});

layoutEngine.activate();
start();
