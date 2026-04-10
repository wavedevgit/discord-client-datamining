/** chunk id: 960755 params = (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(735438),
    r = n.n(i),
    l = n(311907),
    o = n(73153),
    s = n(933958),
    a = n(969151),
    d = n(717125),
    c = n(698441),
    u = n(863005),
    _ = n(152007),
    A = n(617617),
    E = n(961350),
    I = n(924985),
    h = n(734057),
    g = n(945886),
    C = n(760751),
    p = n(576705),
    T = n(222823),
    S = n(309010),
    b = n(543465),
    f = n(403362),
    N = n(661191),
    m = n(32603),
    L = n(355097);
let O = null,
    R = null,
    G = new m.Ay;

function U() {
    let e = S.A.getChannelId(),
        t = S.A.getVoiceChannelId();
    return O = e, R = t, G.clear()
}

function D(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    return G.clearGuildId(t)
}

function y(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    return G.clearGuildId(t)
}

function P(e) {
    let {
        guildId: t
    } = e;
    return G.clearGuildId(t)
}

function M(e) {
    let {
        channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
}

function v(e) {
    let {
        channel: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t.id)
}

function x(e) {
    let {
        id: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
}

function V() {
    let e = S.A.getChannelId(),
        t = S.A.getVoiceChannelId(),
        n = O !== e || R !== t;
    return !!n && (r()([O, R, e, t]).uniq().forEach(e => {
        null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0)
    }), O = e, R = t, !0)
}

function j(e) {
    let {
        id: t
    } = e, n = h.A.getChannel(t);
    return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id)
}

function H(e) {
    let {
        guildId: t
    } = e;
    return G.clearGuildId(t)
}

function B() {
    return G.updateSubtitles()
}

function F(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return G.updateSubtitles(t.guild_id)
}
class w extends l.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(u.A, E.default, I.A, h.A, g.A, s.Ay, C.A, d.A, c.Ay, _.A, p.A, T.Ay, S.A, b.Ay, A.A)
    }
    getGuild(e, t) {
        let n = G.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return {
            guildChannelsVersion: n.version,
            guildChannels: n
        }
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = G.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        }
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = G.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
    }
}
let W = new w(o.h, {
    APPLICATION_FETCH_FAIL: B,
    APPLICATION_FETCH_SUCCESS: B,
    APPLICATION_FETCH: B,
    APPLICATIONS_FETCH_FAIL: B,
    APPLICATIONS_FETCH_SUCCESS: B,
    APPLICATIONS_FETCH: B,
    BACKGROUND_SYNC: U,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => h.A.getChannel(e.channelId)?.guild_id).filter(f.Vq).uniq().forEach(e => {
            G.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: U,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: j,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: j,
    CHANNEL_ACK: M,
    CHANNEL_COLLAPSE: function(e) {
        let {
            channelId: t
        } = e;
        return G.clearGuildId(h.A.getChannel(t)?.guild_id)
    },
    CHANNEL_CREATE: y,
    CHANNEL_DELETE: y,
    CHANNEL_LOCAL_ACK: M,
    CHANNEL_MUTE_EXPIRED: P,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
    CHANNEL_SELECT: V,
    CHANNEL_STATUSES: function(e) {
        return G.clearGuildId(e.guildId)
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => e.guild_id).uniq().forEach(e => {
            G.clearGuildId(e) && (n = !0)
        }), n
    },
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    CONNECTION_OPEN: U,
    CURRENT_USER_UPDATE: U,
    DECAY_READ_STATES: U,
    DEV_TOOLS_DESIGN_TOGGLE_SET: U,
    DISABLE_AUTOMATIC_ACK: M,
    DISMISS_FAVORITE_SUGGESTION: function(e) {
        let {
            channelId: t
        } = e;
        return G.nonPositionalChannelIdUpdate(t)
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
        let {
            location: t
        } = e;
        return G.updateSubtitles((0, a.D)(t), (0, a.H)(t))
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
        B()
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
    ENABLE_AUTOMATIC_ACK: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
        let {
            guildId: t
        } = e;
        return G.updateSubtitles(t)
    },
    GAMES_DATABASE_FETCH_FAIL: B,
    GAMES_DATABASE_FETCH: B,
    GAMES_DATABASE_UPDATE: B,
    GUILD_APPLICATIONS_FETCH_SUCCESS: B,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return E.default.getId() === n.id && G.clearGuildId(t)
    },
    GUILD_MUTE_EXPIRED: P,
    GUILD_ROLE_CREATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
    GUILD_ROLE_UPDATE: P,
    GUILD_SCHEDULED_EVENT_CREATE: F,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_UPDATE: F,
    GUILD_TOGGLE_COLLAPSE_MUTED: P,
    GUILD_UPDATE: D,
    IMPERSONATE_STOP: P,
    IMPERSONATE_UPDATE: P,
    LOAD_CHANNELS: function(e) {
        e.channels.forEach(e => {
            let {
                guildId: t
            } = e;
            return G.clearGuildId(t)
        })
    },
    LOAD_MESSAGES_SUCCESS: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t
        } = e;
        return G.nonPositionalChannelIdUpdate(t)
    },
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    NOTIFICATION_SETTINGS_UPDATE: U,
    OVERLAY_INITIALIZE: U,
    PASSIVE_UPDATE_V2: function(e) {
        return G.clearGuildId(e.guildId)
    },
    RECOMPUTE_READ_STATES: U,
    RESORT_THREADS: M,
    SET_RECENTLY_ACTIVE_COLLAPSED: U,
    THREAD_CREATE: v,
    THREAD_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return G.nonPositionalChannelUpdate(t)
    },
    THREAD_LIST_SYNC: P,
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    THREAD_UPDATE: v,
    TRY_ACK: M,
    UPDATE_CHANNEL_DIMENSIONS: M,
    UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
        let {
            guildId: t
        } = e;
        G.updateSubtitles(t)
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: P,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: P,
    USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
        let {
            userGuildSettings: t
        } = e;
        t.forEach(e => {
            let {
                guild_id: t
            } = e;
            return G.clearGuildId(t)
        })
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
    USER_GUILD_SETTINGS_GUILD_UPDATE: P,
    USER_SETTINGS_PROTO_UPDATE: function(e) {
        let {
            settings: t
        } = e;
        if (t.type !== L.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return null != n && N.default.keys(n).forEach(e => {
            null != n[e].guildRecentsDismissedAt && (i = G.updateRecentsCategory(e) || i)
        }), i
    },
    VOICE_CATEGORY_COLLAPSE: H,
    VOICE_CATEGORY_EXPAND: H,
    VOICE_CHANNEL_SELECT: V,
    VOICE_CHANNEL_STATUS_UPDATE: function(e) {
        return G.nonPositionalChannelIdUpdate(e.id)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = V(), i = new Set;
        for (let {
                channelId: e,
                oldChannelId: r
            }
            of t) null == r || i.has(r) || (G.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)), null == e || i.has(e) || (G.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n
    },
    WINDOW_FOCUS: function() {
        return null != O && G.nonPositionalChannelIdUpdate(O)
    }
})