/** Chunk was on web.js **/
/** chunk id: 189551, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    G: () => i,
    K: () => a
});
var r = n(73153);
let i = e => {
    r.h.dispatch({
        type: "TOGGLE_GUILD_EXPANDED_STATE",
        guildId: e
    })
};

function a(e) {
    r.h.dispatch({
        type: "EMOJI_INTERACTION_INITIATED",
        interaction: e
    })
}