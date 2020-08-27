![https://github.com/kube/typebolt/actions?query=workflow%3ABuild+branch%3Amaster](https://github.com/kube/typebolt/workflows/Build/badge.svg)

<h1 align="left">
  <img src="https://cdn.jsdelivr.net/gh/kube/typebolt/logo.svg" width=250 alt="Typebolt" />
</h1>

**TypeScript static helpers for types accuracy and testing**

## Install

```sh
yarn add --dev typebolt
```

## Content

- [Logical Operators](#logical-operators)
- [Testing Types](#testing-types)
- [Tuple Operations](#tuple-operations)

## Logical Operators

- `Not<T>` : Logical Not
- `And<A, B>` : Logical And
- `Or<A, B>` : Logical Or
- `Xor<A, B>` : Logical Exclusive Or
- `Nor<A, B>` : Logical Not Or
- `Nand<A, B>` : Logical Not And
- `Xnor<A, B>` : Logical Exclusive Not Or

```ts
Not<true> // false
Not<false> // true

And<true, true> // true
And<true, false> // false
And<true, false> // false

Or<true, false> // true
Or<true, true> // true

// ...

Not<Or<true, false>> // false – Equivalent to Nor
Not<And<true, false>> // true – Equivalent to Nand
```

## Testing Types

- `IsType<T, S>`: **S** is a Subtype of **T** (a.k.a. `extends`)
- `IsUnion<T>`: **T** an Union
- `IsAny<T>`: **T** is any
- `IsExactType<T1, T2>`: **T1** and **T2** are exact same.

### Assert

Assert a Type is `true` or `false`.

```ts
import { Assert } from "typebolt";

Assert<true>();
Assert<false>(); // ERROR
Assert<boolean>(); // ERROR

Assert.True<true>();
Assert.True<false>(); // ERROR
Assert.True<boolean>(); // ERROR

Assert.False<false>();
Assert.False<true>(); // ERROR
Assert.False<boolean>(); // ERROR
```

### IsType<T, S>

Check S is subtype of T. (a.k.a. `extends`)

```ts
Assert<IsType<number, 42>>();
Assert<IsType<number, number>>();
Assert<IsType<42, number>>(); // ERROR
```

### IsExactType<T1, T2>

Check T1 and T2 are exact same types.

```ts
Assert<IsExactType<42, 42>>();
Assert<IsExactType<any, 42>>(); // ERROR
Assert<IsExactType<number, 42>>(); // ERROR

// With unions
Assert<IsExactType<string | number, string | number>>();
Assert<IsExactType<string | number, string>>(); // ERROR
Assert<IsExactType<string, string | number>>(); // ERROR

// With any
Assert<IsExactType<any, any>>();
Assert<IsExactType<any, number>>(); // ERROR
```

## Tuple Operations

- `Head<T>`: First element of **T**
- `Tail<T>`: All elements after head of **T**
- `Prepend<X, T>`: Add element **X** in front of **T**
- `Append<X, T>`: Add element **X** at end of **T**
- `Reverse<T>`: Reverse **T**
- `Take<N, T>`: Take **N** first elements of **T**
- `TakeLast<N, T>`: Take **N** last elements of **T**
- `Drop<N, T>`: Remove **N** first elements of **T**
- `DropLast<N, T>`: Remove **N** last elements of **T**

```ts
Head<["Hello", "World"]> // "Hello"
Tail<["Hello", "World"]> // ["World"]

Prepend<1, [2, 3, 4]> // [1, 2, 3, 4]
Append<4, [1, 2, 3]> // [1, 2, 3, 4]
Reverse<[1, 2, 3, 4]> // [4, 3, 2, 1]

Take<2, [1, 2, 3, 4]> // [1, 2]
TakeLast<2, [1, 2, 3, 4]> // [3, 4]
Drop<2, [1, 2, 3, 4]> // [3, 4]
DropLast<2, [1, 2, 3, 4]> // [1, 2]
```

## Caveat

- `boolean` is always considered union of `true | false`.
- Union of a Type `T` and a SubType `S` will resolve to non-union `T`.

  > e.g. `string | "Hello"` resolves to `string`

- Union with `any` will always resolve to `any`.
