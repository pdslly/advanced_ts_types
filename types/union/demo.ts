type UnionType = number | string

function showType(arg: UnionType) {
  console.log(arg)
}

showType("str")
// Output: str

showType(100)
// Output: 100
