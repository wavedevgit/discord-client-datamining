/** Chunk was on web.js **/
/** chunk id: 816733, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048), n(205816);
var r, i = n(311907),
    a = n(73153),
    s = n(851746),
    o = n(694080),
    l = n(287809),
    c = n(469778),
    u = n(927578),
    d = n(166403),
    f = n(788868);

function p(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            p(e, t, n[t])
        })
    }
    return e
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function m(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : h(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let g = 6e5,
    E = {
        userOffersLastFetchedAtDate: void 0,
        userTrialOffers: {},
        userDiscountOffers: {},
        userDiscounts: void 0,
        isFetching: !1,
        lastFetchSuccessful: !1
    },
    y = E;

function b() {
    y.isFetching = !0
}

function O(e) {
    let {
        userTrialOffer: t
    } = e;
    null != t ? y.userTrialOffers[t.trial_id] = t : T(), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = !1
}

function v(e) {
    let {
        userTrialOffer: t,
        userDiscount: n,
        userDiscountOffer: r
    } = e;
    null == t && null == n && null == r && T(), null != t ? (y.userTrialOffers[t.trial_id] = t, y.userDiscountOffers = {}) : null != n ? (y.userDiscountOffers[n.discount_id] = n, y.userTrialOffers = {}) : null != r && (y.userDiscountOffers[r.discount_id] = r, y.userTrialOffers = {}), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = !1, y.lastFetchSuccessful = !0
}

function A() {
    T(), y.userOffersLastFetchedAtDate = Date.now(), y.isFetching = !1, y.lastFetchSuccessful = !1
}

function I(e) {
    let {
        userTrialOffer: t
    } = e;
    null != t ? y.userTrialOffers[t.trial_id] = t : y.userTrialOffers = {}, y.userOffersLastFetchedAtDate = Date.now()
}

function S(e) {
    let {
        userTrialOffer: t,
        userDiscount: n,
        userDiscountOffer: r
    } = e;
    null != t ? y.userTrialOffers[t.trial_id] = t : y.userTrialOffers = {}, null != n ? y.userDiscountOffers[n.discount_id] = n : null != r ? y.userDiscountOffers[r.discount_id] = r : y.userDiscountOffers = {}, y.userOffersLastFetchedAtDate = Date.now()
}

function T() {
    y.userTrialOffers = {}, y.userDiscountOffers = {}, y.userOffersLastFetchedAtDate = void 0, y.isFetching = !1
}
let C = () => !0;

function N() {
    return null != d.A.getPremiumTypeSubscription() && (null != y.userDiscountOffers[f.q] ? y.userDiscountOffers = {
        [f.q]: y.userDiscountOffers[f.q]
    } : null != y.userDiscountOffers[f.EG] ? y.userDiscountOffers = {
        [f.EG]: y.userDiscountOffers[f.EG]
    } : y.userDiscountOffers = {}, y.userTrialOffers = {}, !0)
}

function w() {
    let e = l.default.getCurrentUser();
    !(0, u.TW)(e) && Object.keys(y.userDiscountOffers).length > 0 && (0, o._D)("UserOfferStore", !0)
}

function R() {
    var e;
    let t = null == (e = l.default.getCurrentUser()) ? void 0 : e.id;
    if (null == t) return !1;
    let n = s.A.getAllRelevantReferralTrialOffers().filter(e => e.user_id === t);
    if (n.length > 0) {
        let e = n[0];
        return y.userTrialOffers[e.trial_id] = e, !0
    }
    return !1
}
class P extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        y = null != e ? e : E, this.waitFor(c.A, s.A, d.A, l.default), this.syncWith([l.default], C), this.syncWith([d.A], N), this.syncWith([s.A], R)
    }
    getUserTrialOffer(e) {
        if (null !== e) return y.userTrialOffers[e]
    }
    getUserDiscountOffer(e) {
        if (null !== e) return y.userDiscountOffers[e]
    }
    getAnyOfUserTrialOfferId(e) {
        for (let t of e)
            if (null != y.userTrialOffers[t]) return t;
        return null
    }
    isFetchingOffer() {
        var e;
        return null != (e = y.isFetching) && e
    }
    hasFetchedOffer() {
        return null != y.userOffersLastFetchedAtDate
    }
    shouldFetchReferralOffer(e) {
        var t;
        let n = y.userOffersLastFetchedAtDate,
            r = null != (t = y.isFetching) && t;
        if (null == n) return !r;
        let i = Date.now() - g > n,
            a = (null != e ? e : 0) > n;
        return !r && (i || a)
    }
    getAlmostExpiringTrialOffers(e) {
        let t = Object.values(f.TP).map(e => e.id),
            n = l.default.getCurrentUser();
        return (0, u.TW)(n) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(n => t.includes(n.trial_id) && null != n.expires_at && null != n.subscription_trial && e.includes(n.subscription_trial.sku_id) && Date.parse(n.expires_at) < Date.now() + (0, u.e1)(n))
    }
    getAlmostExpiringDiscountOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userDiscountOffers).filter(t => null != t.expires_at && null != t.discount && t.discount.plan_ids.some(t => e.includes(f.hd[t].skuId)) && Date.parse(t.expires_at) < Date.now() + (0, u.e1)(t))
    }
    getAcknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(t => e.includes(t.trial_id) && null != t.expires_at)
    }
    getUnacknowledgedDiscountOffers() {
        var e;
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(null != (e = y.userDiscountOffers) ? e : {}).filter(e => null == e.expires_at && !f.ly.includes(e.discount_id))
    }
    getUnacknowledgedOffers(e) {
        let t = l.default.getCurrentUser();
        return (0, u.TW)(t) && !this.canFractionalPremiumUserUseOffer() ? [] : Object.values(y.userTrialOffers).filter(t => e.includes(t.trial_id) && null == t.expires_at)
    }
    hasAnyUnexpiredOffer() {
        return Object.values(y.userTrialOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
    }
    hasAnyUnexpiredDiscountOffer() {
        return Object.values(y.userDiscountOffers).some(e => null == e.expires_at || Date.parse(e.expires_at) > Date.now())
    }
    canFractionalPremiumUserUseOffer() {
        return c.A.isFractionalPremiumActive({
            excludeReverseTrial: !0
        }) && null == d.A.getPremiumTypeSubscription()
    }
    getReferrer(e) {
        var t;
        return null == e ? null : null == (t = y.userTrialOffers[e]) ? void 0 : t.referrer
    }
    getState() {
        return y
    }
    forceReset() {
        T()
    }
    lastFetchSuccessful() {
        return y.lastFetchSuccessful
    }
}
p(P, "displayName", "UserOfferStore"), p(P, "persistKey", "UserOfferStore"), p(P, "migrations", [e => {
    let t = null == e ? void 0 : e.userDiscounts;
    if (null != t) return m(_({}, e), {
        userDiscountOffers: t
    })
}, e => {
    if (null != e) return Object.hasOwn(e, "userAnnualOfferLastFetchedAtDate") && delete e.userAnnualOfferLastFetchedAtDate, e
}, e => {
    if (null != e) return (null == e ? void 0 : e.isFetching) == null ? m(_({}, e), {
        isFetching: !1
    }) : e
}]);
let D = new P(a.h, {
    BILLING_USER_OFFER_FETCH_START: b,
    BILLING_USER_TRIAL_OFFER_FETCH_SUCCESS: O,
    BILLING_USER_TRIAL_OFFER_ACKNOWLEDGED_SUCCESS: I,
    BILLING_USER_OFFER_FETCH_SUCCESS: v,
    BILLING_USER_OFFER_ACKNOWLEDGED_SUCCESS: S,
    BILLING_USER_OFFER_FETCH_FAIL: A,
    BILLING_PAYMENT_SOURCE_CREATE_SUCCESS: w,
    BILLING_PAYMENT_SOURCE_UPDATE_SUCCESS: w,
    BILLING_PAYMENT_SOURCE_REMOVE_SUCCESS: w,
    LOGOUT: T
})