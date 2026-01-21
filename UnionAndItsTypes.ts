interface book{
    name:string,
    author:string
}

interface libraray{
    bookName:string,
    bookNo :number
}

type issuer = book & libraray;

const customer =(details:issuer):void=>{
    console.log(`name of the book ${details.name} and the bookno ${details.bookNo}`);
    
}

customer({
    name:"bharat",
    author:"bharat",
    bookName:"helen",
    bookNo:21

})