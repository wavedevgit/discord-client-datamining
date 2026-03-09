/** chunk id: 859241 params = (module,exports,require) **/
t.d(_, {
    A: () => S
});
var n = t(311907),
    r = t(73153);
let l = {},
    o = null,
    i = [],
    a = !1,
    c = !1,
    d = null,
    s = null;

function p() {
    c = !0
}
class u extends n.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(e) {
        return null != l[e] ? l[e].subscriptions : null
    }
    getLastFetchedAtForGuild(e) {
        return null != l[e] ? l[e].lastFetchedAt : null
    }
    getCurrentUserAppliedBoosts() {
        return i
    }
    getAppliedGuildBoost(e) {
        return i.find(_ => _.id === e)
    }
    get isModifyingAppliedBoost() {
        return c
    }
    get applyBoostError() {
        return d
    }
    get unapplyBoostError() {
        return s
    }
    get cooldownEndsAt() {
        return o
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return a
    }
}
let S = new u(r.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            guildId: _,
            appliedBoosts: t
        } = e;
        l[_] = {
            subscriptions: t,
            lastFetchedAt: Date.now()
        }
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            appliedGuildBoosts: _
        } = e;
        a = !1, i = _
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
        let {
            endsAt: _
        } = e;
        o = _
    },
    GUILD_UNAPPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_SUCCESS: function(e) {
        let {
            appliedGuildBoost: _
        } = e, t = new Set(_.map(e => e.id));
        i = [..._, ...i.filter(e => !t.has(e.id))], d = null, c = !1
    },
    GUILD_APPLY_BOOST_FAIL: function(e) {
        let {
            error: _
        } = e;
        c = !1, d = _
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
        let {
            boostId: _
        } = e;
        i = i.filter(e => e.id !== _), c = !1
    },
    GUILD_UNAPPLY_BOOST_FAIL: function(e) {
        let {
            error: _
        } = e;
        c = !1, s = _
    },
    USER_APPLIED_BOOSTS_FETCH_START: function() {
        a = !0
    }
})