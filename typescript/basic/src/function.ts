function addNumber( a:number, b:number){
    return a+b;
}

var sum: number = addNumber(5,7)
console.log ('Sum of the two number is ' +sum);

function display(id:number, name:string)
{
    console.log("Id nya = " + id + ", Name  is = " + name);
}

display(4,"rasdi");

var employee : {
    id : number;
    name : string;
};

employee = {
    id : 100,
    name : "rasdi"
}


console.log(employee)