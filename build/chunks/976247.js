/** chunk id: 976247 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968),
    r = n(64700),
    a = n(503698),
    l = n.n(a),
    o = n(452282),
    s = n(967758),
    d = n(369254),
    u = n(358731),
    h = n(158816);
let c = r.memo(function(e) {
    let {
        items: t,
        currentIndex: n,
        children: a
    } = e, c = t[n], m = t.length > 1, p = (0, s.A)(m, {
        width: c.width,
        height: c.height
    }), [g, f] = r.useState(0);
    return r.useEffect(() => {
        let e = () => f(e => e + 1);
        return window.addEventListener("resize", e), () => window.removeEventListener("resize", e)
    }), r.useEffect(() => {
        if (t.length > 1) {
            let e = t[(0, o.U3)(n - 1, t.length)],
                i = t[(0, o.U3)(n + 1, t.length)];
            (0, d.Z)(e, !0), t.length > 2 && (0, d.Z)(i, !0)
        }
    }, [n, t]), (0, i.jsx)(u.Ay, {
        mode: u.nY.PINNED,
        children: e => (0, i.jsx)("div", {
            className: l()(h.k4, e),
            children: (0, i.jsx)("div", {
                children: p.width > 0 && p.height > 0 && a(p.width, p.height)
            }, c.url)
        })
    })
})