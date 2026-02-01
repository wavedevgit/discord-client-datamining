/** chunk id: 851746, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => W
}), n(896048);
var r, i = n(448761),
    a = n(311907),
    o = n(73153),
    s = n(287809),
    l = n(326084),
    c = n(652215);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = 5,
    f = null,
    p = new Set,
    _ = new Map,
    h = !1,
    m = new Set,
    g = new Set,
    E = new Map,
    y = 0,
    b = null,
    O = [],
    v = !1,
    A = 0,
    I = !1,
    S = !1,
    T = null;

function C() {
    f = null, p = new Set, h = !1, m = new Set, g = new Set, E = new Map, y = 0, b = null, O = [], v = !1, A = 0, I = !1, S = !1, T = null, _ = new Map
}
let N = () => !0;

function w(e) {
    let {} = e;
    T = null, h = !0
}

function R(e) {
    let {
        referrals_remaining: t,
        sent_user_ids: n,
        refresh_at: r,
        recipient_status: i,
        has_eligible_friends: a
    } = e;
    I = !0, S = a, h = !1, f = t, p = new Set(n), T = r, _ = i
}

function P(e) {
    let {} = e;
    I = !1, S = !1, T = null, h = !1, y += 1, b = Date.now() + 1e3 * Math.pow(2, y)
}

function D(e) {
    let {
        userTrialOffer: t
    } = e;
    (0, l.xM)(), E.set(t.id, t), p.add(t.user_id)
}

function L(e) {
    let {
        userTrialOffers: t
    } = e;
    for (let e of ((0, l.xM)(), t)) E.set(e.id, e), p.add(e.user_id)
}

function x(e) {
    m.add(e)
}

function M(e) {
    let {
        userTrialOffer: t
    } = e;
    null != t && (m.delete(t.id), g.add(t.id), E.set(t.id, t))
}

function j(e) {
    let {
        userTrialOfferId: t
    } = e;
    m.delete(t), g.add(t)
}

function k(e) {
    let {
        message: t
    } = e;
    V(t)
}

function U(e) {
    let {
        messages: t
    } = e;
    t.forEach(e => V(e))
}

function G(e) {
    let {
        userTrialOfferId: t
    } = e;
    h || (0, l.xM)(), m.has(t) || (x(t), o.h.wait(() => (0, l.kZ)(t).catch(c.FXj)))
}

function V(e) {
    let t = e.type === i.l.PREMIUM_REFERRAL ? e.content : null;
    if (null == t) return !1;
    g.has(t) || m.has(t) || (x(t), o.h.wait(() => (0, l.kZ)(t).catch(c.FXj)))
}

function F() {
    v = !0
}

function B(e) {
    let {
        users: t,
        nextIndex: n
    } = e;
    v = !1, O = t, A = n
}

function H() {
    v = !1
}
class Y extends(r = a.Ay.Store) {
    initialize() {
        this.waitFor(s.default), this.syncWith([s.default], N)
    }
    checkAndFetchReferralsRemaining() {
        null == f && !h && y < d && (null == b || b < Date.now()) && (0, l.xM)()
    }
    getReferralsRemaining() {
        return this.checkAndFetchReferralsRemaining(), f
    }
    getSentUserIds() {
        return this.checkAndFetchReferralsRemaining(), Array.from(p.values())
    }
    isFetchingReferralsRemaining() {
        return h
    }
    getRelevantUserTrialOffer(e) {
        return E.get(e)
    }
    isResolving(e) {
        return m.has(e)
    }
    getEligibleUsers() {
        return O
    }
    getFetchingEligibleUsers() {
        return v
    }
    getNextIndexOfEligibleUsers() {
        return A
    }
    getIsEligibleToSendReferrals() {
        return I
    }
    getHasEligibleFriends() {
        return S
    }
    getRefreshAt() {
        return T
    }
    getAllRelevantReferralTrialOffers() {
        return Array.from(E.values())
    }
    getRecipientStatus() {
        return _
    }
}
u(Y, "displayName", "ReferralTrialStore");
let W = new Y(o.h, {
    BILLING_REFERRAL_TRIAL_OFFER_UPDATE: G,
    BILLING_REFERRALS_REMAINING_FETCH_START: w,
    BILLING_REFERRALS_REMAINING_FETCH_SUCCESS: R,
    BILLING_REFERRALS_REMAINING_FETCH_FAIL: P,
    BILLING_CREATE_REFERRAL_SUCCESS: D,
    CREATE_REFERRALS_SUCCESS: L,
    BILLING_REFERRAL_RESOLVE_SUCCESS: M,
    BILLING_REFERRAL_RESOLVE_FAIL: j,
    REFERRALS_FETCH_ELIGIBLE_USER_START: F,
    REFERRALS_FETCH_ELIGIBLE_USER_SUCCESS: B,
    REFERRALS_FETCH_ELIGIBLE_USER_FAIL: H,
    LOAD_MESSAGES_SUCCESS: U,
    MESSAGE_CREATE: k,
    LOAD_MESSAGES_AROUND_SUCCESS: U,
    LOGOUT: C
})