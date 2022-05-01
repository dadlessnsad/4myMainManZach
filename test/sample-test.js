const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Ten photo collection test", function () {

    let TENPHOTO;
    let photo;
    let owner;
    let addr1;
    let addr2;
    let addrs;


    beforeEach(async function () {
        // Get the ContractFactory and Signers here.
        TENPHOTO = await ethers.getContractFactory("TenPhotoCollection");
        [owner, addr1, addr2, addr3] = await ethers.getSigners();

        photo = await TENPHOTO.deploy("Ipfs://BaseUri/", 10);
        await photo.deployed();

    });
      // You can nest describe calls to create subsections.
    describe("Deployment", function () {

        it("Should set the right owner", async function () {
          expect(await photo.owner()).to.equal(owner.address);
        });
        
        it("Should have max supply of 10", async function () {
          expect(await photo.totalSupply()).to.equal(10);
        })
        

     
        
    })
})
