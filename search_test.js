
Feature('Search');

Scenario('Login success', (I,searchPage,loginPage) => {
  loginPage.urlTest();
  searchPage.search();
  
});

