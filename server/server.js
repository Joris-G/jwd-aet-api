const express = require("express");
const router = require("./router/router");
const serverConfig = require("./server.config.json");
const PORT = serverConfig["dev-config"]["server-port"];

module.exports = async () => {
  const app = express();

  app.use("/api", router);

  await app.listen(PORT, async () =>
    console.log(`Server is running on port ${PORT}`)
  );

  return app;
};
