/** chunk id: 647901, original params: e,t,r (module,exports,require) **/
"use strict";
r.d(t, {
    X: () => u,
    x: () => d
});
var n = r(627968),
    a = r(64700),
    s = r(503698),
    l = r.n(s),
    i = r(865513);
let c = {
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
    o = a.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function u() {
    return a.useContext(o)
}

function d(e) {
    let {
        children: t,
        size: r,
        color: s,
        weight: d
    } = e, _ = u(), h = a.useMemo(() => {
        let e = {
                className: void 0,
                size: r ?? _.size,
                color: s ?? _.color,
                weight: d ?? _.weight
            },
            t = l()(c.SIZE[e.size], c.COLOR[e.color], c.WEIGHT[e.weight]);
        return "" !== t && (e.className = l()(i.zr, t)), e
    }, [r, s, d, _]);
    return (0, n.jsx)(o.Provider, {
        value: h,
        children: t
    })
}