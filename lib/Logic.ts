
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Logical NOT
 */
export type Not<A extends boolean> =
  A extends true ? false : true

/**
 * Logical AND
 */
export type And<A extends boolean, B extends boolean> =
  A extends true
  ? (B extends true ? true : false)
  : false

/**
 * Logical OR
 */
export type Or<A extends boolean, B extends boolean> =
  A extends true
  ? true
  : (B extends true ? true : false)

/**
 * Logical XOR
 */
export type Xor<A extends boolean, B extends boolean> =
  A extends true
  ? (B extends true ? false : true)
  : (B extends true ? true : false)

/**
 * Logical NOT AND
 */
export type Nand<A extends boolean, B extends boolean> =
  Not<And<A, B>>

/**
 * Logical NOT OR
 */
export type Nor<A extends boolean, B extends boolean> =
  Not<Or<A, B>>

/**
 * Logical Exclusive NOT OR
 */
export type Xnor<A extends boolean, B extends boolean> =
  Not<Xor<A, B>>
