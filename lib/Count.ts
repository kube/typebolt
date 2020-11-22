
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
export type Add<A extends number, B extends number> = {
  0: B;
  1: Add<Decrement<A>, Increment<B>>;
}[A extends 0 ? 0 : 1];

/**
 * Subtract two literal numbers
 */
export type Sub<A extends number, B extends number> = {
  0: A;
  1: Sub<Decrement<A>, Decrement<B>>;
}[B extends 0 ? 0 : 1];

/**
 * Return an array of literal numbers from A to B
 */
export type Range<
  A extends number,
  B extends number,
  O extends number[] = []
> = {
  0: [...O, B];
  1: Range<Increment<A>, B, [...O, A]>;
}[A extends B ? 0 : 1];
