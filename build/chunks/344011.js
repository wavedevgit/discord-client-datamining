/** Chunk was on 59275 **/
/** chunk id: 344011, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    rW: () => a
});
var r = n(627968),
    l = n(64700);
let s = l.createContext(null);

function a(e) {
    let {
        blockType: t,
        children: n
    } = e, a = l.useMemo(() => ({
        blockType: t
    }), [t]);
    return (0, r.jsx)(s.Provider, {
        value: a,
        children: n
    })
}