"use strict";
const libPlugin = require("@clusterio/lib/plugin");

class InstancePlugin extends libPlugin.BaseInstancePlugin {
    // TODO: Init
    async init() {
        
    }

    // Pause or unpause all instances
    async pauseServersEventHandler(message) {
        // TODO: Check if the instance is running?
        await this.sendRcon(`/sc countdown.pause_unpause('${message.pause}')`, true);
    }
};

module.exports = {
	InstancePlugin,
};
