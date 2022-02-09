import { padLeft } from "./narrowing"

type atomicNumber = (a: number, b: number) => number

const add: atomicNumber = (a, b) => a + b

console.log(add(1,2))


const incrementAndAdd: typeof add = (a, b) => {
    a++
    return add(a,b)
}

console.log(padLeft("hello", " bastien"))

console.log(incrementAndAdd(1,2))
