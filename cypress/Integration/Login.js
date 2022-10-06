class LoginPage{

    get toolbarItems(){
        return cy.get('.navbar-nav')
    }
    get TextOnHomePage(){
        return cy.get('.banner-content')
    }
    get TryFreebutton(){
        return cy.get('.btn')
    }
    get BuyNow(){
        return cy.get('.btn')
    }
    get HelpDropDown(){
        return cy.get('#navbarDropdown')
    }
    get HelpDropDownItem(){
        return cy.get('.dropdown-item')
    }
}
export default new LoginPage()