const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "basic ketchup goose picnic carry pipe correct bargain romance topple whale stock",
  // remember to change this to your own phrase!
  "https://rinkeby.infura.io/v3/b7692e33722f4a08ae59236a5e3602db",
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ gas: "1000000", gasPrice:"5000000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  console.log(interface);
};
deploy();
