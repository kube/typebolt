
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
  ? [...Reverse<T>, H]
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
> = N extends 0
  ? O
  : T extends []
  ? O
  : Take<Decrement<N>, Tail<T>, Append<Head<T>, O>>;

/**
 * Take N last elements of Tuple
 */
export type TakeLast<
  N extends number,
  T extends any[],
  S extends any[] = []
> = N extends 0
  ? S
  : T extends []
  ? S
  : T extends [...infer XS, infer L]
  ? TakeLast<Decrement<N>, XS, [L, ...S]>
  : T;

/**
 * Drop N first elements of Tuple
 */
export type Drop<N extends number, T extends any[]> = N extends 0
  ? T
  : T extends []
  ? T
  : Drop<Decrement<N>, Tail<T>>;

/**
 * Drop N last elements of Tuple
 */
export type DropLast<N extends number, T extends any[]> = N extends 0
  ? T
  : T extends []
  ? T
  : T extends [...infer XS, any]
  ? DropLast<Decrement<N>, XS>
  : [];
