
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

    url1: '/',
    clickLogin: '#search',
    clickSearch: '.fa.fa-search',
    see: '.item-inner',



  // introducing methodss

  urlTest(){
    I.amOnPage(this.url1)
  },
  search(){
    I.fillField(this.clickLogin, 'jeans');
    I.click(this.clickSearch);
    I.waitForElement(this.see);

  }





  // insert your locators and methods here
};
