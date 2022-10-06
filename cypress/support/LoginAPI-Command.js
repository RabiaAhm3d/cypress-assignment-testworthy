const config = require('../fixtures/LoginForm.json');

Cypress.Commands.add('ApiLogin', () => {
    cy.request({
        method: 'POST',
        url: config.Url + 'Login/Login',
        headers: {
            'content-type': 'application/json;',
          },
          body: {
            UserName : "Rabia Ahmed",
            Password : "10pearls1+",
            //Token: "CfDJ8In1OuNcvmtLlinXxWsOG4834-GVxeWCMuy0q89r-pW6TOwDUz-GCF7BBoc-37LniMqDJL3XOpnCClN4cktaVzyLZIjtMajisSNUCEZsMtzPsLI38aMZ3O17bDmKJ_NhM0ekxGpkA6S8OODT4zHPho8"
          }
        })
})
