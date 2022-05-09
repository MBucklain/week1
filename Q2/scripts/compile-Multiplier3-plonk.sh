#!/bin/bash

# [assignment] create your own bash script to compile Multipler3.circom using PLONK below


cd contracts/circuits

mkdir Multiplier3-plonk

if [ -f ./powersOfTau28_hez_final_10.ptau ]; then
    echo "powersOfTau28_hez_final_10.ptau already exists. Skipping."
else
    echo 'Downloading powersOfTau28_hez_final_10.ptau'
    wget https://hermez.s3-eu-west-1.amazonaws.com/powersOfTau28_hez_final_10.ptau
fi

echo "Compiling Multiplier3.circom..."

circom Multiplier3.circom --r1cs --wasm --sym -o Multiplier3-plonk
snarkjs r1cs info Multiplier3-plonk/Multiplier3.r1cs

snarkjs plonk setup Multiplier3-plonk/Multiplier3.r1cs powersOfTau28_hez_final_10.ptau Multiplier3-plonk/circuit_final.zkey




snarkjs zkey export verificationkey Multiplier3-plonk/circuit_final.zkey Multiplier3-plonk/verification_key.json
# [assignment] create your own bash script to compile Multipler3.circom modeling after compile-HelloWorld.sh below
snarkjs zkey export solidityverifier Multiplier3-plonk/circuit_final.zkey ../Multiplier3_plonkverifier.sol

node "Multiplier3-plonk/Multiplier3_js/generate_witness.js" Multiplier3-plonk/Multiplier3_js/Multiplier3.wasm input.json Multiplier3-plonk/witness.wtns
snarkjs plonk prove Multiplier3-plonk/circuit_final.zkey Multiplier3-plonk/witness.wtns Multiplier3-plonk/proof.json Multiplier3-plonk/public.json
snarkjs zkey export soliditycalldata Multiplier3-plonk/public.json Multiplier3-plonk/proof.json > Multiplier3-plonk/call.txt

cd ../..
