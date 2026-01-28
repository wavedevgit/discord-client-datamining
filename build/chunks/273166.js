/** Chunk was on 5606 **/
/** chunk id: 273166, original params: e,t,n (module,exports,require) **/
n.d(t, {
    q: () => o
});
var r = n(627968),
    i = n(64700),
    l = n(503698),
    s = n.n(l),
    a = n(252052);

function o(e) {
    let {
        className: t,
        header: n,
        headerClassName: l,
        children: o
    } = e, c = i.useMemo(() => {
        let e = !1;
        return i.Children.forEach(o, t => {
            null != t && (e = !0)
        }), e
    }, [o]);
    return (0, r.jsxs)("div", {
        className: s()(a.iE, t),
        children: [(0, r.jsx)("div", {
            className: s()(a.wx, l),
            children: n
        }), c && (0, r.jsx)("div", {
            className: a.Qs,
            children: o
        })]
    })
}