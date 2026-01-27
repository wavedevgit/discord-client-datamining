/** Chunk was on 89455 **/
/** chunk id: 647901, original params: e,n,t (module,exports,require) **/
"use strict";
t.d(n, {
    X: () => u,
    x: () => _
});
var r = t(627968),
    i = t(64700),
    o = t(503698),
    a = t.n(o),
    l = t(865513);
let s = {
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

function u() {
    return i.useContext(c)
}

function _(e) {
    let {
        children: n,
        size: t,
        color: o,
        weight: _
    } = e, d = u(), b = i.useMemo(() => {
        let e = {
                className: void 0,
                size: null != t ? t : d.size,
                color: null != o ? o : d.color,
                weight: null != _ ? _ : d.weight
            },
            n = a()(s.SIZE[e.size], s.COLOR[e.color], s.WEIGHT[e.weight]);
        return "" !== n && (e.className = a()(l.zr, n)), e
    }, [t, o, _, d]);
    return (0, r.jsx)(c.Provider, {
        value: b,
        children: n
    })
}