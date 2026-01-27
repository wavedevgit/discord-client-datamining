/** Chunk was on web.js **/
/** chunk id: 899343, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    f: () => o
}), n(896048);
var r = n(64700),
    i = n(166532),
    a = n(566980);

function o(e) {
    let {
        purchaseState: t,
        currentStep: n,
        initialScene: o,
        purchaseScene: s,
        errorScene: l,
        successScene: c
    } = e, [u, d] = (0, r.useState)(o);
    return (0, r.useEffect)(() => {
        t === a.h.PURCHASING ? d(s) : t === a.h.FAIL && d(l)
    }, [t, s, l]), (0, r.useEffect)(() => {
        n === i.pn.CONFIRM && d(c)
    }, [n, c]), [u, d]
}