/** Chunk was on 97492 **/
/** chunk id: 911411, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => A
}), n(896048), n(321073);
var r, l, i = n(311907),
    s = n(451988),
    a = n(73153),
    o = n(308368),
    c = n(290863),
    u = n(360469);

function d(e, t) {
    return "".concat(e, ":").concat(t)
}
let p = {},
    h = {},
    f = new s.J_(3e3, function() {
        let e = [];
        for (let [t, n] of Object.entries(h)) e.push(n), p[t] = n, delete h[t];
        0 !== e.length && o.A.subscribeActivities(e)
    });

function g(e) {
    let t = d(e.applicationId, e.partyId);
    return t in p || t in h
}

function m() {
    p = {}, h = {}
}
class b extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(c.A)
    }
    isSubscribed(e) {
        return g(e)
    }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
    value: "PresenceSubscriptionsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : b[l] = "PresenceSubscriptionsStore";
let A = new b(a.h, {
    PRESENCE_SUBSCRIPTIONS_ADD: function(e) {
        let {
            subscription: t
        } = e, n = function() {
            let e = !1,
                t = Date.now();
            for (let [n, r] of Object.entries(p)) r.expiresAt < t && (delete p[n], e = !0);
            for (let [n, r] of Object.entries(h)) r.expiresAt < t && (delete h[n], e = !0);
            return e
        }(), {
            userId: r,
            applicationId: l,
            partyId: i,
            messageId: s,
            channelId: a,
            inviteTime: o
        } = t;
        if (g(t) || o + u.dm < Date.now()) return n;
        let c = d(l, i),
            m = u.dm + Date.now();
        return h[c] = {
            userId: r,
            applicationId: l,
            partyId: i,
            messageId: s,
            channelId: a,
            expiresAt: m
        }, f.delay(), !0
    },
    CONNECTION_OPEN: m,
    CONNECTION_RESUMED: m,
    LOGOUT: function() {
        p = {}, h = {}
    }
})