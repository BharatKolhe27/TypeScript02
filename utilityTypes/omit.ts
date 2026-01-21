type Person ={
    name:string,
    age:number,
    email:string
}

// omit -> it omits the property ont the object
// here we omitted the age 
const itsMe :Omit <Person , "age">={   
    name :"bharat",
    age:20,
    email:"bharatkolhe@gmail.com"
}