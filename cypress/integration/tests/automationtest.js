describe ('automation log in', ()=> {
    
    before(()=>{     
    cy.visit ('http://automationpractice.com/')
    cy.login('qa12@gmail.com','sanane')
    
    })

    it ('should login', ()=> {
        cy.url().should('include','controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)
    });

    it ('go to homepage ', ()=> {
        cy.get('.icon-chevron-left').last().click().url().should('include','index.php')
    })
    it('Add product to cart', () => {
        cy.visit('http://automationpractice.com/index.php?controller=search&orderby=position&orderway=desc&search_query=Faded+Short+Sleeve+T-shirts&submit_search=')
       cy.get('#search_query_top')
          .type('Blouse')
          cy.get('.ajax_add_to_cart_button > span').click()
     
          cy.get('.layer_cart_product > h2')
          .should('contain', 'Product successfully added to your shopping cart')
  cy.get('.button-container > .button-medium > span').click()
})


it('proceed to check out', () => {
cy.get('.cart_navigation > .button > span').click()


//cy.get('[type="checkbox"]').check()
cy.get('#cgv').find('[name="cgv"]').check()
cy.get('.cart_navigation > .button > span').click()
cy.get('.label')
.should('contain','In Stock')

cy.get('.bankwire').click()


cy.get('#cart_navigation > .button > span').click()



    cy.get('.cheque-indent > .dark')
.should('contain','"Your order on My Store is complete')
})
  
it('contact us', () => {
cy.get('#contact-link > a').click()

cy.get('#id_contact').select('Webmaster')


cy.get('#message').type('When is the delivery')
})

    
});