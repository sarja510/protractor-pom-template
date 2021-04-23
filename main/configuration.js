// configuration file for protractor
var mainDataSet = require('../testData/dataSetMain')//example
// Configuration file for our DropBox testing projects
exports.config = {

    directConnect: true,
    baseUrl: mainDataSet.domain.RupshaV22, //example
    // Capabilities to be passed to the webdriver instance.
    multiCapabilities: [
        {
            browserName: 'chrome',
            chromeOptions: {
                args: ["--incognito","--window-size=1600x1000"]
            }
        }

    ],

    // We are using jasmine framework
    framework: 'jasmine',

    suites:{
        generalAutomationTestAll: [
            '../sample/directory/sample.spec.js'

        ]
    },

    onComplete: function () {

        console.log('completed')

        var browserName, browserVersion;
        var capsPromise = browser.getCapabilities();

        capsPromise.then(function (caps) {
            browserName = caps.get('browserName');
            browserVersion = caps.get('version');

            var HTMLReport = require('protractor-html-reporter');

            testConfig = {
                reportTitle: 'Test Execution Report',
                outputPath: './',
                screenshotPath: './screenshots',
                testBrowser: browserName,
                browserVersion: browserVersion,
                modifiedSuiteName: false,
                screenshotsOnlyOnFailure: true
            };
            new HTMLReport().from('xmlresults.xml', testConfig);
        });

    },

    onPrepare: function () {

        var SpecReporter = require('jasmine-spec-reporter').SpecReporter;
        jasmine.getEnv().addReporter(
            new SpecReporter({

                displayStacktrace: 'all',      // display stacktrace for each failed assertion, values: (all|specs|summary|none)
                displaySuccessesSummary: true, // display summary of all successes after execution
                displayFailuresSummary: true,   // display summary of all failures after execution
                displayPendingSummary: true,    // display summary of all pending specs after execution
                displaySuccessfulSpec: true,    // display each successful spec
                displayFailedSpec: true,        // display each failed spec
                displayPendingSpec: true,      // display each pending spec
                displaySpecDuration: true,     // display each spec duration
                displaySuiteNumber: true,      // display each suite number (hierarchical)

                colors: {
                    success: 'green',
                    failure: 'red',
                    pending: 'yellow'
                },

                prefixes: {
                    success: '✓ ',
                    failure: '✗ ',
                    pending: '* '
                },

            }))
    },

    // Options to be passed to Jasmine.
    jasmineNodeOpts: {

        showColors: true,
        defaultTimeoutInterval: 1000000

    },

};