/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
r.d(t, {
    X: () => d,
    x: () => u
});
var n = r(627968),
    i = r(64700),
    s = r(503698),
    a = r.n(s),
    l = r(931220);
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
    c = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function d() {
    return i.useContext(c)
}

function u(e) {
    let {
        children: t,
        size: r,
        color: s,
        weight: u
    } = e, m = d(), p = i.useMemo(() => {
        let e = {
                className: void 0,
                size: r ?? m.size,
                color: s ?? m.color,
                weight: u ?? m.weight
            },
            t = a()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = a()(l.zr, t)), e
    }, [r, s, u, m]);
    return (0, n.jsx)(c.Provider, {
        value: p,
        children: t
    })
}