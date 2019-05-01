// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/Projekty/amadeuszgrzesiak/strona/agrzesiak/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/Projekty/amadeuszgrzesiak/strona/agrzesiak/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/Projekty/amadeuszgrzesiak/strona/agrzesiak/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */)
}

exports.data = () => import(/* webpackChunkName: "pages-manifest" */ "/Projekty/amadeuszgrzesiak/strona/agrzesiak/.cache/data.json")

