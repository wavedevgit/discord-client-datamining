/** chunk id: 388096, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var l = n(627968),
    r = n(64700),
    i = n(989349),
    a = n.n(i),
    s = n(397927),
    o = n(985018),
    c = n(789906);

function u(e) {
    let {
        defaultValue: t,
        onChange: n
    } = e, [i, u] = r.useState(t), d = a()(), h = a()().add(365, "days"), p = e => {
        e.isValid() && u(e)
    };
    return r.useEffect(() => {
        null == n || n(i)
    }, [i, n]), (0, l.jsxs)(s.BJc, {
        direction: "horizontal",
        gap: 16,
        className: c.i,
        children: [(0, l.jsx)("div", {
            className: c.f,
            children: (0, l.jsx)(s.J3s, {
                required: !0,
                label: o.intl.string(o.t.pSZKvM),
                value: i,
                onSelect: p,
                minDate: d,
                maxDate: h,
                disabled: !1
            })
        }), (0, l.jsx)("div", {
            className: c.f,
            children: (0, l.jsx)(s.czz, {
                label: o.intl.string(o.t.GOmEb8),
                required: !0,
                value: i,
                onChange: p,
                hideValue: !1,
                disabled: !1
            })
        })]
    })
}