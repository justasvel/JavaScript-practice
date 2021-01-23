class Book {
    constructor(name, author, yearReleased, pageCount, price) {
        this.name = name;
        this.author = author;
        this.yearReleased = yearReleased;
        this.pageCount = pageCount;
        this.price = price;
    }

    printBook() {
        console.log(this);
    }
}

let sapiens = new Book('Sapiens: A Brief History of Humankind', 'Yuval Noah Harari', 2011, 443, 50);
let ulysses = new Book('Ulysses', 'James Joyce', 1922, 730, 35);
let mobyDick = new Book('Moby Dick', 'Herman Melville', 1851, 99, 25);

//ulysses.printBook();

let arrayOfBooks = [sapiens, ulysses, mobyDick];

const printAllBooks = (array) => {
    for (let arrayItem in array) {
        console.log(array[arrayItem]);
    }
}

const increasePriceOfAll = (array, amount) => {
    let increaseAmount = 1 + (amount / 100);
    for (let arrayItem in array) {
        array[arrayItem].price = parseFloat((array[arrayItem].price * increaseAmount).toFixed(2));
    }
}

let moreThan100 = [];

const getMoreThan100 = (arrayOfBooks) => {
    for (let arrayItem in arrayOfBooks) {
        if (arrayOfBooks[arrayItem].pageCount > 100) {
            moreThan100.push(arrayOfBooks[arrayItem]);

        }
    }
    console.log(moreThan100);
}


increasePriceOfAll(arrayOfBooks, 10);
printAllBooks(arrayOfBooks);
getMoreThan100(arrayOfBooks);
