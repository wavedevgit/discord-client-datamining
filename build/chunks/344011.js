/** chunk id: 344011, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    rW: () => i
});
var n = s(627968),
    r = s(64700);
let l = r.createContext(null);

function i(e) {
    let {
        blockType: t,
        children: s
    } = e, i = r.useMemo(() => ({
        blockType: t
    }), [t]);
    return (0, n.jsx)(l.Provider, {
        value: i,
        children: s
    })
}