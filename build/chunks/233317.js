/** chunk id: 233317, original params: e,t,s (module,exports,require) **/
s.d(t, {
    A: () => o
});
var a = s(311907),
    r = s(73153),
    i = s(166403),
    n = s(677185),
    c = s(88001),
    l = s(652215);
let _ = {
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

function d() {
    _.membersData.isUpdating = !0
}

function u(e) {
    let {
        subscriptionId: t
    } = e;
    r.h.wait(() => (0, n.mm)(t).catch(l.FXj)), _.membersData.isUpdating = !1
}

function E() {
    _.membersData.isUpdating = !1
}
class m extends a.Ay.Store {
    initialize() {
        this.waitFor(i.A)
    }
    static displayName = "PremiumGroupStore";
    getMembers() {
        return _.membersData.data
    }
    isFetchingMembers() {
        return _.membersData.isFetching
    }
    isUpdatingMembers() {
        return _.membersData.isUpdating
    }
    hasFetchedMembers() {
        return null !== _.membersData.data
    }
    getMembership() {
        return _.membershipData.data
    }
    isFetchingMembership() {
        return _.membershipData.isFetching
    }
    hasFetchedMembership() {
        return null !== _.membershipData.data
    }
    getNumUsedSeats() {
        return null == _.membersData.data ? 0 : _.membersData.data.members.length
    }
    getNumAvailableInvites() {
        if (null == _.membersData.data) return c.LM;
        let e = _.membersData.data.members.length + _.membersData.data.invitedUsers.length;
        return Math.max(0, c.LM - e)
    }
    getNumTotalSeats() {
        return c.LM
    }
}
let o = new m(r.h, {
    PREMIUM_GROUP_MEMBERS_REQUEST: function(e) {
        let {
            subscriptionId: t
        } = e;
        return !_.membersData.isFetching && (r.h.wait(() => (0, n.mm)(t).catch(l.FXj)), !0)
    },
    PREMIUM_GROUP_MEMBERS_FETCH_START: function() {
        _.membersData.isFetching = !0
    },
    PREMIUM_GROUP_MEMBERS_FETCH_SUCCESS: function(e) {
        let {
            members: t
        } = e;
        _.membersData.data = t, _.membersData.isFetching = !1
    },
    PREMIUM_GROUP_MEMBERS_FETCH_FAILURE: function() {
        _.membersData.isFetching = !1
    },
    PREMIUM_GROUP_MEMBERSHIP_REQUEST: function() {
        return !_.membershipData.isFetching && (r.h.wait(() => (0, n.JV)().catch(l.FXj)), !0)
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_START: function() {
        _.membershipData.isFetching = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_SUCCESS: function(e) {
        let {
            membership: t
        } = e;
        _.membershipData.data = t, _.membershipData.isFetching = !1, _.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_NOT_FOUND: function() {
        _.membershipData.isFetching = !1, _.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_MEMBERSHIP_FETCH_FAILURE: function() {
        _.membershipData.isFetching = !1, _.membershipData.hasFetched = !0
    },
    PREMIUM_GROUP_INVITE_USERS_START: d,
    PREMIUM_GROUP_INVITE_USERS_SUCCESS: u,
    PREMIUM_GROUP_INVITE_USERS_FAILURE: E,
    PREMIUM_GROUP_REMOVE_MEMBER_START: d,
    PREMIUM_GROUP_REMOVE_MEMBER_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_MEMBER_FAILURE: E,
    PREMIUM_GROUP_REMOVE_INVITE_START: d,
    PREMIUM_GROUP_REMOVE_INVITE_SUCCESS: u,
    PREMIUM_GROUP_REMOVE_INVITE_FAILURE: function(e) {
        let {
            errorCode: t,
            subscriptionId: s
        } = e;
        if (t === c.Hy.BILLING_SUBSCRIPTION_GROUP_INVITE_ALREADY_ACCEPTED) return r.h.wait(() => (0, n.mm)(s).catch(l.FXj)), _.membersData.isUpdating = !1, !0;
        E()
    },
    LOGOUT: function() {
        _ = {
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