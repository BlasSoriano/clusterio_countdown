const { libLink } = require("@clusterio/lib"); // For messages

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

module.exports = {
    name: "countdown",
    title: "Countdown",
    description: "Pause Factorio servers until a countdown times out.",
    instanceEntrypoint: "instance",
    masterEntrypoint: "master",
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
