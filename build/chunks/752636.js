/** chunk id: 752636 params = (module,exports,require) **/
a.d(t, {
    A: () => _
});
var n = a(627968),
    r = a(64700),
    i = a(143413),
    o = a(643204);
let l = r.memo(o.Ay);

function _(e) {
    let {
        message: t,
        channel: a,
        author: r,
        compact: o,
        animateAvatar: _,
        guildId: c,
        isGroupStart: s = !0,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    } = e;
    return !(0, i.A)(t) && (s || o) ? (0, n.jsx)(l, {
        message: t,
        channel: a,
        author: r,
        guildId: c,
        compact: o,
        animate: _,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: m,
        preview: p
    }) : void 0
}