/** chunk id: 187696 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var l = n(397244),
    r = n(714114),
    a = n(729551),
    s = n(427262),
    o = n(985018),
    d = n(170995);
let c = function(e) {
    let {
        hovered: t,
        activities: n,
        applicationStream: c,
        status: u,
        user: A,
        userIgnored: h
    } = e, {
        voiceChannel: _
    } = (0, r.A)({
        userId: A?.id
    });
    return h ? (0, i.jsx)("div", {
        className: d.Q,
        children: o.intl.string(o.t.tFY5Zb)
    }) : (0, l.A)({
        activities: n,
        status: u,
        applicationStream: c,
        voiceChannel: _
    }) ? (0, i.jsx)(a.A, {
        textClassName: d.q,
        activities: n,
        applicationStream: c,
        voiceChannel: _,
        animateEmoji: t,
        user: A,
        textSize: "sm"
    }) : (0, i.jsx)("div", {
        className: d.Q,
        children: (0, s.MU)(u)
    })
}