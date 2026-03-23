/** chunk id: 442671 params = (module,exports,require) **/
n.d(t, {
    A: () => _
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
    m = n(331011);
let _ = e => {
    let {
        userId: t,
        children: n,
        isLast: l,
        className: _
    } = e, [g, A] = s.useState(!1), {
        analyticsLocations: x
    } = (0, c.Ay)(), p = s.useCallback(() => {
        (0, u.openUserProfileModal)({
            userId: t,
            sourceAnalyticsLocations: x
        })
    }, [t, x]), h = () => {
        A(!0)
    }, T = () => {
        A(!1)
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
                className: a()(m.KG, _, {
                    [m.HV]: l,
                    [m.vu]: g
                }),
                onMouseEnter: h,
                onMouseLeave: T,
                onClick: p,
                ...e,
                children: n(g)
            })
        })
    })
}