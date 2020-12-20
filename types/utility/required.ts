interface RequiredType {
  id: number
  firstname?: string
  lastname?: string
}

function showType(arg: Required<RequiredType>) {
  console.log(arg)
}

showType({id: 1, firstname: "Li", lastname: "Yang"})
// Output {id: 1, firstname: "Li", lastname: "Yang"}

showType({id: 1})
// 编译报错 Type '{ id: number; }' is missing the following properties from type 'Required<RequiredType>': firstname, lastname