/** chunk id: 59784 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => S
});
var r = s(448761),
    i = s(311907),
    n = s(73153),
    a = s(661191),
    l = s(677185),
    c = s(88001),
    u = s(652215);
let o = new Map,
    E = !1,
    d = !1;

function _(e) {
    return null != e.removed_at ? c.xI.REMOVED : null != e.accepted_at ? c.xI.ACCEPTED : c.xI.PENDING
}

function R(e) {
    let {
        messages: t
    } = e;
    return t.map(e => p(e)).some(Boolean)
}

function p(e) {
    if (e.type !== r.l.PREMIUM_GROUP_INVITE) return !1;
    let t = e.content;
    if (null == t || "" === t || !a.default.isProbablyAValidSnowflake(t)) return !1;
    let s = o.get(t);
    return (null == s || s.state === c.xI.UNKNOWN) && (o.set(t, {
        state: c.xI.FETCHING,
        invite: null,
        errorStatus: null
    }), n.h.wait(() => (0, l.el)(t).catch(u.FXj)), !0)
}
class I extends i.Ay.Store {
    static displayName = "PremiumGroupInviteStore";
    getInvite(e) {
        return o.get(e) ?? null
    }
    getInviteByUserId(e) {
        return Array.from(o.values()).find(t => t.invite?.user_id === e) ?? null
    }
    getInviteState(e) {
        return o.get(e)?.state ?? c.xI.UNKNOWN
    }
    shouldFetch(e) {
        let t = o.get(e);
        return null == t || t.state === c.xI.UNKNOWN
    }
    isFetching(e) {
        return o.get(e)?.state === c.xI.FETCHING
    }
    hasFetchedAllInvites() {
        return E
    }
    isFetchingAllInvites() {
        return d
    }
}
let S = new I(n.h, {
    PREMIUM_GROUP_INVITES_FETCH_START: function() {
        d = !0
    },
    PREMIUM_GROUP_INVITES_FETCH_SUCCESS: function(e) {
        let {
            invites: t
        } = e;
        for (let e of (d = !1, E = !0, t)) o.set(e.id, {
            state: _(e),
            invite: e,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITES_FETCH_FAIL: function() {
        d = !1
    },
    PREMIUM_GROUP_INVITE_FETCH_START: function(e) {
        let {
            subscriptionGroupMemberId: t
        } = e;
        o.set(t, {
            state: c.xI.FETCHING,
            invite: null,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITE_FETCH_SUCCESS: function(e) {
        let {
            subscriptionGroupMemberId: t,
            invite: s
        } = e;
        o.set(t, {
            state: _(s),
            invite: s,
            errorStatus: null
        })
    },
    PREMIUM_GROUP_INVITE_FETCH_FAIL: function(e) {
        let {
            subscriptionGroupMemberId: t,
            status: s
        } = e, r = 404 === s ? c.xI.NOT_FOUND : c.xI.ERROR;
        o.set(t, {
            state: r,
            invite: null,
            errorStatus: s
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_START: function(e) {
        let {
            subscriptionGroupMemberId: t
        } = e, s = o.get(t);
        if (s?.invite == null) return !1;
        let r = new Date().toISOString();
        o.set(t, {
            state: c.xI.ACCEPTED,
            invite: {
                ...s.invite,
                accepted_at: r
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_SUCCESS: function(e) {
        let {
            subscriptionGroupMemberId: t
        } = e, s = o.get(t);
        if (s?.invite == null) return !1;
        let r = s.invite.subscription,
            i = new Date().toISOString();
        for (let [e, s] of o) e !== t && s.invite?.subscription === r && o.set(e, {
            state: c.xI.REMOVED,
            invite: {
                ...s.invite,
                removed_at: i
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_ACCEPT_INVITE_FAIL: function(e) {
        let {
            subscriptionGroupMemberId: t
        } = e, s = o.get(t);
        if (s?.invite == null) return !1;
        o.set(t, {
            state: c.xI.PENDING,
            invite: {
                ...s.invite,
                accepted_at: null
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_START: function(e) {
        let {
            subscriptionGroupMemberId: t
        } = e;
        if (null == t) return !1;
        let s = o.get(t);
        if (s?.invite == null) return !1;
        let r = new Date().toISOString();
        o.set(t, {
            state: c.xI.REMOVED,
            invite: {
                ...s.invite,
                removed_at: r
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: function(e) {
        let {
            subscriptionId: t
        } = e, s = new Date().toISOString();
        for (let [e, r] of o) r.invite?.subscription === t && o.set(e, {
            state: c.xI.REMOVED,
            invite: {
                ...r.invite,
                removed_at: s
            },
            errorStatus: null
        })
    },
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
        let {
            subscriptionGroupMemberId: t,
            errorCode: s
        } = e;
        if (null == t) return !1;
        let r = o.get(t);
        return r?.invite != null && (s === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED ? (o.set(t, {
            state: c.xI.ACCEPTED,
            invite: {
                ...r.invite,
                accepted_at: new Date().toISOString()
            },
            errorStatus: null
        }), !0) : void o.set(t, {
            state: c.xI.PENDING,
            invite: {
                ...r.invite,
                removed_at: null
            },
            errorStatus: null
        }))
    },
    MESSAGE_CREATE: function(e) {
        let {
            message: t
        } = e;
        return p(t)
    },
    LOCAL_MESSAGES_LOADED: R,
    LOAD_MESSAGES_SUCCESS: R,
    LOAD_MESSAGES_AROUND_SUCCESS: R,
    LOGOUT: function() {
        o = new Map, E = !1, d = !1
    }
})