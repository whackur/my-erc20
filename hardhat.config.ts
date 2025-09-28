import type { HardhatUserConfig } from "hardhat/config";

import hardhatToolboxMochaEthersPlugin from "@nomicfoundation/hardhat-toolbox-mocha-ethers";
import { configVariable } from "hardhat/config";

const config: HardhatUserConfig = {
  plugins: [hardhatToolboxMochaEthersPlugin],
  solidity: {
    profiles: {
      default: {
        version: "0.8.30",
      },
      production: {
        version: "0.8.30",
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
          },
        },
      },
    },
  },
  networks: {
    hardhatMainnet: {
      type: "edr-simulated",
      chainType: "l1",
    },
    hardhatOp: {
      type: "edr-simulated",
      chainType: "op",
    },
    holesky: {
      type: "http",
      chainType: "l1",
      url: configVariable("HOLESKY_RPC_URL"),
      accounts: {
        mnemonic: configVariable("HOLESKY_PRIVATE_KEY")
      }
    }
  },
  verify: {
    etherscan: {
      apiKey: configVariable("HOLESKY_API_KEY")
    },
  },
};

export default config;
