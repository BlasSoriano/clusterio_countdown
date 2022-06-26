-- Dialog informing the player that the game is paused, waiting for the start of the event

local gui_paused_dialog = {}

function gui_paused_dialog_remove(player)
    if player.gui.center.paused_dialog then
        player.gui.center.paused_dialog.destroy()
    end
end

function gui_paused_dialog_create(player)
    local outer_frame = player.gui.center.add {
        name = "paused_dialog",
        type = "frame",
        direction = "vertical",
        caption = "The game is paused",
    }
    local inner_frame = outer_frame.add {
        name = "paused_inner_frame",
        type = "frame",
        direction = "vertical",
        style = "inside_shallow_frame_with_padding",
    }
    local text = "The game has been paused, until the event begins."
    for line in string.gmatch(text .. "\\n", "(.-)\\n") do
        local label = inner_frame.add {
            type = "label",
            caption = line,
        }
    end
end

return gui_paused_dialog
