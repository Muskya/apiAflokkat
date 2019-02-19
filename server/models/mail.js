'use strict';

module.exports = function(mail) {
    mail.observe('after save', function (ctx, next) {
        mail.sendEmail = function(cb) {
            mail.app.models.emailsender.send({
              a: 'theoporticcio@gmail.com',
              de: 'theorebdevtests@gmail.com',
              sujet: 'my subject',
              texte: 'my text',
              html: 'my <em>html</em>'
            }, function(err, mail) {
              if (err) {
                  console.log("Erreur envoi de mail " + err);
              } else {
                  console.log("Envoi réussi ! " + mail);
              }
            });
          }

        next()
    });
};
