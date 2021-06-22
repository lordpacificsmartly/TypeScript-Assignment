var Phone = /** @class */ (function () {
    function Phone(brand, operatingSystem, color, size, weight, price) {
        this.makeCall = function (phonenumber) {
            console.log("Calling... " + phonenumber);
        };
        this.sendText = function (message, recipient) {
            console.log("Send " + message + " to " + recipient);
        };
        this.brand = brand;
        this.operatingSystem = operatingSystem;
        this.color = color;
        this.size = size;
        this.weight = weight;
        this.price = price;
    }
    Phone.prototype.format = function () {
        return "My phone is " + this.brand + ", its " + this.color + ", and I bought it very expensive at " + this.price + " naira. The operating system is " + this.operatingSystem + ", " + this.size + "ins wide and " + this.weight + "g";
    };
    return Phone;
}());
var myphone = new Phone('Samsung', 'Android OS', 'Black', 11, 171, 150000);
var emekaPhone = new Phone('Iphone', 'iOS', 'Silver', 10.9, 161, 350000);
var phone = [];
phone.push(myphone);
phone.push(emekaPhone);
phone.forEach(function (element) {
    console.log(element.brand, element.operatingSystem, element.color, element.size, element.weight, element.price, element.format());
});
console.log(phone);
console.log(myphone.format());
console.log(emekaPhone.format());
console.log(myphone.makeCall(123456));
console.log(emekaPhone.makeCall(144456));
console.log(myphone.sendText('I love you', 'My Wife'));
console.log(emekaPhone.sendText('I like you very much', 'Ore mi'));
