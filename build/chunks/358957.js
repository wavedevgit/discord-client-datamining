/** Chunk was on web.js **/
/** chunk id: 358957, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    e: () => s
}), n(747238);
var r = n(734057),
    i = n(977997),
    a = n(140547);
let o = [null, null];

function s(e, t) {
    var n, s;
    if (null == t) return o;
    let l = null == (n = r.A.getChannel(null == (s = i.A.getVoiceStateForUser(e)) ? void 0 : s.channelId)) ? void 0 : n.guild_id,
        {
            defaultStatusVariant: c
        } = (0, a.ko)({
            guildId: l,
            location: "parseHangStatus"
        }),
        u = t.split(":");
    return u.length > 1 && u[1] !== c ? [u[0], c] : u
}