type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

type IntersectionType = LeftType & RightType

function showType(arg: IntersectionType) {
  console.log(arg)
}

showType({id: 1, left: "left", right: "right"})
// Output: { id: 1, left: 'left', right: 'right' }