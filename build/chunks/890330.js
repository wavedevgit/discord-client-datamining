/** Chunk was on web.js **/
/** chunk id: 890330, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    v: () => s
});
var r = n(311907),
    i = n(576705),
    a = n(140547),
    o = n(818348);

function s(e, t) {
    let {
        enableHangStatus: n
    } = (0, a.$j)({
        guildId: null == t ? void 0 : t.guild_id,
        location: e
    }), s = (0, r.bG)([i.A], () => i.A.can(o.xB.CONNECT, t));
    return n && s
}