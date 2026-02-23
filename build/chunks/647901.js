/** chunk id: 647901, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => u,
    x: () => d
});
var a = n(627968),
    r = n(64700),
    i = n(503698),
    s = n.n(i),
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
    c = r.createContext({
        className: void 0,
        size: "default",
        color: "default",
        weight: "default"
    });

function u() {
    return r.useContext(c)
}

function d(e) {
    let {
        children: t,
        size: n,
        color: i,
        weight: d
    } = e, _ = u(), m = r.useMemo(() => {
        let e = {
                className: void 0,
                size: n ?? _.size,
                color: i ?? _.color,
                weight: d ?? _.weight
            },
            t = s()(o.SIZE[e.size], o.COLOR[e.color], o.WEIGHT[e.weight]);
        return "" !== t && (e.className = s()(l.zr, t)), e
    }, [n, i, d, _]);
    return (0, a.jsx)(c.Provider, {
        value: m,
        children: t
    })
}