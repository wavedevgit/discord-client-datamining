/** chunk id: 494086 params = (module,exports,require) **/
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
    let {
        message: t,
        otherUsername: a,
        usernameHook: o,
        otherUsernameHook: c,
        compact: u
    } = e, {
        nick: d
    } = (0, r.Ay)(t), _ = o(), A = c(), E = s.intl.format(s.t.MMN2Jq, {
        username: d,
        usernameHook: _,
        otherUsername: a,
        otherUsernameHook: A
    });
    return (0, i.jsx)(l.A, {
        icon: n(617184),
        timestamp: t.timestamp,
        compact: u,
        children: E
    })
}