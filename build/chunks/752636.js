/** chunk id: 752636 params = (module,exports,require) **/
a.d(t, {
    A: () => l
});
var n = a(627968),
    r = a(64700),
    o = a(143413),
    i = a(643204);
let c = r.memo(i.Ay);

function l(e) {
    let {
        message: t,
        channel: a,
        author: r,
        compact: i,
        animateAvatar: l,
        guildId: s,
        isGroupStart: _ = !0,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: p,
        preview: m
    } = e;
    return !(0, o.A)(t) && (_ || i) ? (0, n.jsx)(c, {
        message: t,
        channel: a,
        author: r,
        guildId: s,
        compact: i,
        animate: l,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: p,
        preview: m
    }) : void 0
}