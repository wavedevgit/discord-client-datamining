/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    W: () => m
});
var i = t(627968),
    a = t(64700),
    r = t(311907),
    l = t(688810),
    o = t(512213),
    d = t(637193),
    s = t(713517),
    c = t(919395),
    _ = t(287809),
    u = t(84540),
    p = t(930349),
    A = t(985018),
    g = t(432856);

function h(e) {
    let {
        user: n,
        guildId: t
    } = e, {
        analyticsLocations: r
    } = (0, l.Ay)(), _ = null != t, h = a.useRef(null), {
        isHoveringOrFocusing: m
    } = (0, s.A)(h), {
        guildNameplate: f,
        pendingNameplate: I
    } = (0, c.rv)(n, t ?? void 0), x = (0, c.lw)({
        pendingValue: I,
        userValue: n.collectibles?.nameplate,
        guildValue: f,
        guildId: t ?? void 0
    }), b = void 0 !== I, v = _ ? f : n.collectibles?.nameplate, E = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: r,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [r, t]), y = _ && n.collectibles?.nameplate != null, j = null != x && (b ? null != I : null != v) ? {
        onClick: () => (0, u.p)({
            guildId: t ?? void 0,
            nameplate: null
        }),
        type: y ? "reset" : "remove",
        accessibleLabel: A.intl.string(y ? A.t.neYqhR : A.t["9zwziY"])
    } : void 0, T = (0, i.jsx)("div", {
        className: g.M,
        "aria-hidden": !0,
        children: (0, i.jsx)(o.A, {
            user: n,
            guildId: t ?? void 0,
            nameplate: x,
            showPlaceholderUser: null == x || !m
        })
    });
    return (0, i.jsx)("div", {
        ref: h,
        children: null == x ? (0, i.jsx)(p.kL, {
            variant: "bar",
            onClick: E,
            accessibleLabel: A.intl.string(A.t.BwdeM1),
            children: T
        }) : (0, i.jsx)(p.NW, {
            variant: "bar",
            onClick: E,
            accessibleLabel: A.intl.string(A.t.BwdeM1),
            deleteButtonConfig: j,
            children: T
        })
    })
}

function m(e) {
    let {
        guildId: n
    } = e, t = (0, r.bG)([_.default], () => _.default.getCurrentUser());
    return null == t ? null : (0, i.jsx)(h, {
        user: t,
        guildId: n
    })
}