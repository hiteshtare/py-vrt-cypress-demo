
describe("VRT demo",() => { 
  before(() => {
    cy.vrtStart();
  });
  
  after(() => {
    cy.vrtStop();
  });
  
  it("Request Free Literature", () => {
    cy.visit("https://yssofindia.org/about/request-free-literature");
  
    cy.vrtTrack("Request Free Literature");
  });
  
  it("HINDI - YSS/SRF President Swami Chidanandaji’s India Tour — 2023", () => {
    cy.visit("https://yssofindia.org/hi/blog/yss-srf-president-and-spiritual-head-sri-sri-swami-chidanandajis-india-tour-2023");
  
    cy.vrtTrack("HINDI - YSS/SRF President Swami Chidanandaji’s India Tour — 2023");
  });
  
})
