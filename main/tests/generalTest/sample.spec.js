//Test spec file for test cases


//import all the required package, page, resource
var dataSetMain = require('../../../../../main/dataSetMain')//example
var signInPage = require("../../../../../main/pageObjects/commonPage/signInPage.ob")//example


//import all the required data for the spec
var adminUser = dataSet.userQuota.adminUser //example



//Test case goes here with describe, it blocks with the hook beforeAll, afterAll

var logger = require('../log')

describe('Example test', function () {

    beforeAll(function () {

        //code goes here
        browser.waitForAngularEnabled(false);//example
        browser.get('www.test.com')//example
        logger.log('info','Navigating to the website')


    })

    describe('Test description 1', function () {
        describe('Test description 2', function () {
            it('should perform this action', function () {
                //code goes here
            });

        });

    });//example

});