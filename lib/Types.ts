
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
  Intersection extends {},
  Initial extends {},
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

type AreDisjointObjects<
  Intersection extends {},
  Initial extends {}
> = keyof Intersection extends never
  ? false
  : CheckNeverProps<Intersection, Initial>;

/**
 * Check if two type have no possible intersection.
 */
export type AreDisjoint<A extends {}, B extends {}, AB = A & B> = [
  AB
] extends [never]
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
