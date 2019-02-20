'use strict';

module.exports = function(mail) {

    //Hook après enregistrement d'un mail dans la BDD
    mail.observe('after save', function (ctx, next) {
        console.log("Entrée dans le hook");
        mail.app.models.emailsender.send({
          to: 'theoporticcio@gmail.com', //Adresse élève (enregistré dans BDD)
          from: 'theorebdevtests@gmail.com', //Adresse administration Aflokkat
          subject: 'Questionnaire d\'évaluation à froid',
          //Remplacer le texte par les nom/prénom de l'élève + lien vers 
          //un nouveau questionnaire
          text: 'Bonjour Nom_Eleve Prénom_Eleve, voici un lien vers le nouveau questionnaire' + 
          'd\'évaluation à remplir :', 
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
