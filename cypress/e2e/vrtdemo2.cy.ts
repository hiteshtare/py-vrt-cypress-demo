
describe("VRT demo2 - YSS Lessons page", () => { 
  beforeEach(() => {
    cy.visit("/yss-lessons");
  });

  it("should compare screenshot of the tab: Start Your Journey on the Path", () => {
  
    cy.get('#startyourjourney-tab').compareSnapshot("startyourjourney-tab");
  });


  it("should compare screenshot of the tab: Kriya Yoga", () => {
    cy.get('#kriyayoga').click();

    cy.get('#kriyayoga-tab').compareSnapshot("kriyayoga-tab");
  });


  it("should compare screenshot of the tab: Apply Now", () => {
    cy.get('#applynow').click();

    cy.get('#applynow-tab').compareSnapshot("applynow-tab");
  });

  it("should compare screenshot of the tab: Digital App", () => {
    cy.get('#digitalapp2').click();

    cy.get('#digitalapp2-tab').compareSnapshot("digitalapp2-tab");
  });
})
