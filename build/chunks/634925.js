/** Chunk was on 88615 **/
/** chunk id: 634925, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => f,
    h: () => v
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(172218),
    o = n(294384),
    s = n(363487),
    a = n(998418),
    u = n(813847),
    d = n(890942),
    c = n(79275),
    p = n(224331),
    m = n(568065);

function f(e) {
    let {
        guildId: t,
        powerup: n,
        className: l
    } = e, i = (0, a.Ay)(t, n), s = i.type !== m.b_.LEVEL_ACTIVATED, c = (0, o.A)(t, n, "GuildPowerupCardBodyFooter"), p = (0, u.e)(n, i, c);
    return (0, r.jsx)(d.$L, {
        status: p,
        cost: s ? n.cost : void 0,
        className: l
    })
}

function v(e) {
    var t;
    let {
        guildId: n,
        powerup: u,
        badge: f,
        className: v,
        onHover: g,
        children: A
    } = e, _ = (0, s.A)(n), x = (0, a.Ay)(n, u), h = x.type !== m.b_.INACTIVE, b = (null == (t = x.sourceEntitlement) ? void 0 : t.ends_at) != null, j = (0, o.A)(n, u, "GuildPowerupCard"), E = l.useRef(null), w = (0, p.A)(n, u), [y, I] = l.useState(!1), S = (0, i.K)(I, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.NI, {
            label: u.title,
            isActive: h,
            isWarning: b,
            badge: f,
            canRollback: j,
            onClick: w,
            onMouseOver: () => null == g ? void 0 : g(!0),
            onMouseLeave: () => null == g ? void 0 : g(!1),
            className: v,
            ref: e => {
                E.current = e, S.current = e
            },
            children: A
        }), !j && _ && (0, r.jsx)(c.A, {
            powerup: u,
            targetRef: E,
            isCardVisible: y
        })]
    })
}