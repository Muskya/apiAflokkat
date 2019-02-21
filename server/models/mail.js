'use strict';

module.exports = function(mail) {

    //Hook après enregistrement d'un mail dans la BDD
    mail.observe('after save', function (ctx, next) {

        console.log("Entrée dans le hook");
        console.log(ctx.instance); //Renvoi la structure du mail en JSON
        console.log(ctx.instance.a); //Renvoi l'adresse destinataire
        console.log(ctx.instance.de); //Renvoi l'adresse expéditrice

        mail.app.models.emailsender.send({
          to: ctx.instance.a, //Adresse élève (enregistré dans BDD)
          from: ctx.instance.de , //Adresse administration Aflokkat
          subject: ctx.instance.sujet, //Sujet du mail 
          text: ctx.instance.texte, //Texte du mail
          html: ctx.instance.html //Html du mail
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
