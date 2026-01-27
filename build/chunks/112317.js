/** Chunk was on web.js **/
/** chunk id: 112317, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Bc: () => s,
    w6: () => l
});
var r = n(627968),
    i = n(64700);
let a = {
        isRichTooltip: !1
    },
    o = i.createContext(a);

function s(e) {
    let {
        children: t,
        isRichTooltip: n = !1
    } = e, a = i.useMemo(() => ({
        isRichTooltip: n
    }), [n]);
    return (0, r.jsx)(o.Provider, {
        value: a,
        children: t
    })
}

function l() {
    return i.useContext(o)
}