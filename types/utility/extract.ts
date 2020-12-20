type K1 = 1 | 2 | 3
type K2 = 3 | 4 | 5
type ExtractType = Extract<K1, K2>

function showType(arg: ExtractType) {
  console.log(arg)
}
showType(2)
// Output 3
showType(4)
// 编译报错 Argument of type '4' is not assignable to parameter of type '3'