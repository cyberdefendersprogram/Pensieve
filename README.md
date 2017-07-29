# Pensieve
Pensieve is a chrome extension that connects to the ethereum block chain to secure user information and provides notification of at risk data. This tool is currently in development. Stay tuned for updates in the coming week.

## Getting Started
We'll need a couple of things installed in order to get the Pensieve dApp running. 
* [Node.js](https://nodejs.org/en/about/) - Javascript runtime framework that helps us build network applications
* [npm](https://www.npmjs.com/) - Package manager for javascript packages
* [Truffle](http://truffleframework.com/) - Ethereum development environment that takes care of a lot of the dirty work for us
* [create-react-app](https://facebook.github.io/react/blog/2016/07/22/create-apps-with-no-configuration.html) - Javascript library for building user interfaces
* [Web3](https://www.npmjs.com/package/web3) - Javascript API to communicate between web application and ethereum network

### Installing Truffle

Open a NEW PowerShell prompt as Administrator (to ensure that it reloads )
````
npm install -g npm
npm install -g –production windows-build-tools
npm install -g ethereumjs-testrpc
npm install -g truffle
````
There may be some error messages during npm installs. Many of these are just informational / optional components failing. 
To test that it is all working try to run the commands for testrpc and truffle.

### Using Truffle
Once truffle is installed you can begin using truffle from within the working directory of your project. In the terminal
navigate to your project directory. Make sure that your testrpc is running in another window.
````
truffle init
````
Initializes the folders and example projects for a basic truffle project.
````
truffle compile		
````
Compiles the contract source files (Use whenever you update the code so your contract can be redeployed to the test network).
````
truffle migrate		
````
Run migrations to deploy contracts (The migration will deploy and provide a contract address that you can use to interact with).
````
truffle console		
````
Run a console with contract abstractions and commands available (The console interacts with your contract allowing function calls and queries for information about the contract itself).

### TroubleShooting Truffle

If there are any errors with the migration you won't be able to call upon your deployed contract. In order to get the status of your contract use 
````
People.deployed()
````
If the contract is deployed it should print out a bunch of information about the contract else there is most likely an error in one of the javascript files.

### Testing Out the Contract
Once the contract is deployed we can get some quick information about it by calling:
````
People.abi			
````
Query for the functions and parameters provided by the contract
````
People.address		
````
Query for the address of the contract and print it in the console

### Setting Up Function Calls
From here we can start calling functions within our contract. At the moment our contract allows for People objects to be pushed onto the blockchain. To add a person to our array of people we first declare a variable to hold our deployed contract.
````
var people = People.deployed()
````
### Add People to the Blockchain
We can now call functions by instantiating the People contract and calling functions with people object.
````
people.then(function(instance) { return instance.addPerson("Albus","Dumbledore", 150) }).then(function(result) { console.log("addition successful") }).catch(function(e) { console.log("error!") });
````
The main piece to this function call is the return statement: return instance.addPerson("Albus","Dumbledore", 150)

This is where we can modify information of the people before we add them. A successful addition of a person will return "addition successful" to the console. The ending catch statement will return "error" if there is no contract deployed that we are calling. From what I have read this has to do with a common javascript idea called promises. 

### A Little About Promises
[Promises](https://developers.google.com/web/fundamentals/getting-started/primers/promises) are the idea that information a function is calling for may not be returned immediately. So the function call must be prepared to catch an error if the information it is sending or recieving does not make it to its destination. 

### Seeing the People Stored on the Blockchain
Next we can query for all of the people held within our array on the blockchain.
````
people.then(function(instance) { return instance.getPeople().then(console.log) }).then(function(result) { console.log("retrieval successful") }).catch(function(e) { console.log("error!") });
````
This function call has a similar structure but instead of addPerson() we are calling getPeople(). The then(console.log) just ensures that the returned people are printed in the console so we can see them. The first and last names will print as a long string of hex values within the console. We will deal with changing them later to string values. You can verify the names by tossing
them into a hex to ascii converter for the moment.

## Setting Up React
Now that we have pushed people onto the blockchain we can bring them up in our web page. In order to do this we will need one more tool called react. Since npm is installed we can run
````
create-react-app 
````
in a new folder called pensieveui. This may take a second to download and install but once its done we will be able to replace some of the react code with ours. In the repository are some files that match names of those in the folder we installed react. Those will all need to be replaced with our code since the web3 is not natively built with react.

Once the code has been replaced run 
````
npm install
````
to install any additional dependencies (web3 and lodash). After this installs run the react app "npm start" and it will load a development server for us to use locally. What is great about this is that we can make changes and our react app will update automatically without needing to restart. This is especially cool when making changes to UI on the fly.

The react session should open in the default browser on localhost:3000. There we see our table full of people we have pushed onto the blockchain. This is now a fully running dApp!
