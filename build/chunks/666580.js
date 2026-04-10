/** chunk id: 666580 params = (module,exports,require) **/
n.d(t, {
    A: () => s
});
var a = n(627968),
    l = n(64700),
    i = n(397927),
    r = n(105769);
let s = e => {
    let {
        element: t,
        onChange: n,
        state: s
    } = e, d = t.name, {
        title: o,
        options: c
    } = t.data, u = s?.[d]?.value ?? void 0, [_, m] = l.useState(u);
    l.useEffect(() => {
        m(u)
    }, [u]);
    let p = l.useMemo(() => c.map(e => ({
            name: e.label,
            value: e.value
        })), [c]),
        h = l.useCallback(e => {
            null != e && (m(e), n(d, e))
        }, [n, d]);
    return (0, a.jsxs)("div", {
        children: [(0, a.jsxs)(i.Text, {
            variant: "text-md/medium",
            color: "text-strong",
            className: r.P,
            children: [o, t.should_submit_data && (0, a.jsx)("span", {
                className: r.m,
                children: "*"
            })]
        }), (0, a.jsx)(i.z6M, {
            value: _,
            onChange: h,
            options: p
        })]
    })
}