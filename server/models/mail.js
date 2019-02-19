'use strict';

module.exports = function(mail) {
    mail.observe('after save', function (ctx, next) {
        console.log("Entrée dans le hook");
        mail.app.models.emailsender.send({
          to: 'theoporticcio@gmail.com',
          from: 'theorebdevtests@gmail.com',
          subject: 'my subject',
          text: 'my text', 
          html: 'my <em>html</em>'
        }, function(err, mail) {
          if (err) {
              console.log("Erreur envoi de mail " + err);
          } else {
              console.log("Envoi réussi ! " + mail);
          }
        });
        next();
    });
};
