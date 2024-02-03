let age: number = 20;
if(age<50){
    age += 10;
}

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

//Type Tuple
//Tuples are useful when we have two values like key, value pairs 
let user: [number, string] = [1, 'supuni']

// Enum Type
const enum Size {
 Small = 's',
 Medium = 'm',
 Large = 'l'
}

let mySize: Size = Size.Medium

console.log(mySize);

// Functions 

//When no return it gets as void
function CalculateTax(income:number){
    const a = 2;
    const b = 3;
    const c = income + a + b;
    console.log('c', c);
}

CalculateTax(1000);

//With the return type

function CalculateIncome(salary:number, sideHusle:number) : number{
    const totalIncome = salary + sideHusle;
    return totalIncome;
}

CalculateIncome(1000, 1200);

//tsconfig: noImplicitReturn
function calcualateProfit(income: number): number {

    //tsconfig: noUnusedLocals
    // const x = 100;

    if(income<15000)
        return income*0.5;
    return income*0.75;
}

function calculateYearlyTax(income:number, taxYear: number): number{
    if(taxYear< 2025)
        return income*0.25;
    return income*0.22;
}

//If the function declared with 2 parameters we can only pass 2 parameters 
calculateYearlyTax(25_000, 2023)

// What will happen if we didn't pass the second paramter. We can do it in this way
function calculateYearlyTax2(income:number, taxYear?: number): number{
    if((taxYear || 2023) < 2025)
        return income*0.25;
    return income*0.22;
}

calculateYearlyTax2(25_000);

//The below approach is better than the above approach 
function calculateYearlyTax3(income:number, taxYear = 2022): number{
    if(taxYear < 2025)
        return income*0.25;
    return income*0.22;
}

calculateYearlyTax2(25_000, 2023);

//Object
let employee : {
    //readonly means can't change
    readonly id: number,
    name: string,
    retire:  (date:Date) => void;
} = {
    id: 0,
    name: '',
    retire: (date:Date) => console.log(date)
}

employee.name = 'Su'
//following gives an error because employee id is read only
// employee.id = 1;

//Type aliases

//type type
type Employee = {
    readonly id: number,
    name: string,
    retire:  (date:Date) => void;
}

let employee2 : Employee = {
    id: 0,
    name: 'Suu',
    retire: (date:Date) => console.log(date)
}

//union type

function lbToKg(weight: number | string) : number{

    //Narrowing
    if(typeof weight === 'number'){
        return weight * 2.2;
    }else{
        return parseInt(weight) * 2.2;
    }
}

lbToKg(10);
lbToKg('10kg');

//intersection type

type Draggable = {
    drag : ()=> void;
}

type Resizable = {
    resize: () => void;
}

type UIWidget = Draggable & Resizable

let UIComponent: UIWidget = {
    drag : ()=>{},
    resize : ()=>{}
}

// Literal Types(exact, specific). Literals can be numbers or strings
let quantity : 50 = 50;
let height : 55 | 100 = 55;

// create a type for this 
type Quantity = 55 | 10;
let amount: Quantity = 55;

// Nullable types 
//By default we can't pass null values and undefined values in typescript. If we need to allow null we need to use union 

function tellName (name: string | null | undefined): void{
    if(name){
        console.log(name);
    }else{
        console.log('hola!')
    }
}

tellName(null);

//Chaining operator 

type Customer = {
    birthday : Date
}

function getCustomer(id:number): Customer | null | undefined {
    return id === 0 ? null : {birthday: new Date()}
}

let customer = getCustomer(0);
// if(customer !== null && customer !== undefined)
    //console.log(customer.birthday);

//instead of using if to check the null and undefined we can use optional property operator
console.log(customer?.birthday);

//optional element access operater
//we can use it in arrays
//customers?.[0]

//optional call operator
let log: any | null;
log?.('a')