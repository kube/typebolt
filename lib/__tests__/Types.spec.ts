
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert } from "../Assert";
import { Range } from "../Count";
import { IsExactType, IsType } from "../Testing";
import { AreDisjoint, CheckNeverProps, Tuple } from "../Types";

//
// AreDisjoint
//
{
  Assert.True<AreDisjoint<true, false>>();
  Assert.False<AreDisjoint<boolean, true>>();
  Assert.True<AreDisjoint<42, 43>>();
  Assert.False<AreDisjoint<42, 42>>();
  Assert.False<AreDisjoint<string, string>>();
  Assert.True<AreDisjoint<string, number>>();

  Assert.False<AreDisjoint<{ a: boolean }, { a: true }>>();

  {
    type A = { a: boolean };
    type B = { a: true };

    Assert.False<AreDisjoint<A, B>>();
    Assert.False<AreDisjoint<B, A>>();
  }

  {
    type A = { a: true };
    type B = { a: false };

    Assert.True<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: true } };
    type B = { a: { b: false } };

    Assert.True<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: true } };
    type B = { a: { b: boolean } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: true };
    type B = { b: true };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: true; b: true };
    type B = { b: true };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: true; b: true };
    type B = { b: false };

    Assert.True<AreDisjoint<A, B>>();
  }

  {
    type A = "INCREMENT" | "DECREMENT";
    type B = "INCREMENT";

    Assert.False<AreDisjoint<A, B>>();
    Assert.False<AreDisjoint<B, A>>();
  }

  {
    type A = "INCREMENT";
    type B = "INCREMENT" | "DECREMENT";

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = "INCREMENT" | "DECREMENT";
    type B = string;

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = 1 | 2 | 3;
    type B = 4 | 5 | 6;

    Assert.True<AreDisjoint<A, B>>();
    Assert.True<AreDisjoint<B, A>>();
  }

  {
    type A = 1 | 2 | 3 | 4;
    type B = 4 | 5 | 6;

    Assert.False<AreDisjoint<A, B>>();
    Assert.False<AreDisjoint<B, A>>();
  }
}

