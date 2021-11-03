import 'cypress-iframe';
var newurl = ""

describe('Tabeo vercel application', () => {
  
    it('Generate email link', () => {
      cy.visit('https://qa-challenge-tabeo.vercel.app/')
        cy.get('button[class*="medium text-gray"]').click()  
        cy.get('input[name="email"]').type('firodiya@mailinator.com')
        cy.get('button[type="submit"]').click()
    })
    it('Login with magic link', () => {
      cy.visit('https://www.mailinator.com/v4/public/inboxes.jsp?to=firodiya')
      cy.get('table[class="table-striped jambo_table"] tr').first().click()
      cy.get('ul[role="tablist"] li').contains('TEXT').click()
      cy.get('iframe[id*="texthtml_msg_body"]').its('0.contentDocument').should('exist').its('body').should('not.be.undefined')
      .then(cy.wrap)
      .find('a').should('have.attr', 'href')
      .then((href) => {
        newurl = href;
        cy.visit(newurl)
      })
      cy.get('form[action="/api/checkout/subscription"] button[class*="indigo"]').click()
      cy.get('input[id="cardNumber"]').type('4000002760003184')
      cy.get('cardExpiry').type('05/22')
      cy.get('cardCvc').type('123')
      cy.get('billingName').type('Shrikant')
      cy.get('[class="SubmitButton-IconContainer"]').click()
  })
  })
