/** Chunk was on 40543 **/
/** chunk id: 859241, original params: e,t,_ (module,exports,require) **/
_.d(t, {
    A: () => C
}), _(896048);
var n, l, r = _(311907),
    o = _(73153);
let i = {},
    a = null,
    d = [],
    c = !1,
    s = !1,
    p = null,
    u = null;

function S() {
    s = !0
}
class b extends(n = r.Ay.Store) {
    getAppliedGuildBoostsForGuild(e) {
        return null != i[e] ? i[e].subscriptions : null
    }
    getLastFetchedAtForGuild(e) {
        return null != i[e] ? i[e].lastFetchedAt : null
    }
    getCurrentUserAppliedBoosts() {
        return d
    }
    getAppliedGuildBoost(e) {
        return d.find(t => t.id === e)
    }
    get isModifyingAppliedBoost() {
        return s
    }
    get applyBoostError() {
        return p
    }
    get unapplyBoostError() {
        return u
    }
    get cooldownEndsAt() {
        return a
    }
    get isFetchingCurrentUserAppliedBoosts() {
        return c
    }
}(l = "displayName") in b ? Object.defineProperty(b, l, {
    value: "AppliedGuildBoostStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : b[l] = "AppliedGuildBoostStore";
let C = new b(o.h, {
    GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            guildId: t,
            appliedBoosts: _
        } = e;
        i[t] = {
            subscriptions: _,
            lastFetchedAt: Date.now()
        }
    },
    USER_APPLIED_BOOSTS_FETCH_SUCCESS: function(e) {
        let {
            appliedGuildBoosts: t
        } = e;
        c = !1, d = t
    },
    APPLIED_BOOSTS_COOLDOWN_FETCH_SUCCESS: function(e) {
        let {
            endsAt: t
        } = e;
        a = t
    },
    GUILD_UNAPPLY_BOOST_START: S,
    GUILD_APPLY_BOOST_START: S,
    GUILD_APPLY_BOOST_SUCCESS: function(e) {
        let {
            appliedGuildBoost: t
        } = e, _ = new Set(t.map(e => e.id));
        d = [...t, ...d.filter(e => !_.has(e.id))], p = null, s = !1
    },
    GUILD_APPLY_BOOST_FAIL: function(e) {
        let {
            error: t
        } = e;
        s = !1, p = t
    },
    GUILD_UNAPPLY_BOOST_SUCCESS: function(e) {
        let {
            boostId: t
        } = e;
        d = d.filter(e => e.id !== t), s = !1
    },
    GUILD_UNAPPLY_BOOST_FAIL: function(e) {
        let {
            error: t
        } = e;
        s = !1, u = t
    },
    USER_APPLIED_BOOSTS_FETCH_START: function() {
        c = !0
    }
})