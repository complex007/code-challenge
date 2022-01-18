import { ethers } from 'ethers';

const numWithComma = (num:String) => {
  const [integerPart, decimalPart] = num.split('.');
  let sum = '';

  for(let i = integerPart.length - 1; i >= 0; i --) {
    sum = integerPart[i] + sum;
    if((integerPart.length - i) % 3 === 0 && i !== 0) {
      sum = ',' + sum;
    }
  }

  return `${sum}.${decimalPart}`;
}

const bscProvider = new ethers.providers.JsonRpcProvider(
  'https://bsc-dataseed.binance.org/',
  { name: 'binance', chainId: 56 }
);
const daiAddress = '0x250b211ee44459dad5cd3bca803dd6a7ecb5d46c';

// The ERC-20 Contract ABI, which is a common contract interface
// for tokens (this is the Human-Readable ABI format)
const daiAbi = [
  'function balanceOf(address) view returns (uint)'
];

// The Contract object
const daiContract = new ethers.Contract(daiAddress, daiAbi, bscProvider);
[
  '0x123d475e13aa54a43a7421d94caa4459da021c77',
  '0x0020c5222a24e4a96b720c06b803fb8d34adc0af',
  '0xfe808b079187cc460f47374580f5fb47c82b87a5'
].forEach(async(address) =>  {
  const balance = await daiContract.balanceOf(address)
  const etherString = ethers.utils.formatUnits(balance, 8);
  console.log(`${address} ${numWithComma(etherString)}`);
})