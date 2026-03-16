/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => _,
    x: () => d
});
var i = n(627968),
    a = n(64700),
    r = n(503698),
    s = n.n(r),
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
    c = a.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function _() {
    return a.useContext(c)
}

function d(e) {
    let {
        children: t,
        size: n,
        color: r,
        weight: d
    } = e, u = _(), I = a.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? u.size,
                color: r ?? u.color,
                weight: d ?? u.weight
            },
            t = s()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = s()(l.zr, t)), e
    }, [n, r, d, u]);
    return (0, i.jsx)(c.Provider, {
        value: I,
        children: t
    })
}