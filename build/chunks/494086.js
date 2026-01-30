/** chunk id: 494086, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var r = n(627968);
n(64700);
var i = n(763754),
    l = n(888675),
    a = n(985018);

function s(e) {
    let {
        message: t,
        otherUsername: s,
        usernameHook: o,
        otherUsernameHook: c,
        compact: u
    } = e, {
        nick: d
    } = (0, i.Ay)(t), p = o(), m = c(), f = a.intl.format(a.t.MMN2Jq, {
        username: d,
        usernameHook: p,
        otherUsername: s,
        otherUsernameHook: m
    });
    return (0, r.jsx)(l.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: u,
        children: f
    })
}