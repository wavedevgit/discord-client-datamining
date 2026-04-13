/** chunk id: 536030 params = (module,exports,require) **/
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
    let {
        message: t,
        channel: l,
        targetUser: o,
        actorUsernameHook: c,
        targetUsernameHook: u,
        compact: d
    } = e, _ = (0, r.Ay)(t), E = (0, r.d8)(o, l), A = c(_), m = u(E ?? void 0), I = a.intl.format(a.t["32QI5/"], {
        actorName: _.nick,
        actorHook: A,
        targetName: E?.nick,
        targetHook: m
    });
    return (0, i.jsx)(s.A, {
        icon: n(884797),
        timestamp: t.timestamp,
        compact: d,
        children: I
    })
}