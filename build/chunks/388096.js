/** Chunk was on 78528 **/
/** chunk id: 388096, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => u
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(989349),
    s = n.n(i),
    a = n(397927),
    o = n(985018),
    c = n(789906);

function u(e) {
    let {
        defaultValue: t,
        onChange: n
    } = e, [i, u] = l.useState(t), d = s()(), p = s()().add(365, "days"), h = e => {
        e.isValid() && u(e)
    };
    return l.useEffect(() => {
        null == n || n(i)
    }, [i, n]), (0, r.jsxs)(a.BJc, {
        direction: "horizontal",
        gap: 16,
        className: c.i,
        children: [(0, r.jsx)("div", {
            className: c.f,
            children: (0, r.jsx)(a.J3s, {
                required: !0,
                label: o.intl.string(o.t.pSZKvM),
                value: i,
                onSelect: h,
                minDate: d,
                maxDate: p,
                disabled: !1
            })
        }), (0, r.jsx)("div", {
            className: c.f,
            children: (0, r.jsx)(a.czz, {
                label: o.intl.string(o.t.GOmEb8),
                required: !0,
                value: i,
                onChange: h,
                hideValue: !1,
                disabled: !1
            })
        })]
    })
}