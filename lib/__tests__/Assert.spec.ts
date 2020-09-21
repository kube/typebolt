
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert } from "../Assert";

//
// Assert
//

Assert<true>();
// @ts-expect-error
Assert<false>();
// @ts-expect-error
Assert<never>();

//
// Assert.True
//

Assert.True<true>();
// @ts-expect-error
Assert.True<false>();
// @ts-expect-error
Assert.True<never>();

//
// Assert.False
//

Assert.False<false>();
// @ts-expect-error
Assert.False<true>();
// @ts-expect-error
Assert.False<never>();
