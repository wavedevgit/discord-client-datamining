/** Chunk was on 6593 **/
/** chunk id: 233317, original params: e,t,r (module,exports,require) **/
r.d(t, {
    A: () => d
});
var a, i, s = r(311907),
    n = r(73153),
    _ = r(166403),
    c = r(677185),
    E = r(88001),
    l = r(652215);
let u = {
    membersData: {
        data: null,
        isFetching: !1,
        isUpdating: !1
    },
    membershipData: {
        data: null,
        isFetching: !1,
        hasFetched: !1
    }
};

function h() {
    u.membersData.isUpdating = !0
}

function R(e) {
    let {
        subscriptionId: t
    } = e;
    n.h.wait(() => (0, c.mm)(t).catch(l.FXj)), u.membersData.isUpdating = !1
}

function m() {
    u.membersData.isUpdating = !1
}
class M extends(i = s.Ay.Store) {
    initialize() {
        this.waitFor(_.A)
    }
    getMembers() {
        return u.membersData.data
    }
    isFetchingMembers() {
        return u.membersData.isFetching
    }
    isUpdatingMembers() {
        return u.membersData.isUpdating
    }
    hasFetchedMembers() {
        return null !== u.membersData.data
    }
    getMembership() {
        return u.membershipData.data
    }
    isFetchingMembership() {
        return u.membershipData.isFetching
    }
    hasFetchedMembership() {
        return null !== u.membershipData.data
    }
    getNumUsedSeats() {
        return null == u.membersData.data ? 0 : u.membersData.data.members.length
    }
    getNumAvailableInvites() {
        if (null == u.membersData.data) return E.LM;
        let e = u.membersData.data.members.length + u.membersData.data.invitedUsers.length;
        return Math.max(0, E.LM - e)
    }
    getNumTotalSeats() {
        return E.LM
    }
}(a = "displayName") in M ? Object.defineProperty(M, a, {
    value: "PremiumGroupStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : M[a] = "PremiumGroupStore";
let d = new M(n.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function(e) {
        let {
            subscriptionId: t
        } = e;
        return !u.membersData.isFetching && (n.h.wait(() => (0, c.mm)(t).catch(l.FXj)), !0)
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function() {
        u.membersData.isFetching = !0
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function(e) {
        let {
            members: t
        } = e;
        u.membersData.data = t, u.membersData.isFetching = !1
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function() {
        u.membersData.isFetching = !1
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function() {
        return !u.membershipData.isFetching && (n.h.wait(() => (0, c.JV)().catch(l.FXj)), !0)
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function() {
        u.membershipData.isFetching = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function(e) {
        let {
            membership: t
        } = e;
        u.membershipData.data = t, u.membershipData.isFetching = !1, u.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function() {
        u.membershipData.isFetching = !1, u.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function() {
        u.membershipData.isFetching = !1, u.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_INVITE_USERS_START: h,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: R,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: m,
    PREMIUM_GROUP_REMOVE_MEMBER_START: h,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: m,
    PREMIUM_GROUP_REMOVE_INVITE_START: h,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: R,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
        let {
            errorCode: t,
            subscriptionId: r
        } = e;
        if (t === E.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return n.h.wait(() => (0, c.mm)(r).catch(l.FXj)), u.membersData.isUpdating = !1, !0;
        m()
    },
    LOGOUT: function() {
        u = {
            membersData: {
                data: null,
                isFetching: !1,
                isUpdating: !1
            },
            membershipData: {
                data: null,
                isFetching: !1,
                hasFetched: !1
            }
        }
    }
})