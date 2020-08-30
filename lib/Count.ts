
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

type N = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
  31,
  32,
  33,
  34,
  35,
  36,
  37,
  38,
  39,
  40,
  41,
  42,
  43,
  44,
  45,
  46,
  47,
  48,
  49,
  50,
  51,
  52,
  53,
  54,
  55,
  56,
  57,
  58,
  59,
  60,
  61,
  62,
  63,
  64,
  65,
  66,
  67,
  68,
  69,
  70,
  71,
  72,
  73,
  74,
  75,
  76,
  77,
  78,
  79,
  80,
  81,
  82,
  83,
  84,
  85,
  86,
  87,
  88,
  89,
  90,
  91,
  92,
  93,
  94,
  95,
  96,
  97,
  98,
  99,
  100
];

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
