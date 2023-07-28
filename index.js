let customer = {
    firstName: "jake",
    lastName: "smith",
    email: "jaekSmih!aol.com",
    phone: undefined,
    zipCode: "631",
    favoriteFlavors: 32,
    cupSize: "medium",
    favoriteStore: "Target",
    firstVisit: false
}

// changing the email
customer.email = "Jak3Smith1997@email.com";

// changing phone number
customer.phone= 3195551234;

//changing zip
customer.zipCode= "63132";


//changing favoriteFlavors-- had to add as an array dut ot having multiple values
customer.favoriteFlavors= ["coffee", "strawberry", "matcha"];

// deleting keys
delete customer.zipCode;
delete customer.favoriteStore;


// adding keys **kind of confusing because instead of notating its a key: value pair with (:), you are using an equal sign here
customer.toppings= ["chocolate sprinkles", "wafer straws", "gummy bears"];
customer.futureFlavors= "mango";
customer.todaysPurchaseCost= 5.32;

console.log(customer);

//fact checking entries 

console.log(Object.keys(customer));