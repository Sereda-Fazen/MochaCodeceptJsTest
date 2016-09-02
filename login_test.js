
Feature('Login');

Scenario('Login success', (I,loginPage) => {

  loginPage.urlTest();
  loginPage.sendForm('denimio_test@yahoo.com', '123456');
  loginPage.logout();
});

