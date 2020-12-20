type StringMap<T> = {
  [P in keyof T]: string
}

interface T {
  id: number
  name: string
}

function showType(arg: StringMap<T>) {
  console.log(arg)
}

showType({id: 10, name: "lxy"})
// 编译错误 Type 'number' is not assignable to type 'string'.

showType({id: "10", name: "lxy"})
// Output {id: "10", name: "lxy"}