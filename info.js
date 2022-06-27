"use strict";
const { libConfig, libLink, libUsers } = require("@clusterio/lib");

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
