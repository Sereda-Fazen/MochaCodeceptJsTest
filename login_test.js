
Feature('Home');

Scenario('Login success', (I,loginPage) => {

  loginPage.urlTest();
  loginPage.sendForm('denimio_test@yahoo.com', '123456');

});

