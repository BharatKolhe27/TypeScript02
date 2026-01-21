// classs with generic T
class storageUnit<T>{
    private contents:T[];

    constructor(){
        this.contents =[];
    }
    addItem(item:T):void{
        this.contents.push(item)
    }


    getItem(idx:number):T | undefined{
        return this.contents[idx]
    }
}

const userNames = new storageUnit<string>()
userNames.addItem("bharat");
userNames.addItem("kolhe");

console.log(userNames);
console.log(userNames.getItem(0))


