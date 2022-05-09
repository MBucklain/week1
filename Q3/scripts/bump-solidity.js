const fs = require("fs");
const solidityRegex = /pragma solidity \^\d+\.\d+\.\d+/

const verifierRegex = /contract Verifier/


let content = fs.readFileSync("./contracts/LessThan10.sol", { encoding: 'utf-8' });
let bumped = content.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped = bumped.replace(verifierRegex, 'contract LessThan10');

fs.writeFileSync("./contracts/LessThan10.sol", bumped);



let content1 = fs.readFileSync("./contracts/SystemOfEquationsVerifier.sol", { encoding: 'utf-8' });
let bumped1 = content1.replace(solidityRegex, 'pragma solidity ^0.8.0');
bumped1 = bumped1.replace(verifierRegex, 'contract SystemOfEquationsVerifier');

fs.writeFileSync("./contracts/SystemOfEquationsVerifier.sol", bumped1);
