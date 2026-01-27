/** Chunk was on web.js **/
/** chunk id: 939496, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    E: () => c,
    U: () => l
});
var r = n(627968),
    i = n(64700),
    a = n(677313),
    o = n(544028);
let s = i.createContext({
    theme: o.A.themePreferenceForSystemTheme((0, a.A)()),
    themeType: null,
    primaryColor: null,
    secondaryColor: null,
    userId: null
});

function l(e) {
    let {
        theme: t,
        themeType: n,
        primaryColor: a,
        secondaryColor: o,
        userId: l,
        children: c
    } = e, u = i.useMemo(() => ({
        theme: t,
        themeType: n,
        primaryColor: a,
        secondaryColor: o,
        userId: l
    }), [t, n, a, o, l]);
    return (0, r.jsx)(s.Provider, {
        value: u,
        children: c
    })
}
let c = () => i.useContext(s)