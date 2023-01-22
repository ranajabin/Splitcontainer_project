sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "../model/formatter"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller, formatter) {
        "use strict";

        return Controller.extend("splitcontainer.splitcontainerproject.controller.View1", {
            formatter: formatter,
            onInit: function () {
                this.handleEdit();
            },

            handleEdit: function (oEvent) {

                var student = {
                    "stud": [
                        {
                            "studname": "Ramesh",
                            "regno": "111",
                            "rollno": "01",
                            "age": "20",
                            "email": "ramesh@example.com",
                            "fname": "Rohit kumar",
                            "nationality": "Indian",
                            "gender": "Male",
                            "mobile": "9083232892",
                            "state": "Karnataka",
                            "country": "India",
                            "hobbies": "Singing"
                        },
                        {
                            "studname": "Mukesh",
                            "regno": "111",
                            "rollno": "01",
                            "age": "22",
                            "email": "mukesh@example.com",
                            "fname": "mohit kumar",
                            "nationality": "Indian",
                            "gender": "Male",
                            "mobile": "9973232892",
                            "state": "Assam",
                            "country": "India",
                            "hobbies": "Dancing"
                        },
                        {


                            "studname": "Samiksha",
                            "regno": "333",
                            "rollno": "04",
                            "age": "30",
                            "email": "samiksha@example.com",
                            "fname": "Ritesh kumar",
                            "nationality": "Indian",
                            "gender": "Female",
                            "mobile": "8983493499",
                            "state": "Odisha",
                            "country": "India",
                            "hobbies": "Drawing"
                        },
                        {
                            "studname": "Amisha",
                            "regno": "234",
                            "rollno": "08",
                            "age": "20",
                            "email": "amisha@example.com",
                            "fname": "Sumit kumar",
                            "nationality": "Indian",
                            "gender": "Female",
                            "mobile": "98389899999",
                            "state": "Rajasthan",
                            "country": "India",
                            "hobbies": "Mimicry"
                        },

                        {
                            "studname": "Ankita",
                            "regno": "145",
                            "rollno": "10",
                            "age": "19",
                            "email": "ankita@example.com",
                            "fname": "Sohan kumar",
                            "nationality": "Indian",
                            "gender": "Female",
                            "mobile": "8939439994",
                            "state": "Haryana",
                            "country": "India",
                            "hobbies": "Playinggames"
                        },

                        {
                            "studname": "Sumit",
                            "regno": "132",
                            "rollno": "06",
                            "age": "26",
                            "email": "sumit@example.com",
                            "fname": "Ankit kumar",
                            "nationality": "Indian",
                            "gender": "Male",
                            "mobile": "9883493989",
                            "state": "Maharastra",
                            "country": "India",
                            "hobbies": "Singing"
                        },
                        {
                            "studname": "Sonu",
                            "regno": "198",
                            "rollno": "12",
                            "age": "24",
                            "email": "sonu@example.com",
                            "fname": "Hritik kumar",
                            "nationality": "Indian",
                            "gender": "Male",
                            "mobile": "8983943999",
                            "state": "Sikkim",
                            "country": "India",
                            "hobbies": "Dancing"
                        }
                    ]
                }
                var omodel = new sap.ui.model.json.JSONModel();
                omodel.setData(student);
                this.getView().setModel(omodel, "model1");

                var omodel = new sap.ui.model.json.JSONModel("../model/College.json");
                //  omodel.setData(student);
                this.getView().setModel(omodel, "model2");
            },

            onPressList: function () {
                this.getSplitContObj().toMaster(this.createId("master2"));
            },

            onPressMasterBack: function () {
                this.getSplitContObj().backMaster();
            },

            onPressDetailBack: function () {
                this.getSplitContObj().backDetail();
            },

            getSplitContObj: function () {
                var result = this.byId("SplitContDemo");
                if (!result) {
                    Log.error("SplitApp object can't be found");
                }
                return result;
            },

            onListItemPress: function (oEvent) {
                var sToPageId = oEvent.getParameter("listItem").getCustomData()[0].getValue();
                this.getSplitContObj().toDetail(this.createId(sToPageId));
            },


            /*  onPressList : function(oEvent)   {
              debugger;
                 var keyId = oEvent.oSource.mProperties.title;
                 var router = sap.ui.core.UIComponent.getRouterFor(this);
                 router.navTo("View2", { Id: keyId });
             },  */

            onClick: function (oEvent) {
                var keyId = oEvent.oSource.mProperties.text;
                var router = sap.ui.core.UIComponent.getRouterFor(this);
                router.navTo("View2", { Id: keyId });
            }

            /*     if (oEvent.getSource().getText() === "Edit") {
                     oEvent.getSource().setText("Submit");
                     oEvent.getSource().getParent().getParent().getCells()[3].setEditable(true); 
                     // var oId = oEvent.getSource().getBindingContext().getProperty("TerritoryID");
                 }
                 else {
                     debugger;
                     oEvent.getSource().setText("Edit");
                     oEvent.getSource().getParent().getParent().getCells()[3].setEditable(false);
                  //   var oInput = oEvent.getSource().getParent().getParent().getCells()[3].getValue();
                 }  */
        });
    });
