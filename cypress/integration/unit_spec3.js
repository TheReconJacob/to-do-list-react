describe("Unit Test 3", function() {
  it("Creates an empty task", function() {
    cy.visit("http://localhost:3000");
    cy.get(".task").should("have.length", 0);
    cy.get(".add-task").click();
    cy.get(".task").should("have.length", 1);
  });
});
