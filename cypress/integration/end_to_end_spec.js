describe("End to End Test", function() {
  it("Creates a task", function() {
    cy.visit("http://localhost:3000");
    cy.get(".task").should("have.length", 0);
    //types in the name of the task
    cy.get(".type-task")
      .type("task 1")
      .should("have.value", "task 1");
    //clicks the add button
    cy.get(".add-task").click();
    cy.get(".task").should("have.length", 1);
    cy.get(".Done").should("have.length", 0);
  });
  it("Marks a task as done", function() {
    //types in the name of the task
    cy.contains("done").click();

    cy.get(".task").should("have.length", 0);
    cy.get(".Done").should("have.length", 1);
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
  it("Deletes a task", function() {
    //types in the name of the task
    cy.contains("delete").click();

    cy.get(".task").should("have.length", 0);
    cy.get(".Done").should("have.length", 0);
  });
});
