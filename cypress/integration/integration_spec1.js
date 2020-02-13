describe('Checks that adding tasks, marking one of them as "Done", hiding it and unhiding all work together', function() {
  it("Creates two tasks", function() {
    cy.visit("http://localhost:3000");
    cy.get(".type-task").type("not done");
    cy.get(".add-task").click();
    cy.get(".type-task").type("is done");
    cy.get(".add-task").click();
  });
  it('Marks one of the tasks as "Done"', function() {
    cy.contains("is done")
      .contains("done")
      .click();
  });
  it('Checks that clicking "Show Active Tasks Only" hides the tasks marked as done', function() {
    cy.get(".Done").should("be.visible");
    cy.get(".active-tasks").click();
    cy.get(".Done").should("not.be.visible");
  });
  it('Checks that clicking "Show All Tasks" reveals the tasks marked as done', function() {
    cy.get(".all-tasks").click();
    cy.get(".Done").should("be.visible");
  });
});
