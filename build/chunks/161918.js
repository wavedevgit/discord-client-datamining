/** Chunk was on web.js **/
/** chunk id: 161918, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Mk: () => o,
    iM: () => s
});
var r = n(627968),
    i = n(64700);
let a = i.createContext(null);

function o() {
    return i.useContext(a)
}

function s(e) {
    let {
        tab: t,
        children: n
    } = e, o = i.useMemo(() => ({
        tab: t
    }), [t]);
    return (0, r.jsx)(a.Provider, {
        value: o,
        children: n
    })
}