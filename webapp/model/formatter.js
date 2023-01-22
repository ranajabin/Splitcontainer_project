sap.ui.define(function () {
    "use strict";
    // return {

    var formatter = {

        color1: function (roll) {

            switch (roll) {
                case "01":
                    return 1;
                case "04":
                    return 3;
                case "06":
                    return 5;
                case "08":
                    return 6;
                default:
                    return 9;
            }
        },

        gendername: function (age1) {
            try {

                if (age1 === 'Female') {
                    return "Success";
                } else {
                    return "Error";
                }
            } catch (err) {
                return "Pending";
            }
        }
    };
    return formatter;
}, true);         