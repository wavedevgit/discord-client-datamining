/** chunk id: 273166, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => o
});
var i = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    l = n(252052);

function o(e) {
    let {
        className: t,
        header: n,
        headerClassName: a,
        children: o
    } = e, c = s.useMemo(() => {
        let e = !1;
        return s.Children.forEach(o, t => {
            null != t && (e = !0)
        }), e
    }, [o]);
    return (0, i.jsxs)("div", {
        className: r()(l.iE, t),
        children: [(0, i.jsx)("div", {
            className: r()(l.wx, a),
            children: n
        }), c && (0, i.jsx)("div", {
            className: l.Qs,
            children: o
        })]
    })
}