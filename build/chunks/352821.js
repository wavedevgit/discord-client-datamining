/** Chunk was on 39048 **/
/** chunk id: 352821, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => f
}), n(896048), n(228524);
var r, i = n(311907),
    l = n(73153),
    s = n(591552),
    a = n(555337),
    o = n(539916);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let d = [],
    u = !1,
    g = [];

function m() {
    let e = a.A.getGuildId();
    if (null == e) {
        d = [], g = [], u = !1;
        return
    }
    d = [...s.A.getConnections(e)], g = [], u = !1
}
class p extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.A, a.A)
    }
    getEditedConnections() {
        return d
    }
    getErrors() {
        return g
    }
    isSubmitting() {
        return u
    }
    hasChanges() {
        let e = a.A.getGuildId();
        if (null == e) return !1;
        let t = s.A.getConnections(e);
        return d.length !== t.length || d.some((e, n) => {
            let r = t[n];
            return null == r || e.connection_type !== r.connection_type || e.application_id !== r.application_id || e.provider_id !== r.provider_id || e.description !== r.description
        })
    }
    showNotice() {
        return this.hasChanges()
    }
    hasValidationErrors() {
        return g.length > 0
    }
}
c(p, "displayName", "GuildSettingsOnboardingConnectionsStore");
let f = new p(l.h, {
    GUILD_SETTINGS_INIT: m,
    GUILD_SETTINGS_SET_SECTION: m,
    GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: m,
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_ADD: function(e) {
        let {
            connection: t
        } = e;
        if (d.length >= o.pA) {
            g = ["Maximum ".concat(o.pA, " connections allowed")];
            return
        }
        d = [...d, t], g = (0, o.n4)(d)
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REMOVE: function(e) {
        let {
            index: t
        } = e;
        d = d.filter((e, n) => n !== t), g = (0, o.n4)(d)
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_UPDATE: function(e) {
        let {
            index: t,
            updates: n
        } = e;
        d = d.map((e, r) => r === t ? function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {},
                    r = Object.keys(n);
                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                }))), r.forEach(function(t) {
                    c(e, t, n[t])
                })
            }
            return e
        }({}, e, n) : e), g = (0, o.n4)(d)
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_REORDER: function(e) {
        let {
            connections: t
        } = e;
        d = [...t], g = (0, o.n4)(d)
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_RESET: function() {
        let e = a.A.getGuildId();
        if (null == e) {
            d = [], g = [];
            return
        }
        d = [...s.A.getConnections(e)], g = []
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SUBMIT: function() {
        u = !0, g = (0, o.n4)(d)
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_SUCCESS: function(e) {
        let {
            connections: t
        } = e;
        u = !1, g = [], d = [...t]
    },
    GUILD_SETTINGS_ONBOARDING_CONNECTIONS_SAVE_FAILED: function(e) {
        let {
            errors: t
        } = e;
        u = !1, g = t
    }
})