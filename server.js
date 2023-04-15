// const { createProxyMiddleware } = require("http-proxy-middleware");

// const apiProxy = createProxyMiddleware("/api", {
//   target:
//     "https://forms.zohopublic.com/poilyportal/form/TalkwithUs/formperma/3-X_21fYWFUKEIzJ3UJsZlwcRnizqDL6Bn2sGSv7ek4/htmlRecords/submit",
//   changeOrigin: true,
//   secure: false,
//   onProxyRes: function (proxyRes, req, res) {
//     // Set CORS headers to allow cross-origin requests
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     res.setHeader(
//       "Access-Control-Allow-Methods",
//       "GET, POST, PUT, DELETE, OPTIONS"
//     );
//     res.setHeader(
//       "Access-Control-Allow-Headers",
//       "origin, x-requested-with, content-type"
//     );
//   },
// });

// const http = require("http");
// const next = require("next");

// const dev = process.env.NODE_ENV !== "production";
// const app = next({ dev });

// const handle = app.getRequestHandler();

// app.prepare().then(() => {
//   const server = http.createServer((req, res) => {
//     // Use the proxy middleware for requests to the /api route
//     if (req.url.startsWith("/api")) {
//       apiProxy(req, res, (err) => {
//         if (err) {
//           console.error(err);
//           res.writeHead(500, { "Content-Type": "text/plain" });
//           res.end(
//             "Something went wrong. And we are reporting a custom error message."
//           );
//         }
//       });
//     } else {
//       handle(req, res);
//     }
//   });

//   server.listen(3000, (err) => {
//     if (err) throw err;
//     console.log("> Ready on http://localhost:3000");
//   });
// });
