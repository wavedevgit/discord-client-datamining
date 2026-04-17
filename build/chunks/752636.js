/** chunk id: 752636 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(64700),
    l = n(143413),
    r = n(643204);
let s = a.memo(r.Ay);

function o(e) {
    let {
        message: t,
        channel: n,
        author: a,
        compact: r,
        animateAvatar: o,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    } = e;
    return !(0, l.A)(t) && (c || r) ? (0, i.jsx)(s, {
        message: t,
        channel: n,
        author: a,
        guildId: d,
        compact: r,
        animate: o,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    }) : void 0
}