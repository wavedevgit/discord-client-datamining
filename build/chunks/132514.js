/** chunk id: 132514 params = (module,exports,require) **/
"use strict";
t.d(n, {
    A: () => C
}), t(323874), t(14289), t(35956);
var i = t(735438),
    l = t.n(i),
    r = t(311907),
    s = t(73153),
    a = t(701785),
    u = t(555337);
let c = {
        enabled: !1
    },
    o = null,
    _ = Object.assign({}, c),
    d = !1,
    S = {},
    E = {};

function g(e) {
    try {
        return new URL(e ?? ""), !0
    } catch (e) {
        return !1
    }
}

function A() {
    o = null, _ = Object.assign({}, c), d = !1, E = {}, o = u.A.getGuildId(), _ = l().cloneDeep(Object.assign({}, a.h.getSettings(o)))
}

function N(e, n) {
    if (null == _.newMemberActions) return !1;
    let t = _.newMemberActions.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    _.newMemberActions[t] = {
        ...n
    }, _.newMemberActions = [..._.newMemberActions]
}

function I(e, n) {
    if (null == _.resourceChannels) return !1;
    let t = _.resourceChannels.findIndex(n => n.channelId === e);
    if (t < 0) return !1;
    _.resourceChannels[t] = {
        ...n
    }, _.resourceChannels = [..._.resourceChannels]
}

function f() {
    d = !1, _ = l().cloneDeep(Object.assign({}, a.h.getSettings(o)))
}
class h extends r.Ay.PersistedStore {
    static displayName = "GuildSettingsOnboardingHomeSettingsStore";
    static persistKey = "GuildSettingsOnboardingHomeSettingsStore";
    initialize(e) {
        null != e && (S = e.dismissedSuggestedChannelIdsByGuildId), this.waitFor(u.A, a.h)
    }
    getState() {
        return {
            dismissedSuggestedChannelIdsByGuildId: S
        }
    }
    getSettings() {
        return _ ?? c
    }
    hasChanges() {
        return null != o && !l().isEqual(_, a.h.getSettings(o))
    }
    canCloseEarly() {
        return !this.hasChanges()
    }
    showNotice() {
        return this.hasChanges()
    }
    getSubmitting() {
        return d
    }
    getDismissedSuggestedChannelIds(e) {
        return null == e ? [] : S[e] ?? []
    }
    getResourceChannel(e) {
        if (null == e) return null;
        let n = _.resourceChannels?.find(n => n.channelId === e);
        return null == n ? null : n
    }
    getNewMemberAction(e) {
        if (null == e) return null;
        let n = _.newMemberActions?.find(n => n.channelId === e);
        return null == n ? null : n
    }
    getPendingData() {
        return E
    }
    getPendingDataForChannel(e) {
        if (null != e) return E[e]
    }
}
let C = new h(s.h, {
    GUILD_SETTINGS_INIT: A,
    GUILD_SETTINGS_SET_SECTION: A,
    GUILD_SETTINGS_ONBOARDING_HOME_SETTINGS_RESET: A,
    GUILD_HOME_SETTINGS_FETCH_SUCCESS: function() {
        _ = l().cloneDeep(Object.assign({}, a.h.getSettings(o)))
    },
    GUILD_HOME_SETTINGS_UPDATE_START: function() {
        d = !0
    },
    GUILD_HOME_SETTINGS_UPDATE_SUCCESS: f,
    GUILD_HOME_SETTINGS_UPDATE_FAIL: f,
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
        I(n.channelId, n)
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_WELCOME_MESSAGE: function(e) {
        let {
            welcomeMessage: n
        } = e;
        null == n ? _.welcomeMessage = void 0 : _.welcomeMessage = {
            authorIds: n.authorIds ?? _.welcomeMessage?.authorIds ?? [],
            message: n.message ?? _.welcomeMessage?.message ?? ""
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
        _.newMemberActions = _.newMemberActions ?? [], _.newMemberActions = [..._.newMemberActions, n], E[n.channelId] = {
            iconData: t.icon,
            isUrl: g(t.icon),
            emoji: t.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n,
            pendingData: t
        } = e;
        E[n] = {
            iconData: t.icon,
            isUrl: g(t.icon),
            emoji: t.emoji
        }
    },
    GUILD_SETTINGS_ONBOARDING_CLEAR_NEW_MEMBER_ACTION_PENDING_DATA: function(e) {
        let {
            channelId: n
        } = e;
        null == n ? E = {} : delete E[n]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_NEW_MEMBER_ACTION: function(e) {
        let {
            channelId: n
        } = e;
        if (null == _.newMemberActions) return !1;
        _.newMemberActions = [..._.newMemberActions.filter(e => e.channelId !== n)], delete E[n]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_NEW_MEMBER_ACTION: function(e) {
        let {
            actions: n
        } = e;
        _.newMemberActions = n
    },
    GUILD_SETTINGS_ONBOARDING_UPDATE_RESOURCE_CHANNEL: function(e) {
        let {
            channelId: n,
            resourceChannel: t
        } = e;
        I(n, t)
    },
    GUILD_SETTINGS_ONBOARDING_ADD_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannel: n
        } = e;
        _.resourceChannels = (_.resourceChannels ?? []).filter(e => e.channelId !== n.channelId), _.resourceChannels = [..._.resourceChannels, n]
    },
    GUILD_SETTINGS_ONBOARDING_DELETE_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannelId: n
        } = e;
        if (null == _.resourceChannels) return !1;
        _.resourceChannels = [..._.resourceChannels.filter(e => e.channelId !== n)]
    },
    GUILD_SETTINGS_ONBOARDING_REORDER_RESOURCE_CHANNEL: function(e) {
        let {
            resourceChannels: n
        } = e;
        _.resourceChannels = n
    },
    GUILD_SETTINGS_ONBOARDING_DISMISS_RESOURCE_CHANNEL_SUGGESTION: function(e) {
        let {
            guildId: n,
            channelIds: t
        } = e;
        S[n] = [...S[n] ?? [], ...t]
    }
})