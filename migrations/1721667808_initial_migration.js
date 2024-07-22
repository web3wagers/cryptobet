const Bets = artifacts.require("Bets");

module.exports = function(_deployer) {
  _deployer.deploy(Bets);
};
