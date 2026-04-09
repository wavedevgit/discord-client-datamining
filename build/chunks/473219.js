/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    W: () => m
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    r = t(688810),
    s = t(512213),
    d = t(637193),
    o = t(919395),
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
        analyticsLocations: l
    } = (0, r.Ay)(), c = null != t, {
        guildNameplate: g,
        pendingNameplate: m
    } = (0, o.rv)(n, t ?? void 0), h = (0, o.lw)({
        pendingValue: m,
        userValue: n.collectibles?.nameplate,
        guildValue: g,
        guildId: t ?? void 0
    }), I = void 0 !== m, f = c ? g : n.collectibles?.nameplate, x = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: l,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [l, t]);
    if (null == h) return (0, i.jsx)(_.kL, {
        variant: "bar",
        onClick: x,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(s.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: h
            })
        })
    });
    let v = I ? null != m : null != f,
        b = c && n.collectibles?.nameplate != null,
        E = v ? {
            onClick: () => (0, u.p)({
                guildId: t ?? void 0,
                nameplate: null
            }),
            type: b ? "reset" : "remove",
            accessibleLabel: p.intl.string(b ? p.t.neYqhR : p.t["9zwziY"])
        } : void 0;
    return (0, i.jsx)(_.NW, {
        variant: "bar",
        onClick: x,
        accessibleLabel: p.intl.string(p.t.BwdeM1),
        deleteButtonConfig: E,
        children: (0, i.jsx)("div", {
            className: A.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(s.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: h
            })
        })
    })
}

function m(e) {
    let {
        guildId: n
    } = e, t = (0, l.bG)([c.default], () => c.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(g, {
        user: t,
        guildId: n
    })
}