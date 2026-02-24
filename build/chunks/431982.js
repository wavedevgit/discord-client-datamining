/** chunk id: 431982, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    a = n(397927),
    l = n(688810),
    r = n(590547),
    o = n(919395),
    c = n(128450),
    d = n(985018),
    u = n(888920);

function _(e) {
    let {
        user: t,
        guild: n,
        titleIcon: _
    } = e, {
        analyticsLocations: m
    } = (0, l.Ay)(), A = null != n, {
        userNameplate: g,
        guildNameplate: h,
        pendingNameplate: x,
        pendingErrors: p
    } = (0, o.rv)(t, n?.id), E = s.useCallback(() => {
        (0, r.p)({
            analyticsLocations: m,
            guildId: n?.id
        })
    }, [m, n?.id]), C = s.useCallback(() => {
        (0, o.pX)(null, n?.id)
    }, [n?.id]);
    return (0, i.jsx)(c.A, {
        title: d.intl.string(d.t.x5CoXR),
        titleIcon: _,
        errors: p,
        children: (0, i.jsxs)("div", {
            className: u.u,
            children: [(0, i.jsx)(a.Button, {
                variant: "primary",
                size: "sm",
                text: d.intl.string(d.t.BwdeM1),
                onClick: E
            }), (void 0 === x ? (A ? h : g) != null : null != x) && (0, i.jsx)(a.Button, {
                variant: "secondary",
                size: "sm",
                text: A ? d.intl.string(d.t.CHf9iJ) : d.intl.string(d.t["9zwziY"]),
                onClick: C
            })]
        })
    })
}