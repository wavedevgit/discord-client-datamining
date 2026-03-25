/** chunk id: 132514 params = (module,exports,require) **/
t.d(n, {
    A: () => h
}), t(323874), t(14289), t(35956);
var l = t(735438),
    i = t.n(l),
    s = t(311907),
    a = t(73153),
    r = t(701785),
    c = t(555337);
let u = {
        enabled: !1
    },
    o = null,
    E = Object.assign({}, u),
    _ = !1,
    A = {},
    S = {};

function d(e) {
    try {
        return new URL(e ?? ""), !0
    } catch (e) {
        return !1
    }
}

function I() {
    o = null, E = Object.assign({}, u), _ = !1, S = {}, o = c.A.getGuildId(), E = i().cloneDeep(Object.assign({}, r.h.getSettings(o)))
}

function N(e, n) {
    if (null == E.newMemberActions) return !1;
    let t = E.newMemberActions.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    E.newMemberActions[t] = {
        ...n
    }, E.newMemberActions = [...E.newMemberActions]
}

function G(e, n) {
    if (null == E.resourceChannels) return !1;
    let t = E.resourceChannels.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    E.resourceChannels[t] = {
        ...n
    }, E.resourceChannels = [...E.resourceChannels]
}

function T() {
    _ = !1, E = i().cloneDeep(Object.assign({}, r.h.getSettings(o)))
}
class g extends s.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (A = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(c.A, r.h)
    }
    getState() {
        return {
            dismissedSuggestedChannelIdsByGuildId: A
        }
    }
    getSettings() {
        return E ?? u
    }
    hasChanges() {
        return null != o && !i().isEqual(E, r.h.getSettings(o))
    }
    canCloseEarly() {
        return !this.hasChanges()
    }
    showNotice() {
        return this.hasChanges()
    }
    getSubmitting() {
        return _
    }
    getDismissedSuggestedChannelIds(e) {
        return null == e ? [] : A[e] ?? []
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let n = E.resourceChannels?.find(n => n.channelId === e);
        return null == n ? null : n
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let n = E.newMemberActions?.find(n => n.channelId === e);
        return null == n ? null : n
    }
    getPendingData() {
        return S
    }
    getPendingDataForChannel(e) {
        if (null != e) return S[e]
    }
}
let h = new g(a.h, {
    GUILD_SETTINGS_INIT: I,
    GUILD_SETTINGS_SET_SECTION: I,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: I,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
        E = i().cloneDeep(Object.assign({}, r.h.getSettings(o)))
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function() {
        _ = !0
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: T,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: T,
    GUILD_NEW_MEMBER_ACTION_UPDATE_SUCCESS: function(e) {
        let {
            action: n
        } = e;
        return N(n.channelId, n)
    },
    GUILD_RESOURCE_CHANNEL_UPDATE_SUCCESS: function(e) {
        let {
            resourceChannel: n
        } = e;
        G(n.channelId, n)
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
        let {
            welcomeMessage: n
        } = e;
        null == n ? E.welcomeMessage = void 0 : E.welcomeMessage = {
            authorIds: n.authorIds ?? E.welcomeMessage?.authorIds ?? [],
            message: n.message ?? E.welcomeMessage?.message ?? ""
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION: function(e) {
        let {
            channelId: n,
            action: t
        } = e;
        return N(n, t)
    },
    GUILD_SETTINGS_ONBOARDING_ADD_NEW_MEMBER_ACTION: function(e) {
        let {
            action: n,
            pendingData: t
        } = e;
        E.newMemberActions = E.newMemberActions ?? [], E.newMemberActions = [...E.newMemberActions, n], S[n.channelId] = {
            iconData: t.icon,
            isUrl: d(t.icon),
            emoji: t.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n,
            pendingData: t
        } = e;
        S[n] = {
            iconData: t.icon,
            isUrl: d(t.icon),
            emoji: t.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n
        } = e;
        null == n ? S = {} : delete S[n]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
        let {
            channelId: n
        } = e;
        if (null == E.newMemberActions) return !1;
        E.newMemberActions = [...E.newMemberActions.filter(e => e.channelId !== n)], delete S[n]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
        let {
            actions: n
        } = e;
        E.newMemberActions = n
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
        let {
            channelId: n,
            resourceChannel: t
        } = e;
        G(n, t)
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannel: n
        } = e;
        E.resourceChannels = (E.resourceChannels ?? []).filter(e => e.channelId !== n.channelId), E.resourceChannels = [...E.resourceChannels, n]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannelId: n
        } = e;
        if (null == E.resourceChannels) return !1;
        E.resourceChannels = [...E.resourceChannels.filter(e => e.channelId !== n)]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannels: n
        } = e;
        E.resourceChannels = n
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
        let {
            guildId: n,
            channelIds: t
        } = e;
        A[n] = [...A[n] ?? [], ...t]
    }
})