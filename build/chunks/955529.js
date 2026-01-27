/** Chunk was on web.js **/
/** chunk id: 955529, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
}), n(896048);
var r = n(64700),
    i = n(311907),
    a = n(97352);

function o() {
    let [e, t] = r.useState(void 0), [n, o] = r.useState(void 0), [s, l] = r.useState(void 0);
    return {
        selectedSkuId: e,
        selectedPlan: (0, i.bG)([a.A], () => null != n ? a.A.get(n) : null),
        setSelectedSkuId: t,
        setSelectedPlanId: o,
        selectedPlanNotification: s,
        setSelectedPlanNotification: l
    }
}