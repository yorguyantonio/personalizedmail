'use strict';
module.exports = function () {
    var nodemailer = require('nodemailer');

// https://nodemailer.com/smtp/

    function _createTransport(mail_server_config) {
        var transporter = nodemailer.createTransport(mail_server_config);
        return transporter;
    }

    var publicInterface = {

        // var message = {
        //     to: 'receiver@sender.com',
        //     subject: 'Message title',
        //     text: 'Plaintext version of the message',
        //     html: '<p>HTML version of the message</p>'
        // };


        // https://nodemailer.com/message/
        send: function (data_stream, mail_server_config, message) {
            var transporter = _createTransport(mail_server_config);
            transporter.verify(function (error, success) {
                if (error) {
                    console.log(error);
                    // throw error;
                } else {

                    data_stream.on('data', (chunk) => {
                        console.log("chunk:\n", chunk);
                    });

                    data_stream.on('end', () => {
                        console.log("terminado el mapeo de los correos");
                    });
                }
            });
        },
        // https://nodemailer.com/message/
        sendByFile: function (file_dirname, mail_server_config, message) {

        }
    };

    return publicInterface;
};