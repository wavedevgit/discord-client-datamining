/** chunk id: 536030 params = (module,exports,require) **/
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
    } = e, _ = (0, l.Ay)(t), A = (0, l.d8)(o, s), m = c(_), E = d(A ?? void 0), I = r.intl.format(r.t["32QI5/"], {
        actorName: _.nick,
        actorHook: m,
        targetName: A?.nick,
        targetHook: E
    });
    return (0, i.jsx)(a.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: u,
        children: I
    })
}