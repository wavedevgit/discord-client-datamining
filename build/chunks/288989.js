/** Chunk was on 97492 **/
/** chunk id: 288989, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => U,
    k: () => v
}), n(896048);
var r, l, i, s = n(735438),
    a = n.n(s),
    o = n(311907),
    c = n(73153),
    u = n(455234),
    d = n(63995),
    p = n(69407),
    h = n(152007),
    f = n(734057),
    g = n(71393),
    m = n(222823),
    b = n(967198),
    A = n(543465),
    y = n(607567),
    _ = n(403362),
    O = n(960755),
    j = n(652215),
    v = ((l = {}).HIDDEN = "hidden", l.UNREAD = "unread", l.MENTIONS = "mentions", l.VOICE_CHANNELS = "voice-channels", l);
let x = {
        mode: "hidden",
        mentionCount: 0,
        targetChannelId: null
    },
    E = {
        topBar: x,
        bottomBar: x
    },
    C = {},
    S = {};

function I(e) {
    let t = f.A.getChannel(e);
    return !(null == t || null == t.getGuildId() || t.isGuildVocal()) && !(t.isThread() ? h.A.isMuted(t.id) : A.Ay.isChannelMuted(t.getGuildId(), t.id)) && (0, u.Y)(t)
}

function N(e) {
    let t = f.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId();
    if (null == n) return !1;
    let r = A.Ay.isGuildCollapsed(n),
        l = A.Ay.isChannelMuted(n, t.id);
    return (!r || !l) && m.Ay.getMentionCount(e) > 0
}

function T(e) {
    return !A.Ay.isChannelMuted(e.guild_id, e.id) && (e.isGuildStageVoice() ? d.A.getMutableParticipants(e.id, p.ip.SPEAKER).length > 0 : y.Ay.getVoiceStatesForChannel(e).length > 0)
}

function P(e) {
    var t, n, r;
    let {
        guildChannels: l
    } = O.A.getGuildWithoutChangingGuildActionRows(e), i = l.getChannels(null != (t = S[e]) ? t : []);
    if (null == i || 0 === i.length) return !1;
    let s = null,
        o = null,
        c = null,
        u = null,
        d = !0,
        p = !0,
        h = !1,
        f = l.getCategoryFromSection(l.voiceChannelsSectionNumber),
        g = null != (n = null == f ? void 0 : f.getShownChannelIds()) ? n : [],
        [b, A, y] = l.getSlicedChannels(i);
    for (let e = 0; e < A.length; e++) {
        let t = A[e];
        if ((I(t.id) || a().some(t.threadIds, I)) && (p = !1), (N(t.id) || a().some(t.threadIds, N)) && (d = !1), g.includes(t.id) && (h = !0), !p && !d && h) break
    }
    let _ = 0,
        j = !1,
        v = 0,
        E = !1;
    if (p || d)
        for (let e = b.length - 1; e >= 0; e--) {
            let t = b[e];
            (I(t.id) || a().some(t.threadIds, I)) && (null == o && (o = t.id), j = !0), (N(t.id) || a().some(t.threadIds, N)) && (null == s && (s = t.id), _ += m.Ay.getMentionCount(t.id), _ += a().sumBy(t.threadIds, m.Ay.getMentionCount))
        }
    if (p || d)
        for (let e = 0; e < y.length; e++) {
            let t = y[e];
            if (!p && !d) break;
            (I(t.id) || a().some(t.threadIds, I)) && (null == u && (u = t.id), E = !0), (N(t.id) || a().some(t.threadIds, N)) && (null == c && (c = t.id), v += m.Ay.getMentionCount(t.id), v += a().sumBy(t.threadIds, m.Ay.getMentionCount))
        }
    let P = null,
        w = null,
        R = null != (r = null == f ? void 0 : f.getChannelRecords()) ? r : [];
    d && v > 0 ? P = {
        mode: "mentions",
        mentionCount: v,
        targetChannelId: c
    } : !h && a().some(R, T) ? P = {
        mode: "voice-channels",
        mentionCount: 0,
        targetChannelId: null
    } : p && E && (P = {
        mode: "unread",
        mentionCount: 0,
        targetChannelId: u
    }), d && _ > 0 ? w = {
        mode: "mentions",
        mentionCount: _,
        targetChannelId: s
    } : p && j && (w = {
        mode: "unread",
        mentionCount: 0,
        targetChannelId: o
    });
    let D = null != w && (null == P || "mentions" !== P.mode && "mentions" === w.mode),
        M = null != P && ("mentions" === P.mode || !D);
    return C[e] = {
        topBar: D && null != w ? w : x,
        bottomBar: M && null != P ? P : x
    }, !0
}
let w = a().throttle(P, 200);

function R(e) {
    let {
        guildId: t
    } = e, n = g.A.getGuild(t);
    return null != n && !!n.features.has(j.GuildFeatures.COMMUNITY) && w(t)
}

function D(e) {
    let {
        id: t
    } = e, n = f.A.getChannel(t);
    if (null == n) return !1;
    let r = g.A.getGuild(n.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function M(e) {
    let {
        channel: t
    } = e, n = f.A.getChannel(t.id);
    if (null == n) return !1;
    let r = g.A.getGuild(t.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && w(n.guild_id)
}

function L(e) {
    let {
        channelId: t
    } = e, n = f.A.getChannel(t);
    if (null == n) return !1;
    let r = g.A.getGuild(n.guild_id);
    return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && b.A.getGuildId() === n.guild_id && w(n.guild_id)
}

function k(e) {
    let {
        guildId: t
    } = e;
    return null != t && w(t)
}
class G extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(O.A, f.A, g.A, h.A, m.Ay, b.A, y.Ay, d.A, A.Ay)
    }
    getUnreadStateForGuildId(e) {
        var t;
        return null != (t = C[e]) ? t : E
    }
}(i = "displayName") in G ? Object.defineProperty(G, i, {
    value: "ChannelListUnreadsStore",
    enumerable: !0,
    configurable: !0,
    writable: !0
}) : G[i] = "ChannelListUnreadsStore";
let U = new G(c.h, {
    UPDATE_CHANNEL_LIST_DIMENSIONS: function(e) {
        let {
            guildId: t,
            channelIds: n
        } = e, r = g.A.getGuild(t);
        return null != r && !!r.features.has(j.GuildFeatures.COMMUNITY) && null != n && !a().isEqual(S[t], n) && (S[t] = n, P(t))
    },
    BULK_ACK: function(e) {
        let {
            channels: t
        } = e, n = !1;
        return a()(t).map(e => {
            var t;
            let {
                channelId: n
            } = e;
            return null == (t = f.A.getChannel(n)) ? void 0 : t.guild_id
        }).filter(_.Vq).uniq().forEach(e => {
            let t = g.A.getGuild(e);
            null != t && t.features.has(j.GuildFeatures.COMMUNITY) && w(e) && (n = !0)
        }), n
    },
    CHANNEL_ACK: L,
    CHANNEL_DELETE: M,
    CHANNEL_LOCAL_ACK: L,
    MESSAGE_ACK: L,
    MESSAGE_CREATE: L,
    MESSAGE_DELETE_BULK: L,
    MESSAGE_DELETE: L,
    PASSIVE_UPDATE_V2: function(e) {
        let t = g.A.getGuild(e.guildId);
        return !!(e.channels.length > 0 && null != t && t.features.has(j.GuildFeatures.COMMUNITY)) && w(e.guildId)
    },
    RESORT_THREADS: L,
    THREAD_CREATE: M,
    THREAD_DELETE: M,
    THREAD_LIST_SYNC: R,
    THREAD_MEMBER_UPDATE: D,
    THREAD_MEMBERS_UPDATE: D,
    THREAD_UPDATE: M,
    BULK_CLEAR_RECENTS: R,
    CATEGORY_COLLAPSE_ALL: R,
    CATEGORY_EXPAND_ALL: R,
    VOICE_STATE_UPDATES: function(e) {
        let {
            voiceStates: t
        } = e, n = b.A.getGuildId();
        if (null == n || !new Set(t.map(e => e.guildId)).has(n)) return !1;
        let r = C[n];
        return null != r && "voice-channels" === r.bottomBar.mode && w(n)
    },
    USER_GUILD_SETTINGS_CHANNEL_UPDATE: k,
    USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: k,
    USER_GUILD_SETTINGS_FULL_UPDATE: function(e) {
        let {
            userGuildSettings: t
        } = e;
        for (let e of t) null != e.guild_id && w(e.guild_id)
    },
    USER_GUILD_SETTINGS_GUILD_UPDATE: k,
    USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: k
})