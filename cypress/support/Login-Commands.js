import Login from '../Integration/Login'
Cypress.Commands.add('navigate', () => {
    cy.fixture('LoginForm').then((LoginData) => {
        cy.visit(LoginData.Url)
    })
})
//Expect Assertion
Cypress.Commands.add('verifyToolBarContainsHome', () => {
    cy.fixture('LoginForm').then((Home) => {
    expect(Home.Home).to.contain(Home.Home)
})
})
//Should Assertion
Cypress.Commands.add('verifyToolBarContainsAbout', () => {
    cy.fixture('LoginForm').then((About) => {
    Login.toolbarItems.should('contain', About.About)
})
})
//Contains Assertion
Cypress.Commands.add('verifyToolBarContainsPricing', () => {
    cy.fixture('LoginForm').then((Pricing) => {
    Login.toolbarItems.contains(Pricing.Pricing)
})
})
//Expect with equal and to have length assertion
Cypress.Commands.add('verifyToolBarContainsBlogs', () => {
    cy.fixture('LoginForm').then((Blogs) => {
   expect(Blogs.Blogs).to.equal(Blogs.Blogs)
    expect(Blogs.Blogs).to.have.length.of.at.least(5)
})
})

Cypress.Commands.add('verifyToolBarContainsBlogs', () => {
    Login.toolbarItems.should('contain', 'Blogs')
})

Cypress.Commands.add('verifyToolBarContainsHelp', () => {
    Login.toolbarItems.should('contain', 'Help')
})

Cypress.Commands.add('verifyToolBarContainsLogin', () => {
    Login.toolbarItems.should('contain', 'Log In')
})

Cypress.Commands.add('VerifyTextOnHomePage', () => {
    Login.TextOnHomePage.should('contain', 'A test management software that empowers your company to thoroughly')
})
Cypress.Commands.add('TryForFreeButton', () => {
    Login.TryFreebutton.should('contain', 'Try for Free')

})

Cypress.Commands.add('BuyNowButton', () => {
    Login.BuyNow.should('contain', 'Buy Now')

})
Cypress.Commands.add('HelpDropDown', () => {
    Login.HelpDropDown.then(dropDown => {
        cy.wrap(dropDown).click().wait(2000)
        Login.HelpDropDownItem.each((listItem, index) => {
            const list = listItem.text().trim()
            cy.wrap(listItem).should('contain', list);
        })
    })
})
Cypress.Commands.add('ScrollToTextOnHeader',()=>{
    cy.contains('Powerful end-to-end test management software that arms you ').scrollIntoView()

})




