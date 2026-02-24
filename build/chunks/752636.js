/** chunk id: 752636, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968),
    l = n(64700),
    r = n(143413),
    a = n(643204);
let s = l.memo(a.Ay);

function o(e) {
    let {
        message: t,
        channel: n,
        author: l,
        compact: a,
        animateAvatar: o,
        guildId: d,
        isGroupStart: c = !0,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    } = e;
    return !(0, r.A)(t) && (c || a) ? (0, i.jsx)(s, {
        message: t,
        channel: n,
        author: l,
        guildId: d,
        compact: a,
        animate: o,
        roleIcon: u,
        hideTimestamp: _,
        hideGuildTag: m,
        preview: h
    }) : void 0
}