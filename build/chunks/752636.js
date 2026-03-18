/** chunk id: 752636 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    r = n(64700),
    a = n(143413),
    l = n(643204);
let s = r.memo(l.Ay);

function o(e) {
    let {
        message: t,
        channel: n,
        author: r,
        compact: l,
        animateAvatar: o,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    } = e;
    return !(0, a.A)(t) && (c || l) ? (0, i.jsx)(s, {
        message: t,
        channel: n,
        author: r,
        guildId: d,
        compact: l,
        animate: o,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    }) : void 0
}