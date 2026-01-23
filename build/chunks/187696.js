/** Chunk was on 21738 **/
/** chunk id: 187696, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => d
});
var r = n(627968);
n(64700);
var i = n(901517),
    l = n(397244),
    a = n(714114),
    s = n(729551),
    o = n(427262),
    c = n(985018),
    u = n(893750);
let d = function(e) {
    let {
        hovered: t,
        activities: n,
        applicationStream: d,
        status: p,
        user: h,
        userIgnored: g
    } = e, {
        voiceActivityStatusEnabled: f
    } = (0, i.G)({
        location: "StatusText"
    }), {
        voiceChannel: m
    } = (0, a.A)({
        userId: null == h ? void 0 : h.id
    }), A = f ? m : void 0;
    return g ? (0, r.jsx)("div", {
        className: u.Q,
        children: c.intl.string(c.t.tFY5Zb)
    }) : (0, l.A)({
        activities: n,
        status: p,
        applicationStream: d,
        voiceChannel: A
    }) ? (0, r.jsx)(s.A, {
        textClassName: u.q,
        activities: n,
        applicationStream: d,
        voiceChannel: A,
        animateEmoji: t,
        user: h,
        textSize: "sm"
    }) : (0, r.jsx)("div", {
        className: u.Q,
        children: (0, o.MU)(p)
    })
}