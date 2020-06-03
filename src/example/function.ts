function add1(arg1: number, arg2: number): number {
  return arg1 + arg2;
}

const add2 = (arg1: number, arg2: number): number => arg1 + arg2;

let add3: (x: number, y: number) => number;
add3 = (arg1: number, arg2: number): number => arg1 + arg2;

interface Add1 {
  (x: number, y: number): number
}
type Add2 = (x: number, y: number) => number;
type isString = string;