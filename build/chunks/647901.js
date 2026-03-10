/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => _,
    x: () => d
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
    c = n(865513);
let o = {
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
    l = r.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function _() {
    return r.useContext(l)
}

function d(e) {
    let {
        children: t,
        size: n,
        color: i,
        weight: d
    } = e, u = _(), m = r.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? u.size,
                color: i ?? u.color,
                weight: d ?? u.weight
            },
            t = s()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = s()(c.zr, t)), e
    }, [n, i, d, u]);
    return (0, a.jsx)(l.Provider, {
        value: m,
        children: t
    })
}