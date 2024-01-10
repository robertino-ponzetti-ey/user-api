sap.ui.define(["sap/ui/core/mvc/Controller",
                "sap/ui/model/json/JSONModel"
                ], function (Controller, JSONModel) {
    "use strict";

    return Controller.extend("demo.userapi.controller.MainView", {
        onInit: function () {
            this.getUserInfo();
        },
        getUserInfo: function () {
            const url = this.getBaseURL().concat("/user-api/currentUser");
            const oModel = new JSONModel();
            const mock = {
                firstname: "Dummy",
                lastname: "User",
                email: "dummy.user@com",
                name: "dummy.user@com",
                displayName: "Dummy User (dummy.user@com)"
            };

            oModel.loadData(url);
            oModel.dataLoaded()
            .then(() => {
                if (!oModel.getData().email) {
                    oModel.setData(mock);
                }
                this.getView().setModel(oModel, "userInfo");
            })
            .catch(() => {
                oModel.setData(mock);
                this.getView().setModel(oModel, "userInfo");
            });
        },

        getBaseURL: function () {
            const appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
            const appPath = appId.replaceAll(".", "/");
            const appModulePath = jQuery.sap.getModulePath(appPath);
            return appModulePath;
        },
    });
});