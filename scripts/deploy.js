const hre = require("hardhat");
const ethers = hre.ethers;

async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);

  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  const TenPhotoCollection = await ethers.getContractFactory("TenPhotoCollection");
  //Replace baseuri with your imgs links
  const photo = await TenPhotoCollection.deploy("ipfs://baseuri/", 10);
  await photo.deployed();

  console.log("Ten Photo Collection deployed to:", photo.address);
  

}
  
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
