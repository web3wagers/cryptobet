const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BetsModule", (m) => {

  const lock = m.contract("Bets", []);

  return { lock };
});
