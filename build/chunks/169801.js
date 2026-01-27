/** Chunk was on web.js **/
/** chunk id: 169801, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o,
    t: () => a
});
var r = n(234419),
    i = n(788868);

function a(e) {
    let {
        userTrialOffer: t,
        isGift: n,
        skuId: r
    } = e;
    return !n && null != t && null != r && i.TP[t.trial_id].skus.includes(r)
}

function o(e) {
    let {
        isGift: t,
        skuId: n,
        referralTrialOfferId: a
    } = e, o = (0, r.V)(a);
    return !t && null != o && null != n && i.TP[o.trial_id].skus.includes(n)
}