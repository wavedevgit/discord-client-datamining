/** Chunk was on web.js **/
/** chunk id: 623373, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    $K: () => l,
    Ab: () => d,
    B1: () => p,
    CW: () => s,
    YW: () => h,
    ex: () => f,
    rb: () => _
}), n(896048);
var r = n(575593),
    i = n(590180),
    a = n(758836),
    o = n(652215);
let s = e => {
        var t, n, r, i, s;
        let {
            product: l,
            isPremiumUser: c,
            isRental: u
        } = e;
        return u ? a.nE : null != (n = (null != (t = null == (s = l.prices[c ? o.lid.PREMIUM_TIER_2 : o.lid.DEFAULT]) || null == (i = s.countryPrices) || null == (r = i.prices) ? void 0 : r.slice(0, 2)) ? t : []).find(e => e.currency === o.Yri.DISCORD_ORB)) ? n : null
    },
    l = e => {
        var t, n, r, i, a;
        let {
            product: s,
            isPremiumUser: l
        } = e;
        return null != (n = (null != (t = null == (a = s.prices[l ? o.lid.PREMIUM_TIER_2 : o.lid.DEFAULT]) || null == (i = a.countryPrices) || null == (r = i.prices) ? void 0 : r.slice(0, 2)) ? t : []).find(e => e.currency !== o.Yri.DISCORD_ORB)) ? n : null
    },
    c = e => null != s({
        product: e,
        isPremiumUser: !1,
        isRental: !1
    }),
    u = e => null != l({
        product: e,
        isPremiumUser: !1
    }),
    d = e => {
        if (null == e) return !1;
        let t = c(e),
            n = u(e);
        return t && !n
    },
    f = e => e.filter(e => {
        let t = c(e),
            n = u(e);
        return t && n
    }),
    p = e => e.type === r.R.VARIANTS_GROUP && null != e.variants && 0 !== e.variants.length,
    _ = (e, t) => {
        var n, a, o;
        return e.type === r.R.VARIANTS_GROUP && null != t && null != (n = i.A.getProduct(null == (o = e.variants) || null == (a = o[t]) ? void 0 : a.skuId)) ? n : e
    },
    h = e => {
        if (null == e) return null;
        if (e.type === r.R.VARIANTS_GROUP) {
            if (null == e.variants || 0 === e.variants.length) return null;
            let t = e.variants[0];
            if (null == t) return null;
            let [n] = t.items;
            return n.type
        }
        return e.type
    }