/** chunk id: 431982 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(688810),
    r = n(590547),
    o = n(919395),
    d = n(128450),
    c = n(985018),
    u = n(888920);

function _(e) {
    let {
        user: t,
        guild: n,
        titleIcon: _
    } = e, {
        analyticsLocations: m
    } = (0, a.Ay)(), g = null != n, {
        userNameplate: A,
        guildNameplate: h,
        pendingNameplate: x,
        pendingErrors: p
    } = (0, o.rv)(t, n?.id), T = s.useCallback(() => {
        (0, r.p)({
            analyticsLocations: m,
            guildId: n?.id
        })
    }, [m, n?.id]), E = s.useCallback(() => {
        (0, o.pX)(null, n?.id)
    }, [n?.id]);
    return (0, i.jsx)(d.A, {
        title: c.intl.string(c.t.x5CoXR),
        titleIcon: _,
        errors: p,
        children: (0, i.jsxs)("div", {
            className: u.u,
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: c.intl.string(c.t.BwdeM1),
                onClick: T
            }), (void 0 === x ? (g ? h : A) != null : null != x) && (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: g ? c.intl.string(c.t.CHf9iJ) : c.intl.string(c.t["9zwziY"]),
                onClick: E
            })]
        })
    })
}