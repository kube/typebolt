
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { IsUnion } from "./index";
import { Tuple } from "./Types";

//
// Narrow Object
//

type DifferentKeys<T, S> = keyof S extends keyof T
  ? {
      [K in keyof S & keyof T]: [Exclude<T[K], S[K]>] extends [never] // SAME A
        ? never
        : K;
    }[keyof T & keyof S]
  : never;

type NarrowObject<Input, ToExclude> = Input extends ToExclude // SAME 1
  ? never
  : IsUnion<DifferentKeys<Input, ToExclude>> extends true
  ? Input
  : [DifferentKeys<Input, ToExclude>] extends [never]
  ? Input
  : {
      [K in keyof Input]: K extends DifferentKeys<Input, ToExclude>
        ? Narrow<Input[K], ToExclude[K]>
        : Input[K];
    };

//
// Narrow Tuple
//

// TODO: DifferentIndices can be expressed as DifferentKeys where Array Methods would be excluded
type DifferentIndices<T, S> = {
  [K in keyof S & keyof T]: K extends keyof Array<any> // Exclude Array Methods
    ? never
    : [Exclude<T[K], S[K]>] extends [never] // SAME A
    ? never
    : K;
}[keyof T & keyof S];

type NarrowTuple<Input, ToExclude> = Input extends ToExclude // SAME 1
  ? never
  : IsUnion<DifferentIndices<Input, ToExclude>> extends true
  ? Input
  : [DifferentIndices<Input, ToExclude>] extends [never]
  ? Input
  : {
      [K in keyof Input]: K extends DifferentIndices<Input, ToExclude>
        ? Narrow<Input[K], ToExclude[K]>
        : Input[K];
    };

/**
 * Narrows a Type given another type to Exclude from it.
 *
 * Similar to Exclude, but also works on nested properties and tuples:
 *
 * ```ts
 * Exclude<boolean, true> // false
 * Narrow<boolean, true> // false
 *
 * Exclude<{ x: boolean }, { x: true }> // { x: boolean }
 * Narrow<{ x: boolean }, { x: true }> // { x: false }
 *
 * Exclude<[boolean, number], [true, number]> // [boolean, number]
 * Narrow<[boolean, number], [true, number]> // [false, number]
 * ```
 */
export type Narrow<Input, ToExclude> = Input extends
  | string
  | number
  | boolean
  ? Exclude<Input, ToExclude>
  : Input extends Tuple
  ? NarrowTuple<Input, ToExclude>
  : NarrowObject<Input, ToExclude>;
