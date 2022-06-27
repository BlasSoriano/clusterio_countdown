"use strict";
(self["webpackChunkcountdown"] = self["webpackChunkcountdown"] || []).push([[232],{

/***/ 232:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


const { libConfig, libLink, libUsers } = __webpack_require__(419);

class MasterConfigGroup extends libConfig.PluginConfigGroup {}
MasterConfigGroup.defaultAccess = ["master", "slave", "control"];
MasterConfigGroup.groupName = "countdown";
MasterConfigGroup.define({
	name: "countdown_time",
	title: "Countdown time",
	description: "Time in seconds to wait for auto unpause servers.",
	type: "number",
	initial_value: 600,
});
MasterConfigGroup.finalize();

libUsers.definePermission({
	name: "countdown.countdown.view",
	title: "View Countdown stuff",
	description: "View the stuff related to Countdown.",
	grantByDefault: true,
});

module.exports = {
    name: "countdown",
    title: "Countdown",
    description: "Pause Factorio servers until a countdown times out.",
    masterEntrypoint: "master",
    MasterConfigGroup,
    instanceEntrypoint: "instance",
    webEntrypoint: "./web",
    messages: {
        pauseServers: new libLink.Event({
			type: "countdown:pauseServers",
			links: ["master-slave", "slave-instance"],
			broadcastTo: "instance",
			eventProperties: {
                "pause": { type: "boolean" },
            },
		}),
    },
};


/***/ })

}]);
//# sourceMappingURL=232.bundle.js.map