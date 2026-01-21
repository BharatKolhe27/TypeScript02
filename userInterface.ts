// Interfaces -> they are blueprints that define the structure of an object
// They describe WHAT properties and methods an object should have
// Interfaces do NOT exist in JavaScript at runtime — they are only for TypeScript type-checking

interface UserInterface {

    name: string;
    age?: number;  //? -> it makes the age property optional 
    mail: string;

    // It accepts a string parameter called 'message'
    // It returns nothing (void)
    greet(message: string): void;
}

// an object that follows the structure defined by UserInterface
const user: UserInterface = {
    name: "bharat",      
    age: 20,            
    mail: "bharatkolhe@gmail.com",   

    
    greet(message: string) {
        console.log(message);
    }
};


console.log(user.name);


// greet returns void, so console.log will print 'undefined'
console.log(user.greet('hello'));
