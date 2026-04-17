/** chunk id: 607940 params = (module,exports,require) **/
e.d(i, {
    A: () => h,
    e: () => d
});
var n, l = e(284009),
    s = e.n(l),
    a = e(311907),
    r = e(713402),
    o = e(73153),
    u = e(557009),
    c = e(67480),
    d = ((n = {})[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED", n);

function S(t) {
    return `subscription_listing:${t}`
}

function p(t) {
    return `application:${t}`
}

function I(t, i, e) {
    return `entitlement:${t}:${e}:${i}`
}

function A(t, i) {
    return `entitlement:${i}:${t}`
}
let _ = new r.J(t => [p(t.application_id), ...t.subscription_listings_ids.map(S)], t => t.id),
    T = new r.J(t => {
        var i;
        return [p(t.application_id), (i = t.subscription_plans[0].id, `plan:${i}`)]
    }, t => t.id),
    E = new r.J(t => [I(t.applicationId, t.isValid(null, c.A), t.guildId), A(t.isValid(null, c.A), t.guildId)], t => t.id),
    C = {},
    f = {};

function N(t) {
    for (let e of (_.set(t.id, t), t.subscription_listings ?? [])) {
        var i;
        i = e, T.set(i.id, i)
    }
}
class P extends a.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return C[t] ?? 0
    }
    getSubscriptionGroupListing(t) {
        return _.get(t)
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let i = _.values(S(t));
        return s()(i.length <= 1, "Found multiple group listings for listing"), i[0]
    }
    getSubscriptionListing(t) {
        return T.get(t)
    }
    getSubscriptionListingsForApplication(t) {
        return T.values(p(t))
    }
    getEntitlementsForGuildFetchState(t) {
        return f[t] ?? 0
    }
    getSubscriptionListingForPlan(t) {
        let i = T.values(`plan:${t}`);
        return s()(i.length <= 1, "Found multiple listings for plan"), i[0]
    }
    getApplicationEntitlementsForGuild(t, i) {
        let e = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return E.values(I(t, e, i))
    }
    getEntitlementsForGuild(t) {
        let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return E.values(A(i, t))
    }
}
let h = new P(o.h, {
    LOGOUT: function() {
        _.clear(), T.clear(), E.clear(), C = {}, f = {}
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
        let {
            applicationId: i,
            groupListingId: e
        } = t;
        C[i] = 1;
        let n = _.get(e);
        if (null != n)
            for (let t of n.subscription_listings_ids) T.delete(t)
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
        let {
            applicationId: i,
            groupListing: e
        } = t;
        C[i] = 2, N(e)
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
        let {
            applicationId: i
        } = t;
        C[i] = 2
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let {
            guildId: i
        } = t;
        f[i] = 1
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let {
            guildId: i,
            entitlements: e
        } = t;
        f[i] = 2, e.forEach(t => {
            let i = u.A.createFromServer(t);
            E.set(i.id, i)
        })
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let {
            guildId: i
        } = t;
        f[i] = 0
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
        let {
            groupListing: i
        } = t;
        N(i)
    }
})