/** chunk id: 752636 params = (module,exports,require) **/
"use strict";
a.d(t, {
    A: () => c
});
var n = a(627968),
    r = a(64700),
    i = a(143413),
    o = a(643204);
let s = r.memo(o.Ay);

function c(e) {
    let {
        message: t,
        channel: a,
        author: r,
        compact: o,
        animateAvatar: c,
        guildId: l,
        isGroupStart: _ = !0,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    } = e;
    return !(0, i.A)(t) && (_ || o) ? (0, n.jsx)(s, {
        message: t,
        channel: a,
        author: r,
        guildId: l,
        compact: o,
        animate: c,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    }) : void 0
}