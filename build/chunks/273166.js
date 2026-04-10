/** chunk id: 273166 params = (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(965031);

function o(e) {
    let {
        className: t,
        header: n,
        headerClassName: l,
        children: o
    } = e, d = s.useMemo(() => {
        let e = !1;
        return s.Children.forEach(o, t => {
            null != t && (e = !0)
        }), e
    }, [o]);
    return (0, i.jsxs)("div", {
        className: r()(a.iE, t),
        children: [(0, i.jsx)("div", {
            className: r()(a.wx, l),
            children: n
        }), d && (0, i.jsx)("div", {
            className: a.Qs,
            children: o
        })]
    })
}