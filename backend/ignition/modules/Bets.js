const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");

module.exports = buildModule("BetsModule", (m) => {

  const bets = m.contract("Bets", []);

  return { bets };
});
