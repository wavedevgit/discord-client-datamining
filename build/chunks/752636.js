/** chunk id: 752636 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    a = n(64700),
    l = n(143413),
    s = n(643204);
let r = a.memo(s.Ay);

function o(e) {
    let {
        message: t,
        channel: n,
        author: a,
        compact: s,
        animateAvatar: o,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    } = e;
    return !(0, l.A)(t) && (c || s) ? (0, i.jsx)(r, {
        message: t,
        channel: n,
        author: a,
        guildId: d,
        compact: s,
        animate: o,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    }) : void 0
}