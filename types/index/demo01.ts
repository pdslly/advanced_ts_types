function pluck<T, K extends keyof T>(o: T, name: K): T[K] {
  return o[name]
}

interface Person {
  name: string
  age: number
}

let person: Person = {
  name: "lxy",
  age: 28
}

pluck(person, "name")
// Output "lxy"
pluck(person, "address")
// 编译错误 Argument of type '"address"' is not assignable to parameter of type '"name" | "age"'.