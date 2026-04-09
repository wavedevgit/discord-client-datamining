/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => _,
    x: () => u
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    o = n.n(i),
    s = n(931220);
let c = {
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
    l = r.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function _() {
    return r.useContext(l)
}

function u(e) {
    let {
        children: t,
        size: n,
        color: i,
        weight: u
    } = e, d = _(), m = r.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? d.size,
                color: i ?? d.color,
                weight: u ?? d.weight
            },
            t = o()(c.SIZE[e.size], c.COLOR[e.color], c.WEIGHT[e.weight]);
        return "" !== t && (e.className = o()(s.zr, t)), e
    }, [n, i, u, d]);
    return (0, a.jsx)(l.Provider, {
        value: m,
        children: t
    })
}