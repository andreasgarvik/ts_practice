let apples: number = 5
class Point {
  x: number
  y: number
}
let point: Point = {x: 1, y: 2}

let logNumber: (i: number) => void =
    (i: number) => {
      console.log(i)
    }

const json = '{"x":1, "y":2}'
const coordinates: Point = JSON.parse(json)
console.log(coordinates)
