/** Chunk was on 39048 **/
/** chunk id: 875331, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => i
});
var r = n(73153);

function i(e, t, n) {
    return r.h.dispatch({
        type: "GUILD_SETTINGS_WIDGET_UPDATE",
        guildId: e,
        enabled: t,
        channelId: null != n ? n : null
    }), Promise.resolve(!0)
}