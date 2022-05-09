const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/

let content = fs.readFileSync("./contracts/HelloWorldVerifier.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract HelloWorldVerifier');

let content1 = fs.readFileSync("./contracts/Multiplier3_groth163Verifier.sol", { encoding: 'utf-8' });
let bumped1 = content1.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped1 = bumped1.replace(verifierRegex, 'contract Multiplier3_groth163Verifier');


fs.writeFileSync("./contracts/HelloWorldVerifier.sol", bumped);

fs.writeFileSync("./contracts/Multiplier3_groth163Verifier.sol", bumped1);



let content2 = fs.readFileSync("./contracts/Multiplier3_plonkverifier.sol", { encoding: 'utf-8' });
let bumped2 = content2.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped2 = bumped2.replace(verifierRegex, 'contract Multiplier3_plonkverifier');


fs.writeFileSync("./contracts/Multiplier3_plonkverifier.sol", bumped2);


// [assignment] add your own scripts below to modify the other verifier contracts you will build during the assignment
