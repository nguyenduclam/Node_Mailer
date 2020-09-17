var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

var nodemailer =  require('nodemailer'); // khai báo sử dụng module nodemailer
router.post('/send', function(req, res, next) {
    var transporter =  nodemailer.createTransport({ // config mail server
        service: 'Gmail',
        auth: {
            user: 'gisk37ussh@gmail.com',
            pass: 'lechilam'
        }
    });
    var mainOptions = { // thiết lập đối tượng, nội dung gửi mail
        from: 'Test',
        to: 'el.pipita.cm@gmail.com',
        subject: 'Test Nodemailer',
        text: 'You recieved message from ' + req.body.email,
        html: '<p>You have got a new message</b><ul>' +
            '<li>Username:' + req.body.name + '</li>' +
            '<li>Email:' + req.body.email + '</li>' +
            '<li>Username:' + req.body.message + '</li></ul>'
    }
    transporter.sendMail(mainOptions, function(err, info){
        if (err) {
            console.log(err);
            res.redirect('/');
        } else {
            console.log('Message sent: ' +  info.response);
            res.redirect('/');
        }
    });
});
module.exports = router;
