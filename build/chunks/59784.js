/** chunk id: 59784 params = (module,exports,require) **/
"use strict";
s.d(e, {
    A: () => S
});
var r = s(448761),
    n = s(311907),
    i = s(73153),
    a = s(661191),
    _ = s(677185),
    E = s(88001),
    u = s(652215);
let c = new Map,
    p = !1,
    I = !1;

function R(t) {
    return null != t.removed_at ? E.xI.REMOVED : null != t.accepted_at ? E.xI.ACCEPTED : E.xI.PENDING
}

function l(t) {
    let {
        messages: e
    } = t;
    return e.map(t => o(t)).some(Boolean)
}

function o(t) {
    if (t.type !== r.l.PREMIUM_GROUP_INVITE) return !1;
    let e = t.content;
    if (null == e || "" === e || !a.default.isProbablyAValidSnowflake(e)) return !1;
    let s = c.get(e);
    return (null == s || s.state === E.xI.UNKNOWN) && (c.set(e, {
        state: E.xI.FETCHING,
        invite: null,
        errorStatus: null
    }), i.h.wait(() => (0, _.el)(e).catch(u.FXj)), !0)
}
class M extends n.Ay.Store {
    static displayName = "PremiumGroupInviteStore";
    getInvite(t) {
        return c.get(t) ?? null
    }
    getInviteByUserId(t) {
        return Array.from(c.values()).find(e => e.invite?.user_id === t) ?? null
    }
    getInviteState(t) {
        return c.get(t)?.state ?? E.xI.UNKNOWN
    }
    shouldFetch(t) {
        let e = c.get(t);
        return null == e || e.state === E.xI.UNKNOWN
    }
    isFetching(t) {
        return c.get(t)?.state === E.xI.FETCHING
    }
    hasFetchedAllInvites() {
        return p
    }
    isFetchingAllInvites() {
        return I
    }
}
let S = new M(i.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function() {
        I = !0
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function(t) {
        let {
            invites: e
        } = t;
        for (let t of (I = !1, p = !0, e)) c.set(t.id, {
            state: R(t),
            invite: t,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function() {
        I = !1
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function(t) {
        let {
            subscriptionGroupMemberId: e
        } = t;
        c.set(e, {
            state: E.xI.FETCHING,
            invite: null,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function(t) {
        let {
            subscriptionGroupMemberId: e,
            invite: s
        } = t;
        c.set(e, {
            state: R(s),
            invite: s,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function(t) {
        let {
            subscriptionGroupMemberId: e,
            status: s
        } = t, r = 404 === s ? E.xI.NOT_FOUND : E.xI.ERROR;
        c.set(e, {
            state: r,
            invite: null,
            errorStatus: s
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function(t) {
        let {
            subscriptionGroupMemberId: e
        } = t, s = c.get(e);
        if (s?.invite == null) return !1;
        let r = new Date().toISOString();
        c.set(e, {
            state: E.xI.ACCEPTED,
            invite: {
                ...s.invite,
                accepted_at: r
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function(t) {
        let {
            subscriptionGroupMemberId: e
        } = t, s = c.get(e);
        if (s?.invite == null) return !1;
        let r = s.invite.subscription,
            n = new Date().toISOString();
        for (let [t, s] of c) t !== e && s.invite?.subscription === r && c.set(t, {
            state: E.xI.REMOVED,
            invite: {
                ...s.invite,
                removed_at: n
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function(t) {
        let {
            subscriptionGroupMemberId: e
        } = t, s = c.get(e);
        if (s?.invite == null) return !1;
        c.set(e, {
            state: E.xI.PENDING,
            invite: {
                ...s.invite,
                accepted_at: null
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function(t) {
        let {
            subscriptionGroupMemberId: e
        } = t;
        if (null == e) return !1;
        let s = c.get(e);
        if (s?.invite == null) return !1;
        let r = new Date().toISOString();
        c.set(e, {
            state: E.xI.REMOVED,
            invite: {
                ...s.invite,
                removed_at: r
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function(t) {
        let {
            subscriptionId: e
        } = t, s = new Date().toISOString();
        for (let [t, r] of c) r.invite?.subscription === e && c.set(t, {
            state: E.xI.REMOVED,
            invite: {
                ...r.invite,
                removed_at: s
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(t) {
        let {
            subscriptionGroupMemberId: e,
            errorCode: s
        } = t;
        if (null == e) return !1;
        let r = c.get(e);
        return r?.invite != null && (s === E.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? (c.set(e, {
            state: E.xI.ACCEPTED,
            invite: {
                ...r.invite,
                accepted_at: new Date().toISOString()
            },
            errorStatus: null
        }), !0) : void c.set(e, {
            state: E.xI.PENDING,
            invite: {
                ...r.invite,
                removed_at: null
            },
            errorStatus: null
        }))
    },
    MESSAGE_CREATE: function(t) {
        let {
            message: e
        } = t;
        return o(e)
    },
    LOCAL_MESSAGES_LOADED: l,
    LOAD_MESSAGES_SUCCESS: l,
    LOAD_MESSAGES_AROUND_SUCCESS: l,
    LOGOUT: function() {
        c = new Map, p = !1, I = !1
    }
})