/** chunk id: 347606 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    r = n.n(l),
    a = n(942381),
    o = n(894858),
    d = n(258791);

function c(e) {
    let {
        node: t,
        children: n
    } = e, [l, c] = s.useState(!1), u = s.useRef(null);
    return s.useEffect(() => {
        let e = o.A.subscribe(e => e.requestFlashKey, e => {
            e === t.key && (clearTimeout(u.current), c(!0), u.current = setTimeout(() => {
                c(!1), o.A.setState({
                    requestFlashKey: void 0
                })
            }, 100))
        }, {
            equalityFn: a.x,
            fireImmediately: !0
        });
        return () => {
            clearTimeout(u.current), e()
        }
    }, [t.key, t.type]), (0, i.jsx)("div", {
        "data-nav-anchor-key": t.key,
        className: r()(d.k, l && d.j),
        children: n
    })
}