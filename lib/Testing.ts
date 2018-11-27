
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Verify S is Subtype of T
 */
export type IsType<T, S> =
  S extends T ? true : false

/**
 * Verify equality between two types
 */
export type IsMutualSubType<T, S> =
  T extends S
  ? (S extends T ? true : false)
  : false

/**
 * Check if Type is an Union
 */
export type IsUnion<T> =
  IsMutualSubType<T, T> extends true ? false : true

/**
 * Check if Type is Any
 */
export type IsAny<T> =
  IsUnion<T> extends false
  ? (boolean | {} extends T ? true : false)
  : false

/**
 * Check two Types are exact same.
 */
export type IsExactType<T, S> =
  IsAny<T> extends true
  ? (IsAny<S> extends true ? true : false)
  : (IsAny<S> extends true ? false : IsMutualSubType<[T], [S]>)

/**
 * Assert that a Type is true.
 */
export function Assert<_Assertion extends true>() { }
/**
 * Assert that a Type is true.
 */
Assert.true = function <_Assertion extends true>() { }
/**
 * Assert that a Type is false.
 */
Assert.false = function <_Assertion extends false>() { }
