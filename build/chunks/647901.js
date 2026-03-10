/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
a.d(t, {
    X: () => _,
    x: () => d
});
var n = a(627968),
    r = a(64700),
    i = a(503698),
    o = a.n(i),
    s = a(865513);
let l = {
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
    c = r.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function _() {
    return r.useContext(c)
}

function d(e) {
    let {
        children: t,
        size: a,
        color: i,
        weight: d
    } = e, u = _(), p = r.useMemo(() => {
        let e = {
                className: void 0,
                size: a ?? u.size,
                color: i ?? u.color,
                weight: d ?? u.weight
            },
            t = o()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
        return "" !== t && (e.className = o()(s.zr, t)), e
    }, [a, i, d, u]);
    return (0, n.jsx)(c.Provider, {
        value: p,
        children: t
    })
}