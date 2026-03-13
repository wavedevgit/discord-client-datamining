/** chunk id: 960755 params = (module,exports,require) **/
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
    f = n(222823),
    m = n(309010),
    S = n(543465),
    T = n(403362),
    b = n(661191),
    N = n(32603),
    L = n(355097);
let O = null,
    y = null,
    R = new N.Ay;

function v() {
    let e = m.A.getChannelId(),
        t = m.A.getVoiceChannelId();
    return O = e, y = t, R.clear()
}

function G(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    return R.clearGuildId(t)
}

function U(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    return R.clearGuildId(t)
}

function D(e) {
    let {
        guildId: t
    } = e;
    return R.clearGuildId(t)
}

function P(e) {
    let {
        channelId: t
    } = e;
    return R.nonPositionalChannelIdUpdate(t)
}

function M(e) {
    let {
        channel: t
    } = e;
    return R.nonPositionalChannelIdUpdate(t.id)
}

function x(e) {
    let {
        id: t
    } = e;
    return R.nonPositionalChannelIdUpdate(t)
}

function V() {
    let e = m.A.getChannelId(),
        t = m.A.getVoiceChannelId(),
        n = O !== e || y !== t;
    return !!n && (r()([O, y, e, t]).uniq().forEach(e => {
        null != e && R.nonPositionalChannelIdUpdate(e) && (n = !0)
    }), O = e, y = t, !0)
}

function w(e) {
    let {
        id: t
    } = e, n = I.A.getChannel(t);
    return null == n ? R.clearGuildId(t) : R.clearGuildId(n.guild_id)
}

function F(e) {
    let {
        guildId: t
    } = e;
    return R.clearGuildId(t)
}

function j() {
    return R.updateSubtitles()
}

