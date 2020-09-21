
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert } from "../Assert";
import { Narrow } from "../Narrow";
import { IsExactType } from "../Testing";

//
// Primitives
//

{
  type Initial = boolean;
  type ToExclude = true;

  type Expected = false;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

//
// Objects
//

{
  type Initial = { a: boolean; b: string };
  type ToExclude = { a: true; b: string };

  type Expected = { a: false; b: string };
  type Result = Narrow<Initial, ToExclude>;

  type Expected2 = never;
  type Result2 = Narrow<Result, Expected>;

  Assert<IsExactType<Expected, Result>>();
  Assert<IsExactType<Expected2, Result2>>();
}

{
  type Initial = { a: { a2: boolean }; b: string };
  type ToExclude = { a: { a2: true }; b: string };

  type Expected = { a: { a2: false }; b: string };
  type Result = Narrow<Initial, ToExclude>;

  type Expected2 = never;
  type Result2 = Narrow<Result, Expected>;

  Assert<IsExactType<Expected, Result>>();
  Assert<IsExactType<Expected2, Result2>>();
}

{
  type Initial = { age: 42; name: "John" };
  type ToExclude = { age: number };

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = { age: 42; name: "John" };
  type ToExclude = { age: string };

  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = { a: "Hello" | boolean; b: string };
  type ToExclude = { a: string; b: string };

  type Expected = { a: boolean; b: string };
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  // ToExclude has MORE properties than Initial
  type Initial = { a: "Hello" | boolean };
  type ToExclude = { a: string; b: boolean };

  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  // Nested Tuple
  // ToExclude has LESS properties than Initial
  type Initial = { a: [1 | "one", 2, 3]; b: boolean };
  type ToExclude = { a: [1, 2, 3] };

  type Expected = { a: ["one", 2, 3]; b: boolean };
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

//
// Tuples
//

{
  type Initial = [1, 2 | "two", 3, 4];
  type Matched = [number, 2, number, number];

  type Expected = [1, "two", 3, 4];
  type Result = Narrow<Initial, Matched>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1, 2, 3];
  type ToExclude = [number, number, number];

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1 | "one", 2, 3];
  type ToExclude = [1, 2, 3];

  type Expected = ["one", 2, 3];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [boolean, number];
  type ToExclude = [true, number];

  type Expected = [false, number];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1 | "one", 2, 3];
  type ToExclude = [number, number, number];

  type Expected = ["one", 2, 3];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1 | "one", 2 | "two", 3];
  type ToExclude = [number, number, number];

  // Does not narrow here, because two properties are narrowed
  type Expected = [1 | "one", 2 | "two", 3];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1 | 2 | 3];
  type ToExclude = [number];

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [[1 | 2 | 3], [1 | 2 | 3]];
  type ToExclude = [[number], [number]];

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1, 2, 3];
  type ToExclude = [1, 2];

  // TODO: Possibly could be narrowed to `never`
  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  // Nested Tuple
  type Initial = [[1 | "two" | 3], [1 | 2 | 3]];
  type ToExclude = [[number], [number]];

  type Expected = [["two"], [1 | 2 | 3]];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  // Nested Object in Tuple
  type Initial = [{ a: boolean }, { b: string }];
  type ToExclude = [{ a: true }, { b: string }];

  type Expected = [{ a: false }, { b: string }];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  // Nested Object in Tuple
  type Initial = [{ a: boolean }, { b: string }];
  type ToExclude = [{ a: true }, { b: "Hello" }];

  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [{ a: boolean | string }, { b: string }];
  type ToExclude = [{ a: boolean }, { b: string }];

  type Expected = [{ a: string }, { b: string }];
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

//
// Arrays
//
{
  type Initial = [1, 2, 3];
  type ToExclude = Array<number>;

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = [1 | "one", 2, 3];
  type ToExclude = Array<number>;

  // TODO: Should be:
  // type Expected = ["one", 2, 3];
  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = Array<number | string>;
  type ToExclude = Array<number>;

  type Expected = Initial;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = Array<number>;
  type ToExclude = Array<number | string>;

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}

{
  type Initial = Array<number>;
  type ToExclude = Array<number> | Array<string>;

  type Expected = never;
  type Result = Narrow<Initial, ToExclude>;

  Assert<IsExactType<Expected, Result>>();
}
