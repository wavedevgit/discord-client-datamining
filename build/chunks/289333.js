/** chunk id: 289333, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => s
}), n(896048);
var r = n(64700),
    i = n(997101),
    a = n(311907),
    o = n(615405);

function s() {
    let [e, t] = r.useState(!1), [n, s] = r.useState(!1), l = (0, a.bG)([o.A], () => i.M.EEA_COUNTRIES.has(o.A.ipCountryCodeWithFallback));
    return {
        hasViewedPurchaseTerms: e,
        setHasViewedPurchaseTerms: t,
        showWithdrawalWaiver: l,
        hasAcceptedWithdrawalWaiver: !l || n,
        setHasAcceptedWithdrawalWaiver: s
    }
}