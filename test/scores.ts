const { JsonRpcProvider } = require('@ethersproject/providers');
const snapshot = require('../').default;
const networks = require('../src/networks.json');

const space = 'ocean';
const network = '1';
const strategies = [
  {
    name: 'erc20-balance-of',
    params: {
      symbol: 'OCEAN',
      address: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
      decimals: 18
    }
  },
  {
    name: 'ocean-marketplace',
    params: {
      symbol: 'OCEAN',
      address: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
      decimals: 18
    }
  },
  {
    name: 'sushiswap',
    params: {
      symbol: 'OCEAN',
      address: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
      decimals: 18
    }
  },
  {
    name: 'uniswap',
    params: {
      symbol: 'OCEAN',
      address: '0x967da4048cD07aB37855c090aAF366e4ce1b9F48',
      decimals: 18
    }
  },
  {
    name: 'contract-call',
    params: {
      address: '0x9712Bb50DC6Efb8a3d7D12cEA500a50967d2d471',
      args: [
        '%{address}',
        '0xCDfF066eDf8a770E9b6A7aE12F7CFD3DbA0011B5',
        '0x967da4048cD07aB37855c090aAF366e4ce1b9F48'
      ],
      decimals: 18,
      symbol: 'OCEAN',
      methodABI: {
        inputs: [
          {
            internalType: 'address',
            name: 'provider',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'poolToken',
            type: 'address'
          },
          {
            internalType: 'address',
            name: 'reserveToken',
            type: 'address'
          }
        ],
        name: 'totalProviderAmount',
        outputs: [
          {
            internalType: 'uint256',
            name: '',
            type: 'uint256'
          }
        ],
        stateMutability: 'view',
        type: 'function'
      }
    }
  }
];

const addresses = [
  '0x37Bf78fA8853CEE7df39280e70e38f3e163E44c4',
  '0xdD36C6C74abd4feF4EbCFB42D4622435D5f2c5f0',
  '0x98A729d4F94111ac21Df906fCdA107DcbC65d0B7',
  '0x1a3e98369a9e935d5E807514Fd479Ebf075863c6',
  '0x8fC0620C1f2cf352727E56dF8a895c6779095EF0',
  '0x148a1E9373Ad8D83a8b12592ec90b6F5151b176f',
  '0x4C632beE45E771Beb190B821bb7aa9f2c3D152ba',
  '0xf9c82b33C87Cfbbd1Ba7fa521dBC02dA31680F1a',
  '0x96646a92D0801b30C227404053A35c21A5290fec',
  '0xe3534F90E367F5bd62AF306d9F36804a82ba6cAc',
  '0x580a986b101A9Bed1283BfC7040F1153112b6c42'
];

(async () => {
  console.time('getScores');
  try {
    const scores = await snapshot.utils.getScoresDirect(
      space,
      strategies,
      network,
      new JsonRpcProvider(networks[network].rpc[0]),
      addresses,
      11282870
    );
    console.log(scores);
  } catch (e) {
    console.log('getScores failed');
    console.error(e);
  }
  console.timeEnd('getScores');
})();
