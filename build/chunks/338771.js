/** Chunk was on web.js **/
/** chunk id: 338771, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
});
var r = n(827343),
    i = n(401843),
    a = n(961350),
    o = n(652896);

function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
    if (null == e) return;
    let {
        streamType: s,
        guildId: l,
        channelId: c,
        ownerId: u
    } = e, d = (0, o._z)({
        streamType: s,
        guildId: l,
        channelId: c,
        ownerId: u
    });
    u === a.default.getId() && r.A.setGoLiveSource(null), i.vN(d, t, n)
}