/// <reference types="cypress" />
describe('LoginForm', () => {
    beforeEach(() => {
       cy.navigate()
        })
    it('verificationOfToolBarItems', () => {
       cy.verifyToolBarContainsHome()
       cy.verifyToolBarContainsAbout()
       cy.verifyToolBarContainsPricing()
       cy.verifyToolBarContainsBlogs()
       cy.verifyToolBarContainsHelp()
       cy.verifyToolBarContainsLogin()
    })

    it('VerifyTextOnHomePage',()=>{
        cy.VerifyTextOnHomePage()
       })
    it('verifyTryForFreeButton',()=>{
        cy.TryForFreeButton()
    })
    it('verifyBuyNowButton',()=>{
        cy.BuyNowButton()
    })  
    it('HelpDropDOwn',()=>{
        cy.HelpDropDown()
    })
    it('ScrollTotext',()=>{
        cy.ScrollToTextOnHeader()
    })
   
})

