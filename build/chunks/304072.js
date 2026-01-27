/** Chunk was on web.js **/
/** chunk id: 304072, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    i = n(451988),
    a = n(444927);

function o(e, t) {
    let [n, o] = (0, r.useState)(e), s = (0, a.A)(() => new i.Ep);
    return (0, r.useEffect)(() => () => s.stop(), [s]), [n, (0, r.useCallback)(n => {
        o(n), n !== e && s.start(t, () => o(e))
    }, [t, e, s])]
}