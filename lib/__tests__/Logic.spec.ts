
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
Assert<IsExactType<boolean, Not<boolean>>>();

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
Assert<IsExactType<false, And<false, boolean>>>();

//
// Or
//
Assert.True<Or<true, true>>();
Assert.True<Or<true, false>>();
Assert.True<Or<false, true>>();
Assert.False<Or<false, false>>();
Assert<IsExactType<true, Or<boolean, true>>>();
Assert<IsExactType<true, Or<true, boolean>>>();
Assert<IsExactType<boolean, Or<boolean, false>>>();
Assert<IsExactType<boolean, Or<false, boolean>>>();

//
// Xor
//
Assert.False<Xor<true, true>>();
Assert.True<Xor<true, false>>();
Assert.True<Xor<false, true>>();
Assert.False<Xor<false, false>>();
Assert<IsExactType<boolean, Xor<boolean, true>>>();
Assert<IsExactType<boolean, Xor<true, boolean>>>();
Assert<IsExactType<boolean, Xor<boolean, false>>>();
Assert<IsExactType<boolean, Xor<false, boolean>>>();

//
// Nor
//
Assert.False<Nor<true, true>>();
Assert.False<Nor<true, false>>();
Assert.False<Nor<false, true>>();
Assert.True<Nor<false, false>>();
Assert<IsExactType<false, Nor<boolean, true>>>();
Assert<IsExactType<false, Nor<true, boolean>>>();
Assert<IsExactType<boolean, Nor<boolean, false>>>();
Assert<IsExactType<boolean, Nor<false, boolean>>>();

//
// Nand
//
Assert.False<Nand<true, true>>();
Assert.True<Nand<true, false>>();
Assert.True<Nand<false, true>>();
Assert.True<Nand<false, false>>();
Assert<IsExactType<boolean, Nand<boolean, true>>>();
Assert<IsExactType<boolean, Nand<boolean, boolean>>>();
Assert<IsExactType<boolean, Nand<true, boolean>>>();
Assert<IsExactType<true, Nand<false, boolean>>>();

//
// Xnor
//
Assert.True<Xnor<true, true>>();
Assert.False<Xnor<true, false>>();
Assert.False<Xnor<false, true>>();
Assert.True<Xnor<false, false>>();
Assert<IsExactType<boolean, Xnor<boolean, true>>>();
Assert<IsExactType<boolean, Xnor<true, boolean>>>();
Assert<IsExactType<boolean, Xnor<boolean, false>>>();
Assert<IsExactType<boolean, Xnor<false, boolean>>>();
