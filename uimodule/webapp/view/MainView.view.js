sap.ui.define(["sap/ui/core/mvc/View", "sap/m/App", "sap/m/Page", "sap/m/VBox", "sap/m/Label", "sap/m/Text", "sap/ui/layout/form/SimpleForm", "sap/ui/layout/form/ResponsiveGridLayout"],
    function (View, App, Page, VBox, Label, Text, SimpleForm, ResponsiveGridLayout) {
    "use strict";

    return View.extend("demo.userapi.view.MainView", {
        getControllerName: function () {
            return "demo.userapi.controller.MainView";
        },

        createContent: function () {
            return new App(this.createId("idAppControl"), {
                pages: new Page({
                    title: "{i18n>title}",
                    content: [
                        new VBox({
                            class: "sapUiSmallMargin",
                            items: [
                                new SimpleForm(this.createId("SimpleFormDisplay354"), {
                                    editable: false,
                                    layout: new ResponsiveGridLayout({
                                        title: "User Info",
                                        labelSpanXL: 3,
                                        labelSpanL: 3,
                                        labelSpanM: 3,
                                        labelSpanS: 12,
                                        adjustLabelSpan: false,
                                        emptySpanXL: 4,
                                        emptySpanL: 4,
                                        emptySpanM: 4,
                                        emptySpanS: 0,
                                        columnsXL: 1,
                                        columnsL: 1,
                                        columnsM: 1,
                                        singleContainerFullSize: false
                                    }),
                                    content: [
                                        new Label({ text: "First Name" }),
                                        new Text({ text: "{userInfo>/firstname}" }),
                                        new Label({ text: "Last Name" }),
                                        new Text({ text: "{userInfo>/lastname}" }),
                                        new Label({ text: "Email" }),
                                        new Text({ text: "{userInfo>/email}" }),
                                        new Label({ text: "Display Name" }),
                                        new Text({ text: "{userInfo>/displayName}" })
                                    ]
                                })
                            ]
                        })
                    ],
                }),
            });
        },
    });
});