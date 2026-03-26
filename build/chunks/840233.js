/** chunk id: 840233 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(763754),
    l = n(888675),
    r = n(985018);

function s(e) {
    let {
        message: t,
        channel: s,
        targetUser: o,
        actorUsernameHook: c,
        targetUsernameHook: d,
        compact: u
    } = e, _ = (0, a.Ay)(t), m = (0, a.d8)(o, s), A = c(_), E = d(m ?? void 0), I = r.intl.format(r.t.tusv2h, {
        actorName: _.nick,
        actorHook: A,
        targetName: m?.nick,
        targetHook: E
    });
    return (0, i.jsx)(l.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: u,
        children: I
    })
}