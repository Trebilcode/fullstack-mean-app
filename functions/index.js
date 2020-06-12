const functions = require('firebase-functions');
const config = require('../config.json');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.Saludo = functions.https.onRequest((request, response) => {
    response.send("Hola visitante");
});

exports.SendEmail = functions.firestore
    .document('users/{usersId}')
    .onCreate((change, context) => { //https.onRequest((request, response) => {

        let information = change.data();

        const nodemailer = require("nodemailer");

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: config.SendEmailCredentials.user, // generated ethereal user
                pass: config.SendEmailCredentials.password // generated ethereal password
            },
        });

        let emailOptions = {
            from: '"Pet lovers " <trebilcode@gmail.com>',
            to: information.email,
            subject: 'Registro exitoso',
            text: 'Hello ✔',
            html: '<b>Bienvenido '+information.name+' nuestro fantabulosa aplicación</b><br>Soy un texto normal, probando nodemailer<br><img src="https://cdn.pixabay.com/photo/2016/03/09/09/22/workplace-1245776_960_720.jpg" alt="Imagen para probar">'
        };
        return transporter.sendMail(emailOptions).then((data) => {
            resolve(data);
            return;
        }).catch((error) => {
            reject(error);
            return;
        });
    });
