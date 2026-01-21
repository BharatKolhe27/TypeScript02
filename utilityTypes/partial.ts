type Person = {
    name :string
    age: number
    email:string
}


const me:Partial<Person>={  // partial -> it makes all the properties optional
 name :"bharat",
 age : 20,
}

