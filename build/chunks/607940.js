/** chunk id: 607940, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => g,
    e: () => d
});
var n, l = i(284009),
    s = i.n(l),
    a = i(311907),
    r = i(713402),
    u = i(73153),
    o = i(557009),
    c = i(67480),
    d = ((n = {})[n.NOT_FETCHED = 0] = "NOT_FETCHED", n[n.FETCHING = 1] = "FETCHING", n[n.FETCHED = 2] = "FETCHED", n);

function p(t) {
    return `subscription_listing:${t}`
}

function S(t) {
    return `application:${t}`
}

function I(t, e, i) {
    return `entitlement:${t}:${i}:${e}`
}

function A(t, e) {
    return `entitlement:${e}:${t}`
}
let _ = new r.J(t => [S(t.application_id), ...t.subscription_listings_ids.map(p)], t => t.id),
    T = new r.J(t => {
        var e;
        return [S(t.application_id), (e = t.subscription_plans[0].id, `plan:${e}`)]
    }, t => t.id),
    E = new r.J(t => [I(t.applicationId, t.isValid(null, c.A), t.guildId), A(t.isValid(null, c.A), t.guildId)], t => t.id),
    f = {},
    C = {};

function N(t) {
    for (let i of (_.set(t.id, t), t.subscription_listings ?? [])) {
        var e;
        e = i, T.set(e.id, e)
    }
}
class h extends a.il {
    static displayName = "ApplicationSubscriptionStore";
    getSubscriptionGroupListingsForApplicationFetchState(t) {
        return f[t] ?? 0
    }
    getSubscriptionGroupListing(t) {
        return _.get(t)
    }
    getSubscriptionGroupListingForSubscriptionListing(t) {
        let e = _.values(p(t));
        return s()(e.length <= 1, "Found multiple group listings for listing"), e[0]
    }
    getSubscriptionListing(t) {
        return T.get(t)
    }
    getSubscriptionListingsForApplication(t) {
        return T.values(S(t))
    }
    getEntitlementsForGuildFetchState(t) {
        return C[t] ?? 0
    }
    getSubscriptionListingForPlan(t) {
        let e = T.values(`plan:${t}`);
        return s()(e.length <= 1, "Found multiple listings for plan"), e[0]
    }
    getApplicationEntitlementsForGuild(t, e) {
        let i = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2];
        return E.values(I(t, i, e))
    }
    getEntitlementsForGuild(t) {
        let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
        return E.values(A(e, t))
    }
}
let g = new h(u.h, {
    LOGOUT: function() {
        _.clear(), T.clear(), E.clear(), f = {}, C = {}
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS: function(t) {
        let {
            applicationId: e,
            groupListingId: i
        } = t;
        f[e] = 1;
        let n = _.get(i);
        if (null != n)
            for (let t of n.subscription_listings_ids) T.delete(t)
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_SUCCESS: function(t) {
        let {
            applicationId: e,
            groupListing: i
        } = t;
        f[e] = 2, N(i)
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTINGS_FAILURE: function(t) {
        let {
            applicationId: e
        } = t;
        f[e] = 2
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS(t) {
        let {
            guildId: e
        } = t;
        C[e] = 1
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS(t) {
        let {
            guildId: e,
            entitlements: i
        } = t;
        C[e] = 2, i.forEach(t => {
            let e = o.A.createFromServer(t);
            E.set(e.id, e)
        })
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_FAILURE(t) {
        let {
            guildId: e
        } = t;
        C[e] = 0
    },
    APPLICATION_SUBSCRIPTIONS_FETCH_LISTING_FOR_PLAN_SUCCESS: function(t) {
        let {
            groupListing: e
        } = t;
        N(e)
    }
})