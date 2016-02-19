sap.ui.jsview("sap.ui.demo.ReleaseCB.view.App", {

	getControllerName: function () {
		return "sap.ui.demo.ReleaseCB.view.App";
	},
	
	createContent: function (oController) {
		
		// to avoid scroll bars on desktop the root view must be set to block display
		this.setDisplayBlock(true);
		
		// create app
		this.app = new sap.m.App();
		
		// load the master page
		var master = sap.ui.xmlview("Master", "sap.ui.demo.ReleaseCB.view.Master");
		master.getController().nav = this.getController();
		this.app.addPage(master, true);
		
		// load the detail page
		var detail = sap.ui.xmlview("Detail", "sap.ui.demo.ReleaseCB.view.Detail");
		detail.getController().nav = this.getController();
		this.app.addPage(detail, false);
		
		// done
		return this.app;
	}
});