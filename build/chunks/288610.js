/** Chunk was on web.js **/
/** chunk id: 288610, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    p: () => o
}), n(896048);
var r = n(627968),
    i = n(64700);
n(442715), n(284009);
let a = i.createContext(void 0);

function o(e) {
    let {
        children: t
    } = e, [n, o] = i.useState(null), s = i.useMemo(() => ({
        setComponentToSnapshot: o
    }), [o]);
    return (0, r.jsxs)(a.Provider, {
        value: s,
        children: [t, null != n && (0, r.jsx)("div", {
            id: "component-to-image-container",
            style: {
                position: "fixed",
                top: "-1000px",
                right: "-1000px"
            },
            children: n
        })]
    })
}