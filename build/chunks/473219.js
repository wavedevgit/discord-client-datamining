/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    W: () => m
});
var i = t(627968),
    a = t(64700),
    r = t(311907),
    l = t(688810),
    o = t(512213),
    s = t(637193),
    d = t(919395),
    c = t(287809),
    _ = t(84540),
    u = t(930349),
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
    } = (0, d.rv)(n, t ?? void 0), f = (0, d.lw)({
        pendingValue: m,
        userValue: n.collectibles?.nameplate,
        guildValue: g,
        guildId: t ?? void 0
    }), h = void 0 !== m, x = c ? g : n.collectibles?.nameplate, I = a.useCallback(() => {
        (0, s.p)({
            analyticsLocations: r,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [r, t]);
    if (null == f) return (0, i.jsx)(u.kL, {
        variant: "bar",
        onClick: I,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(o.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: f
            })
        })
    });
    let b = h ? null != m : null != x,
        v = c && n.collectibles?.nameplate != null,
        E = b ? {
            onClick: () => (0, _.p)({
                guildId: t ?? void 0,
                nameplate: null
            }),
            type: v ? "reset" : "remove",
            accessibleLabel: p.intl.string(v ? p.t.neYqhR : p.t["9zwziY"])
        } : void 0;
    return (0, i.jsx)(u.NW, {
        variant: "bar",
        onClick: I,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        deleteButtonConfig: E,
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(o.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: f
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