function Restaurant(restaurantName, numberOfSeats, reservedSeats) {
    this.restaurantName = restaurantName;
    this.numberOfSeats = numberOfSeats;
    this.reservedSeats = reservedSeats;
    this.emptySeats = numberOfSeats - reservedSeats;

    this.reserveSeats = function (number) {
        if(number > this.emptySeats) {
            alert('nepakanka laisvu vietu');
        } else {
            this.reservedSeats = this.reservedSeats + number;
            this.emptySeats = this.emptySeats - this.reservedSeats;
        }
    }

    this.cancelSeats = function (number) {
        if (number > this.reservedSeats) {
            alert('nera tiek rezervuotu vietu');
        } else {
            this.reservedSeats = this.reservedSeats - number;
            this.emptySeats = this.emptySeats + number;
        }
    }
}

let myRestaurant = new Restaurant('"Justo Restoranas"', 40, 21);

console.log(`Restorano pavadinimas yra ${myRestaurant.restaurantName}.`);
console.log(`Restorane viso yra ${myRestaurant.numberOfSeats} vietu.`);
console.log(`Restorane rezervuota ${myRestaurant.reservedSeats} vietu.`);

myRestaurant.reserveSeats(17);
myRestaurant.cancelSeats(52);

console.log(`Restorane rezervuota ${myRestaurant.reservedSeats} vietu.`);

