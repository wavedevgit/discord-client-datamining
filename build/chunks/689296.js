/** chunk id: 689296, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    a = n(827734),
    r = n(397927),
    l = n(985018),
    o = n(927078);

function c(e) {
    let {
        children: t,
        lineClamp: n = 2,
        ...c
    } = e, [d, u] = s.useState(!1), [_, m] = s.useState(null), A = null != _ && (0, i.jsx)("button", {
        className: o.x6,
        onClick: () => u(e => !e),
        children: (0, i.jsxs)(r.Text, {
            className: o.B0,
            variant: "text-sm/medium",
            color: "text-brand",
            children: [d ? l.intl.string(l.t["JQX/Pb"]) : l.intl.string(l.t.Fbrd8J), d ? (0, i.jsx)(r.tN5, {
                color: a.A.colors.TEXT_BRAND,
                size: "xs"
            }) : (0, i.jsx)(r.abt, {
                color: a.A.colors.TEXT_BRAND,
                size: "xs"
            })]
        })
    }), [g, h] = s.useState(null), x = s.useCallback(() => {
        if (null == g) return;
        let {
            scrollHeight: e,
            clientHeight: t
        } = g;
        e > t && m({
            truncatedHeight: t,
            expandedHeight: e
        })
    }, [g]);
    s.useEffect(() => {
        requestAnimationFrame(x)
    }, [x, t, n]);
    let p = "auto";
    return null != _ && (p = d ? `${_.expandedHeight}px` : `${_.truncatedHeight}px`), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Text, {
            ...c,
            className: o.Qs,
            lineClamp: d ? void 0 : n,
            ref: h,
            style: {
                height: p
            },
            children: t
        }), A]
    })
}