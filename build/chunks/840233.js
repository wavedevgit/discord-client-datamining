/** chunk id: 840233, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(985018);

function s(e) {
    let {
        message: t,
        channel: s,
        targetUser: o,
        actorUsernameHook: c,
        targetUsernameHook: d,
        compact: u
    } = e, m = (0, l.Ay)(t), _ = (0, l.d8)(o, s), A = c(m), E = d(_ ?? void 0), h = r.intl.format(r.t.tusv2h, {
        actorName: m.nick,
        actorHook: A,
        targetName: _?.nick,
        targetHook: E
    });
    return (0, i.jsx)(a.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: u,
        children: h
    })
}