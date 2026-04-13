/** chunk id: 752636 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(627968),
    o = n(64700),
    r = n(143413),
    i = n(643204);
let l = o.memo(i.Ay);

function c(e) {
    let {
        message: t,
        channel: n,
        author: o,
        compact: i,
        animateAvatar: c,
        guildId: s,
        isGroupStart: _ = !0,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: p,
        preview: m
    } = e;
    return !(0, r.A)(t) && (_ || i) ? (0, a.jsx)(l, {
        message: t,
        channel: n,
        author: o,
        guildId: s,
        compact: i,
        animate: c,
        roleIcon: d,
        hideTimestamp: u,
        hideGuildTag: p,
        preview: m
    }) : void 0
}