/** chunk id: 494086, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => s
});
var i = n(627968);
n(64700);
var l = n(763754),
    a = n(888675),
    r = n(985018);

function s(e) {
    let {
        message: t,
        otherUsername: s,
        usernameHook: o,
        otherUsernameHook: c,
        compact: d
    } = e, {
        nick: u
    } = (0, l.Ay)(t), m = o(), _ = c(), A = r.intl.format(r.t.MMN2Jq, {
        username: u,
        usernameHook: m,
        otherUsername: s,
        otherUsernameHook: _
    });
    return (0, i.jsx)(a.A, {
        icon: n(394803),
        timestamp: t.timestamp,
        compact: d,
        children: A
    })
}