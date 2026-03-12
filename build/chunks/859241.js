/** chunk id: 859241 params = (module,exports,require) **/
t.d(_, {
    A: () => b
});
var n = t(311907),
    o = t(73153);
let i = {},
    r = null,
    l = [],
    d = !1,
    a = !1,
    c = null,
    s = null;

function p() {
    a = !0
}
class u extends n.Ay.Store {
    static displayName = "AppliedGuildBoostStore";
    getAppliedGuildBoostsForGuild(e) {
        return null != i[e] ? i[e].subscriptions : null
    }
    getLastFetchedAtForGuild(e) {
        return null != i[e] ? i[e].lastFetchedAt : null
    }
    getCurrentUserAppliedBoosts() {
        return l
    }
    getAppliedGuildBoost(e) {
        return l.find(_ => _.id === e)
    }
    get isModifyingAppliedBoost() {
        return a
    }
    get applyBoostError() {
        return c
    }
    get unapplyBoostError() {
        return s
    }
    get cooldownEndsAt() {
        return r
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return d
    }
}
let b = new u(o.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            guildId: _,
            appliedBoosts: t
        } = e;
        i[_] = {
            subscriptions: t,
            lastFetchedAt: Date.now()
        }
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            appliedGuildBoosts: _
        } = e;
        d = !1, l = _
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
        let {
            endsAt: _
        } = e;
        r = _
    },
    GUILD_UNAPPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_START: p,
    GUILD_APPLY_BOOST_SUCCESS: function(e) {
        let {
            appliedGuildBoost: _
        } = e, t = new Set(_.map(e => e.id));
        l = [..._, ...l.filter(e => !t.has(e.id))], c = null, a = !1
    },
    GUILD_APPLY_BOOST_FAIL: function(e) {
        let {
            error: _
        } = e;
        a = !1, c = _
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
        let {
            boostId: _
        } = e;
        l = l.filter(e => e.id !== _), a = !1
    },
    GUILD_UNAPPLY_BOOST_FAIL: function(e) {
        let {
            error: _
        } = e;
        a = !1, s = _
    },
    USER_APPLIED_BOOSTS_FETCH_START: function() {
        d = !0
    }
})