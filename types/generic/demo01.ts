function showType<T>(arg: T) {
  console.log(arg)
}

showType<string>("test")
// Output: test

showType(1)
// Output: 1