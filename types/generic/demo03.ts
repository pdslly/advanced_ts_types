interface GenericType<T, U> {
  id: T
  name: U
}

function showType(arg: GenericType<number, string>) {
  console.log(arg)
}
showType({id: 1, name: "lxy"})
// Output: { id: 1, name: 'lxy' }

function showTypeTwo(arg: GenericType<number, string[]>) {
  console.log(arg)
}
showTypeTwo({id: 1, name: ["lxy"]})
// Output: { id: 1, name: ['lxy'] }