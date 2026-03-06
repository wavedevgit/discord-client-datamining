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
            channel: m
        } = e,
        _ = (0, l.Ay)(s),
        A = _.nick,
        f = o(_),
        E = (0, l.d8)(c, m);
    if (null != E && null != d) {
        let e = d(E);
        t = r.intl.format(r.t.L2FyVq, {
            username: A,
            usernameHook: f,
            otherUsername: E.nick,
            otherUsernameHook: e
        })
    } else t = r.intl.format(r.t["5v2xa8"], {
        username: A,
        usernameHook: f
    });
    return (0, i.jsx)(a.A, {
        icon: n(884797),
        timestamp: s.timestamp,
        compact: u,
        children: t
    })
}