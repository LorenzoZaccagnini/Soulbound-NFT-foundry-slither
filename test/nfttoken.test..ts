import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFTToken", function () {
  it("Should return name Token", async function () {
    const Token = await ethers.getContractFactory("NFTToken");
    const token = await Token.deploy();
    await token.deployed();

    expect(await token.name()).to.equal("Soulbound");
    expect(await token.symbol()).to.equal("SBNFT");
  });
});
