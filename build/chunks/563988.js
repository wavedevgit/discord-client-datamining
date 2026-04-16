/** chunk id: 563988 params = (module,exports,require) **/
n.d(t, {
    R: () => o
});
var a = n(627968),
    l = n(64700),
    i = n(951707),
    r = n(183802),
    s = n(627771);

function o(e) {
    let {
        skuIds: t,
        analyticsLocations: n,
        onCardClick: o
    } = e, c = l.useMemo(() => {
        if (null != o) return (e, t) => {
            let {
                skuId: n,
                applicationId: a
            } = t;
            e.preventDefault(), o(n, a)
        }
    }, [o]);
    return null == t || 0 === t.length ? null : (0, a.jsx)(i.A, {
        gap: "md",
        children: t.map((e, t) => (0, a.jsx)("div", {
            className: s.B,
            children: (0, a.jsx)(r.A, {
                positionInSection: t,
                skuId: e,
                variant: r.s.SMALL,
                analyticsLocations: n,
                onClick: c
            })
        }, `${e}-${t}`))
    })
}