jQuery.sap.declare("sap.ui.demo.ReleaseCB.Component");

sap.ui.core.UIComponent.extend("sap.ui.demo.ReleaseCB.Component", {

	createContent : function() {

		// create root view
		var oView = sap.ui.view({
			id : "app",
			viewName : "sap.ui.demo.ReleaseCB.view.App",
			type : "JS",
			viewData : { component : this }
		});

		// Using OData model to connect against a real service
		//var url = "/proxy/http/<server>:<port>/sap/opu/odata/sap/Z_EPM_SD_SRV/";
		//var oModel = new sap.ui.model.odata.ODataModel(url, true, "felicia", "Common");
		//oView.setModel(oModel);
		
		var oModel = new sap.ui.model.json.JSONModel();
        var aData = jQuery.ajax({
            type : "GET",
            contentType : "application/json",
            url : "http://219.94.85.74:8000/sap/opu/odata/sap/ZSD_RELEASE_CREDIT_BLOCK_SRV/SoHeaders",
            dataType : "json",
            async: false, 
            success : function(data,textStatus, jqXHR) {
                oModel.setData({modelData : data}); 
                alert("success to post");
            },
            error : function(jqXHR, textStatus, String) {
              alert("fail");
            }
        });

		
		var i18nModel = new sap.ui.model.resource.ResourceModel({
			bundleUrl : "i18n/messageBundle.properties"
		});
		oView.setModel(i18nModel, "i18n");


		// Using a local model for offline development
		//var oModel = new sap.ui.model.json.JSONModel("model/mock.json");
		//oView.setModel(oModel);

		// done
		return oView;
	}
});