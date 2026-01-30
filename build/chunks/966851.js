/** chunk id: 966851, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => c
}), n(896048), n(733351);
var r = n(627968),
    i = n(64700),
    l = n(856644),
    s = n(69090),
    a = n(175284),
    o = n(512031);

function c(e) {
    let {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u
    } = e, [g, m] = i.useState(""), [p, f] = i.useState(o.p4), h = g.trim(), b = i.useMemo(() => d.filter(e => (0, l.Vh)(e, h)), [d, h]), x = i.useCallback(() => (0, r.jsx)(a.A, {
        guild: n,
        everyoneRole: c,
        filteredRoles: b,
        setEditRoleId: t,
        query: g,
        setQuery: m,
        setHeaderHeight: f
    }, "header"), [n, c, b, t, g]);
    return (0, r.jsx)(s.A, {
        setEditRoleId: t,
        guild: n,
        everyoneRole: c,
        otherRoles: d,
        setSelectedSection: u,
        renderHeader: x,
        headerHeight: p,
        query: g
    })
}