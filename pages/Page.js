
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

    url1: '/',
    clickLogin: 'a.login_click',
    email: '#email',
    password: '#pass',
    submitButton: '[name="send"] > span > span',

  // introducing methods

  urlTest(){
    I.amOnPage(this.url1)
  },

  sendForm(email, password) {
    I.click(this.clickLogin);
    I.fillField(this.email, email);
    I.fillField(this.password, password);
    I.click(this.submitButton);
  }

  // insert your locators and methods here
};
