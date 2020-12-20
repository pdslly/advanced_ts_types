type Names = "小明" | "小李" | "小张"

interface GenerateType<T> {
  id: number
  name: T
}

function showTypeWithString(arg: GenerateType<string>) {
  console.log(arg)
}
showTypeWithString({id: 1, name: "lxy"})
// Output: { id: 1, name: 'lxy' }

function showTypeWithNumber(arg: GenerateType<number>) {
  console.log(arg)
}
showTypeWithNumber({id: 1, name: 11})
// Output: { id: 1, name: 11 }

function showTypeWithNames(arg: GenerateType<Names>) {
  console.log(arg)
}
showTypeWithNames({id: 1, name: "小明"})
// Output: { id: 1, name: '小明' }