interface PickType {
  id: number
  firstname: string
  lastname: string
}

type K1 = "firstname" & "lastname"
type K2 = "firstname" | "lastname"

function showTypeWithK1(arg: Pick<PickType, K1>) {
  console.log(arg)
}

showTypeWithK1({lastname: "Yang"})
// Output {lastname: "Yang"}
showTypeWithK1({firstname: "Li", lastname: "Yang"})
// Output {firstname: "Li", lastname: "Yang"}

function showTypeWithK2(arg: Pick<PickType, K2>) {
  console.log(arg)
}

showTypeWithK2({lastname: "Yang"})
// 编译错误 Property 'firstname' is missing in type '{ lastname: string; }' but required in type 'Pick<PickType, K2>'
showTypeWithK2({firstname: "Li", lastname: "Yang"})
// Output {firstname: "Li", lastname: "Yang"}