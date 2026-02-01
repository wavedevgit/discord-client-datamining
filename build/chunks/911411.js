/** chunk id: 911411, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
}), n(896048), n(321073);
var l, r, i = n(311907),
    a = n(451988),
    s = n(73153),
    o = n(308368),
    c = n(290863),
    u = n(360469);

function d(e, t) {
    return "".concat(e, ":").concat(t)
}
let h = {},
    p = {},
    f = new a.J_(3e3, function() {
        let e = [];
        for (let [t, n] of Object.entries(p)) e.push(n), h[t] = n, delete p[t];
        0 !== e.length && o.A.subscribeActivities(e)
    });

function m(e) {
    let t = d(e.applicationId, e.partyId);
    return t in h || t in p
}

function g() {
    h = {}, p = {}
}
class A extends(l = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A)
    }
    isSubscribed(e) {
        return m(e)
    }
}(r = "displayName") in A ? Object.defineProperty(A, r, {
    value: "PresenceSubscriptionsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : A[r] = "PresenceSubscriptionsStore";
let b = new A(s.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
        let {
            subscription: t
        } = e, n = function() {
            let e = !1,
                t = Date.now();
            for (let [n, l] of Object.entries(h)) l.expiresAt < t && (delete h[n], e = !0);
            for (let [n, l] of Object.entries(p)) l.expiresAt < t && (delete p[n], e = !0);
            return e
        }(), {
            userId: l,
            applicationId: r,
            partyId: i,
            messageId: a,
            channelId: s,
            inviteTime: o
        } = t;
        if (m(t) || o + u.dm < Date.now()) return n;
        let c = d(r, i),
            g = u.dm + Date.now();
        return p[c] = {
            userId: l,
            applicationId: r,
            partyId: i,
            messageId: a,
            channelId: s,
            expiresAt: g
        }, f.delay(), !0
    },
    CONNECTION_OPEN: g,
    CONNECTION_RESUMED: g,
    LOGOUT: function() {
        h = {}, p = {}
    }
})