function B(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return R.updateSubtitles(t.guild_id)
}
class H extends a.Ay.Store {
    static displayName = "ChannelListStore";
    initialize() {
        this.waitFor(_.A, E.default, g.A, I.A, h.A, l.Ay, C.A, d.A, c.Ay, u.A, p.A, f.Ay, m.A, S.Ay, A.A)
    }
    getGuild(e, t) {
        let n = R.getGuild(e, t?.guildActionRows ?? [], t?.channelNoticeRows ?? []);
        return {
            guildChannelsVersion: n.version,
            guildChannels: n
        }
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = R.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        }
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = R.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
    }
}
let W = new H(s.h, {
    APPLICATION_FETCH_FAIL: j,
    APPLICATION_FETCH_SUCCESS: j,
    APPLICATION_FETCH: j,
    APPLICATIONS_FETCH_FAIL: j,
    APPLICATIONS_FETCH_SUCCESS: j,
    APPLICATIONS_FETCH: j,
    BACKGROUND_SYNC: v,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => I.A.getChannel(e.channelId)?.guild_id).filter(T.Vq).uniq().forEach(e => {
            R.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: D,
    CACHE_LOADED_LAZY: v,
    CATEGORY_COLLAPSE_ALL: D,
    CATEGORY_COLLAPSE: w,
    CATEGORY_EXPAND_ALL: D,
    CATEGORY_EXPAND: w,
    CHANNEL_ACK: P,
    CHANNEL_COLLAPSE: function(e) {
        let {
            channelId: t
        } = e;
        return R.clearGuildId(I.A.getChannel(t)?.guild_id)
    },
    CHANNEL_CREATE: U,
    CHANNEL_DELETE: U,
    CHANNEL_LOCAL_ACK: P,
    CHANNEL_MUTE_EXPIRED: D,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: P,
    CHANNEL_SELECT: V,
    CHANNEL_STATUSES: function(e) {
        return R.clearGuildId(e.guildId)
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return r()(t).map(e => e.guild_id).uniq().forEach(e => {
            R.clearGuildId(e) && (n = !0)
        }), n
    },
    CONNECTION_OPEN_SUPPLEMENTAL: j,
    CONNECTION_OPEN: v,
    CURRENT_USER_UPDATE: v,
    DECAY_READ_STATES: v,
    DEV_TOOLS_DESIGN_TOGGLE_SET: v,
    DISABLE_AUTOMATIC_ACK: P,
    DISMISS_FAVORITE_SUGGESTION: function(e) {
        let {
            channelId: t
        } = e;
        return R.nonPositionalChannelIdUpdate(t)
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
        let {
            location: t
        } = e;
        return R.updateSubtitles((0, o.D)(t), (0, o.H)(t))
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
        j()
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: j,
    ENABLE_AUTOMATIC_ACK: P,
    FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
        let {
            guildId: t
        } = e;
        return R.updateSubtitles(t)
    },
    GAMES_DATABASE_FETCH_FAIL: j,
    GAMES_DATABASE_FETCH: j,
    GAMES_DATABASE_UPDATE: j,
    GUILD_APPLICATIONS_FETCH_SUCCESS: j,
    GUILD_CREATE: G,
    GUILD_DELETE: G,
    GUILD_MEMBER_UPDATE: function(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return E.default.getId() === n.id && R.clearGuildId(t)
    },
    GUILD_MUTE_EXPIRED: D,
    GUILD_ROLE_CREATE: D,
    GUILD_ROLE_DELETE: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: D,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: D,
    GUILD_ROLE_UPDATE: D,
    GUILD_SCHEDULED_EVENT_CREATE: B,
    GUILD_SCHEDULED_EVENT_DELETE: B,
    GUILD_SCHEDULED_EVENT_UPDATE: B,
    GUILD_TOGGLE_COLLAPSE_MUTED: D,
    GUILD_UPDATE: G,
    IMPERSONATE_STOP: D,
    IMPERSONATE_UPDATE: D,
    LOAD_CHANNELS: function(e) {
        e.channels.forEach(e => {
            let {
                guildId: t
            } = e;
            return R.clearGuildId(t)
        })
    },
    LOAD_MESSAGES_SUCCESS: P,
    MESSAGE_ACK: P,
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t
        } = e;
        return R.nonPositionalChannelIdUpdate(t)
    },
    MESSAGE_DELETE_BULK: P,
    MESSAGE_DELETE: P,
    NOTIFICATION_SETTINGS_UPDATE: v,
    OVERLAY_INITIALIZE: v,
    PASSIVE_UPDATE_V2: function(e) {
        return R.clearGuildId(e.guildId)
    },
    RECOMPUTE_READ_STATES: v,
    RESORT_THREADS: P,
    SET_RECENTLY_ACTIVE_COLLAPSED: v,
    THREAD_CREATE: M,
    THREAD_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return R.nonPositionalChannelUpdate(t)
    },
    THREAD_LIST_SYNC: D,
    THREAD_MEMBER_UPDATE: x,
    THREAD_MEMBERS_UPDATE: x,
    THREAD_UPDATE: M,
    TRY_ACK: P,
    UPDATE_CHANNEL_DIMENSIONS: P,
    UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
        let {
            guildId: t
        } = e;
        R.updateSubtitles(t)
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
            return R.clearGuildId(t)
        })
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: D,
    USER_GUILD_SETTINGS_GUILD_UPDATE: D,
    USER_SETTINGS_PROTO_UPDATE: function(e) {
        let {
            settings: t
        } = e;
        if (t.type !== L.oD.PRELOADED_USER_SETTINGS) return !1;
        let n = t.proto.guilds?.guilds,
            i = !1;
        return null != n && b.default.keys(n).forEach(e => {
            null != n[e].guildRecentsDismissedAt && (i = R.updateRecentsCategory(e) || i)
        }), i
    },
    VOICE_CATEGORY_COLLAPSE: F,
    VOICE_CATEGORY_EXPAND: F,
    VOICE_CHANNEL_SELECT: V,
    VOICE_CHANNEL_STATUS_UPDATE: function(e) {
        return R.nonPositionalChannelIdUpdate(e.id)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = V(), i = new Set;
        for (let {
                channelId: e,
                oldChannelId: r
            }
            of t) null == r || i.has(r) || (R.nonPositionalChannelIdUpdate(r) && (n = !0), i.add(r)), null == e || i.has(e) || (R.nonPositionalChannelIdUpdate(e) && (n = !0), i.add(e));
        return n
    },
    WINDOW_FOCUS: function() {
        return null != O && R.nonPositionalChannelIdUpdate(O)
    }
})