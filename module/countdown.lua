local clusterio_api = require("modules/clusterio/api")
local gui_paused_dialog = require("modules/countdown/gui_paused_dialog")

local countdown = {}
-- This function is called by instance.js as
--      /sc countdown.pause_unpause(paused)
--      with data from the master
countdown.pause_unpause = pause_unpause

-- Pause or unpause the game; if paused, inform the players
function pause_unpause(paused)
    game.tick_paused = paused
    for _, player in pairs(game.players) do
        gui_paused_dialog_remove(player)
        if paused then
            gui_paused_dialog_create(player)
        end
    end
end

return countdown
