
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Add, MinusOne, PlusOne } from "../Count";
import { Assert, IsExactType } from "../Testing";

{
  Assert<IsExactType<PlusOne<0>, 1>>();
  Assert<IsExactType<PlusOne<41>, 42>>();
}

{
  Assert<IsExactType<MinusOne<1>, 0>>();
  Assert<IsExactType<MinusOne<41>, 40>>();
}

{
  Assert<IsExactType<Add<1, 2>, 3>>();
  Assert<IsExactType<Add<20, 20>, 40>>();
}
