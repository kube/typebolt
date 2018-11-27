
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert, IsExactType } from '../lib/Testing'
import { And, Or, Not, Xor, Nor, Nand, Xnor } from '../lib/Logic'

//
// Not
//
Assert.false<Not<true>>()
Assert.true<Not<false>>()

//
// And
//
Assert.true<And<true, true>>()
Assert.false<And<true, false>>()
Assert.false<And<false, true>>()
Assert.false<And<false, false>>()
Assert<IsExactType<boolean, And<boolean, true>>>()
Assert<IsExactType<boolean, And<boolean, boolean>>>()
Assert<IsExactType<boolean, And<true, boolean>>>()
Assert.false<And<false, boolean>>()

//
// Or
//
Assert.true<Or<true, true>>()
Assert.true<Or<true, false>>()
Assert.true<Or<false, true>>()
Assert.false<Or<false, false>>()

//
// Xor
//
Assert.false<Xor<true, true>>()
Assert.true<Xor<true, false>>()
Assert.true<Xor<false, true>>()
Assert.false<Xor<false, false>>()

//
// Nor
//
Assert.false<Nor<true, true>>()
Assert.false<Nor<true, false>>()
Assert.false<Nor<false, true>>()
Assert.true<Nor<false, false>>()

//
// Nand
//
Assert.false<Nand<true, true>>()
Assert.true<Nand<true, false>>()
Assert.true<Nand<false, true>>()
Assert.true<Nand<false, false>>()

//
// Xnor
//
Assert.true<Xnor<true, true>>()
Assert.false<Xnor<true, false>>()
Assert.false<Xnor<false, true>>()
Assert.true<Xnor<false, false>>()
