// classs with generic T
var storeageUnit = /** @class */ (function () {
    function storeageUnit() {
        this.contents = [];
    }
    storeageUnit.prototype.addItem = function (item) {
        this.contents.push(item);
    };
    storeageUnit.prototype.getItem = function (idx) {
        return this.contents[idx];
    };
    return storeageUnit;
}());
var userNames = new storeageUnit();
userNames.addItem("bharat");
userNames.addItem("kolhe");
console.log(userNames);
console.log(userNames.getItem(0));
