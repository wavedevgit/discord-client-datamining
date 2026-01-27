/** Chunk was on web.js **/
/** chunk id: 111085, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
}), n(896048);
var r, i = n(311907),
    a = n(73153);

function o(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let s = {
    sentGifts: {}
};

function l(e, t) {
    return "".concat(e, ":").concat(t)
}
class c extends(r = i.Ay.PersistedStore) {
    initialize(e) {
        null != e && (s = e, this.cleanupExpiredGifts())
    }
    getState() {
        return s
    }
    hasSentGift(e, t) {
        let n = l(e, t),
            r = s.sentGifts[n];
        return !(null == r || new Date(r.expiresAt) < new Date)
    }
    getSentGift(e, t) {
        let n = l(e, t),
            r = s.sentGifts[n];
        return null == r || new Date(r.expiresAt) < new Date ? null : r
    }
    cleanupExpiredGifts() {
        let e = new Date;
        for (let [t, n] of Object.entries(s.sentGifts)) new Date(n.expiresAt) < e && delete s.sentGifts[t]
    }
}

function u(e) {
    let t = l(e.skuId, e.recipientId),
        n = new Date,
        r = new Date(n.getTime() + 1728e5);
    s.sentGifts[t] = {
        skuId: e.skuId,
        recipientId: e.recipientId,
        sentAt: n.toISOString(),
        expiresAt: r.toISOString()
    }
}
o(c, "displayName", "SentGiftsStore"), o(c, "persistKey", "SentGiftsStore");
let d = new c(a.h, {
    WISHLIST_GIFT_SENT: u
})