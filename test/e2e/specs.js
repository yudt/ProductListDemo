module.exports = {
    'demo.e2e.test': function (browser) {
        browser
            .url('https://www.ecosia.org/')
            .setValue('input[type=search]', 'nightwatch')
            .click('button[type=submit]')
            .assert.containsText('.mainline-results', 'Nightwatch.js')
            .end();
    }
};