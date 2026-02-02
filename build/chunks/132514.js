/** chunk id: 132514, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => b
}), t(896048), t(693327), t(554719), t(680155), t(323874), t(14289), t(35956);
var l, i = t(735438),
    r = t.n(i),
    s = t(311907),
    u = t(73153),
    o = t(701785),
    a = t(555337);

function c(e, n, t) {
    return n in e ? Object.defineProperty(e, n, {
        value: t,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[n] = t, e
}

function E(e) {
    for (var n = 1; n < arguments.length; n++) {
        var t = null != arguments[n] ? arguments[n] : {},
            l = Object.keys(t);
        "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
        }))), l.forEach(function(n) {
            c(e, n, t[n])
        })
    }
    return e
}
let d = {
        enabled: !1
    },
    _ = null,
    A = Object.assign({}, d),
    I = !1,
    S = {},
    O = {};

function N(e) {
    try {
        return new URL(null != e ? e : ""), !0
    } catch (e) {
        return !1
    }
}

function g() {
    _ = null, A = Object.assign({}, d), I = !1, O = {}, _ = a.A.getGuildId(), A = r().cloneDeep(Object.assign({}, o.h.getSettings(_)))
}

function G(e, n) {
    if (null == A.newMemberActions) return !1;
    let t = A.newMemberActions.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    A.newMemberActions[t] = E({}, n), A.newMemberActions = [...A.newMemberActions]
}

function T(e, n) {
    if (null == A.resourceChannels) return !1;
    let t = A.resourceChannels.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    A.resourceChannels[t] = E({}, n), A.resourceChannels = [...A.resourceChannels]
}

function f() {
    I = !1, A = r().cloneDeep(Object.assign({}, o.h.getSettings(_)))
}
class h extends(l = s.Ay.PersistedStore) {
    initialize(e) {
        null != e && (S = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(a.A, o.h)
    }
    getState() {
        return {
            dismissedSuggestedChannelIdsByGuildId: S
        }
    }
    getSettings() {
        return null != A ? A : d
    }
    hasChanges() {
        return null != _ && !r().isEqual(A, o.h.getSettings(_))
    }
    canCloseEarly() {
        return !this.hasChanges()
    }
    showNotice() {
        return this.hasChanges()
    }
    getSubmitting() {
        return I
    }
    getDismissedSuggestedChannelIds(e) {
        var n;
        return null == e ? [] : null != (n = S[e]) ? n : []
    }
    getResourceChannel(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = A.resourceChannels) ? void 0 : n.find(n => n.channelId === e);
        return null == t ? null : t
    }
    getNewMemberAction(e) {
        var n;
        if (null == e) return null;
        let t = null == (n = A.newMemberActions) ? void 0 : n.find(n => n.channelId === e);
        return null == t ? null : t
    }
    getPendingData() {
        return O
    }
    getPendingDataForChannel(e) {
        if (null != e) return O[e]
    }
}
c(h, "displayName", "GuildSettingsOnboardingHomeSettingsStore"), c(h, "persistKey", "GuildSettingsOnboardingHomeSettingsStore");
let b = new h(u.h, {
    GUILD_SETTINGS_INIT: g,
    GUILD_SETTINGS_SET_SECTION: g,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: g,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
        A = r().cloneDeep(Object.assign({}, o.h.getSettings(_)))
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function() {
        I = !0
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: f,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: f,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
        let {
            action: n
        } = e;
        return G(n.channelId, n)
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
        let {
            resourceChannel: n
        } = e;
        T(n.channelId, n)
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
        let {
            welcomeMessage: n
        } = e;
        if (null == n) A.welcomeMessage = void 0;
        else {
            var t, l, i, r, s, u;
            A.welcomeMessage = {
                authorIds: null != (t = null != (l = n.authorIds) ? l : null == (s = A.welcomeMessage) ? void 0 : s.authorIds) ? t : [],
                message: null != (i = null != (r = n.message) ? r : null == (u = A.welcomeMessage) ? void 0 : u.message) ? i : ""
            }
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
        let {
            channelId: n,
            action: t
        } = e;
        return G(n, t)
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
        var n;
        let {
            action: t,
            pendingData: l
        } = e;
        A.newMemberActions = null != (n = A.newMemberActions) ? n : [], A.newMemberActions = [...A.newMemberActions, t], O[t.channelId] = {
            iconData: l.icon,
            isUrl: N(l.icon),
            emoji: l.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n,
            pendingData: t
        } = e;
        O[n] = {
            iconData: t.icon,
            isUrl: N(t.icon),
            emoji: t.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n
        } = e;
        null == n ? O = {} : delete O[n]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
        let {
            channelId: n
        } = e;
        if (null == A.newMemberActions) return !1;
        A.newMemberActions = [...A.newMemberActions.filter(e => e.channelId !== n)], delete O[n]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
        let {
            actions: n
        } = e;
        A.newMemberActions = n
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
        let {
            channelId: n,
            resourceChannel: t
        } = e;
        T(n, t)
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
        var n;
        let {
            resourceChannel: t
        } = e;
        A.resourceChannels = (null != (n = A.resourceChannels) ? n : []).filter(e => e.channelId !== t.channelId), A.resourceChannels = [...A.resourceChannels, t]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannelId: n
        } = e;
        if (null == A.resourceChannels) return !1;
        A.resourceChannels = [...A.resourceChannels.filter(e => e.channelId !== n)]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannels: n
        } = e;
        A.resourceChannels = n
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
        var n;
        let {
            guildId: t,
            channelIds: l
        } = e;
        S[t] = [...null != (n = S[t]) ? n : [], ...l]
    }
})