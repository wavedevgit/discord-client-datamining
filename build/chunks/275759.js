/** Chunk was on web.js **/
/** chunk id: 275759, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    Ay: () => ec,
    ZD: () => E,
    hb: () => O
}), n(896048), n(321073), n(638769);
var r, i = n(735438),
    a = n.n(i),
    o = n(989349),
    s = n.n(o),
    l = n(311907),
    c = n(73153),
    u = n(49463),
    d = n(21119),
    f = n(153488),
    p = n(994500),
    _ = n(70730),
    h = n(652215);

function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function g(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            m(e, t, n[t])
        })
    }
    return e
}
let E = 5,
    y = 7,
    b = 864e5,
    O = 6048e5,
    v = 12096e5,
    A = 1,
    I = 5,
    S = .7,
    T = .5;

function C() {
    return {
        messageGiftIntentLastShownMap: {},
        lastShownFriendsListGiftIntents: [],
        friendsTabBadgeLastDismissedTime: null,
        giftUnreadNotificationLastDismissedTimes: [],
        profilePopoutGiftIntentsDismissMap: {}
    }
}
let N = C(),
    w = [],
    R = new Set,
    P = new Set,
    D = {},
    L = null,
    x = null;

function M() {
    return null != x ? x : Date.now()
}

function j(e, t) {
    let n = new Date,
        r = new Date(e.getTime());
    r.setFullYear(t);
    let i = new Date(r.getTime());
    i.setDate(r.getDate() - y);
    let a = new Date(r.getTime());
    return a.setDate(r.getDate() + y), n > i && n < a
}

function k(e) {
    return !j(e, e.getFullYear()) && j(e, new Date().getFullYear())
}

function U() {
    let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
    if (e) {
        let e = Math.ceil(w.length / 2);
        w.slice(0, e).forEach(e => {
            R.add(e)
        }), w.forEach(e => {
            P.add(e)
        })
    } else
        for (let e of w) {
            let t = d.A.getUserAffinity(e);
            null != t && t.dmProbability > S && R.add(e), null != t && t.dmProbability > T && P.add(e)
        }
}

function G() {
    if (null != L) return void es(L);
    if (B(), !f.A.hasConsented(h.YAq.PERSONALIZATION)) return;
    let {
        enabled: e
    } = _.u.getConfig({
        location: "PremiumGiftingIntentStore updateFriendAnniversaries"
    });
    if (e) {
        for (let e of p.A.getFriendIDs()) {
            let t = p.A.getSince(e),
                n = d.A.getUserAffinity(e);
            if (p.A.isFriend(e) && null != n && n.dmProbability > 0 && null != t) {
                let n = new Date(t);
                k(n) && (w.push(e), D[e] = {
                    friendsSince: n
                })
            }
        }
        w.sort((e, t) => d.A.compareByDmProbability(e, t)), U()
    }
}

function F(e) {
    return Math.round(s()().diff(e, "years", !0))
}

function V() {
    return Array.from(P).some(e => !N.lastShownFriendsListGiftIntents.includes(e))
}

function B() {
    w.length = 0, R.clear(), P.clear(), D = {}
}

function H() {
    B()
}

function Y() {
    N = C(), B()
}

function W() {
    N.lastShownFriendsListGiftIntents = Array.from(w)
}

function K(e) {
    let {
        recipientUserId: t
    } = e;
    Q(t)
}

function z() {
    N.giftUnreadNotificationLastDismissedTimes.push(M())
}

function q() {
    let e = M();
    N.giftUnreadNotificationLastDismissedTimes = N.giftUnreadNotificationLastDismissedTimes.filter(t => e - t <= 7 * b)
}

function Z(e) {
    let {
        recipientUserId: t
    } = e;
    Q(t)
}

function Q(e) {
    null == N.messageGiftIntentLastShownMap[e] && (N.messageGiftIntentLastShownMap[e] = M())
}

function X() {
    let e = M();
    for (let t in N.messageGiftIntentLastShownMap) e - N.messageGiftIntentLastShownMap[t] > v && delete N.messageGiftIntentLastShownMap[t]
}

function J() {
    let e = M(),
        t = b * y * 2;
    for (let n in N.profilePopoutGiftIntentsDismissMap) e - N.profilePopoutGiftIntentsDismissMap[n] > t && delete N.profilePopoutGiftIntentsDismissMap[n]
}

function $() {
    N.lastShownFriendsListGiftIntents = []
}

function ee() {
    N.messageGiftIntentLastShownMap = {}
}

function et() {
    N.giftUnreadNotificationLastDismissedTimes = []
}

function en(e) {
    let {
        total: t
    } = e;
    if (null == t) {
        L = null, G();
        return
    }
    es(t)
}

function er(e) {
    let {
        date: t
    } = e;
    x = t
}

function ei() {
    x = null
}

function ea(e) {
    let {
        recipientUserId: t
    } = e;
    N.profilePopoutGiftIntentsDismissMap[t] = M()
}

function eo() {
    N.profilePopoutGiftIntentsDismissMap = {}
}

function es(e) {
    B();
    let {
        enabled: t
    } = _.u.getConfig({
        location: "PremiumGiftingIntentStore generateFriendAnniversaries"
    });
    if (!t) return;
    L = e;
    let n = p.A.getFriendIDs().filter(e => !p.A.isIgnored(e));
    a().sampleSize(n, e).forEach(e => {
        let t = p.A.getSince(e);
        if (null != t) {
            let n = new Date(t);
            w.push(e), D[e] = {
                friendsSince: n
            }
        }
    }), w.sort((e, t) => d.A.compareByDmProbability(e, t)), U(!0)
}
class el extends(r = l.Ay.PersistedStore) {
    initialize(e) {
        if (N = C(), null != e) {
            var t;
            N.friendsTabBadgeLastDismissedTime = e.friendsTabBadgeLastDismissedTime, N.lastShownFriendsListGiftIntents = Array.from(e.lastShownFriendsListGiftIntents), N.messageGiftIntentLastShownMap = g({}, e.messageGiftIntentLastShownMap), N.giftUnreadNotificationLastDismissedTimes = Array.from(null != (t = e.giftUnreadNotificationLastDismissedTimes) ? t : []), N.profilePopoutGiftIntentsDismissMap = g({}, e.profilePopoutGiftIntentsDismissMap)
        }
        this.syncWith([p.A, d.A, f.A, u.A], G), X(), q(), J()
    }
    getState() {
        return N
    }
    getFriendAnniversaries() {
        return w
    }
    getNextRecipientUserIDForNotification() {
        if (!this.isNotificationCooldownActive()) return Array.from(R).find(e => null == N.messageGiftIntentLastShownMap[e])
    }
    isNotificationCooldownActive() {
        q();
        let e = N.giftUnreadNotificationLastDismissedTimes;
        if (0 === e.length) return !1;
        if (e.length >= I) return !0;
        let t = M();
        return e.filter(e => t - e <= b).length >= A
    }
    canShowFriendsTabBadge() {
        return V()
    }
    getFriendAnniversaryYears(e) {
        let t = D[e];
        return null == t ? 0 : F(t.friendsSince)
    }
    canShowProfilePopoutGiftIntents(e) {
        return null == N.profilePopoutGiftIntentsDismissMap[e] && null != D[e]
    }
    isGiftIntentMessageInCooldown(e) {
        return null != N.messageGiftIntentLastShownMap[e]
    }
    getDevToolTotalFriendAnniversaries() {
        return L
    }
    getDevToolCurrentDate() {
        return x
    }
    getHighestAffinityFriendAnniversaries() {
        return Array.from(R)
    }
    getHighAffinityFriendAnniversaries() {
        return Array.from(P)
    }
    getGiftUnreadNotificationLastDismissedTimes() {
        return N.giftUnreadNotificationLastDismissedTimes
    }
    getMessageGiftIntentLastShownMap() {
        return N.messageGiftIntentLastShownMap
    }
    getProfilePopoutGiftIntentsDismissMap() {
        return N.profilePopoutGiftIntentsDismissMap
    }
}
m(el, "displayName", "PremiumGiftingIntentStore"), m(el, "persistKey", "PremiumGiftingIntentStore"), m(el, "migrations", [e => {
    var t, n;
    return null == e ? e : {
        friendsTabBadgeLastDismissedTime: null != (t = e.friendsTabBadgeLastDismissedTime) ? t : null,
        lastShownFriendsListGiftIntents: null != (n = e.lastShownFriendsListGiftIntents) ? n : [],
        messageGiftIntentLastShownMap: {}
    }
}, e => {
    var t, n;
    return null == e ? e : {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
        messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
        giftUnreadNotificationLastDismissedTimes: []
    }
}, e => {
    var t, n, r;
    return null == e ? e : {
        friendsTabBadgeLastDismissedTime: null,
        lastShownFriendsListGiftIntents: null != (t = e.lastShownFriendsListGiftIntents) ? t : [],
        messageGiftIntentLastShownMap: null != (n = e.messageGiftIntentLastShownMap) ? n : {},
        giftUnreadNotificationLastDismissedTimes: null != (r = e.giftUnreadNotificationLastDismissedTimes) ? r : [],
        profilePopoutGiftIntentsDismissMap: {}
    }
}]);
let ec = new el(c.h, {
    CONNECTION_OPEN: H,
    LOGOUT: Y,
    MESSAGE_GIFT_INTENT_SHOWN: K,
    FRIENDS_LIST_GIFT_INTENTS_SHOWN: W,
    GIFT_UNREAD_NOTIFICATION_DISMISS: z,
    GIFT_INTENT_FLOW_PURCHASED_GIFT: Z,
    PROFILE_POPOUT_GIFT_INTENTS_DISMISS: ea,
    DEV_TOOLS_FRIENDS_LIST_GIFT_INTENTS_SHOWN_RESET: $,
    DEV_TOOLS_GIFT_MESSAGE_COOLDOWN_RESET: ee,
    DEV_TOOLS_GIFT_UNREAD_NOTIFICATION_COOLDOWN_RESET: et,
    DEV_TOOLS_SET_FRIEND_ANNIVERSARY_COUNT: en,
    DEV_TOOLS_SET_CURRENT_DATE: er,
    DEV_TOOLS_RESET_CURRENT_DATE: ei,
    DEV_TOOLS_PROFILE_POPOUT_GIFT_INTENTS_DISMISS_RESET: eo
})