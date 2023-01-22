sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("splitcontainer.splitcontainerproject.controller.View2", {
            onInit: function () {
                var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
                oRouter.getRoute("View2").attachPatternMatched(this.onRouteMatch, this);
            },
            onRouteMatch: function (evt) {
                debugger;
                var keyId2 = evt.mParameters.arguments.Id;

                var data1 = [
                    {
                        "studname": "Ramesh",
                        "regno": "111",
                        "age": "20",
                        "email": "ramesh@example.com",
                        "mobile": "9083232892",
                        "state": "Karnataka"
                    },
                    {
                        "studname": "Mukesh",
                        "regno": "111",
                        "age": "22",
                        "email": "mukesh@example.com",
                        "mobile": "9973232892",
                        "state": "Assam"
                    },
                    {
                        "studname": "Samiksha",
                        "regno": "333",
                        "age": "30",
                        "email": "samiksha@example.com",
                        "mobile": "8983493499",
                        "state": "Odisha",
                    },
                    {
                        "studname": "Amisha",
                        "regno": "234",
                        "age": "20",
                        "email": "amisha@example.com",
                        "mobile": "98389899999",
                        "state": "Rajasthan",
                    },
                    {
                        "studname": "Ankita",
                        "regno": "145",
                        "age": "19",
                        "email": "ankita@example.com",
                        "mobile": "8939439994",
                        "state": "Haryana",
                    },

                    {
                        "studname": "Sumit",
                        "regno": "132",
                        "age": "26",
                        "email": "sumit@example.com",
                        "mobile": "9883493989",
                        "state": "Maharastra",

                    },
                    {
                        "studname": "Sonu",
                        "regno": "198",
                        "age": "24",
                        "email": "sonu@example.com",
                        "mobile": "8983943999",
                        "state": "Sikkim",
                    }
                ];
                var arry = [];
                for (var i = 0; i < data1.length; i++) {
                    if (keyId2 == data1[i].regno) {
                        //  if (keyId2 == data1[i].studname) {    
                        arry.push(data1[i]);
                        var oModel = new sap.ui.model.json.JSONModel();
                        oModel.setData(arry);
                        this.getView().setModel(oModel, "array2");
                    }
                }
            },
        });
    });
