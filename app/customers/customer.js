"use strict";
var Customer = (function () {
    function Customer(firstName, lastName, email, sendCatalog, addressType, street1, street2, city, state, zip) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sendCatalog = sendCatalog;
        this.addressType = addressType;
        this.street1 = street1;
        this.street2 = street2;
        this.city = city;
        this.state = state;
        this.zip = zip;
    }
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=customer.js.map