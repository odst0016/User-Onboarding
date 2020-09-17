describe("User Onboarding", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  //Setting up locations
  const textInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passInput = () => cy.get("input[name=password]");
  const termsInput = () => cy.get("input[name=terms]");
  const submitBtn = () => cy.get("button[name=submit]");

  it("Proper elements appear", () => {
    textInput().should("exist");
    emailInput().should("exist");
    passInput().should("exist");
    termsInput().should("exist");
    submitBtn().should("exist");
  });
  it("Inputs are working", () => {
    textInput()
      .should("have.value", "")
      .type("test")
      .should("have.value", "test");
    emailInput()
      .should("have.value", "")
      .type("test@test.com")
      .should("have.value", "test@test.com");
    passInput()
      .should("have.value", "")
      .type("1234")
      .should("have.value", "1234");
    termsInput().check();
  });
  it("can submit", () => {
    textInput().type("test").should("have.value", "test");
    emailInput().type("test@test.com").should("have.value", "test@test.com");
    passInput().type("1234").should("have.value", "1234");
    termsInput().check();
    submitBtn().click();
  });
});
