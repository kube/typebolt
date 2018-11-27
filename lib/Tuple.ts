
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

/**
 * Get first element of a Tuple
 */
export type Head<XS extends any[]> =
  XS extends [infer X, ...any[]]
  ? X
  : never

/**
 * Get all elements after first of a Tuple
 */
export type Tail<XS extends any[]> =
  ((...xs: XS) => void) extends
  ((_: any, ...tail: infer T) => void)
  ? T
  : never

/**
 * Preprend element at start of a Tuple
 */
export type Prepend<X, T extends any[]> =
  ((x: X, ...tail: T) => void) extends
  ((...xs: infer XS) => void)
  ? XS
  : never

/**
 * Reverse a Tuple
 */
export type Reverse<T extends any[], R extends any[]=[]> = {
  0: Reverse<Tail<T>, Prepend<Head<T>, R>>
  1: R
}[T extends [] ? 1 : 0]

/**
 * Append element at end of a Tuple
 */
export type Append<X, T extends any[], O extends any[]=[]> = {
  0: Append<X, Tail<T>, Prepend<Head<T>, O>>
  1: Reverse<Prepend<X, O>>
}[T extends [] ? 1 : 0]

/**
 * Take N first elements of Tuple
 */
export type Take<N extends number, T extends any[], O extends any[]=[]> = {
  0: Take<N, Tail<T>, Prepend<Head<T>, O>>,
  1: Reverse<O>
}[T extends [] ? 1 : O['length'] extends N ? 1 : 0]

/**
 * Take N last elements of Tuple
 */
export type TakeLast<N extends number, T extends any[], S extends any[]=[]> = {
  0: TakeLast<N, Tail<T>, Prepend<Head<T>, S>>,
  1: T
  2: Reverse<S>
}[T['length'] extends N ? 1 : T extends [] ? 2 : 0]

/**
 * Drop N first elements of Tuple
 */
export type Drop<N extends number, T extends any[], S extends any[]=[]> = {
  0: Drop<N, Tail<T>, Prepend<Head<T>, S>>
  1: T
}[S['length'] extends N ? 1 : T extends [] ? 1 : 0]

/**
 * Drop N last elements of Tuple
 */
export type DropLast<N extends number, T extends any[], S extends any[]=[]> = {
  0: DropLast<N, Tail<T>, Prepend<Head<T>, S>>,
  1: Reverse<S>
  2: T
}[T['length'] extends N ? 1 : T extends [] ? 2 : 0]
