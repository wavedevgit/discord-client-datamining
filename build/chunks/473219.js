/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    W: () => g
});
var i = t(627968),
    a = t(64700),
    l = t(311907),
    s = t(688810),
    r = t(512213),
    d = t(637193),
    o = t(919395),
    c = t(287809),
    u = t(84540),
    _ = t(930349),
    A = t(985018),
    x = t(432856);

function p(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: l
    } = (0, s.Ay)(), c = null != t, {
        guildNameplate: p,
        pendingNameplate: g
    } = (0, o.rv)(n, t ?? void 0), m = (0, o.lw)({
        pendingValue: g,
        userValue: n.collectibles?.nameplate,
        guildValue: p,
        guildId: t ?? void 0
    }), I = void 0 !== g, f = c ? p : n.collectibles?.nameplate, b = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: l,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [l, t]);
    if (null == m) return (0, i.jsx)(_.kL, {
        variant: "bar",
        onClick: b,
        accessibleLabel: A.intl.string(A.t.BwdeM1),
        children: (0, i.jsx)("div", {
            className: x.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(r.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: m
            })
        })
    });
    let h = I ? null != g : null != f,
        v = c && n.collectibles?.nameplate != null,
        j = h ? {
            onClick: () => (0, u.p)({
                guildId: t ?? void 0,
                nameplate: null
            }),
            type: v ? "reset" : "remove",
            accessibleLabel: A.intl.string(v ? A.t.neYqhR : A.t["9zwziY"])
        } : void 0;
    return (0, i.jsx)(_.NW, {
        variant: "bar",
        onClick: b,
        accessibleLabel: A.intl.string(A.t.BwdeM1),
        deleteButtonConfig: j,
        children: (0, i.jsx)("div", {
            className: x.M,
            "aria-hidden": !0,
            children: (0, i.jsx)(r.A, {
                user: n,
                guildId: t ?? void 0,
                nameplate: m
            })
        })
    })
}

function g(e) {
    let {
        guildId: n
    } = e, t = (0, l.bG)([c.default], () => c.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(p, {
        user: t,
        guildId: n
    })
}