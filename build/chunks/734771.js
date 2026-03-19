/** chunk id: 734771 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var a = n(763754),
    l = n(888675),
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
        m = (0, a.Ay)(s),
        A = m.nick,
        E = o(m),
        I = (0, a.d8)(c, _);
    if (null != I && null != d) {
        let e = d(I);
        t = r.intl.format(r.t.L2FyVq, {
            username: A,
            usernameHook: E,
            otherUsername: I.nick,
            otherUsernameHook: e
        })
    } else t = r.intl.format(r.t["5v2xa8"], {
        username: A,
        usernameHook: E
    });
    return (0, i.jsx)(l.A, {
        icon: n(884797),
        timestamp: s.timestamp,
        compact: u,
        children: t
    })
}