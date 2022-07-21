require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture help olympic trip notice rival smile quantum hunt kitten outer shift'; 
let testAccounts = [
"0x982acfad5d98564768963b53e76e53acc55236a0e939c7f79d9b7462e5d49a96",
"0x96616e8356810b6ac2dd0691fd03c2822596bf8d5fc1cb80c2ec0d3352106ecb",
"0x22d99d0c490e4a0854461636501431ad6a2af2dfdb99568e71ea6731cbe721f8",
"0x516939b2fce64072aca774f3aa3c2dee4fe0e16a3582cfa48623f8ae0a04969a",
"0x85eb01fb59d2ad6011b18bdd42557b84c03705f918fc2ce47f7d0e544c8c01d3",
"0xd5af4477bdd23df424d2a94d0efa144807da48b8833a449d59c22d6ba9dd33c6",
"0x62e7957b974cdbde4e775a399dda964b983707f26ac48e1b0d6aa5a67277f368",
"0xf0c4849ce5d85e9c3ab358b2aa897095c427f1e323aaa3ad7837d7494908f4c6",
"0xc51431ddf3c6c7419ffbc6cfbb171a4d6d39262664c50862198a68459dbcafde",
"0xdd423125ad8d59e33e94dc242eea5eac365e1762804dc4e5454ffc81bb0fda2c"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

