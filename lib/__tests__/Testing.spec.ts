
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
  Assert.true<true>()
  Assert.false<false>()
}

//
// IsType
//
{
  Assert.true<IsType<boolean, true>>()
  Assert.true<IsType<boolean, false>>()
  Assert.true<IsType<string, "Hello">>()
  Assert.true<IsType<number, 42>>()
  Assert.true<IsType<number, 42>>()
}

//
// IsMutualSubType
//
{
  Assert.true<IsMutualSubType<any, any>>()
  Assert.true<IsMutualSubType<null, null>>()
  Assert.true<IsMutualSubType<undefined, undefined>>()
  Assert.true<IsMutualSubType<string, string>>()
  Assert.true<IsMutualSubType<number, number>>()
  Assert.true<IsMutualSubType<{}, {}>>()
  Assert.true<IsMutualSubType<[], []>>()
  Assert.true<IsMutualSubType<number, number>>()

  Assert<IsType<boolean, IsMutualSubType<true | false, true | false>>>()
}

//
// IsUnion
//
{
  Assert.true<IsUnion<'Hello' | 'World'>>()
  Assert.true<IsUnion<1 | 2>>()
  Assert.true<IsUnion<boolean>>() // Boolean is union of true and false
  Assert.true<IsUnion<true | false>>()
  Assert.true<IsUnion<object | undefined>>()

  Assert.false<IsUnion<any>>()
  Assert.false<IsUnion<any | 42>>() // Any cannot be unioned
  Assert.false<IsUnion<string>>()
  Assert.false<IsUnion<string | string>>()
  Assert.false<IsUnion<string | "Hello">>()
  Assert.false<IsUnion<number>>()
  Assert.false<IsUnion<number | number>>()
  Assert.false<IsUnion<number | 42>>()
  Assert.false<IsUnion<any | any>>()
  Assert.false<IsUnion<null | null>>()
  Assert.false<IsUnion<object | object>>()
  Assert.false<IsUnion<undefined | undefined>>()
}

//
// IsAny
//
{
  Assert.true<IsAny<any>>()

  Assert.false<IsAny<null>>()
  Assert.false<IsAny<number>>()
  Assert.false<IsAny<string>>()
  Assert.false<IsAny<boolean>>()
  Assert.false<IsAny<number | string>>()
  Assert.false<IsAny<42>>()
  Assert.false<IsAny<true>>()
}

//
// IsExactType
//
{
  Assert.true<IsExactType<any, any>>()
  Assert.true<IsExactType<null, null>>()
  Assert.true<IsExactType<undefined, undefined>>()
  Assert.true<IsExactType<string, string>>()
  Assert.true<IsExactType<number, number>>()
  Assert.true<IsExactType<boolean, boolean>>()
  Assert.true<IsExactType<false, false>>()
  Assert.true<IsExactType<true, true>>()
  Assert.true<IsExactType<42, 42>>()
  Assert.true<IsExactType<"Hello", "Hello">>()
  Assert.true<IsExactType<string | number, string | number>>()
  Assert.true<IsExactType<"Hello" | "World", "Hello" | "World">>()
  Assert.true<IsExactType<"Hello" | 42, "Hello" | 42>>()
  Assert.true<IsExactType<true | false, true | false>>()
  Assert.true<IsExactType<{}, {}>>()
  Assert.true<IsExactType<
    { name: string, age: number },
    { name: string, age: number }>>()

  Assert.false<IsExactType<true, false>>()
  Assert.false<IsExactType<false, true>>()
  Assert.false<IsExactType<boolean, false>>()
  Assert.false<IsExactType<boolean, true>>()
  Assert.false<IsExactType<true, boolean>>()
  Assert.false<IsExactType<false, boolean>>()
  Assert.false<IsExactType<false, boolean>>()
  Assert.false<IsExactType<null, any>>()
  Assert.false<IsExactType<any, null>>()
  Assert.false<IsExactType<any, 42>>()
  Assert.false<IsExactType<any, 42 | string>>()
  Assert.false<IsExactType<
    { name: string },
    { name: string, age: number }>>()
  Assert.false<IsExactType<
    { name: string, age: number },
    { name: string }>>()
}
