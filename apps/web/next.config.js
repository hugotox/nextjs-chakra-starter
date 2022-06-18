const withTM = require("next-transpile-modules")([
  "theme", 
  "ui",
  "utils"
]);

module.exports = withTM({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
    localeDetection: false
  },
  reactStrictMode: true,
});
