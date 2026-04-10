/** chunk id: 729168 params = (module,exports,require) **/
n.d(t, {
    A: () => u
});
var i = n(627968),
    r = n(64700),
    l = n(503698),
    a = n.n(l),
    s = n(397927),
    o = n(770178),
    d = n(652215),
    c = n(311401);
let u = r.forwardRef(function(e, t) {
    let {
        topContent: n,
        title: l,
        subtitle: u,
        buttons: A,
        background: h,
        className: _
    } = e, [m, g] = r.useState("display-lg"), p = r.useCallback(e => {
        g(e.contentRect.width < 500 ? "display-md" : "display-lg")
    }, []), E = (0, o.w)(p, [], {
        fireOnMount: !0
    });
    return (0, i.jsx)(s.NPJ, {
        theme: d.NJ8.MIDNIGHT,
        disableAdaptiveTheme: !0,
        children: e => (0, i.jsx)("div", {
            className: a()(c.iE, e, _),
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
                                children: l
                            }), (0, i.jsx)(s.Text, {
                                color: "text-strong",
                                variant: "text-md/normal",
                                className: c.VA,
                                children: u
                            })]
                        }), A]
                    })]
                }), h]
            })
        })
    })
})