'use strict';

module.exports = function(Formulaire) {
    Formulaire.observe('after save', function (ctx, next) {

        //Je définie ma cronJob en NodeJS, car c'est après avoir
        //enregistré mon formulaire que j'aurai ma date d'envoi du mail
        //3 mois plus tard.

        next()
    });
};
