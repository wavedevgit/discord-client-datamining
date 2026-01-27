/** Chunk was on web.js **/
/** chunk id: 752636, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(143413),
    o = n(643204);
let s = i.memo(o.Ay);

function l(e) {
    let {
        message: t,
        channel: n,
        author: i,
        compact: o,
        animateAvatar: l,
        guildId: c,
        isGroupStart: u = !0,
        roleIcon: d,
        hideTimestamp: f,
        hideGuildTag: p,
        preview: _
    } = e;
    return !(0, a.A)(t) && (u || o) ? (0, r.jsx)(s, {
        message: t,
        channel: n,
        author: i,
        guildId: c,
        compact: o,
        animate: l,
        roleIcon: d,
        hideTimestamp: f,
        hideGuildTag: p,
        preview: _
    }) : void 0
}