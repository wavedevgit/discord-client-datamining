/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    W: () => m
});
var i = t(627968),
    a = t(64700),
    r = t(311907),
    l = t(688810),
    s = t(512213),
    o = t(637193),
    d = t(919395),
    c = t(287809),
    u = t(84540),
    _ = t(930349),
    p = t(985018),
    A = t(387837);

function g(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: r
    } = (0, l.Ay)(), c = null != t, {
        guildNameplate: g,
        pendingNameplate: m
    } = (0, d.rv)(n, t ?? void 0), I = (0, d.lw)({
        pendingValue: m,
        userValue: n.collectibles?.nameplate,
        guildValue: g,
        guildId: t ?? void 0
    }), f = void 0 !== m, h = c ? g : n.collectibles?.nameplate, x = a.useCallback(() => {
        (0, o.p)({
            analyticsLocations: r,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [r, t]);
    if (null == I) return (0, i.jsx)(_.kL, {
        variant: "bar",
        onClick: x,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(s.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: I
            })
        })
    });
    let v = f ? null != m : null != h,
        E = c && n.collectibles?.nameplate != null,
        b = v ? {
            onClick: () => (0, u.p)({
                guildId: t ?? void 0,
                nameplate: null
            }),
            type: E ? "reset" : "remove",
            accessibleLabel: p.intl.string(E ? p.t.neYqhR : p.t["9zwziY"])
        } : void 0;
    return (0, i.jsx)(_.NW, {
        variant: "bar",
        onClick: x,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        deleteButtonConfig: b,
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(s.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: I
            })
        })
    })
}

function m(e) {
    let {
        guildId: n
    } = e, t = (0, r.bG)([c.default], () => c.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(g, {
        user: t,
        guildId: n
    })
}