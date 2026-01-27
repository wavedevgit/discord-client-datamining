/** Chunk was on web.js **/
/** chunk id: 160946, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    B: () => d,
    Y: () => u
}), n(896048);
var r = n(311907),
    i = n(626584),
    a = n(295405),
    o = n(97352),
    s = n(166403),
    l = n(788868);
new i.A("useSubscriptionPlansLoaded");
let c = e => {};

function u() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz];
    return (0, r.bG)([a.A, o.A, s.A], () => d(e, [a.A, o.A, s.A]), [e])
}

function d() {
    var e;
    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [...l.oz],
        [n, r, i] = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [a.A, o.A, s.A],
        u = n.paymentSourceIds,
        d = n.defaultPaymentSourceId,
        f = r.isLoadedForSKUs(t),
        p = null == (e = i.getPremiumTypeSubscription()) ? void 0 : e.paymentSourceId;
    if (null != p && !r.hasPaymentSourceForSKUIds(p, t)) return c("subscription payment source ".concat(p, " not loaded for ").concat(t)), !1;
    if (null != d && !r.hasPaymentSourceForSKUIds(d, t)) return c("default payment source ".concat(d, " not loaded for ").concat(t)), !1;
    for (let e of u)
        if (!r.hasPaymentSourceForSKUIds(e, t)) return c("payment source ".concat(e, " not loaded for ").concat(t)), !1;
    return f
}