
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert, IsExactType } from "../Testing";
import { And, Or, Not, Xor, Nor, Nand, Xnor } from "../Logic";

//
// Not
//
Assert.False<Not<true>>();
Assert.True<Not<false>>();

//
// And
//
Assert.True<And<true, true>>();
Assert.False<And<true, false>>();
Assert.False<And<false, true>>();
Assert.False<And<false, false>>();
Assert<IsExactType<boolean, And<boolean, true>>>();
Assert<IsExactType<boolean, And<boolean, boolean>>>();
Assert<IsExactType<boolean, And<true, boolean>>>();
Assert.False<And<false, boolean>>();

//
// Or
//
Assert.True<Or<true, true>>();
Assert.True<Or<true, false>>();
Assert.True<Or<false, true>>();
Assert.False<Or<false, false>>();

//
// Xor
//
Assert.False<Xor<true, true>>();
Assert.True<Xor<true, false>>();
Assert.True<Xor<false, true>>();
Assert.False<Xor<false, false>>();

//
// Nor
//
Assert.False<Nor<true, true>>();
Assert.False<Nor<true, false>>();
Assert.False<Nor<false, true>>();
Assert.True<Nor<false, false>>();

//
// Nand
//
Assert.False<Nand<true, true>>();
Assert.True<Nand<true, false>>();
Assert.True<Nand<false, true>>();
Assert.True<Nand<false, false>>();

//
// Xnor
//
Assert.True<Xnor<true, true>>();
Assert.False<Xnor<true, false>>();
Assert.False<Xnor<false, true>>();
Assert.True<Xnor<false, false>>();
