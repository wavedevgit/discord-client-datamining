/** chunk id: 817253 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var i = n(627968);
n(64700);
var r = n(638075),
    s = n(763754),
    a = n(888675),
    l = n(985018);

function o(e) {
    let {
        message: t,
        usernameHook: o,
        compact: c
    } = e, u = (0, s.Ay)(t), d = o(u), _ = r.A.getSystemMessageUserJoin(t.id), E = l.intl.format(_, {
        username: u.nick,
        usernameHook: d
    });
    return (0, i.jsx)(a.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: c,
        children: E
    })
}