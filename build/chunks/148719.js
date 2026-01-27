/** Chunk was on web.js **/
/** chunk id: 148719, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(136722),
    i = n(95701),
    a = n(488926),
    o = n(818348);

function s(e) {
    if (null == e) return !1;
    let {
        type: t
    } = e;
    if (null == e.guild_id || !i.JT.has(t)) return !1;
    if (e.isGuildVocal() && !a.MJ(o.xB.CONNECT, e)) return !0;
    let n = e.permissionOverwrites[e.guild_id];
    return null != n && r.zy(n.deny, o.xB.VIEW_CHANNEL)
}