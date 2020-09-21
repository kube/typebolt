
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
export type IsType<T, S> = S extends T ? true : false;

/**
 * Verify equality between two types
 */
export type IsMutualSubType<T, S> = T extends S
  ? S extends T
    ? true
    : false
  : false;

/**
 * Check if Type is an Union
 */
export type IsUnion<T> = IsMutualSubType<T, T> extends true
  ? false
  : true;

/**
 * Check if Type is Never
 */
export type IsNever<T> = [T] extends [never] ? true : false;

/**
 * Check if Type is Any or Unknown
 */
export type IsAnyOrUnknown<T> = (
  any extends T ? true : false
) extends true
  ? true
  : false;

/**
 * Check if Type is Any
 */
export type IsAny<T> = IsAnyOrUnknown<T> extends true
  ? IsNever<keyof T> extends true
    ? false
    : true
  : false;

/**
 * Check if Type is Unknown
 */
export type IsUnknown<T> = IsAnyOrUnknown<T> extends true
  ? IsNever<keyof T> extends true
    ? true
    : false
  : false;

/**
 * Check two Types are exact same.
 */
export type IsExactType<T, S> = IsAny<T> extends true
  ? IsAny<S> extends true
    ? true
    : false
  : IsAny<S> extends true
  ? false
  : IsMutualSubType<[T], [S]>;

/**
 * Check if a Type is a Tuple.
 * Will return false in case of an array.
 */
export type IsTuple<T> = T extends Array<infer X>
  ? Array<X> extends T
    ? false
    : true
  : false;
