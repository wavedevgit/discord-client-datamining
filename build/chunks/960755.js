/** chunk id: 960755, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => W
}), n(896048);
var r, i, l = n(735438),
    s = n.n(l),
    a = n(311907),
    o = n(73153),
    c = n(933958),
    d = n(969151),
    u = n(717125),
    _ = n(698441),
    p = n(863005),
    m = n(152007),
    g = n(617617),
    A = n(961350),
    f = n(924985),
    b = n(734057),
    h = n(945886),
    E = n(760751),
    O = n(576705),
    x = n(222823),
    C = n(309010),
    S = n(543465),
    T = n(403362),
    I = n(661191),
    N = n(32603),
    y = n(355097);
let j = null,
    v = null,
    P = new N.Ay;

function R() {
    let e = C.A.getChannelId(),
        t = C.A.getVoiceChannelId();
    return j = e, v = t, P.clear()
}

function D(e) {
    let {
        guild: {
            id: t
        }
    } = e;
    return P.clearGuildId(t)
}

function L(e) {
    let {
        channel: {
            guild_id: t
        }
    } = e;
    return P.clearGuildId(t)
}

function w(e) {
    let {
        guildId: t
    } = e;
    return P.clearGuildId(t)
}

function M(e) {
    let {
        channelId: t
    } = e;
    return P.nonPositionalChannelIdUpdate(t)
}

function G(e) {
    let {
        channel: t
    } = e;
    return P.nonPositionalChannelIdUpdate(t.id)
}

function U(e) {
    let {
        id: t
    } = e;
    return P.nonPositionalChannelIdUpdate(t)
}

function k() {
    let e = C.A.getChannelId(),
        t = C.A.getVoiceChannelId(),
        n = j !== e || v !== t;
    return !!n && (s()([j, v, e, t]).uniq().forEach(e => {
        null != e && P.nonPositionalChannelIdUpdate(e) && (n = !0)
    }), j = e, v = t, !0)
}

function B(e) {
    let {
        id: t
    } = e, n = b.A.getChannel(t);
    return null == n ? P.clearGuildId(t) : P.clearGuildId(n.guild_id)
}

function H(e) {
    let {
        guildId: t
    } = e;
    return P.clearGuildId(t)
}

function V() {
    return P.updateSubtitles()
}

function F(e) {
    let {
        guildScheduledEvent: t
    } = e;
    return P.updateSubtitles(t.guild_id)
}
class Y extends(r = a.Ay.Store) {
    initialize() {
        this.waitFor(p.A, A.default, f.A, b.A, h.A, c.Ay, E.A, u.A, _.Ay, m.A, O.A, x.Ay, C.A, S.Ay, g.A)
    }
    getGuild(e, t) {
        var n, r;
        let i = P.getGuild(e, null != (n = null == t ? void 0 : t.guildActionRows) ? n : [], null != (r = null == t ? void 0 : t.channelNoticeRows) ? r : []);
        return {
            guildChannelsVersion: i.version,
            guildChannels: i
        }
    }
    getGuildWithoutChangingGuildActionRows(e) {
        let t = P.getGuildChannelRowsOnly(e);
        return {
            guildChannelsVersion: t.version,
            guildChannels: t
        }
    }
    recentsChannelCount(e) {
        if (null == e) return 0;
        let t = P.getGuildChannelRowsOnly(e);
        return t.getCategoryFromSection(t.recentsSectionNumber).getShownChannelIds().length
    }
}(i = "displayName") in Y ? Object.defineProperty(Y, i, {
    value: "ChannelListStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : Y[i] = "ChannelListStore";
let W = new Y(o.h, {
    APPLICATION_FETCH_FAIL: V,
    APPLICATION_FETCH_SUCCESS: V,
    APPLICATION_FETCH: V,
    APPLICATIONS_FETCH_FAIL: V,
    APPLICATIONS_FETCH_SUCCESS: V,
    APPLICATIONS_FETCH: V,
    BACKGROUND_SYNC: R,
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return s()(t).map(e => {
            var t;
            return null == (t = b.A.getChannel(e.channelId)) ? void 0 : t.guild_id
        }).filter(T.Vq).uniq().forEach(e => {
            P.clearGuildId(e) && (n = !0)
        }), n
    },
    BULK_CLEAR_RECENTS: w,
    CACHE_LOADED_LAZY: R,
    CATEGORY_COLLAPSE_ALL: w,
    CATEGORY_COLLAPSE: B,
    CATEGORY_EXPAND_ALL: w,
    CATEGORY_EXPAND: B,
    CHANNEL_ACK: M,
    CHANNEL_COLLAPSE: function(e) {
        var t;
        let {
            channelId: n
        } = e;
        return P.clearGuildId(null == (t = b.A.getChannel(n)) ? void 0 : t.guild_id)
    },
    CHANNEL_CREATE: L,
    CHANNEL_DELETE: L,
    CHANNEL_LOCAL_ACK: M,
    CHANNEL_MUTE_EXPIRED: w,
    CHANNEL_RTC_UPDATE_CHAT_OPEN: M,
    CHANNEL_SELECT: k,
    CHANNEL_STATUSES: function(e) {
        return P.clearGuildId(e.guildId)
    },
    CHANNEL_UPDATES: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return s()(t).map(e => e.guild_id).uniq().forEach(e => {
            P.clearGuildId(e) && (n = !0)
        }), n
    },
    CONNECTION_OPEN_SUPPLEMENTAL: V,
    CONNECTION_OPEN: R,
    CURRENT_USER_UPDATE: R,
    DECAY_READ_STATES: R,
    DEV_TOOLS_DESIGN_TOGGLE_SET: R,
    DISABLE_AUTOMATIC_ACK: M,
    DISMISS_FAVORITE_SUGGESTION: function(e) {
        let {
            channelId: t
        } = e;
        return P.nonPositionalChannelIdUpdate(t)
    },
    EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
        let {
            location: t
        } = e;
        return P.updateSubtitles((0, d.D)(t), (0, d.H)(t))
    },
    EMBEDDED_ACTIVITY_LAUNCH_START: function(e) {
        V()
    },
    EMBEDDED_ACTIVITY_LAUNCH_SUCCESS: V,
    ENABLE_AUTOMATIC_ACK: M,
    FETCH_GUILD_EVENTS_FOR_GUILD: function(e) {
        let {
            guildId: t
        } = e;
        return P.updateSubtitles(t)
    },
    GAMES_DATABASE_FETCH_FAIL: V,
    GAMES_DATABASE_FETCH: V,
    GAMES_DATABASE_UPDATE: V,
    GUILD_APPLICATIONS_FETCH_SUCCESS: V,
    GUILD_CREATE: D,
    GUILD_DELETE: D,
    GUILD_MEMBER_UPDATE: function(e) {
        let {
            guildId: t,
            user: n
        } = e;
        return A.default.getId() === n.id && P.clearGuildId(t)
    },
    GUILD_MUTE_EXPIRED: w,
    GUILD_ROLE_CREATE: w,
    GUILD_ROLE_DELETE: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_FAILURE: w,
    GUILD_ROLE_SUBSCRIPTIONS_FETCH_RESTRICTIONS_SUCCESS: w,
    GUILD_ROLE_UPDATE: w,
    GUILD_SCHEDULED_EVENT_CREATE: F,
    GUILD_SCHEDULED_EVENT_DELETE: F,
    GUILD_SCHEDULED_EVENT_UPDATE: F,
    GUILD_TOGGLE_COLLAPSE_MUTED: w,
    GUILD_UPDATE: D,
    IMPERSONATE_STOP: w,
    IMPERSONATE_UPDATE: w,
    LOAD_CHANNELS: function(e) {
        e.channels.forEach(e => {
            let {
                guildId: t
            } = e;
            return P.clearGuildId(t)
        })
    },
    LOAD_MESSAGES_SUCCESS: M,
    MESSAGE_ACK: M,
    MESSAGE_CREATE: function(e) {
        let {
            channelId: t
        } = e;
        return P.nonPositionalChannelIdUpdate(t)
    },
    MESSAGE_DELETE_BULK: M,
    MESSAGE_DELETE: M,
    NOTIFICATION_SETTINGS_UPDATE: R,
    OVERLAY_INITIALIZE: R,
    PASSIVE_UPDATE_V2: function(e) {
        return P.clearGuildId(e.guildId)
    },
    RECOMPUTE_READ_STATES: R,
    RESORT_THREADS: M,
    SET_RECENTLY_ACTIVE_COLLAPSED: R,
    THREAD_CREATE: G,
    THREAD_DELETE: function(e) {
        let {
            channel: t
        } = e;
        return P.nonPositionalChannelUpdate(t)
    },
    THREAD_LIST_SYNC: w,
    THREAD_MEMBER_UPDATE: U,
    THREAD_MEMBERS_UPDATE: U,
    THREAD_UPDATE: G,
    TRY_ACK: M,
    UPDATE_CHANNEL_DIMENSIONS: M,
    UPDATE_CHANNEL_LIST_SUBTITLES: function(e) {
        let {
            guildId: t
        } = e;
        P.updateSubtitles(t)
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: w,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: w,
    USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
        let {
            userGuildSettings: t
        } = e;
        t.forEach(e => {
            let {
                guild_id: t
            } = e;
            return P.clearGuildId(t)
        })
    },
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: w,
    USER_GUILD_SETTINGS_GUILD_UPDATE: w,
    USER_SETTINGS_PROTO_UPDATE: function(e) {
        var t;
        let {
            settings: n
        } = e;
        if (n.type !== y.oD.PRELOADED_USER_SETTINGS) return !1;
        let r = null == (t = n.proto.guilds) ? void 0 : t.guilds,
            i = !1;
        return null != r && I.default.keys(r).forEach(e => {
            null != r[e].guildRecentsDismissedAt && (i = P.updateRecentsCategory(e) || i)
        }), i
    },
    VOICE_CATEGORY_COLLAPSE: H,
    VOICE_CATEGORY_EXPAND: H,
    VOICE_CHANNEL_SELECT: k,
    VOICE_CHANNEL_STATUS_UPDATE: function(e) {
        return P.nonPositionalChannelIdUpdate(e.id)
    },
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = k(), r = new Set;
        for (let {
                channelId: e,
                oldChannelId: i
            }
            of t) null == i || r.has(i) || (P.nonPositionalChannelIdUpdate(i) && (n = !0), r.add(i)), null == e || r.has(e) || (P.nonPositionalChannelIdUpdate(e) && (n = !0), r.add(e));
        return n
    },
    WINDOW_FOCUS: function() {
        return null != j && P.nonPositionalChannelIdUpdate(j)
    }
})