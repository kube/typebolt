
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Decrement } from "./Count";

/**
 * Get first element of a Tuple
 */
export type Head<XS extends any[]> = XS extends [infer X, ...any[]]
  ? X
  : XS extends []
  ? never
  : XS[number] | undefined;

/**
 * Get all elements after first of a Tuple
 */
export type Tail<XS extends any[]> = XS extends [any, ...infer T]
  ? T
  : XS;

/**
 * Preprend element at start of a Tuple
 */
export type Prepend<X, T extends any[]> = [X, ...T];

/**
 * Reverse a Tuple
 */
export type Reverse<XS extends any[]> = XS extends [
  infer H,
  ...infer T
]
  ? { 1: [...Reverse<T>, H] }[T extends [] ? 1 : 1]
  : XS;

/**
 * Append element at end of a Tuple
 */
export type Append<X, T extends any[]> = [...T, X];

/**
 * Take N first elements of Tuple
 */
export type Take<
  N extends number,
  T extends any[],
  O extends any[] = []
> = {
  0: O;
  1: Take<Decrement<N>, Tail<T>, Append<Head<T>, O>>;
}[N extends 0 ? 0 : T extends [] ? 0 : 1];

/**
 * Take N last elements of Tuple
 */
export type TakeLast<
  N extends number,
  T extends any[],
  S extends any[] = []
> = {
  0: S;
  1: T extends [...infer XS, infer L]
    ? TakeLast<Decrement<N>, XS, [L, ...S]>
    : T;
}[N extends 0 ? 0 : T extends [] ? 0 : 1];

/**
 * Drop N first elements of Tuple
 */
export type Drop<N extends number, T extends any[]> = {
  0: T;
  1: Drop<Decrement<N>, Tail<T>>;
}[N extends 0 ? 0 : T extends [] ? 0 : 1];

/**
 * Drop N last elements of Tuple
 */
export type DropLast<N extends number, T extends any[]> = {
  0: T extends [...infer XS, any] ? DropLast<Decrement<N>, XS> : [];
  1: T;
}[N extends 0 ? 1 : T extends [] ? 1 : 0];
