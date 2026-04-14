/** chunk id: 647901 params = (module,exports,require) **/
n.d(t, {
    X: () => c,
    x: () => u
});
var r = n(627968),
    l = n(64700),
    i = n(503698),
    a = n.n(i),
    s = n(931220);
let o = {
        SIZE: {
            default: void 0,
            reduced: s.k2
        },
        COLOR: {
            default: void 0,
            muted: s.JF
        },
        WEIGHT: {
            default: void 0,
            reduced: s.Xj
        }
    },
    d = l.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function c() {
    return l.useContext(d)
}

function u(e) {
    let {
        children: t,
        size: n,
        color: i,
        weight: u
    } = e, m = c(), h = l.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? m.size,
                color: i ?? m.color,
                weight: u ?? m.weight
            },
            t = a()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = a()(s.zr, t)), e
    }, [n, i, u, m]);
    return (0, r.jsx)(d.Provider, {
        value: h,
        children: t
    })
}