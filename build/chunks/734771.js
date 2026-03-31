/** chunk id: 734771 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(985018);

function s(e) {
    let t, {
            message: s,
            usernameHook: o,
            otherUser: c,
            otherUsernameHook: d,
            compact: u,
            channel: _
        } = e,
        A = (0, l.Ay)(s),
        m = A.nick,
        E = o(A),
        T = (0, l.d8)(c, _);
    if (null != T && null != d) {
        let e = d(T);
        t = r.intl.format(r.t.L2FyVq, {
            username: m,
            usernameHook: E,
            otherUsername: T.nick,
            otherUsernameHook: e
        })
    } else t = r.intl.format(r.t["5v2xa8"], {
        username: m,
        usernameHook: E
    });
    return (0, i.jsx)(a.A, {
        icon: n(884797),
        timestamp: s.timestamp,
        compact: u,
        children: t
    })
}