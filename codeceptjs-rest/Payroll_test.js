const expect = require('chai').expect;
const {I} = inject();
const expectedValues = require("./expectedValues.js");

Feature('Payroll');

Scenario('Verificar a successful call a root', async () => {
	const res = await I.sendGetRequest('/');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data).to.have.nested.property(expectedValues.links.toEmployees);
	expect(res.data).to.have.nested.property(expectedValues.links.toOrders);
});


// VERIFICAR EMPLOYEES

Scenario('Verificar a successful call a employees', async () => {
	const res = await I.sendGetRequest('/employees');
	expect(res.status).to.eql(expectedValues.status.ok);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
});

Scenario('Verificar primer employee', async () => {
	const res = await I.sendGetRequest('/employees/1');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data.id).to.eql(1);
	expect(res.data.firstName).to.eql(expectedValues.firstEmployee.firstName);
	expect(res.data.lastName).to.eql(expectedValues.firstEmployee.lastName);
	expect(res.data.role).to.eql(expectedValues.firstEmployee.role);
	expect(res.data.name).to.eql(expectedValues.firstEmployee.firstName + " " + expectedValues.firstEmployee.lastName);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toEmployees);
});

Scenario('Verificar segundo employee', async () => {
	const res = await I.sendGetRequest('/employees/2');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data.id).to.eql(2);
	expect(res.data.firstName).to.eql(expectedValues.secondEmployee.firstName);
	expect(res.data.lastName).to.eql(expectedValues.secondEmployee.lastName);
	expect(res.data.role).to.eql(expectedValues.secondEmployee.role);
	expect(res.data.name).to.eql(expectedValues.secondEmployee.firstName + " " + expectedValues.secondEmployee.lastName);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toEmployees);
});

Scenario('Verificar post a employees', async () => {
	const res = await I.sendPostRequest('/employees', expectedValues.newEmployee);
	expect(res.status).to.eql(expectedValues.status.created);
	expect(res.data.id).to.eql(5);
	expect(res.data.firstName).to.eql(expectedValues.newEmployee.firstName);
	expect(res.data.lastName).to.eql(expectedValues.newEmployee.lastName);
	expect(res.data.role).to.eql(expectedValues.newEmployee.role);
	expect(res.data.name).to.eql(expectedValues.newEmployee.firstName + " " + expectedValues.newEmployee.lastName);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toEmployees);
});

Scenario('Verificar put a employees', async () => {
	const res = await I.sendPutRequest('/employees/5', expectedValues.modifiedEmployee);
	expect(res.status).to.eql(expectedValues.status.created);
	expect(res.data.id).to.eql(5);
	expect(res.data.firstName).to.eql(expectedValues.modifiedEmployee.firstName);
	expect(res.data.lastName).to.eql(expectedValues.modifiedEmployee.lastName);
	expect(res.data.role).to.eql(expectedValues.modifiedEmployee.role);
	expect(res.data.name).to.eql(expectedValues.modifiedEmployee.firstName + " " + expectedValues.modifiedEmployee.lastName);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toEmployees);
});

Scenario('Verificar delete a employees', async () => {
	const res = await I.sendDeleteRequest('/employees/5');
	expect(res.status).to.eql(expectedValues.status.notContent);
});


// VERIFICAR ORDER

Scenario('Verificar a successful call a orders', async () => {
	const res = await I.sendGetRequest('/orders');
	expect(res.status).to.eql(expectedValues.status.ok);
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
});

Scenario('Verificar primera order', async () => {
	const res = await I.sendGetRequest('/orders/3');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data.id).to.eql(3);
	expect(res.data.description).to.eql(expectedValues.firstOrder.description);
	expect(res.data.status).to.eql('COMPLETED');
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toOrders);
	expect(res.data).to.not.have.nested.property(expectedValues.links.toCancel);
        expect(res.data).to.not.have.nested.property(expectedValues.links.toComplete);
});

Scenario('Verificar segunda order', async () => {
	const res = await I.sendGetRequest('/orders/4');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data.id).to.eql(4);
	expect(res.data.description).to.eql(expectedValues.secondOrder.description);
	expect(res.data.status).to.eql('IN_PROGRESS');
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toOrders);
	expect(res.data).to.have.nested.property(expectedValues.links.toCancel);
        expect(res.data).to.have.nested.property(expectedValues.links.toComplete);
});

Scenario('Verificar post a orders', async () => {
	const res = await I.sendPostRequest('/orders', expectedValues.newOrder);
	expect(res.status).to.eql(expectedValues.status.created);
	expect(res.data.id).to.eql(6);
	expect(res.data.description).to.eql(expectedValues.newOrder.description);
	expect(res.data.status).to.eql('IN_PROGRESS');
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toOrders);
	expect(res.data).to.have.nested.property(expectedValues.links.toCancel);
        expect(res.data).to.have.nested.property(expectedValues.links.toComplete);
});

Scenario('Verificar put a orders', async () => {
	const res = await I.sendPutRequest('/orders/6/complete');
	expect(res.status).to.eql(expectedValues.status.ok);
	expect(res.data.id).to.eql(6);
	expect(res.data.description).to.eql(expectedValues.newOrder.description);
	expect(res.data.status).to.eql('COMPLETED');
        expect(res.data).to.have.nested.property(expectedValues.links.toSelf);
	expect(res.data).to.have.nested.property(expectedValues.links.toOrders);
	expect(res.data).to.not.have.nested.property(expectedValues.links.toCancel);
        expect(res.data).to.not.have.nested.property(expectedValues.links.toComplete);
});

Scenario('Verificar delete a orders', async () => {
	const res = await I.sendDeleteRequest('/orders/6');
	expect(res.status).to.eql(expectedValues.status.methodNotAllowed);
});
