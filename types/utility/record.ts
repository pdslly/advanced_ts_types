interface Person {
  name: string
}

let UserList: Record<number, Person> = [
  {name: "小张"},
  {name: "小李"},
  {name: "小王"}
]

let UserObj: Record<string, Person> = {
  "a": {name: "小张"},
  "b": {name: "小李"},
  "c": {name: "小王"}
}

console.log(UserList)
// Output [ { name: '小张' }, { name: '小李' }, { name: '小王' } ]
console.log(UserObj)
// Output { a: { name: '小张' }, b: { name: '小李' }, c: { name: '小王' } }