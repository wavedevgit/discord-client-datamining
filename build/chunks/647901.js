/** chunk id: 647901 params = (module,exports,require) **/
t.d(n, {
    X: () => c,
    x: () => u
});
var i = t(627968),
    s = t(64700),
    r = t(503698),
    a = t.n(r),
    l = t(52403);
let o = {
        SIZE: {
            default: void 0,
            reduced: l.k2
        },
        COLOR: {
            default: void 0,
            muted: l.JF
        },
        WEIGHT: {
            default: void 0,
            reduced: l.Xj
        }
    },
    d = s.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function c() {
    return s.useContext(d)
}

function u(e) {
    let {
        children: n,
        size: t,
        color: r,
        weight: u
    } = e, A = c(), _ = s.useMemo(() => {
        let e = {
                className: void 0,
                size: t ?? A.size,
                color: r ?? A.color,
                weight: u ?? A.weight
            },
            n = a()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== n && (e.className = a()(l.zr, n)), e
    }, [t, r, u, A]);
    return (0, i.jsx)(d.Provider, {
        value: _,
        children: n
    })
}