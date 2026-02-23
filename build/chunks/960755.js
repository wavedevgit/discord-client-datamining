/** chunk id: 960755, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(735438),
    r = n.n(i),
    a = n(311907),
    s = n(73153),
    l = n(933958),
    o = n(969151),
    d = n(717125),
    _ = n(698441),
    c = n(863005),
    u = n(152007),
    A = n(617617),
    g = n(961350),
    E = n(924985),
    I = n(734057),
    h = n(945886),
    p = n(760751),
    C = n(576705),
    m = n(222823),
    b = n(309010),
    S = n(543465),
    f = n(403362),
    T = n(661191),
    L = n(32603),
    N = n(355097);
let O = null,
    y = null,
    G = new L.Ay;

function R() {
    let e = b.A.getChannelId(),
        t = b.A.getVoiceChannelId();
    return O = e, y = t, G.clear()
}

function U(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    return G.clearGuildId(t)
}

function P(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    return G.clearGuildId(t)
}

function D(e) {
    let {
        guildId: t
    } = e;
    return G.clearGuildId(t)
}

function v(e) {
    let {
        channelId: t
    } = e;
    return G.nonPositionalChannelIdUpdate(t)
}

function M(e) {
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
    let e = b.A.getChannelId(),
        t = b.A.getVoiceChannelId(),
        n = O !== e || y !== t;
    return !!n && (r()([O, y, e, t]).uniq().forEach(e => {
        null != e && G.nonPositionalChannelIdUpdate(e) && (n = !0)
    }), O = e, y = t, !0)
}

function w(e) {
    let {
        id: t
    } = e, n = I.A.getChannel(t);
    return null == n ? G.clearGuildId(t) : G.clearGuildId(n.guild_id)
}

function B(e) {
    let {
        guildId: t
    } = e;
    return G.clearGuildId(t)
}

function H() {
    return G.updateSubtitles()
}

function j(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return G.updateSubtitles(t.guild_id)
}
class F extends a.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(c.A, g.default, E.A, I.A, h.A, l.Ay, p.A, d.A, _.Ay, u.A, C.A, m.Ay, b.A, S.Ay, A.A)
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
let W = new F(s.h, {
    APPLICATION_FETCH_FAIL: H,
    APPLICATION_FETCH_SUCCESS: H,
    APPLICATION_FETCH: H,
    APPLICATIONS_FETCH_FAIL: H,
    APPLICATIONS_FETCH_SUCCESS: H,
    APPLICATIONS_FETCH: H,
    BACKGROUND_SYNC: R,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => I.A.getChannel(e.channelId)?.guild_id).filter(f.Vq).uniq().forEach(e => {
            G.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: D,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: D,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: D,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: v,
    CHANNEL_COLLAPSE: function(e) {
        let {
            channelId: t
        } = e;
        return G.clearGuildId(I.A.getChannel(t)?.guild_id)
    },
    CHANNEL_CREATE: P,
    CHANNEL_DELETE: P,
    CHANNEL_LOCAL_ACK: v,
    CHANNEL_MUTE_EXPIRED: D,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: v,
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
    CONNECTION_OPEN_SUPPLEMENTAL: H,
    CONNECTION_OPEN: R,
    CURRENT_USER_UPDATE: R,
    DECAY_READ_STATES: R,
    DEV_TOOLS_DESIGN_TOGGLE_SET: R,
    DISABLE_AUTOMATIC_ACK: v,
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
        return G.updateSubtitles((0, o.D)(t), (0, o.H)(t))
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
        H()
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: H,
    ENABLE_AUTOMATIC_ACK: v,
    FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
        let {
            guildId: t
        } = e;
        return G.updateSubtitles(t)
    },
    GAMES_DATABASE_FETCH_FAIL: H,
    GAMES_DATABASE_FETCH: H,
    GAMES_DATABASE_UPDATE: H,
    GUILD_APPLICATIONS_FETCH_SUCCESS: H,
    GUILD_CREATE: U,
    GUILD_DELETE: U,
    GUILD_MEMBER_UPDATE: function(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return g.default.getId() === n.id && G.clearGuildId(t)
    },
    GUILD_MUTE_EXPIRED: D,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_DELETE: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_SCHEDULED_EVENT_CREATE: j,
    GUILD_SCHEDULED_EVENT_DELETE: j,
    GUILD_SCHEDULED_EVENT_UPDATE: j,
    GUILD_TOGGLE_COLLAPSE_MUTED: D,
    GUILD_UPDATE: U,
    IMPERSONATE_STOP: D,
    IMPERSONATE_UPDATE: D,
    LOAD_CHANNELS: function(e) {
        e.channels.forEach(e => {
            let {
                guildId: t
            } = e;
            return G.clearGuildId(t)
        })
    },
    LOAD_MESSAGES_SUCCESS: v,
    MESSAGE_ACK: v,
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t
        } = e;
        return G.nonPositionalChannelIdUpdate(t)
    },
    MESSAGE_DELETE_BULK: v,
    MESSAGE_DELETE: v,
    NOTIFICATION_SETTINGS_UPDATE: R,
    OVERLAY_INITIALIZE: R,
    PASSIVE_UPDATE_V2: function(e) {
        return G.clearGuildId(e.guildId)
    },
    RECOMPUTE_READ_STATES: R,
    RESORT_THREADS: v,
    SET_RECENTLY_ACTIVE_COLLAPSED: R,
    THREAD_CREATE: M,
    THREAD_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return G.nonPositionalChannelUpdate(t)
    },
    THREAD_LIST_SYNC: D,
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    THREAD_UPDATE: M,
    TRY_ACK: v,
    UPDATE_CHANNEL_DIMENSIONS: v,
    UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
        let {
            guildId: t
        } = e;
        G.updateSubtitles(t)
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: D,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: D,
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
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D,
    USER_GUILD_SETTINGS_GUILD_UPDATE: D,
    USER_SETTINGS_PROTO_UPDATE: function(e) {
        let {
            settings: t
        } = e;
        if (t.type !== N.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return null != n && T.default.keys(n).forEach(e => {
            null != n[e].guildRecentsDismissedAt && (i = G.updateRecentsCategory(e) || i)
        }), i
    },
    VOICE_CATEGORY_COLLAPSE: B,
    VOICE_CATEGORY_EXPAND: B,
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