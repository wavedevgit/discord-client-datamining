/** chunk id: 960755 params = (module,exports,require) **/
n.d(t, {
    A: () => F
});
var i = n(735438),
    r = n.n(i),
    s = n(311907),
    a = n(73153),
    l = n(933958),
    o = n(969151),
    d = n(717125),
    c = n(698441),
    _ = n(863005),
    u = n(152007),
    A = n(617617),
    E = n(961350),
    g = n(924985),
    I = n(734057),
    h = n(945886),
    C = n(760751),
    p = n(576705),
    m = n(222823),
    S = n(309010),
    T = n(543465),
    b = n(403362),
    f = n(661191),
    N = n(32603),
    L = n(355097);
let O = null,
    y = null,
    G = new N.Ay;

function R() {
    let e = S.A.getChannelId(),
        t = S.A.getVoiceChannelId();
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

function D(e) {
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
    let e = S.A.getChannelId(),
        t = S.A.getVoiceChannelId(),
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

function H(e) {
    let {
        guildId: t
    } = e;
    return G.clearGuildId(t)
}

function B() {
    return G.updateSubtitles()
}

function j(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return G.updateSubtitles(t.guild_id)
}
class W extends s.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(_.A, E.default, g.A, I.A, h.A, l.Ay, C.A, d.A, c.Ay, u.A, p.A, m.Ay, S.A, T.Ay, A.A)
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
let F = new W(a.h, {
    APPLICATION_FETCH_FAIL: B,
    APPLICATION_FETCH_SUCCESS: B,
    APPLICATION_FETCH: B,
    APPLICATIONS_FETCH_FAIL: B,
    APPLICATIONS_FETCH_SUCCESS: B,
    APPLICATIONS_FETCH: B,
    BACKGROUND_SYNC: R,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => I.A.getChannel(e.channelId)?.guild_id).filter(b.Vq).uniq().forEach(e => {
            G.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: v,
    CHANNEL_COLLAPSE: function(e) {
        let {
            channelId: t
        } = e;
        return G.clearGuildId(I.A.getChannel(t)?.guild_id)
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: v,
    CHANNEL_MUTE_EXPIRED: P,
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
    CONNECTION_OPEN_SUPPLEMENTAL: B,
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
        B()
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: B,
    ENABLE_AUTOMATIC_ACK: v,
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
    GUILD_CREATE: U,
    GUILD_DELETE: U,
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
    GUILD_SCHEDULED_EVENT_CREATE: j,
    GUILD_SCHEDULED_EVENT_DELETE: j,
    GUILD_SCHEDULED_EVENT_UPDATE: j,
    GUILD_TOGGLE_COLLAPSE_MUTED: P,
    GUILD_UPDATE: U,
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
    THREAD_LIST_SYNC: P,
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
        return null != n && f.default.keys(n).forEach(e => {
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