/** chunk id: 817253 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var l = n(638075),
    a = n(763754),
    r = n(888675),
    s = n(985018);

function o(e) {
    let {
        message: t,
        usernameHook: o,
        compact: c
    } = e, d = (0, a.Ay)(t), u = o(d), _ = l.A.getSystemMessageUserJoin(t.id), A = s.intl.format(_, {
        username: d.nick,
        usernameHook: u
    });
    return (0, i.jsx)(r.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: c,
        children: A
    })
}