/// No depth
{
  {
    type A = true;
    type B = boolean;

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = true;
    type B = false;

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 1
{
  {
    type A = { a: true };
    type B = { a: boolean };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: true };
    type B = { a: false };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 2
{
  {
    type A = { a: { b: true } };
    type B = { a: { b: boolean } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: true } };
    type B = { a: { b: false } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 3
{
  {
    type A = { a: { b: { c: true } } };
    type B = { a: { b: { c: boolean } } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: { c: true } } };
    type B = { a: { b: { c: false } } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 4
{
  {
    type A = { a: { b: { c: { d: true } } } };
    type B = { a: { b: { c: { d: boolean } } } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: { c: { d: true } } } };
    type B = { a: { b: { c: { d: false } } } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 5
{
  {
    type A = { a: { b: { c: { d: { e: true } } } } };
    type B = { a: { b: { c: { d: { e: boolean } } } } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: { c: { d: { e: true } } } } };
    type B = { a: { b: { c: { d: { e: false } } } } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 6
{
  {
    type A = { a: { b: { c: { d: { e: { f: true } } } } } };
    type B = { a: { b: { c: { d: { e: { f: boolean } } } } } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: { c: { d: { e: { f: true } } } } } };
    type B = { a: { b: { c: { d: { e: { f: false } } } } } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 7
{
  {
    type A = { a: { b: { c: { d: { e: { f: { g: true } } } } } } };
    type B = { a: { b: { c: { d: { e: { f: { g: boolean } } } } } } };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = { a: { b: { c: { d: { e: { f: { g: true } } } } } } };
    type B = { a: { b: { c: { d: { e: { f: { g: false } } } } } } };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 8
{
  {
    type A = {
      a: { b: { c: { d: { e: { f: { g: { h: true } } } } } } };
    };
    type B = {
      a: { b: { c: { d: { e: { f: { g: { h: boolean } } } } } } };
    };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = {
      a: { b: { c: { d: { e: { f: { g: { h: true } } } } } } };
    };
    type B = {
      a: { b: { c: { d: { e: { f: { g: { h: false } } } } } } };
    };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// Depth 9
{
  {
    type A = {
      a: { b: { c: { d: { e: { f: { g: { h: { i: true } } } } } } } };
    };
    type B = {
      a: {
        b: { c: { d: { e: { f: { g: { h: { i: boolean } } } } } } };
      };
    };

    Assert.False<AreDisjoint<A, B>>();
  }

  {
    type A = {
      a: { b: { c: { d: { e: { f: { g: { h: { i: true } } } } } } } };
    };
    type B = {
      a: {
        b: { c: { d: { e: { f: { g: { h: { i: false } } } } } } };
      };
    };

    Assert.True<AreDisjoint<A, B>>();
  }
}

/// For Structype
{
  type Cube = {
    x: number;
    y: number;
    z: number;
    radius: string;
  };

  type Sphere = {
    x: number;
    y: number;
    z: number;
    radius: number;
  };

  Assert.True<AreDisjoint<Sphere, Cube>>();
}

{
  type Cube = {
    x: number;
    y: number;
    z: number;
    side: number;
  };

  type Sphere = {
    x: number;
    y: number;
    z: number;
    radius: number;
  };

  Assert.False<AreDisjoint<Sphere, Cube>>();
}

{
  type Cube = {
    x: number;
    y: number;
    z: number;
    radius: undefined;
  };

  type Sphere = {
    x: number;
    y: number;
    z: number;
    radius: number;
  };

  Assert.True<AreDisjoint<Sphere, Cube>>();
}

{
  type A = {};

  type B = {};

  Assert.False<AreDisjoint<A, B>>();
}

//
// INTERNAL: CheckNeverProps
//

{
  // Property `a` becomes `never` which is sign of disjoint union
  type Intersection = { a: never };
  type Initial = { a: true };

  Assert.True<CheckNeverProps<Intersection, Initial>>();
}

{
  // Property `a` becomes `never` which is sign of disjoint union
  type Intersection = { a: never; b: string };
  type Initial = { a: true; b: string };

  Assert.True<CheckNeverProps<Intersection, Initial>>();
}

{
  // Property `a` becomes `string` (and not `never`), so not disjoint union
  type Intersection = { a: string; b: string };
  type Initial = { a: string | number; b: string };

  Assert.False<CheckNeverProps<Intersection, Initial>>();
}

//
// Tuple
//

declare function Given<T>(callback: (x: T) => void): void;

{
  Assert.True<IsType<Tuple, []>>();
  Assert.True<IsType<Tuple<never>, []>>();
  Assert.True<IsType<Tuple<number>, []>>();
  Assert.True<IsType<Tuple, [1, 2]>>();
  Assert.True<IsType<Tuple, [1, 2, 3]>>();
  Assert.True<IsType<Tuple<number>, [1, 2, 3]>>();
  Assert.True<IsType<Tuple<string | number>, [1, 2, "3"]>>();

  Assert.False<IsType<Tuple, Array<number>>>();
  Assert.False<IsType<Tuple<number>, [1, 2, "3"]>>();
  Assert.False<IsType<Tuple<string>, [1, 2, "3"]>>();

  // With Length arguments
  Assert.True<IsType<Tuple<number, 2>, [1, 2]>>();
  Assert.True<IsType<Tuple<number, 2>, [number, number]>>();
  Assert.True<IsType<Tuple<number, 3>, [1, 2, 3]>>();
  Assert.True<IsType<Tuple<number, 10>, Range<1, 10>>>();

  Assert.False<IsType<Tuple<number, 3>, [1, 2, "three"]>>();
  Assert.False<IsType<Tuple<number, 2>, [number, number, number]>>();
  Assert.False<IsType<Tuple<number, 3>, [number, number, "3"]>>();

  // TODO: Clean this test

  Given<Tuple<number>>(tuple =>
    tuple.map(x => Assert<IsExactType<number, typeof x>>())
  );
}
