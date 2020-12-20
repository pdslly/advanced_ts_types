type K1 = 1 | 2 | 3
type K2 = 3 | 4 | 5
type ExcludeType = Exclude<K1, K2> // ExcludeType = 1 | 2

function showType(arg: ExcludeType) {
  console.log(arg)
}
showType(1)
// Output 1
showType(4)
// 编译报错 Argument of type '4' is not assignable to parameter of type '1 | 2'.