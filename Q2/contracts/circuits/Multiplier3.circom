pragma circom 2.0.0;

// [assignment] Modify the circuit below to perform a multiplication of three signals

template Multiplier3 () {

   // Declaration of signals.
   signal input a;
   signal input b;
   signal input c;
   signal temp1;
   signal temp2;
   signal output d;




   // Constraints.
   temp1 <== a*b;
   temp2 <== temp1*c;
   d <== temp2;
}

component main = Multiplier3();
