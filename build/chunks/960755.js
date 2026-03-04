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
    I = n(924985),
    E = n(734057),
    h = n(945886),
    C = n(760751),
    p = n(576705),
    S = n(222823),
    m = n(309010),
    T = n(543465),
    f = n(403362),
    b = n(661191),
    L = n(32603),
    N = n(355097);
let O = null,
    G = null,
    U = new L.Ay;

function y() {
    let e = m.A.getChannelId(),
        t = m.A.getVoiceChannelId();
    return O = e, G = t, U.clear()
}

function R(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    return U.clearGuildId(t)
}

function D(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    return U.clearGuildId(t)
}

function P(e) {
    let {
        guildId: t
    } = e;
    return U.clearGuildId(t)
}

function v(e) {
    let {
        channelId: t
    } = e;
    return U.nonPositionalChannelIdUpdate(t)
}

function M(e) {
    let {
        channel: t
    } = e;
    return U.nonPositionalChannelIdUpdate(t.id)
}

function x(e) {
    let {
        id: t
    } = e;
    return U.nonPositionalChannelIdUpdate(t)
}

function V() {
    let e = m.A.getChannelId(),
        t = m.A.getVoiceChannelId(),
        n = O !== e || G !== t;
    return !!n && (r()([O, G, e, t]).uniq().forEach(e => {
        null != e && U.nonPositionalChannelIdUpdate(e) && (n = !0)
    }), O = e, G = t, !0)
}

function w(e) {
    let {
        id: t
    } = e, n = E.A.getChannel(t);
    return null == n ? U.clearGuildId(t) : U.clearGuildId(n.guild_id)
}

function F(e) {
    let {
        guildId: t
    } = e;
    return U.clearGuildId(t)
}

function B() {
    return U.updateSubtitles()
}

function H(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return U.updateSubtitles(t.guild_id)
}
class j extends a.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(c.A, g.default, I.A, E.A, h.A, l.Ay, C.A, d.A, _.Ay, u.A, p.A, S.Ay, m.A, T.Ay, A.A)
    }
    getGuild(e, t) {
        let n = U.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return {
            guildChannelsVersion: n.version,
            guildChannels: n
        }
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = U.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        }
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = U.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
    }
}
let W = new j(s.h, {
    APPLICATION_FETCH_FAIL: B,
    APPLICATION_FETCH_SUCCESS: B,
    APPLICATION_FETCH: B,
    APPLICATIONS_FETCH_FAIL: B,
    APPLICATIONS_FETCH_SUCCESS: B,
    APPLICATIONS_FETCH: B,
    BACKGROUND_SYNC: y,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => E.A.getChannel(e.channelId)?.guild_id).filter(f.Vq).uniq().forEach(e => {
            U.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: P,
    CACHE_LOADED_LAZY: y,
    CATEGORY_COLLAPSE_ALL: P,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: P,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: v,
    CHANNEL_COLLAPSE: function(e) {
        let {
            channelId: t
        } = e;
        return U.clearGuildId(E.A.getChannel(t)?.guild_id)
    },
    CHANNEL_CREATE: D,
    CHANNEL_DELETE: D,
    CHANNEL_LOCAL_ACK: v,
    CHANNEL_MUTE_EXPIRED: P,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: v,
    CHANNEL_SELECT: V,
    CHANNEL_STATUSES: function(e) {
        return U.clearGuildId(e.guildId)
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => e.guild_id).uniq().forEach(e => {
            U.clearGuildId(e) && (n = !0)
        }), n
    },
    CONNECTION_OPEN_SUPPLEMENTAL: B,
    CONNECTION_OPEN: y,
    CURRENT_USER_UPDATE: y,
    DECAY_READ_STATES: y,
    DEV_TOOLS_DESIGN_TOGGLE_SET: y,
    DISABLE_AUTOMATIC_ACK: v,
    DISMISS_FAVORITE_SUGGESTION: function(e) {
        let {
            channelId: t
        } = e;
        return U.nonPositionalChannelIdUpdate(t)
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
        let {
            location: t
        } = e;
        return U.updateSubtitles((0, o.D)(t), (0, o.H)(t))
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
        return U.updateSubtitles(t)
    },
    GAMES_DATABASE_FETCH_FAIL: B,
    GAMES_DATABASE_FETCH: B,
    GAMES_DATABASE_UPDATE: B,
    GUILD_APPLICATIONS_FETCH_SUCCESS: B,
    GUILD_CREATE: R,
    GUILD_DELETE: R,
    GUILD_MEMBER_UPDATE: function(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return g.default.getId() === n.id && U.clearGuildId(t)
    },
    GUILD_MUTE_EXPIRED: P,
    GUILD_ROLE_CREATE: P,
    GUILD_ROLE_DELETE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: P,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: P,
    GUILD_ROLE_UPDATE: P,
    GUILD_SCHEDULED_EVENT_CREATE: H,
    GUILD_SCHEDULED_EVENT_DELETE: H,
    GUILD_SCHEDULED_EVENT_UPDATE: H,
    GUILD_TOGGLE_COLLAPSE_MUTED: P,
    GUILD_UPDATE: R,
    IMPERSONATE_STOP: P,
    IMPERSONATE_UPDATE: P,
    LOAD_CHANNELS: function(e) {
        e.channels.forEach(e => {
            let {
                guildId: t
            } = e;
            return U.clearGuildId(t)
        })
    },
    LOAD_MESSAGES_SUCCESS: v,
    MESSAGE_ACK: v,
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t
        } = e;
        return U.nonPositionalChannelIdUpdate(t)
    },
    MESSAGE_DELETE_BULK: v,
    MESSAGE_DELETE: v,
    NOTIFICATION_SETTINGS_UPDATE: y,
    OVERLAY_INITIALIZE: y,
    PASSIVE_UPDATE_V2: function(e) {
        return U.clearGuildId(e.guildId)
    },
    RECOMPUTE_READ_STATES: y,
    RESORT_THREADS: v,
    SET_RECENTLY_ACTIVE_COLLAPSED: y,
    THREAD_CREATE: M,
    THREAD_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return U.nonPositionalChannelUpdate(t)
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
        U.updateSubtitles(t)
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
            return U.clearGuildId(t)
        })
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: P,
    USER_GUILD_SETTINGS_GUILD_UPDATE: P,
    USER_SETTINGS_PROTO_UPDATE: function(e) {
        let {
            settings: t
        } = e;
        if (t.type !== N.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return null != n && b.default.keys(n).forEach(e => {
            null != n[e].guildRecentsDismissedAt && (i = U.updateRecentsCategory(e) || i)
        }), i
    },
    VOICE_CATEGORY_COLLAPSE: F,
    VOICE_CATEGORY_EXPAND: F,
    VOICE_CHANNEL_SELECT: V,
    VOICE_CHANNEL_STATUS_UPDATE: function(e) {
        return U.nonPositionalChannelIdUpdate(e.id)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = V(), i = new Set;
        for (let {
                channelId: e,
                oldChannelId: r
            }
            of t) null == r || i.has(r) || (U.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)), null == e || i.has(e) || (U.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n
    },
    WINDOW_FOCUS: function() {
        return null != O && U.nonPositionalChannelIdUpdate(O)
    }
})