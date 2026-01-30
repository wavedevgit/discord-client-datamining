/** chunk id: 555045, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => o
});
var r = n(64700),
    i = n(71393);

function a(e) {
    return "contextless" === e.type ? {
        channel: void 0,
        guild: void 0
    } : {
        channel: e.channel,
        guild: i.A.getGuild(e.channel.guild_id)
    }
}

function o(e) {
    return r.useMemo(() => a(e), [e])
}