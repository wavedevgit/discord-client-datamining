/** chunk id: 608461, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    i = n(181658),
    a = n(985018);

function o(e) {
    let [t, n] = r.useState(!1), [o, s] = r.useState(null);
    return [r.useCallback(async function() {
        for (var t = arguments.length, r = Array(t), o = 0; o < t; o++) r[o] = arguments[o];
        try {
            return s(null), n(!0), await e(...r)
        } catch (e) {
            e.message !== a.intl.string(a.t.N2yb9a) && s(e instanceof i.A ? e : new i.A(e))
        } finally {
            n(!1)
        }
    }, [e]), {
        loading: t,
        error: o
    }]
}