/** chunk id: 734771 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => l
});
var i = n(627968);
n(64700);
var r = n(763754),
    s = n(888675),
    a = n(985018);

function l(e) {
    let t, {
            message: l,
            usernameHook: o,
            otherUser: c,
            otherUsernameHook: u,
            compact: d,
            channel: _
        } = e,
        E = (0, r.Ay)(l),
        A = E.nick,
        m = o(E),
        I = (0, r.d8)(c, _);
    if (null != I && null != u) {
        let e = u(I);
        t = a.intl.format(a.t.L2FyVq, {
            username: A,
            usernameHook: m,
            otherUsername: I.nick,
            otherUsernameHook: e
        })
    } else t = a.intl.format(a.t["5v2xa8"], {
        username: A,
        usernameHook: m
    });
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: l.timestamp,
        compact: d,
        children: t
    })
}