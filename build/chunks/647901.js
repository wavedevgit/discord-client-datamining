/** chunk id: 647901 params = (module,exports,require) **/
n.d(t, {
    X: () => d,
    x: () => u
});
var l = n(627968),
    s = n(64700),
    a = n(503698),
    r = n.n(a),
    i = n(865513);
let o = {
        SIZE: {
            default: void 0,
            reduced: i.k2
        },
        COLOR: {
            default: void 0,
            muted: i.JF
        },
        WEIGHT: {
            default: void 0,
            reduced: i.Xj
        }
    },
    c = s.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function d() {
    return s.useContext(c)
}

function u(e) {
    let {
        children: t,
        size: n,
        color: a,
        weight: u
    } = e, h = d(), m = s.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? h.size,
                color: a ?? h.color,
                weight: u ?? h.weight
            },
            t = r()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = r()(i.zr, t)), e
    }, [n, a, u, h]);
    return (0, l.jsx)(c.Provider, {
        value: m,
        children: t
    })
}