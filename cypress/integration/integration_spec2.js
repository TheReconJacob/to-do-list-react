describe("Checks that typing in the text box and creating a task causes the task to be named after what was in the text box", function() {
  it("Types in the text box and creates a task", function() {
    cy.visit("http://localhost:3000");
    cy.get(".task").should("have.length", 0);
    cy.get(".type-task").type("task 1");
    cy.get(".add-task").click();
    cy.get(".task").should("have.length", 1);
  });
});
