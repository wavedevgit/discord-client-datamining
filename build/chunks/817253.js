/** chunk id: 817253, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(627968);
n(64700);
var i = n(638075),
    l = n(763754),
    a = n(888675),
    s = n(985018);

function o(e) {
    let {
        message: t,
        usernameHook: o,
        compact: c
    } = e, u = (0, l.Ay)(t), d = o(u), p = i.A.getSystemMessageUserJoin(t.id), m = s.intl.format(p, {
        username: u.nick,
        usernameHook: d
    });
    return (0, r.jsx)(a.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: c,
        children: m
    })
}