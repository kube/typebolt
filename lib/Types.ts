
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Increment, Range } from "./Count";

type MAXIMUM_DEPTH_CHECK = 9;

export type CheckNeverProps<
  Intersection,
  Initial,
  Depth extends number = 0
> = Depth extends MAXIMUM_DEPTH_CHECK
  ? false
  : {
      [K in keyof Intersection & keyof Initial]: [
        Intersection[K]
      ] extends [never]
        ? true
        : CheckNeverProps<
            Intersection[K],
            Initial[K],
            Increment<Depth>
          >;
    }[keyof Intersection & keyof Initial] extends false
  ? false
  : true;

type AreDisjointObjects<Intersection, Initial> =
  keyof Intersection extends never
    ? false
    : CheckNeverProps<Intersection, Initial>;

/**
 * Check if two type have no possible intersection.
 */
export type AreDisjoint<A, B, AB = A & B> = [AB] extends [never]
  ? true
  : AreDisjointObjects<AB, A>;

/**
 * Check if two types possibly have an intersection.
 * (Not disjoint)
 */
export type AreCompatible<A, B> = AreDisjoint<A, B> extends true
  ? false
  : true;

/**
 * Tuple Type.
 * Subtype of Array.
 */
export type Tuple<
  T = unknown,
  Length extends number = number
> = number extends Length
  ? Array<T> & ([] | { 0: T })
  : MapTuple<Range<1, Length>, T>;

type MapTuple<XS, T> = {
  [K in keyof XS]: K extends keyof Array<any> ? XS[K] : T;
};

/**
 * Transform a Union Type to Intersection of same operands.
 *
 * e.g. `A | B | C` becomes `A & B & C`
 */
export type UnionToIntersection<U> =
  // https://stackoverflow.com/questions/50374908/transform-union-type-to-intersection-type
  // TODO: Should add Unit Tests for this one
  (U extends any ? (k: U) => void : never) extends (
    k: infer I
  ) => void
    ? I
    : never;
