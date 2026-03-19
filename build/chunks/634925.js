/** chunk id: 634925 params = (module,exports,require) **/
n.d(t, {
    A: () => _,
    h: () => A
});
var r = n(627968),
    i = n(64700),
    l = n(172218),
    s = n(294384),
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
    } = e, l = (0, a.Ay)(t, n), o = l.type !== m.b_.LEVEL_ACTIVATED, c = (0, s.A)(t, n, "GuildPowerupCardBodyFooter"), p = (0, u.e)(n, l, c);
    return (0, r.jsx)(d.$L, {
        status: p,
        cost: o ? n.cost : void 0,
        className: i
    })
}

function A(e) {
    let {
        guildId: t,
        powerup: n,
        badge: u,
        className: _,
        onHover: A,
        children: f
    } = e, g = (0, o.A)(t), x = (0, a.Ay)(t, n), v = x.type !== m.b_.INACTIVE, h = x.sourceEntitlement?.ends_at != null, E = (0, s.A)(t, n, "GuildPowerupCard"), b = i.useRef(null), I = (0, p.A)(t, n), [j, S] = i.useState(!1), C = (0, l.K)(S, 1);
    return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(d.NI, {
            label: n.title,
            isActive: v,
            isWarning: h,
            badge: u,
            canRollback: E,
            onClick: I,
            onMouseOver: () => A?.(!0),
            onMouseLeave: () => A?.(!1),
            className: _,
            ref: e => {
                b.current = e, C.current = e
            },
            children: f
        }), !E && g && (0, r.jsx)(c.A, {
            powerup: n,
            targetRef: b,
            isCardVisible: j
        })]
    })
}