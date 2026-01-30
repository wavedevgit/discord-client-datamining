/** chunk id: 647901, original params: e,t,n (module,exports,require) **/
n.d(t, {
    X: () => s,
    x: () => d
});
var r = n(627968),
    i = n(64700),
    o = n(503698),
    a = n.n(o),
    l = n(865513);
let c = {
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
    _ = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function s() {
    return i.useContext(_)
}

function d(e) {
    let {
        children: t,
        size: n,
        color: o,
        weight: d
    } = e, u = s(), p = i.useMemo(() => {
        let e = {
                className: void 0,
                size: null != n ? n : u.size,
                color: null != o ? o : u.color,
                weight: null != d ? d : u.weight
            },
            t = a()(c.SIZE[e.size], c.COLOR[e.color], c.WEIGHT[e.weight]);
        return "" !== t && (e.className = a()(l.zr, t)), e
    }, [n, o, d, u]);
    return (0, r.jsx)(_.Provider, {
        value: p,
        children: t
    })
}