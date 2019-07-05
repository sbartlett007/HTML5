function printCard() {
    var name_line = "<strong>Name: </strong>" + this.name + "<br/>\n";
    var email_line = "<strong>Email: </strong>" + this.email + "<br/>\n";
    var address_line = "<strong>Address: </strong>" + this.address + "<br/>\n";
    var phone_line = "<strong>Phone: </strong>" + this.phone + "<hr/>\n";
    document.write(name_line, email_line, address_line, phone_line);
}
class Card {
    constructor(name, email, address, phone) {
        this.name = name;
        this.email = email;
        this.address = address;
        this.phone = phone;
        this.printCard = printCard;
    }
}

var sue = new Card("Sue Suthers", "sue@suey.com", "123 Nightmare on Elm St, Anytown FL 33333", "999-999-1234");
var fred = new Card("Fred Fredrikson", "chunkylover53@aol.com", "10 the house next to yours, Jax, FL 32232", "555-556-6661");
var jimbo = new Card("Jimbo Jones", "jimbo@cats.net", "345 Cat Lane, Catsonville, FL 32322", "343-222-1111");

sue.printCard();
fred.printCard();
jimbo.printCard();