class Pila {
    constructor() {
        this.items = {};
        this.top = 0;
    }

 push (data) {
    this.top ++;
    this.items[this.top] = data;
 };


 pop () {
    let deletedData;

    if (this.top) {
        deletedData = this.items [this.top];
        delete this.items [this.top];
        this.top --;
        return deletedData;
    };
 };

 getsize () {
    return this.top;
 };

 isempty () {
    if (!this.getsize()) {
        return true;
    }
    else {
        return false;
    };
 };

 peek () {
    if (this.isempty()) {
        return null;
     }; 
     return this.items [this.top];
 };

 print () {
    let result = '';
    for (let i = this.top; i > 0; i--) {
        result += this.items [i] + ' '
    };
    return result;
 };
}; 
 
const pila = new Pila ();
pila.push ('item-1');
pila.push ('item-2');
pila.push ('item-3');

console.log(pila.pop());

console.log (pila.getsize());

console.log (pila.isempty());

console.log (pila.peek());

console.log (pila.print());

console.log (pila); 