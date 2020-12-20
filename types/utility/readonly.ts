interface ReadonlyType {
  id: number
  name: string
}

function showType(arg: Readonly<ReadonlyType>) {
  arg.id = 4
  console.log(arg)
}

showType({id: 1, name: "lxy"})
// 编译报错 Cannot assign to 'id' because it is a read-only property.