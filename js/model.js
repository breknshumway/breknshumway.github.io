class Visitor {
    constructor(id, firstName, lastName, address, city, state, zip, email, phone, comments) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.email = email;
        this.phone = phone;
        this.comments = comments;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
    get fullAddress() {
        return `${this.address} ${this.city} ${this.state} ${this.zip}`
    }
}


function renderTable() {
    let visitors = [
        new Visitor(1, "Brek'n", "Shumway", "2801 Blue Mtn. Rd.", "Orem", "Utah", "84057", "435-671-1122", "brekshum@gmail.com"),
        new Visitor(2, "KaDance", "Shumway", "2801 Blue Mtn. Rd.", "Orem", "Utah", "84057", "435-485-2233", "kadshum@gmail.com")
    ];

    var visitorTable = MakeVisitorTable('#visitorTableContainer', 'visitorsTable', visitors)


}

function MakeVisitorTable(containerId, newId, visitors) {
    $container = $(containerId)
    var table = $("<table/>");
    table.attr("id", newId);
    var tbody = $("<tbody/>");
    let header = `
        <tr>
            <th>Name</th>
            <th>Adress</th>
            <th>Phone</th>
            <th>Email</th>
        </tr>
    `
    tbody.append(header);
    $.each(visitors, function (rowIndex, visitor) {
        var row = $("<tr/>");
        row.append($("<td/>").html(visitor.fullName));
        row.append($("<td/>").html(visitor.fullAddress));
        row.append($("<td/>").html(visitor.phone));
        row.append($("<td/>").html(visitor.email));
        tbody.append(row);

    });
    table.append(tbody);
    return $container.append(table);
}


function findVisitor(id) {
    return visitors.find(visitor => visitor.id == id)
}
function findVisitorIndex(id) {
    return visitors.findIndex(visitor => visitor.id == id)
}