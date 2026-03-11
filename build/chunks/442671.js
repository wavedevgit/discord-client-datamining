/** chunk id: 442671 params = (module,exports,require) **/
n.d(t, {
    A: () => g
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(615300),
    o = n(837381),
    d = n(158954),
    c = n(688810),
    u = n(657331),
    _ = n(331011);
let g = e => {
    let {
        userId: t,
        children: n,
        isLast: l,
        className: g
    } = e, [A, m] = s.useState(!1), {
        analyticsLocations: h
    } = (0, c.Ay)(), p = s.useCallback(() => {
        (0, u.openUserProfileModal)({
            userId: t,
            sourceAnalyticsLocations: h
        })
    }, [t, h]), x = () => {
        m(!0)
    }, E = () => {
        m(!1)
    };
    return (0, i.jsx)(o.tG, {
        id: t,
        children: e => (0, i.jsx)(d.vN3, {
            offset: {
                left: -8,
                right: -8
            },
            children: (0, i.jsx)(r.A.div, {
                style: {
                    opacity: 1
                },
                className: a()(_.KG, g, {
                    [_.HV]: l,
                    [_.vu]: A
                }),
                onMouseEnter: x,
                onMouseLeave: E,
                onClick: p,
                ...e,
                children: n(A)
            })
        })
    })
}