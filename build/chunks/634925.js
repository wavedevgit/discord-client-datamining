/** chunk id: 634925 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    h: () => f
});
var r = n(627968),
    i = n(64700),
    s = n(172218),
    l = n(294384),
    o = n(363487),
    a = n(998418),
    u = n(813847),
    d = n(890942),
    c = n(79275),
    p = n(224331),
    m = n(568065);

function _(e) {
    let {
        guildId: t,
        powerup: n,
        className: i
    } = e, s = (0, a.Ay)(t, n), o = s.type !== m.b_.LEVEL_ACTIVATED, c = (0, l.A)(t, n, "GuildPowerupCardBodyFooter"), p = (0, u.e)(n, s, c);
    return (0, r.jsx)(d.$L, {
        status: p,
        cost: o ? n.cost : void 0,
        className: i
    })
}

function f(e) {
    let {
        guildId: t,
        powerup: n,
        badge: u,
        className: _,
        onHover: f,
        children: g
    } = e, x = (0, o.A)(t), A = (0, a.Ay)(t, n), v = A.type !== m.b_.INACTIVE, h = A.sourceEntitlement?.ends_at != null, E = (0, l.A)(t, n, "GuildPowerupCard"), j = i.useRef(null), b = (0, p.A)(t, n), [I, S] = i.useState(!1), C = (0, s.K)(S, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.NI, {
            label: n.title,
            isActive: v,
            isWarning: h,
            badge: u,
            canRollback: E,
            onClick: b,
            onMouseOver: () => f?.(!0),
            onMouseLeave: () => f?.(!1),
            className: _,
            ref: e => {
                j.current = e, C.current = e
            },
            children: g
        }), !E && x && (0, r.jsx)(c.A, {
            powerup: n,
            targetRef: j,
            isCardVisible: I
        })]
    })
}