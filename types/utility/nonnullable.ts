type T = string | number | null | undefined

function showType(arg: NonNullable<T>) {
  console.log(arg)
}

showType(0)
// Output 0

showType("lxy")
// Output 'lxy'

showType(null)
// 编译错误 Argument of type 'null' is not assignable to parameter of type 'string | number'.

showType(undefined)
// 编译错误 Argument of type 'undefined' is not assignable to parameter of type 'string | number'.