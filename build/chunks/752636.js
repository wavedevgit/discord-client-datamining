/** chunk id: 752636 params = (module,exports,require) **/
a.d(t, {
    A: () => l
});
var n = a(627968),
    r = a(64700),
    i = a(143413),
    o = a(643204);
let c = r.memo(o.Ay);

function l(e) {
    let {
        message: t,
        channel: a,
        author: r,
        compact: o,
        animateAvatar: l,
        guildId: s,
        isGroupStart: _ = !0,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    } = e;
    return !(0, i.A)(t) && (_ || o) ? (0, n.jsx)(c, {
        message: t,
        channel: a,
        author: r,
        guildId: s,
        compact: o,
        animate: l,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    }) : void 0
}