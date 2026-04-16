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
    u = t(930349),
    _ = t(985018),
    p = t(535592);

function A(e) {
    let {
        user: n,
        guildId: t,
        disabled: A
    } = e, {
        analyticsLocations: g
    } = (0, l.Ay)(), f = null != t, h = a.useRef(null), {
        isHoveringOrFocusing: m
    } = (0, s.A)(h), {
        guildNameplate: x,
        pendingNameplate: I
    } = (0, o.rv)(n, t ?? void 0), b = (0, o.lw)({
        pendingValue: I,
        userValue: n.collectibles?.nameplate,
        guildValue: x,
        guildId: t ?? void 0
    }), v = void 0 !== I, E = f ? x : n.collectibles?.nameplate, j = a.useCallback(() => {
        (0, d.p)({
            analyticsLocations: g,
            guildId: t ?? void 0,
            stackingBehavior: "stack"
        })
    }, [g, t]), y = f && n.collectibles?.nameplate != null, T = null != b && (v ? null != I : null != E) ? {
        onClick: () => (0, c.p)({
            guildId: t ?? void 0,
            nameplate: null
        }),
        type: y ? "reset" : "remove",
        accessibleLabel: _.intl.string(y ? _.t.neYqhR : _.t["9zwziY"])
    } : void 0, S = (0, i.jsx)("div", {
        className: p.M,
        "aria-hidden": !0,
        children: (0, i.jsx)(r.A, {
            user: n,
            guildId: t ?? void 0,
            nameplate: b,
            showPlaceholderUser: null == b || !m || A
        })
    });
    return (0, i.jsx)("div", {
        ref: h,
        children: null == b ? (0, i.jsx)(u.kL, {
            variant: "bar",
            onClick: j,
            accessibleLabel: _.intl.string(_.t.BwdeM1),
            disabled: A,
            children: S
        }) : (0, i.jsx)(u.NW, {
            variant: "bar",
            onClick: j,
            accessibleLabel: _.intl.string(_.t.BwdeM1),
            deleteButtonConfig: T,
            disabled: A,
            children: S
        })
    })
}