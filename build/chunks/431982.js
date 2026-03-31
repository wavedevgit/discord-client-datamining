/** chunk id: 431982 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(688810),
    r = n(637193),
    o = n(84540),
    d = n(919395),
    c = n(128450),
    u = n(985018),
    m = n(578542);

function g(e) {
    let {
        user: t,
        guild: n,
        titleIcon: g
    } = e, {
        analyticsLocations: _
    } = (0, a.Ay)(), A = null != n, {
        userNameplate: x,
        guildNameplate: h,
        pendingNameplate: p,
        pendingErrors: T
    } = (0, d.rv)(t, n?.id), f = s.useCallback(() => {
        (0, r.p)({
            analyticsLocations: _,
            guildId: n?.id
        })
    }, [_, n?.id]), E = s.useCallback(() => {
        (0, o.p)({
            guildId: n?.id,
            nameplate: null
        })
    }, [n?.id]);
    return (0, i.jsx)(c.A, {
        title: u.intl.string(u.t.x5CoXR),
        titleIcon: g,
        errors: T,
        children: (0, i.jsxs)("div", {
            className: m.u,
            children: [(0, i.jsx)(l.Button, {
                variant: "primary",
                size: "sm",
                text: u.intl.string(u.t.BwdeM1),
                onClick: f
            }), (void 0 === p ? (A ? h : x) != null : null != p) && (0, i.jsx)(l.Button, {
                variant: "secondary",
                size: "sm",
                text: A ? u.intl.string(u.t.CHf9iJ) : u.intl.string(u.t["9zwziY"]),
                onClick: E
            })]
        })
    })
}