/** chunk id: 473219 params = (module,exports,require) **/
i.d(n, {
    W: () => g
});
var t = i(627968),
    a = i(64700),
    l = i(311907),
    s = i(688810),
    r = i(512213),
    d = i(637193),
    o = i(919395),
    c = i(287809),
    u = i(84540),
    _ = i(930349),
    A = i(985018),
    p = i(432856);

function x(e) {
    let {
        user: n,
        guildId: i
    } = e, {
        analyticsLocations: l
    } = (0, s.Ay)(), c = null != i, {
        guildNameplate: x,
        pendingNameplate: g
    } = (0, o.rv)(n, i ?? void 0), m = (0, o.lw)({
        pendingValue: g,
        userValue: n.collectibles?.nameplate,
        guildValue: x,
        guildId: i ?? void 0
    }), I = void 0 !== g, f = c ? x : n.collectibles?.nameplate, b = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: l,
            guildId: i ?? void 0,
            stackingBehavior: "stack"
        })
    }, [l, i]);
    if (null == m) return (0, t.jsx)(_.k, {
        variant: "bar",
        onClick: b,
        accessibleLabel: A.intl.string(A.t.BwdeM1),
        children: (0, t.jsx)("div", {
            className: p.M,
            "aria-hidden": !0,
            children: (0, t.jsx)(r.A, {
                user: n,
                guildId: i ?? void 0,
                nameplate: m
            })
        })
    });
    let h = I ? null != g : null != f,
        v = c && n.collectibles?.nameplate != null,
        j = h ? {
            onClick: () => (0, u.p)({
                guildId: i ?? void 0,
                nameplate: null
            }),
            type: v ? "reset" : "remove",
            accessibleLabel: A.intl.string(v ? A.t.GaEG4t : A.t["2A+piL"])
        } : void 0;
    return (0, t.jsx)(_.N, {
        variant: "bar",
        onClick: b,
        accessibleLabel: A.intl.string(A.t.BwdeM1),
        deleteButtonConfig: j,
        children: (0, t.jsx)("div", {
            className: p.M,
            "aria-hidden": !0,
            children: (0, t.jsx)(r.A, {
                user: n,
                guildId: i ?? void 0,
                nameplate: m
            })
        })
    })
}

function g(e) {
    let {
        guildId: n
    } = e, i = (0, l.bG)([c.default], () => c.default.getCurrentUser());
    return null == i ? null : (0, t.jsx)(x, {
        user: i,
        guildId: n
    })
}