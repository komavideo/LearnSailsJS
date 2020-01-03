/**
 * TestController
 *
 * @description :: Server-side logic for managing tests
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
    go: function (req, res) {
        //res.ok();
        //res.forbidden();
        //res.notFound();
        res.serverError();
    },

    about: function (req, res) {
        res.view('about', {
            layout: 'b4layout'
        });
    },

    //  /test/page1 -> /page1
    page1: function (req, res) {
        res.send('page1111111');
    },
    //  /test/page2 -> /page2
    page2: function (req, res) {
        res.send('page2');
    },
    //  /test/page3 -> /about/page3
    page3: function (req, res) {
        res.send('page3');
    },

};

