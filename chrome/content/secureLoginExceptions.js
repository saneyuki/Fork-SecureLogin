/*
 * @package secureLogin
 * @author Sebastian Tschan
 * @copyright (c) Sebastian Tschan
 * @license GNU General Public License
 * @link https://blueimp.net/mozilla/
 */
var secureLoginExceprions = {

	get service() {
		delete this.service;
		return this.service = secureLogin;
	},

	handleEvent: function (aEvent) {
		switch (aEvent.type) {
			case "load":
				this.onLoad();
				break;
			case "unload":
				this.onUnLoad();
				break;
		}
	},

	onLoad: function () {
		window.removeEventListener("load", this, false);
		window.addEventListener("unload", this, false);

		this.service.exceptionsInitialize();
	},

	onUnLoad: function() {
		window.removeEventListener("unload", this, false);

		this.service.exceptionsFinalize();
	},

};
window.addEventListener("load", secureLoginExceprions, false);
