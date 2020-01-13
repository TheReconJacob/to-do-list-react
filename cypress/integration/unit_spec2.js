describe("Unit Test 2", function() {
  it("Types in the text box", function() {
    cy.visit("http://localhost:3000");
    cy.get(".type-task").type("task 1");
  });
});
