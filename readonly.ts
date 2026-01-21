interface empolyee{
    name :string,
    readonly ID:number,  // readonly means it CANNOT be changed once assigned
    email:string
}

const employ :empolyee = {
    name :"bharat",
    ID:23,
    email:"bharatkolhe@gooogle.com"
}

employ.name ="kolhe"

console.log(employ);
