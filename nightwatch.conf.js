module.exports = {
    src_folders: ['test/e2e'],
    output_folder: 'test/e2e',

    // selenium : {
    //     start_process : true,
    //     server_path : "./bin/selenium-server-standalone-3.{VERSION}.jar",
    //     log_path : "",
    //     port : 4444,
    //     cli_args : {
    //         "webdriver.chrome.driver" : "./bin/chromedriver"
    //     }
    // },
    webdriver: {
        start_process : true,
        server_path: "node_modules/.bin/chromedriver",
        cli_args: [
            "--verbose"
        ],
        port: 9515
    },

    test_settings: {
        default: {
            desiredCapabilities: {
                browserName: "chrome",
                javascriptEnabled: true,
                acceptSslCerts: true,
                chromeOptions: {
                    w3c: false
                }
            }
        }
    }

};