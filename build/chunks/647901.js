/** chunk id: 647901 params = (module,exports,require) **/
"use strict";
r.d(t, {
    X: () => c,
    x: () => d
});
var n = r(627968),
    i = r(64700),
    a = r(503698),
    o = r.n(a),
    s = r(865513);
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
    _ = i.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function c() {
    return i.useContext(_)
}

function d(e) {
    let {
        children: t,
        size: r,
        color: a,
        weight: d
    } = e, u = c(), f = i.useMemo(() => {
        let e = {
                className: void 0,
                size: r ?? u.size,
                color: a ?? u.color,
                weight: d ?? u.weight
            },
            t = o()(l.SIZE[e.size], l.COLOR[e.color], l.WEIGHT[e.weight]);
        return "" !== t && (e.className = o()(s.zr, t)), e
    }, [r, a, d, u]);
    return (0, n.jsx)(_.Provider, {
        value: f,
        children: t
    })
}