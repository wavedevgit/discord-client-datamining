/** chunk id: 647901 params = (module,exports,require) **/
n.d(t, {
    X: () => c,
    x: () => u
});
var i = n(627968),
    s = n(64700),
    r = n(503698),
    a = n.n(r),
    l = n(865513);
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
        children: t,
        size: n,
        color: r,
        weight: u
    } = e, _ = c(), A = s.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? _.size,
                color: r ?? _.color,
                weight: u ?? _.weight
            },
            t = a()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = a()(l.zr, t)), e
    }, [n, r, u, _]);
    return (0, i.jsx)(d.Provider, {
        value: A,
        children: t
    })
}