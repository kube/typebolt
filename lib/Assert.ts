
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

const IMPOSSIBLE = Symbol();
type Check<A> = [A] extends [never] ? [typeof IMPOSSIBLE] : [A] | [];

/**
 * Assert that a Type is true.
 */
export function Assert<A extends true>(
  ..._ASSERTION_CANNOT_BE_NEVER: Check<A>
) {}

/**
 * Assert that a Type is false.
 */
function AssertFalse<A extends false>(
  ..._ASSERTION_CANNOT_BE_NEVER: Check<A>
) {}

Assert.True = Assert;
Assert.False = AssertFalse;
