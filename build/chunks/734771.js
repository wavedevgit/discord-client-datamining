/** Chunk was on 92917 **/
/** chunk id: 734771, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(888675),
    a = n(985018);

function s(e) {
    let t, {
            message: s,
            usernameHook: o,
            otherUser: c,
            otherUsernameHook: u,
            compact: d,
            channel: p
        } = e,
        m = (0, i.Ay)(s),
        f = m.nick,
        g = o(m),
        h = (0, i.d8)(c, p);
    if (null != h && null != u) {
        let e = u(h);
        t = a.intl.format(a.t.L2FyVq, {
            username: f,
            usernameHook: g,
            otherUsername: h.nick,
            otherUsernameHook: e
        })
    } else t = a.intl.format(a.t["5v2xa8"], {
        username: f,
        usernameHook: g
    });
    return (0, r.jsx)(l.A, {
        icon: n(884797),
        timestamp: s.timestamp,
        compact: d,
        children: t
    })
}