/** chunk id: 473219 params = (module,exports,require) **/
t.d(n, {
    A: () => A
});
var i = t(627968),
    a = t(64700),
    l = t(688810),
    r = t(512213),
    d = t(637193),
    s = t(713517),
    o = t(919395),
    c = t(84540),
    _ = t(930349),
    u = t(985018),
    p = t(432856);

function A(e) {
    let {
        user: n,
        guildId: t,
        disabled: A
    } = e, {
        analyticsLocations: g
    } = (0, l.Ay)(), m = null != t, f = a.useRef(null), {
        isHoveringOrFocusing: h
    } = (0, s.A)(f), {
        guildNameplate: I,
        pendingNameplate: x
    } = (0, o.rv)(n, t ?? void 0), b = (0, o.lw)({
        pendingValue: x,
        userValue: n.collectibles?.nameplate,
        guildValue: I,
        guildId: t ?? void 0
    }), v = void 0 !== x, E = m ? I : n.collectibles?.nameplate, y = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: g,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [g, t]), j = m && n.collectibles?.nameplate != null, T = null != b && (v ? null != x : null != E) ? {
        onClick: () => (0, c.p)({
            guildId: t ?? void 0,
            nameplate: null
        }),
        type: j ? "reset" : "remove",
        accessibleLabel: u.intl.string(j ? u.t.neYqhR : u.t["9zwziY"])
    } : void 0, N = (0, i.jsx)("div", {
        className: p.M,
        "aria-hidden": !0,
        children: (0, i.jsx)(r.A, {
            user: n,
            guildId: t ?? void 0,
            nameplate: b,
            showPlaceholderUser: null == b || !h || A
        })
    });
    return (0, i.jsx)("div", {
        ref: f,
        children: null == b ? (0, i.jsx)(_.kL, {
            variant: "bar",
            onClick: y,
            accessibleLabel: u.intl.string(u.t.BwdeM1),
            disabled: A,
            children: N
        }) : (0, i.jsx)(_.NW, {
            variant: "bar",
            onClick: y,
            accessibleLabel: u.intl.string(u.t.BwdeM1),
            deleteButtonConfig: T,
            disabled: A,
            children: N
        })
    })
}