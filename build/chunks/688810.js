/** chunk id: 688810, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => f,
    di: () => c,
    f5: () => u
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(812729),
    o = n.n(a),
    s = n(735438),
    l = n.n(s);
let c = i.createContext([]);

function u(e) {
    let {
        children: t,
        value: n
    } = e;
    return (0, r.jsx)(c.Provider, {
        value: n,
        children: t
    })
}

function d(e, t) {
    return 0 === t.length ? e : [...e, ...l().flatten(t)]
}

function f() {
    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    let [r, a] = i.useState(t), s = i.useContext(c), l = i.useMemo(() => d(s, r), [r, s]), u = i.useMemo(() => d(s, r.slice(0, r.length - 1)), [r, s]);
    return i.useEffect(() => {
        o()(t, r) || a(t)
    }, [t, r]), {
        analyticsLocations: l,
        sourceAnalyticsLocations: u,
        parentAnalyticsLocation: u[u.length - 1],
        newestAnalyticsLocation: l[l.length - 1]
    }
}