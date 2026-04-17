/** chunk id: 734771 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a
});
var i = n(627968);
n(64700);
var r = n(763754),
    l = n(888675),
    s = n(985018);

function a(e) {
    let t, {
            message: a,
            usernameHook: o,
            otherUser: c,
            otherUsernameHook: u,
            compact: d,
            channel: _
        } = e,
        A = (0, r.Ay)(a),
        E = A.nick,
        m = o(A),
        I = (0, r.d8)(c, _);
    if (null != I && null != u) {
        let e = u(I);
        t = s.intl.format(s.t.L2FyVq, {
            username: E,
            usernameHook: m,
            otherUsername: I.nick,
            otherUsernameHook: e
        })
    } else t = s.intl.format(s.t["5v2xa8"], {
        username: E,
        usernameHook: m
    });
    return (0, i.jsx)(l.A, {
        icon: n(884797),
        timestamp: a.timestamp,
        compact: d,
        children: t
    })
}