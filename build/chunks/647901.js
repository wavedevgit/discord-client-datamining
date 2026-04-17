/** chunk id: 647901 params = (module,exports,require) **/
a.d(t, {
    X: () => s,
    x: () => l
});
var r = a(627968),
    n = a(64700),
    o = a(503698),
    i = a.n(o),
    c = a(85092);
let _ = {
        SIZE: {
            default: void 0,
            reduced: c.k2
        },
        COLOR: {
            default: void 0,
            muted: c.JF
        },
        WEIGHT: {
            default: void 0,
            reduced: c.Xj
        }
    },
    d = n.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function s() {
    return n.useContext(d)
}

function l(e) {
    let {
        children: t,
        size: a,
        color: o,
        weight: l
    } = e, u = s(), m = n.useMemo(() => {
        let e = {
                className: void 0,
                size: a ?? u.size,
                color: o ?? u.color,
                weight: l ?? u.weight
            },
            t = i()(_.SIZE[e.size], _.COLOR[e.color], _.WEIGHT[e.weight]);
        return "" !== t && (e.className = i()(c.zr, t)), e
    }, [a, o, l, u]);
    return (0, r.jsx)(d.Provider, {
        value: m,
        children: t
    })
}