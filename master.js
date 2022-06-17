"use strict";
const libPlugin = require("@clusterio/lib/plugin");

class MasterPlugin extends libPlugin.BaseMasterPlugin {
    countdownTime;       // Time to count down from
    timeLeft;            // Remaining time, when timer is on
    timer;               // Timer running the countdown
    
    // Init
    async init() {
        // Set the timer to default value
        this.resetTimer(this.master.config.get("countdown.countdown_time"));
        // Pause all servers
        this.pauseServers(true);
    }

    // On shutdown master server
    async onShutdown() {
		// Free the timer
        clearTimer();
	}

    // Broadcast message to pause or unpause all instances
    async pauseServers(boolPause) {
        this.broadcastEventToSlaves(this.info.messages.pauseServers, { pause : boolPause });
    }

    // If there is any running countdown, stop and clear
    clearTimer() {
        if (this.timer) { clearInterval(this.timer) ;}
    }

    // Set timer, after button Set/Reset has been pressed
    resetTimer(time) {
        // Free the timer
        clearTimer();
        // Set countdown time to the specified value
        this.countdown = time;
        // Set the time left to the total countdown time
        this.timeLeft = time;
    }

    // Start the countdown, after button Start has been pressed
    startTimer() {
        this.timer = setInterval(this.updateCountdown, 1000)
    }

    // Update countdown value on web, and unpause if finished
    async updateCountdown() {
        this.timeLeft--;
        // Check if countdown reached zero
        if (this.timeLeft <= 0)
        {
            // Clear the timer and unpause the game 
            this.resetTimer();
            this.pauseServers(false);
        }
        else
        {
        // TODO: Update instances, or every instance keeps its own countdown?
        // TODO: Update web
        }
    }

    // Unpause all servers, and clear timers, after button
    async forceUnpause() {
        this.broadcastEventToSlaves(this.info.messages.pauseServers, { pause : false });
    }
}

module.exports = {
	MasterPlugin,
};
