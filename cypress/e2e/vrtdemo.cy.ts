
describe("VRT demo",() => { 
  before(() => {
    cy.vrtStart();
  });
  
  after(() => {
    cy.vrtStop();
  });
  
  it("google", () => {
    cy.visit("https://www.google.com/");
  
    cy.vrtTrack("google");
  });
  
  it("cypress", () => {
    cy.visit("  https://example.cypress.io");

    cy.vrtTrack("cypress");
  });

  it("amazon", () => {
    cy.visit("https://www.amazon.in/");

    cy.vrtTrack("amazon");
  });

  
  
})
