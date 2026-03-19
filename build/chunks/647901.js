/** chunk id: 647901 params = (module,exports,require) **/
n.d(t, {
    X: () => c,
    x: () => s
});
var r = n(627968),
    a = n(64700),
    o = n(503698),
    _ = n.n(o),
    i = n(6211);
let d = {
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
    l = a.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function c() {
    return a.useContext(l)
}

function s(e) {
    let {
        children: t,
        size: n,
        color: o,
        weight: s
    } = e, u = c(), f = a.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? u.size,
                color: o ?? u.color,
                weight: s ?? u.weight
            },
            t = _()(d.SIZE[e.size], d.COLOR[e.color], d.WEIGHT[e.weight]);
        return "" !== t && (e.className = _()(i.zr, t)), e
    }, [n, o, s, u]);
    return (0, r.jsx)(l.Provider, {
        value: f,
        children: t
    })
}