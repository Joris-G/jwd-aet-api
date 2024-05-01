const expressApp = require("./server/server");

(async () => {
  await expressApp();

  console.log(`everything is working !`);
})();
