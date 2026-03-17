/** chunk id: 752636 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    r = n(64700),
    l = n(143413),
    a = n(643204);
let s = r.memo(a.Ay);

function o(e) {
    let {
        message: t,
        channel: n,
        author: r,
        compact: a,
        animateAvatar: o,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    } = e;
    return !(0, l.A)(t) && (c || a) ? (0, i.jsx)(s, {
        message: t,
        channel: n,
        author: r,
        guildId: d,
        compact: a,
        animate: o,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    }) : void 0
}