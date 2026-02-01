/** chunk id: 904560, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
}), n(896048);
var r, l = n(311907),
    i = n(73153),
    s = n(71393),
    a = n(522055),
    o = n(645619),
    c = n(904629);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = {};
class p extends(r = l.Ay.PersistedStore) {
    getState() {
        return d
    }
    initialize(e) {
        this.waitFor(a.A, o.A, s.A), null != e && (d = e)
    }
    getNotificationStateForGuild(e) {
        return d[e]
    }
}
u(p, "displayName", "GuildPowerupsNotificationStore"), u(p, "persistKey", "GuildPowerupsNotificationStore"), u(p, "migrations", [e => (Object.entries(e).forEach(t => {
    let [n, r] = t;
    e[n] = r
}), e)]);
let h = new p(i.h, {
    GUILD_POWERUPS_ACK_NOTIFICATION: function(e) {
        var t, n, r, l, i, p, h, g;
        let {
            guildId: f
        } = e, m = null != (t = null == (i = s.A.getGuild(f)) ? void 0 : i.premiumSubscriberCount) ? t : 0, b = o.A.getStateForGuild(f), A = a.A.getStateForGuild(f), y = (0, c.k)([...Object.values(null != (n = null == b ? void 0 : b.unlockedPowerups) ? n : {}), ...Object.values(null != (r = null == A ? void 0 : A.entitlements) ? r : {})]);
        h = function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    u(e, t, n[t])
                })
            }
            return e
        }({}, d), g = g = {
            [f]: {
                lastSeenWarningNotification: new Date(null != (l = null == (p = y[y.length - 1]) ? void 0 : p.ends_at) ? l : Date.now()).getTime(),
                lastBoostCount: m
            }
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(h, Object.getOwnPropertyDescriptors(g)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                n.push.apply(n, r)
            }
            return n
        })(Object(g)).forEach(function(e) {
            Object.defineProperty(h, e, Object.getOwnPropertyDescriptor(g, e))
        }), d = h
    },
    GUILD_POWERUPS_RESET_NOTIFICATIONS: function() {
        d = {}
    }
})