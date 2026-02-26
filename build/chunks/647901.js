/** chunk id: 647901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => c,
    x: () => d
});
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    l = n(6211);
let _ = {
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
    s = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function c() {
    return i.useContext(s)
}

function d(e) {
    let {
        children: t,
        size: n,
        color: a,
        weight: d
    } = e, u = c(), m = i.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? u.size,
                color: a ?? u.color,
                weight: d ?? u.weight
            },
            t = o()(_.SIZE[e.size], _.COLOR[e.color], _.WEIGHT[e.weight]);
        return "" !== t && (e.className = o()(l.zr, t)), e
    }, [n, a, d, u]);
    return (0, r.jsx)(s.Provider, {
        value: m,
        children: t
    })
}