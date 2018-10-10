const signinCommands = {  
  signin(email: String, password: String) {
    return this
      .waitForElementVisible('@emailInput')
      .setValue('@emailInput', email)
      .setValue('@passwordInput', password)
      .waitForElementVisible('@signinButton')
      .click('@signinButton')
  }
};

module.exports = {  
  url: 'https://cjdocs.herokuapp.com/auth/signin',
  commands: [signinCommands],
  elements: {
    emailInput: {
      selector: 'input[type=email]'
    },
    passwordInput: {
      selector: 'input[name=password]'
    },
    signinButton: {
      selector: 'button[type=submit]'
    }
  }
};