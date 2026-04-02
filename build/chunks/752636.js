/** chunk id: 752636 params = (module,exports,require) **/
a.d(t, {
    A: () => _
});
var n = a(627968),
    o = a(64700),
    r = a(143413),
    i = a(643204);
let c = o.memo(i.Ay);

function _(e) {
    let {
        message: t,
        channel: a,
        author: o,
        compact: i,
        animateAvatar: _,
        guildId: l,
        isGroupStart: s = !0,
        roleIcon: d,
        hideTimestamp: p,
        hideGuildTag: m,
        preview: u
    } = e;
    return !(0, r.A)(t) && (s || i) ? (0, n.jsx)(c, {
        message: t,
        channel: a,
        author: o,
        guildId: l,
        compact: i,
        animate: _,
        roleIcon: d,
        hideTimestamp: p,
        hideGuildTag: m,
        preview: u
    }) : void 0
}