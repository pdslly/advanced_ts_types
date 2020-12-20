interface OmitType {
  id: number
  firstname: string
  lastname: string
}

type K = "firstname" | "lastname"

function showType(arg: Omit<OmitType, K>) {
  console.log(arg)
}

showType({id: 1})
// Output {id: 1}

showType({id: 1, firstname: "Li"})
// 编译报错  Object literal may only specify known properties, and 'firstname' does not exist in type 'Pick<OmitType, "id">'.