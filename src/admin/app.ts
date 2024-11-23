import type { StrapiApp } from "@strapi/strapi/admin";

// import Favicon from "./extensions/brave.png";

export default {
  config: {
    tutorials: false,
    notifications: { releases: false },
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.workplace": "Ecommerce",
        "Auth.form.welcome.subtitle": "Log in to your Admin Dashboard",
        "Auth.form.welcome.title": "Welcome to Zoyee LIfeStyle",
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
