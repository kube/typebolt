
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { N } from "./N";

type NPlusOne = N extends [number, ...infer XS] ? XS : never;
type NMinusOne = [never, ...N];

/**
 * Increment a literal number
 */
export type Increment<X extends number> = NPlusOne[X];

/**
 * Decrement a literal number
 */
export type Decrement<X extends number> = NMinusOne[X];

/**
 * Add two literal numbers
 */
export type Add<A extends number, B extends number> = A extends 0
  ? B
  : Add<Decrement<A>, Increment<B>>;

/**
 * Subtract two literal numbers
 */
export type Sub<A extends number, B extends number> = B extends 0
  ? A
  : Sub<Decrement<A>, Decrement<B>>;

/**
 * Return an array of literal numbers from A to B
 */
export type Range<
  A extends number,
  B extends number,
  O extends number[] = []
> = A extends B ? [...O, B] : Range<Increment<A>, B, [...O, A]>;
