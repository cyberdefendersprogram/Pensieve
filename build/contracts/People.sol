pragma solidity ^0.4.4;

// This contract stores full name and age of a person from data sent from an
// account on the Ethereum network.
contract People {

  Person[] public people; // create an array of People

  // Build a person struct which is similar to an object in java
  struct Person {
    bytes32 firstName; // store both first and last names as 32 byte hex
    bytes32 lastName;
    uint age; // unsigned integer variable that holds the age
  }

  // Allows a person to be added to the list on the block chain.
  function addPerson(bytes32 _firstName, bytes32 _lastName, uint _age) returns (bool success) {

    Person memory newPerson; // another struct of a person in memory. This does not cost gas.
    newPerson.firstName = _firstName; // assign firstname to the struct
    newPerson.lastName = _lastName; // assign lastname to the struct
    newPerson.age = _age; // assign age to the struct

    people.push(newPerson); // .push() adds an element to the array on the blockchain.
                            // this costs gas in order to be added onto the blockchain
    return true;
  }

  // Returns an array
  function getPeople() constant returns (bytes32[], bytes32[], uint[]) {
    bytes32[] firstNames; // initializing arrays to hold person information
    bytes32[] lastNames;
    uint[] ages;

    for (uint i = 0; i < people.length; i++) {
      Person memory currentPerson;  // create a person in memory
      currentPerson = people[i]; // iterate through the people on the array

      firstNames.push(currentPerson.firstName); 
      lastNames.push(currentPerson.lastName);
      ages.push(currentPerson.age);

      return (firstNames, lastNames, ages); // return information
    }
  }

}
