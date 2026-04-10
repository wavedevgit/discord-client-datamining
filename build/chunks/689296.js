/** chunk id: 689296 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    s = n(64700),
    l = n(827734),
    r = n(397927),
    a = n(985018),
    o = n(346069);

function d(e) {
    let {
        children: t,
        lineClamp: n = 2,
        ...d
    } = e, [c, u] = s.useState(!1), [m, g] = s.useState(null), _ = null != m && (0, i.jsx)("button", {
        className: o.x6,
        onClick: () => u(e => !e),
        children: (0, i.jsxs)(r.Text, {
            className: o.B0,
            variant: "text-sm/medium",
            color: "text-brand",
            children: [c ? a.intl.string(a.t["JQX/Pb"]) : a.intl.string(a.t.Fbrd8J), c ? (0, i.jsx)(r.tN5, {
                color: l.A.colors.TEXT_BRAND,
                size: "xs"
            }) : (0, i.jsx)(r.abt, {
                color: l.A.colors.TEXT_BRAND,
                size: "xs"
            })]
        })
    }), [x, A] = s.useState(null), h = s.useCallback(() => {
        if (null == x) return;
        let {
            scrollHeight: e,
            clientHeight: t
        } = x;
        e > t && g({
            truncatedHeight: t,
            expandedHeight: e
        })
    }, [x]);
    s.useEffect(() => {
        requestAnimationFrame(h)
    }, [h, t, n]);
    let p = "auto";
    return null != m && (p = c ? `${m.expandedHeight}px` : `${m.truncatedHeight}px`), (0, i.jsxs)("div", {
        children: [(0, i.jsx)(r.Text, {
            ...d,
            className: o.Qs,
            lineClamp: c ? void 0 : n,
            ref: A,
            style: {
                height: p
            },
            children: t
        }), _]
    })
}