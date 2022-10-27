// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Lib = await ethers.getContractFactory("SafeMath");
    const lib = await Lib.deploy();
    await lib.deployed();

    const Greeter = await ethers.getContractFactory("WorkContract", {
     
      libraries: {
        SafeMath: lib.address,
      },
    });
  
  const greeter = await Greeter.deploy("aik", "aik","aik","aik", "0x9D8720082E11Dc71b899706582bb905ef75922Fe" ,"0x9D8720082E11Dc71b899706582bb905ef75922Fe");

  await greeter.deployed();

  console.log("WorkContract  deployed to:", greeter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
