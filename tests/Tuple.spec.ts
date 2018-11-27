
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert, IsExactType } from '../lib/Testing'
import {
  Head,
  Tail,
  Append,
  Prepend,
  Reverse,
  Take,
  TakeLast,
  Drop,
  DropLast
} from '../lib/Tuple'

//
// Head
//
{
  Assert<IsExactType<never, Head<[]>>>()
  Assert<IsExactType<1, Head<[1]>>>()
  Assert<IsExactType<1, Head<[1, 2, 3]>>>()
  Assert<IsExactType<"Hello", Head<["Hello", "World"]>>>()
}

//
// Tail
//
{
  Assert<IsExactType<[], Tail<[]>>>()
  Assert<IsExactType<[], Tail<["Hello"]>>>()
  Assert<IsExactType<["World"], Tail<["Hello", "World"]>>>()
  Assert<IsExactType<[2, 3, 4, 5], Tail<[1, 2, 3, 4, 5]>>>()
}

//
// Prepend
//
{
  Assert<IsExactType<Prepend<"Hello", []>, ["Hello"]>>()
  Assert<IsExactType<Prepend<"Hello", ["World"]>, ["Hello", "World"]>>()
  Assert<IsExactType<Prepend<1, [2, 3, 4]>, [1, 2, 3, 4]>>()
}

//
// Reverse
//
{
  Assert<IsExactType<Reverse<[]>, []>>()
  Assert<IsExactType<Reverse<[1]>, [1]>>()
  Assert<IsExactType<Reverse<[1, 2]>, [2, 1]>>()
  Assert<IsExactType<Reverse<[1, 2, 3]>, [3, 2, 1]>>()
  Assert<IsExactType<Reverse<[1, 2, 3, 4]>, [4, 3, 2, 1]>>()
}

//
// Append
//
{
  Assert<IsExactType<Append<"Hello", []>, ["Hello"]>>()
  Assert<IsExactType<Append<"World", ["Hello"]>, ["Hello", "World"]>>()
  Assert<IsExactType<Append<4, [1, 2, 3]>, [1, 2, 3, 4]>>()
}

//
// Take
//
{
  Assert<IsExactType<Take<0, [1, 2, 3, 4, 5]>, []>>()
  Assert<IsExactType<Take<1, [1, 2, 3, 4, 5]>, [1]>>()
  Assert<IsExactType<Take<3, [1, 2, 3, 4, 5]>, [1, 2, 3]>>()
  Assert<IsExactType<Take<9, [1, 2, 3, 4, 5]>, [1, 2, 3, 4, 5]>>()
}

//
// TakeLast
//
{
  Assert<IsExactType<TakeLast<0, [1, 2, 3, 4, 5]>, []>>()
  Assert<IsExactType<TakeLast<1, [1, 2, 3, 4, 5]>, [5]>>()
  Assert<IsExactType<TakeLast<3, [1, 2, 3, 4, 5]>, [3, 4, 5]>>()
  Assert<IsExactType<TakeLast<9, [1, 2, 3, 4, 5]>, [1, 2, 3, 4, 5]>>()
}

//
// Drop
//
{
  Assert<IsExactType<Drop<0, [1, 2, 3]>, [1, 2, 3]>>()
  Assert<IsExactType<Drop<1, [1, 2, 3, 4]>, [2, 3, 4]>>()
  Assert<IsExactType<Drop<3, [1, 2, 3, 4, 5, 6]>, [4, 5, 6]>>()
  Assert<IsExactType<Drop<10, [1, 2, 3, 4, 5, 6]>, []>>()
  Assert<IsExactType<Drop<10000, [1, 2, 3, 4, 5, 6]>, []>>()
}

//
// DropLast
//
{
  Assert<IsExactType<DropLast<0, [1, 2, 3]>, [1, 2, 3]>>()
  Assert<IsExactType<DropLast<1, [1, 2, 3, 4]>, [1, 2, 3]>>()
  Assert<IsExactType<DropLast<3, [1, 2, 3, 4, 5, 6]>, [1, 2, 3]>>()
  Assert<IsExactType<DropLast<10, [1, 2, 3, 4, 5, 6]>, []>>()
  Assert<IsExactType<DropLast<10000, [1, 2, 3, 4, 5, 6]>, []>>()
}
