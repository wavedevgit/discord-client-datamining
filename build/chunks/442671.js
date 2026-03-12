/** chunk id: 442671 params = (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(615300),
    o = n(837381),
    d = n(158954),
    c = n(688810),
    u = n(657331),
    _ = n(635281);
let m = e => {
    let {
        userId: t,
        children: n,
        isLast: l,
        className: m
    } = e, [g, A] = s.useState(!1), {
        analyticsLocations: h
    } = (0, c.Ay)(), x = s.useCallback(() => {
        (0, u.openUserProfileModal)({
            userId: t,
            sourceAnalyticsLocations: h
        })
    }, [t, h]), p = () => {
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
            children: (0, i.jsx)(a.A.div, {
                style: {
                    opacity: 1
                },
                className: r()(_.KG, m, {
                    [_.HV]: l,
                    [_.vu]: g
                }),
                onMouseEnter: p,
                onMouseLeave: T,
                onClick: x,
                ...e,
                children: n(g)
            })
        })
    })
}