sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller) {
        "use strict";

        return Controller.extend("moovi.m06a04.controller.View1", {
            onInit: function () {


                let oCompanyList = this.byId("companyList");

                let oUIControl = sap.m.ObjectListItem({
                        title: "{Carrname}",
                        type: "Active"
                });

                oUIControl.addAttribute(new sap.m.ObjectAttribute({
                    text: "{Url}"
                }));

                oUIControl.addAttribute(new sap.m.ObjectAttribute({
                    text: "{Currcode}"
                }));

                oCompanyList.bindAggregation("items","/ScarrSet",oUIControl);




            }
        });
    });
