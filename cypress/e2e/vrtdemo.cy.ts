
describe("VRT demo",() => { 
  it("should compare screenshot of the calendar", () => {
    cy.visit("/calendar");
  
    cy.compareSnapshot("calendar");
  });
  
  it("should compare screenshot of the online-meditation", () => {
    cy.visit("/online-meditation");

    cy.compareSnapshot("online-meditation");
  });

  it("should compare screenshot of the helpdesk", () => {
    cy.visit("/helpdesk");

    cy.compareSnapshot("helpdesk");
  });

  
  
})
