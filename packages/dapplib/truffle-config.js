require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half kiwi orange tooth bike curtain net prosper harvest farm forget team'; 
let testAccounts = [
"0x8ae5508f452679a5346981cf4f58ce81cf4b05bb90905bec6a83f5b009c749b3",
"0x9a74a65ca8933b4f1db5f8b82ad0d889b740312642722de6a42854a16213d13d",
"0x2e5161353f4ab20bb80a56cfd273cfdb27cac8f2a41e6633c6d8c222f3d405b1",
"0xe8859a09bfaad4e0ca3668c026071ed9569e7a716a9e6645c2b94de48bef4307",
"0x69de24933296843cdb7d1590b3894f8dd607c59e65a10697c57280f263fb3aca",
"0xf239ae61524c975608f0125c0e0352ab89888f25695376108799831c0fbd6358",
"0x61610370f8cce6ae6cec39a834e1cfa4d6c4d3317cb080ffc6006fa05d146a88",
"0xd5101df362f6460ab759d01ad7819b97552e3ba0bb96972ace1dc38d5181565e",
"0x2b4ad8f12b74577d1cca29b95f3be44f15cb745426afc756f8c396afda8ab30d",
"0xe9137d9dcb9be4df91436f0572af4b0653efbbac4dc45cc3076833cbe1ede946"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

