/** chunk id: 729168 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    l = n.n(r),
    s = n(397927),
    o = n(770178),
    d = n(652215),
    c = n(311401);
let u = a.forwardRef(function(e, t) {
    let {
        topContent: n,
        title: r,
        subtitle: u,
        buttons: A,
        background: _,
        className: h
    } = e, [m, g] = a.useState("display-lg"), p = a.useCallback(e => {
        g(e.contentRect.width < 500 ? "display-md" : "display-lg")
    }, []), E = (0, o.w)(p, [], {
        fireOnMount: !0
    });
    return (0, i.jsx)(s.NPJ, {
        theme: d.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: e => (0, i.jsx)("div", {
            className: l()(c.iE, e, h),
            ref: e => {
                E.current = e, "function" == typeof t ? t(e) : null != t && (t.current = e)
            },
            children: (0, i.jsxs)("div", {
                className: c.FG,
                children: [(0, i.jsxs)(s.BJc, {
                    className: c.Qs,
                    direction: "vertical",
                    justify: null != n ? "space-between" : "end",
                    children: [n, (0, i.jsxs)(s.BJc, {
                        className: c.yp,
                        gap: 16,
                        children: [(0, i.jsxs)(s.BJc, {
                            gap: 8,
                            children: [(0, i.jsx)(s.Heading, {
                                color: "text-strong",
                                variant: m,
                                className: c.DD,
                                children: r
                            }), (0, i.jsx)(s.Text, {
                                color: "text-strong",
                                variant: "text-md/normal",
                                className: c.VA,
                                children: u
                            })]
                        }), A]
                    })]
                }), _]
            })
        })
    })
})