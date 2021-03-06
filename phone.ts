class Phone {
    brand: string;
    operatingSystem: string;
    color: string;
    size: number;
    weight: number
    price: number;

    constructor(brand: string, operatingSystem: string, color: string, size: number, weight: number, price: number){
        this.brand = brand;
        this.operatingSystem = operatingSystem;
        this.color = color;
        this.size = size;
        this.weight = weight;
        this.price = price;
    }

    makeCall = (phonenumber: number) => {
        console.log(`Calling... ${phonenumber}`); 
        return this.makeCall; 
    }

    sendText = (message: string, recipient: string) => {
        console.log(
            `Send ${message} to ${recipient}`);
            return this.sendText;
        
    }

    format() {
        return `My phone is ${this.brand}, its ${this.color}, and I bought it very expensive at ${this.price} naira. The operating system is ${this.operatingSystem}, ${this.size}ins wide and ${this.weight}g`
    }
 
}

const myphone = new Phone('Samsung', 'Android OS', 'Black', 11, 171, 150000);
const emekaPhone = new Phone('Iphone', 'iOS', 'Silver', 10.9, 161, 350000);

let phone: Phone[] = [];
phone.push(myphone);
phone.push(emekaPhone);

phone.forEach(element => {
    console.log(element.brand, element.operatingSystem, element.color, element.size, element.weight, element.price, element.format());
    
});

console.log(phone);
console.log(myphone.format());
console.log(emekaPhone.format());

console.log(myphone.makeCall(123456));
console.log(emekaPhone.makeCall(144456));

console.log(myphone.sendText('I love you', 'My Wife'));
console.log(emekaPhone.sendText('I like you very much', 'Ore mi'));





