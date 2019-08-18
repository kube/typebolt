
      /*#######.
     ########",#:
   #########',##".
  ##'##'## .##',##.
   ## ## ## # ##",#.
    ## ## ## ## ##'
     ## ## ## :##
      ## ## ##*/

import { Assert } from '../Testing'
import {
  IsType,
  IsExactType,
  IsMutualSubType,
  IsUnion,
  IsAny
} from '../Testing'

//
// Assert
//
{
  Assert<true>()
  Assert.True<true>()
  Assert.False<false>()
}

//
// IsType
//
{
  Assert.True<IsType<boolean, true>>()
  Assert.True<IsType<boolean, false>>()
  Assert.True<IsType<string, "Hello">>()
  Assert.True<IsType<number, 42>>()
  Assert.True<IsType<number, 42>>()
}

//
// IsMutualSubType
//
{
  Assert.True<IsMutualSubType<any, any>>()
  Assert.True<IsMutualSubType<null, null>>()
  Assert.True<IsMutualSubType<undefined, undefined>>()
  Assert.True<IsMutualSubType<string, string>>()
  Assert.True<IsMutualSubType<number, number>>()
  Assert.True<IsMutualSubType<{}, {}>>()
  Assert.True<IsMutualSubType<[], []>>()
  Assert.True<IsMutualSubType<number, number>>()

  Assert<IsType<boolean, IsMutualSubType<true | false, true | false>>>()
}

//
// IsUnion
//
{
  Assert.True<IsUnion<'Hello' | 'World'>>()
  Assert.True<IsUnion<1 | 2>>()
  Assert.True<IsUnion<boolean>>() // Boolean is union of true and false
  Assert.True<IsUnion<true | false>>()
  Assert.True<IsUnion<object | undefined>>()

  Assert.False<IsUnion<any>>()
  Assert.False<IsUnion<any | 42>>() // Any cannot be unioned
  Assert.False<IsUnion<string>>()
  Assert.False<IsUnion<string | string>>()
  Assert.False<IsUnion<string | "Hello">>()
  Assert.False<IsUnion<number>>()
  Assert.False<IsUnion<number | number>>()
  Assert.False<IsUnion<number | 42>>()
  Assert.False<IsUnion<any | any>>()
  Assert.False<IsUnion<null | null>>()
  Assert.False<IsUnion<object | object>>()
  Assert.False<IsUnion<undefined | undefined>>()
}

//
// IsAny
//
{
  Assert.True<IsAny<any>>()

  Assert.False<IsAny<null>>()
  Assert.False<IsAny<number>>()
  Assert.False<IsAny<string>>()
  Assert.False<IsAny<boolean>>()
  Assert.False<IsAny<number | string>>()
  Assert.False<IsAny<42>>()
  Assert.False<IsAny<true>>()
}

//
// IsExactType
//
{
  Assert.True<IsExactType<any, any>>()
  Assert.True<IsExactType<null, null>>()
  Assert.True<IsExactType<undefined, undefined>>()
  Assert.True<IsExactType<string, string>>()
  Assert.True<IsExactType<number, number>>()
  Assert.True<IsExactType<boolean, boolean>>()
  Assert.True<IsExactType<false, false>>()
  Assert.True<IsExactType<true, true>>()
  Assert.True<IsExactType<42, 42>>()
  Assert.True<IsExactType<"Hello", "Hello">>()
  Assert.True<IsExactType<string | number, string | number>>()
  Assert.True<IsExactType<"Hello" | "World", "Hello" | "World">>()
  Assert.True<IsExactType<"Hello" | 42, "Hello" | 42>>()
  Assert.True<IsExactType<true | false, true | false>>()
  Assert.True<IsExactType<{}, {}>>()
  Assert.True<IsExactType<
    { name: string, age: number },
    { name: string, age: number }>>()

  Assert.False<IsExactType<true, false>>()
  Assert.False<IsExactType<false, true>>()
  Assert.False<IsExactType<boolean, false>>()
  Assert.False<IsExactType<boolean, true>>()
  Assert.False<IsExactType<true, boolean>>()
  Assert.False<IsExactType<false, boolean>>()
  Assert.False<IsExactType<false, boolean>>()
  Assert.False<IsExactType<null, any>>()
  Assert.False<IsExactType<any, null>>()
  Assert.False<IsExactType<any, 42>>()
  Assert.False<IsExactType<any, 42 | string>>()
  Assert.False<IsExactType<
    { name: string },
    { name: string, age: number }>>()
  Assert.False<IsExactType<
    { name: string, age: number },
    { name: string }>>()
}
