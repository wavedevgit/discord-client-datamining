/** chunk id: 388096 params = (module,exports,require) **/
n.d(t, {
    A: () => d
});
var i = n(627968),
    l = n(64700),
    s = n(989349),
    a = n.n(s),
    r = n(397927),
    o = n(985018),
    c = n(253794);

function d(e) {
    let {
        defaultValue: t,
        onChange: n
    } = e, [s, d] = l.useState(t), u = a()(), h = a()().add(365, "days"), m = e => {
        e.isValid() && d(e)
    };
    return l.useEffect(() => {
        n?.(s)
    }, [s, n]), (0, i.jsxs)(r.BJc, {
        direction: "horizontal",
        gap: 16,
        className: c.i,
        children: [(0, i.jsx)("div", {
            className: c.f,
            children: (0, i.jsx)(r.J3s, {
                required: !0,
                label: o.intl.string(o.t.pSZKvM),
                value: s,
                onSelect: m,
                minDate: u,
                maxDate: h,
                disabled: !1
            })
        }), (0, i.jsx)("div", {
            className: c.f,
            children: (0, i.jsx)(r.czz, {
                label: o.intl.string(o.t.GOmEb8),
                required: !0,
                value: s,
                onChange: m,
                hideValue: !1,
                disabled: !1
            })
        })]
    })
}