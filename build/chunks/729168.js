/** chunk id: 729168 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(770178),
    d = n(311401);
let c = a.forwardRef(function(e, t) {
    let {
        topContent: n,
        title: r,
        subtitle: c,
        buttons: u,
        background: A,
        className: h
    } = e, [_, m] = a.useState("display-lg"), p = a.useCallback(e => {
        m(e.contentRect.width < 500 ? "display-md" : "display-lg")
    }, []), g = (0, o.w)(p, [], {
        fireOnMount: !0
    });
    return (0, i.jsx)("div", {
        className: l()(d.iE, "theme-midnight", h),
        ref: e => {
            g.current = e, "function" == typeof t ? t(e) : null != t && (t.current = e)
        },
        children: (0, i.jsxs)("div", {
            className: d.FG,
            children: [(0, i.jsxs)(s.BJc, {
                className: d.Qs,
                direction: "vertical",
                justify: null != n ? "space-between" : "end",
                children: [n, (0, i.jsxs)(s.BJc, {
                    className: d.yp,
                    gap: 16,
                    children: [(0, i.jsxs)(s.BJc, {
                        gap: 8,
                        children: [(0, i.jsx)(s.Heading, {
                            color: "text-strong",
                            variant: _,
                            className: d.DD,
                            children: r
                        }), (0, i.jsx)(s.Text, {
                            color: "text-strong",
                            variant: "text-md/normal",
                            className: d.VA,
                            children: c
                        })]
                    }), u]
                })]
            }), A]
        })
    })
})