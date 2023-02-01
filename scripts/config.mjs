export const AC5E = {};

AC5E.ID = "advanced-conditions-5e";
AC5E.MODULE_PATH = `modules/${AC5E.ID}/`;
AC5E.FOUNDRY_VERSION = "10.291";

AC5E.CONDITIONS = {
},

//to-do: what is needed?
AC5E.midiqol = { isActive: game.modules.get("midi-qol")?.active };
if (AC5E.midiQOL.isActive) 
    AC5E.midiqol = {
        isActive: game.modules.get("midi-qol").active,
        advKey: game.keybindings.get("midi-qol","AdvantageRoll"),
        disKey: game.keybindings.get("midi-qol","DisadvantageRoll"),
        ffKey: game.keybindings.get("midi-qol","fastForward")
    };


AC5E.dfreds = { isActive: game.modules.get("dfreds-convenient-effects")?.active };
if (AC5E.dfreds.isActive) 
    AC5E.dfreds = {
        isActive: game.modules.get("dfreds-convenient-effects").active,
        isModifying: game.settings.get("dfreds-convenient-effects","modifyStatusEffects"),
        statusEffectNames: game.settings.get("dfreds-convenient-effects","statusEffectNames")
    };

AC5E.monksLittleDetails = { isActive: game.modules.get("monks-little-details")?.active };
if (AC5E.monksLittleDetails.isActive) 
    AC5E.monksLittleDetails = {
        isActive: game.modules.get("monks-little-details").active,
        isModifying: game.settings.get("monks-little-details","add-extra-statuses")
    };

AC5E.cub = { isActive: game.modules.get("combat-utility-belt")?.active };
if (AC5E.cub.isActive)
    AC5E.cub = {
        isActive: game.modules.get("combat-utility-belt").active,
        isEnhanced: game.settings.get("combat-utility-belt","enableEnhancedConditions")
    };




//to-do: logging at a later stage

AC5E.debug = (...args) => {
    if (game.settings.get(AC5E.ID, "debug")) {
        console.log(AC5E.ID, "|", ...args);
    }
}

AC5E.log = (...args) => {
    console.log(AC5E.ID, "|", ...args);
}

AC5E.error = (...args) => {
    console.error(AC5E.ID, "|", ...args);
}

AC5E.warn = (...args) => {
    console.warn(AC5E.ID, "|", ...args);
}
