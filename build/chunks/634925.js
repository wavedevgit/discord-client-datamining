/** chunk id: 634925 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    h: () => x
});
var r = n(627968),
    i = n(64700),
    l = n(172218),
    s = n(294384),
    a = n(363487),
    o = n(998418),
    d = n(813847),
    u = n(890942),
    c = n(79275),
    m = n(224331),
    p = n(568065);

function _(e) {
    let {
        guildId: t,
        powerup: n,
        className: i
    } = e, l = (0, o.Ay)(t, n), a = l.type !== p.b_.LEVEL_ACTIVATED, c = (0, s.A)(t, n, "GuildPowerupCardBodyFooter"), m = (0, d.e)(n, l, c);
    return (0, r.jsx)(u.$L, {
        status: m,
        cost: a ? n.cost : void 0,
        className: i
    })
}

function x(e) {
    let {
        guildId: t,
        powerup: n,
        badge: d,
        className: _,
        onHover: x,
        children: A
    } = e, f = (0, a.A)(t), g = (0, o.Ay)(t, n), v = g.type !== p.b_.INACTIVE, h = g.sourceEntitlement?.ends_at != null, b = (0, s.A)(t, n, "GuildPowerupCard"), j = i.useRef(null), E = (0, m.A)(t, n), [I, C] = i.useState(!1), S = (0, l.K)(C, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(u.NI, {
            label: n.title,
            isActive: v,
            isWarning: h,
            badge: d,
            canRollback: b,
            onClick: E,
            onMouseOver: () => x?.(!0),
            onMouseLeave: () => x?.(!1),
            className: _,
            ref: e => {
                j.current = e, S.current = e
            },
            children: A
        }), !b && f && (0, r.jsx)(c.A, {
            powerup: n,
            targetRef: j,
            isCardVisible: I
        })]
    })
}