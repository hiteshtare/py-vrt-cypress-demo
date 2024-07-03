
describe("VRT demo",() => { 
  before(() => {
    cy.vrtStart();
  });
  
  after(() => {
    cy.vrtStop();
  });
  
  it("online-meditation/calendar", () => {
    cy.visit("/online-meditation/calendar");
  
    cy.vrtTrack("online-meditation/calendar");
  });
  
  it("online-meditation", () => {
    cy.visit("/online-meditation");

    cy.vrtTrack("online-meditation");
  });

  it("online-meditation/helpdesk", () => {
    cy.visit("/online-meditation/helpdesk");

    cy.vrtTrack("online-meditation/helpdesk");
  });

  
  
})
