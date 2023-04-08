// To make code more readble we can seperate large digits using _

let sales: number = 123_456_789;
let course: string = 'TypeScript';
let isComming: boolean = true;

// Array types
let numbers = [1, 2, 3];
numbers[4] = 4;

let anyNumbers = [];
anyNumbers[0] = 1;
anyNumbers[1] = 3;
anyNumbers[2] = '5';
anyNumbers[3] = true

console.log(anyNumbers);

let numbersNew: number[] = [];
numbersNew[0] = 4;

//Type Type
let user: [number, string] = [1, 'supuni']