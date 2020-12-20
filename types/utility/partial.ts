interface PartialType {
  id: number
  firstname: string
  lastname: string
}

function showType(arg: Partial<PartialType>) {
  console.log(arg)
}

showType({id: 1})
// Output: {id: 1}

showType({id: 1, firstname: "Li"})
// Output: {id: 1, firstname: 'Li'}

showType({firstname: "Li", lastname: "Yang"})
// Output: {firstname: 'Li', lastname: 'Yang'}
