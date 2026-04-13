/** chunk id: 494086 params = (module,exports,require) **/
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
        otherUsername: l,
        usernameHook: o,
        otherUsernameHook: c,
        compact: u
    } = e, {
        nick: d
    } = (0, r.Ay)(t), _ = o(), E = c(), A = a.intl.format(a.t.MMN2Jq, {
        username: d,
        usernameHook: _,
        otherUsername: l,
        otherUsernameHook: E
    });
    return (0, i.jsx)(s.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: u,
        children: A
    })
}