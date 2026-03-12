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
    u = n(352126);

function _(e) {
    let {
        user: t,
        guild: n,
        titleIcon: _
    } = e, {
        analyticsLocations: g
    } = (0, a.Ay)(), A = null != n, {
        userNameplate: m,
        guildNameplate: h,
        pendingNameplate: p,
        pendingErrors: x
    } = (0, o.rv)(t, n?.id), E = s.useCallback(() => {
        (0, r.p)({
            analyticsLocations: g,
            guildId: n?.id
        })
    }, [g, n?.id]), T = s.useCallback(() => {
        (0, o.pX)(null, n?.id)
    }, [n?.id]);
    return (0, i.jsx)(d.A, {
        title: c.intl.string(c.t.x5CoXR),
        titleIcon: _,
        errors: x,
        children: (0, i.jsxs)("div", {
            className: u.u,
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: c.intl.string(c.t.BwdeM1),
                onClick: E
            }), (void 0 === p ? (A ? h : m) != null : null != p) && (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: A ? c.intl.string(c.t.CHf9iJ) : c.intl.string(c.t["9zwziY"]),
                onClick: T
            })]
        })
    })
}