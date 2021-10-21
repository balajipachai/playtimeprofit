const { ethers } = require('hardhat');
const hardhat = require('hardhat')

async function main() {
    console.log("Deploying contracts...");
    const iterableMappingFactory = await ethers.getContractFactory('IterableMapping');
    const iterableMapping = await iterableMappingFactory.deploy();
    await iterableMapping.deployed();

    console.log("Deployed Iterable mapping:", iterableMapping.address);

    const playTimeProfitFactory = await ethers.getContractFactory('PlayTimeProfit', {
        libraries: {
            IterableMapping: iterableMapping.address
        },
    });

    const playTimeProfitContractInstance = await playTimeProfitFactory.deploy();
    await playTimeProfitContractInstance.deployed();
    console.log("Deployed PlayTimeProfit: ", playTimeProfitContractInstance.address);

    // await hardhat.run("verify:verify", {
    //     address: playTimeProfitContractInstance.address,
    //     libraries: {
    //         IterableMapping: iterableMapping.address,
    //     },
    // });
    // console.log('VERIFICATION COMPLETE');
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error);
        process.exit(1);
    });
