/** chunk id: 288989 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => P,
    k: () => E
});
var i, s = n(735438),
    l = n.n(s),
    a = n(311907),
    r = n(73153),
    o = n(455234),
    c = n(63995),
    d = n(69407),
    u = n(152007),
    h = n(734057),
    A = n(71393),
    m = n(222823),
    _ = n(967198),
    g = n(543465),
    p = n(607567),
    f = n(403362),
    x = n(960755),
    C = n(652215),
    E = ((i = {}).HIDDEN = "hidden", i.UNREAD = "unread", i.MENTIONS = "mentions", i.VOICE_CHANNELS = "voice-channels", i);
let I = {
        mode: "hidden",
        mentionCount: 0,
        targetChannelId: null
    },
    N = {
        topBar: I,
        bottomBar: I
    },
    b = {},
    S = {};

function T(e) {
    let t = h.A.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? u.A.isMuted(t.id) : g.Ay.isChannelMuted(t.getGuildId(), t.id)) && (0, o.Y)(t)
}

function v(e) {
    let t = h.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let i = g.Ay.isGuildCollapsed(n),
        s = g.Ay.isChannelMuted(n, t.id);
    return (!i || !s) && m.Ay.getMentionCount(e) > 0
}

function y(e) {
    return !g.Ay.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? c.A.getMutableParticipants(e.id, d.ip.SPEAKER).length > 0 : p.Ay.getVoiceStatesForChannel(e).length > 0)
}

function j(e) {
    let {
        guildChannels: t
    } = x.A.getGuildWithoutChangingGuildActionRows(e), n = t.getChannels(S[e] ?? []);
    if (null == n || 0 === n.length) return !1;
    let i = null,
        s = null,
        a = null,
        r = null,
        o = !0,
        c = !0,
        d = !1,
        u = t.getCategoryFromSection(t.voiceChannelsSectionNumber),
        h = u?.getShownChannelIds() ?? [],
        [A, _, g] = t.getSlicedChannels(n);
    for (let e = 0; e < _.length; e++) {
        let t = _[e];
        if ((T(t.id) || l().some(t.threadIds, T)) && (c = !1), (v(t.id) || l().some(t.threadIds, v)) && (o = !1), h.includes(t.id) && (d = !0), !c && !o && d) break
    }
    let p = 0,
        f = !1,
        C = 0,
        E = !1;
    if (c || o)
        for (let e = A.length - 1; e >= 0; e--) {
            let t = A[e];
            (T(t.id) || l().some(t.threadIds, T)) && (null == s && (s = t.id), f = !0), (v(t.id) || l().some(t.threadIds, v)) && (null == i && (i = t.id), p += m.Ay.getMentionCount(t.id), p += l().sumBy(t.threadIds, m.Ay.getMentionCount))
        }
    if (c || o)
        for (let e = 0; e < g.length; e++) {
            let t = g[e];
            if (!c && !o) break;
            (T(t.id) || l().some(t.threadIds, T)) && (null == r && (r = t.id), E = !0), (v(t.id) || l().some(t.threadIds, v)) && (null == a && (a = t.id), C += m.Ay.getMentionCount(t.id), C += l().sumBy(t.threadIds, m.Ay.getMentionCount))
        }
    let N = null,
        j = null,
        R = u?.getChannelRecords() ?? [];
    o && C > 0 ? N = {
        mode: "mentions",
        mentionCount: C,
        targetChannelId: a
    } : !d && l().some(R, y) ? N = {
        mode: "voice-channels",
        mentionCount: 0,
        targetChannelId: null
    } : c && E && (N = {
        mode: "unread",
        mentionCount: 0,
        targetChannelId: r
    }), o && p > 0 ? j = {
        mode: "mentions",
        mentionCount: p,
        targetChannelId: i
    } : c && f && (j = {
        mode: "unread",
        mentionCount: 0,
        targetChannelId: s
    });
    let O = null != j && (null == N || "mentions" !== N.mode && "mentions" === j.mode),
        L = null != N && ("mentions" === N.mode || !O);
    return b[e] = {
        topBar: O ? j ?? I : I,
        bottomBar: L ? N ?? I : I
    }, !0
}
let R = l().throttle(j, 200);

function O(e) {
    let {
        guildId: t
    } = e, n = A.A.getGuild(t);
    return null != n && !!n.features.has(C.GuildFeatures.COMMUNITY) && R(t)
}

function L(e) {
    let {
        id: t
    } = e, n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(C.GuildFeatures.COMMUNITY) && R(n.guild_id)
}

function M(e) {
    let {
        channel: t
    } = e, n = h.A.getChannel(t.id);
    if (null == n) return !1;
    let i = A.A.getGuild(t.guild_id);
    return null != i && !!i.features.has(C.GuildFeatures.COMMUNITY) && R(n.guild_id)
}

function D(e) {
    let {
        channelId: t
    } = e, n = h.A.getChannel(t);
    if (null == n) return !1;
    let i = A.A.getGuild(n.guild_id);
    return null != i && !!i.features.has(C.GuildFeatures.COMMUNITY) && _.A.getGuildId() === n.guild_id && R(n.guild_id)
}

function G(e) {
    let {
        guildId: t
    } = e;
    return null != t && R(t)
}
class U extends a.Ay.Store {
    static displayName = "ChannelListUnreadsStore";
    initialize() {
        this.waitFor(x.A, h.A, A.A, u.A, m.Ay, _.A, p.Ay, c.A, g.Ay)
    }
    getUnreadStateForGuildId(e) {
        return b[e] ?? N
    }
}
let P = new U(r.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e, i = A.A.getGuild(t);
        return null != i && !!i.features.has(C.GuildFeatures.COMMUNITY) && null != n && !l().isEqual(S[t], n) && (S[t] = n, j(t))
    },
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return l()(t).map(e => {
            let {
                channelId: t
            } = e;
            return h.A.getChannel(t)?.guild_id
        }).filter(f.Vq).uniq().forEach(e => {
            let t = A.A.getGuild(e);
            null != t && t.features.has(C.GuildFeatures.COMMUNITY) && R(e) && (n = !0)
        }), n
    },
    CHANNEL_ACK: D,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: D,
    MESSAGE_ACK: D,
    MESSAGE_CREATE: D,
    MESSAGE_DELETE_BULK: D,
    MESSAGE_DELETE: D,
    PASSIVE_UPDATE_V2: function(e) {
        let t = A.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(C.GuildFeatures.COMMUNITY)) && R(e.guildId)
    },
    RESORT_THREADS: D,
    THREAD_CREATE: M,
    THREAD_DELETE: M,
    THREAD_LIST_SYNC: O,
    THREAD_MEMBER_UPDATE: L,
    THREAD_MEMBERS_UPDATE: L,
    THREAD_UPDATE: M,
    BULK_CLEAR_RECENTS: O,
    CATEGORY_COLLAPSE_ALL: O,
    CATEGORY_EXPAND_ALL: O,
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = _.A.getGuildId();
        if (null == n || !new Set(t.map(e => e.guildId)).has(n)) return !1;
        let i = b[n];
        return null != i && "voice-channels" === i.bottomBar.mode && R(n)
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: G,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: G,
    USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
        let {
            userGuildSettings: t
        } = e;
        for (let e of t) null != e.guild_id && R(e.guild_id)
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: G,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: G
})