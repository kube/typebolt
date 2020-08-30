
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Add, Decrement, Increment, Range, Sub } from "../Count";
import { Assert, IsExactType } from "../Testing";

//
// Increment
//
{
  Assert<IsExactType<Increment<0>, 1>>();
  Assert<IsExactType<Increment<41>, 42>>();
}

//
// Decrement
//
{
  Assert<IsExactType<Decrement<1>, 0>>();
  Assert<IsExactType<Decrement<41>, 40>>();
}

//
// Add
//
{
  Assert<IsExactType<Add<1, 2>, 3>>();
  Assert<IsExactType<Add<20, 20>, 40>>();
  Assert<IsExactType<Add<40, 20>, 60>>();
  Assert<IsExactType<Add<40, 40>, 80>>();
  Assert<IsExactType<Add<40, 50>, 90>>();
  Assert<IsExactType<Add<40, 51>, 91>>();
  Assert<IsExactType<Add<41, 51>, 92>>();
  Assert<IsExactType<Add<45, 55>, 100>>();
}

//
// Sub
//
{
  Assert<IsExactType<Sub<42, 1>, 41>>();
  Assert<IsExactType<Sub<99, 9>, 90>>();
  Assert<IsExactType<Sub<99, 33>, 66>>();
  Assert<IsExactType<Sub<99, 45>, 54>>();
}

//
// Range
//
{
  Assert<IsExactType<Range<1, 4>, [1, 2, 3, 4]>>();
  Assert<
    IsExactType<Range<0, 10>, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]>
  >();
  Assert<IsExactType<Range<5, 10>, [5, 6, 7, 8, 9, 10]>>();
  Assert<
    IsExactType<
      Range<90, 100>,
      [90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100]
    >
  >();
}
