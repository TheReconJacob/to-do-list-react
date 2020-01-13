describe("Unit Test 1", function() {
  it('Clicks "Show Active Tasks Only"', function() {
    cy.visit("http://localhost:3000");
    cy.get(".all-tasks").should("not.be.visible");
    cy.get(".active-tasks")
      .should("be.visible")
      .click();
    cy.get(".all-tasks").should("be.visible");
    cy.get(".active-tasks").should("not.be.visible");
  });
});
