module.exports.status = {
	ok: 200,
	created: 201,
	notContent: 204,
	methodNotAllowed: 405,
};

module.exports.links = {
	toEmployees: "_links.employees.href",
	toOrders: "_links.orders.href",
	toSelf: "_links.self.href",
	toCancel: "_links.cancel.href",
	toComplete: "_links.complete.href",
};

module.exports.firstEmployee = {
	firstName: "Bilbo",
	lastName: "Baggins",
	role: "burglar",
};

module.exports.secondEmployee = {
	firstName: "Frodo",
	lastName: "Baggins",
	role: "thief",
};

module.exports.newEmployee = {
	firstName: "Franco",
	lastName: "Bobadilla",
	role: "CEO",
};

module.exports.modifiedEmployee = {
	firstName: "Franco José",
	role: "CTO",
};

module.exports.firstOrder = {
	description: "MacBook Pro",
};

module.exports.secondOrder = {
	description: "iPhone",
};

module.exports.newOrder = {
	description: "iPad",
};
