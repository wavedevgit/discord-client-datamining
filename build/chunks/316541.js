/** chunk id: 316541 params = (module,exports,require) **/
n.d(t, {
    A: () => $,
    u: () => v
}), n(321073);
var i, r = n(311907),
    l = n(73153),
    s = n(21119),
    a = n(95701),
    o = n(734057),
    u = n(197305),
    d = n(576705),
    c = n(383501),
    h = n(222823),
    g = n(543465),
    m = n(287809),
    f = n(977997),
    A = n(927813),
    I = n(661191),
    E = n(914853),
    p = n(41984),
    _ = n(956753),
    S = n(833551),
    x = n(42589),
    T = n(406595),
    C = n(240516),
    N = n(652215),
    v = ((i = {}).Text = "TEXT", i.Voice = "VOICE", i);
class y {
    _maxItems;
    _channelsByChannelId = new Map;
    _sortedScoreIndex = [];
    _sortedChannelIdSet = new Set;
    _isDirty = !1;
    constructor(e) {
        this._maxItems = e
    }
    get size() {
        return this._channelsByChannelId.size
    }
    getChannel(e) {
        return this._channelsByChannelId.get(e) ?? null
    }
    upsert(e) {
        this._channelsByChannelId.set(e.candidate.channelId, e), this._isDirty = !0
    }
    delete(e) {
        this._channelsByChannelId.has(e) && (this._channelsByChannelId.delete(e), this._isDirty = !0)
    }
    applyBatch(e) {
        e(), this._isDirty = !0
    }
    rebuildSortedIndexIfDirty(e) {
        if (!this._isDirty) return;
        let t = [];
        for (let [n, i] of this._channelsByChannelId.entries()) {
            let r = e(i);
            r > 0 && t.push({
                channelId: n,
                score: r
            })
        }
        t.sort((e, t) => e.score !== t.score ? t.score - e.score : e.channelId < t.channelId ? -1 : 1);
        let n = t.slice(0, this._maxItems);
        this._sortedScoreIndex = n, this._sortedChannelIdSet = new Set(n.map(e => e.channelId)), this._isDirty = !1
    }
    getSortedChannels() {
        let e = [];
        for (let {
                channelId: t
            }
            of this._sortedScoreIndex) {
            let n = this._channelsByChannelId.get(t);
            null != n && e.push(n)
        }
        return e
    }
    getSortedChannelIds() {
        return this._sortedScoreIndex.map(e => e.channelId)
    }
    hasSortedChannelId(e) {
        return this._sortedChannelIdSet.has(e)
    }
    clear() {
        this._channelsByChannelId.clear(), this._sortedScoreIndex = [], this._sortedChannelIdSet.clear(), this._isDirty = !1
    }
}
let M = !1,
    b = null,
    R = !1,
    D = new y(100),
    O = new y(100);

function w() {
    return S.default.isAnyOverlayRendering()
}

function j(e) {
    return (!!e || !R) && M !== e && (M = e, !0)
}

function k() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = o.A.getChannel(e);
    return t?.getGuildId?.() ?? null
}

function U(e) {
    let {
        isAlreadyTracked: t,
        guildId: n,
        updatingUserId: i,
        providers: r
    } = e;
    return !!(t || function(e, t) {
        if (null == e) return !1;
        if (null != b && e === b) return !0;
        let n = k();
        return null != n && e === n || t.getNormalizedGuildAffinity(e) > C.u.MINIMUM_GUILD_AFFINITY
    }(n, r)) || !!(null != i && r.getNormalizedUserAffinity(i) > C.u.MINIMUM_USER_AFFINITY)
}

function L(e) {
    let t = u.A.affinities,
        n = 0;
    for (let e = 0; e < t.length; e += 1) {
        let i = t[e].score ?? 0;
        i > n && (n = i)
    }
    return n <= 0 && (n = 1), {
        getNormalizedGuildAffinity: e => {
            let t = (u.A.getGuildAffinity(e)?.score ?? 0) / n;
            return t <= 0 ? 0 : t >= 1 ? 1 : t
        },
        getNormalizedUserAffinity: t => {
            let n = s.A.getUserAffinity(t);
            if (n?.isFriend) return C.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
            let i = n?.communicationProbability ?? 0,
                r = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
            return r <= 0 ? 0 : r >= 1 ? 1 : r
        }
    }
}

function G(e, t) {
    let n = (0, x.aU)(e.candidate, {
        voiceGuildId: k(),
        mostRecentGuildId: b
    });
    return e.score * (1 + n) * (e.candidate.kind === x.G.DirectMessage || e.candidate.kind === x.G.GroupDM ? 1 : 1 + (0, x.EB)(e.candidate, t))
}

function P() {
    let e = L({
            includeVcProbability: !1
        }),
        t = L({
            includeVcProbability: !0
        });
    D.rebuildSortedIndexIfDirty(t => G(t, e)), O.rebuildSortedIndexIfDirty(e => G(e, t))
}

function F() {
    return {
        mentionCount: 0,
        lastDirectMentionAtMs: null,
        lastRoleMentionAtMs: null,
        unread: !1,
        lastUnreadAtMs: null,
        lastMessageAtMs: null,
        recentMessageAuthorIds: new Map,
        recentMessageAuthorId: null,
        typingUserIdsWithTimestampMs: new Map,
        typingUserIds: [],
        isTyping: !1,
        unreadOrMentionAgeMs: null
    }
}

function V() {
    return {
        ...F(),
        voiceUsersWithJoinTimestampMs: new Map,
        lastVoiceJoinAtMs: null,
        lastUnmuteActivityAtMs: new Map,
        lastUndeafenActivityAtMs: new Map,
        streamUsersWithTimestampMs: new Map,
        videoUsersWithTimestampMs: new Map
    }
}

function z(e, t) {
    let n = o.A.getChannel(e);
    if (null == n) return !1;
    let [i] = T.A.isFavorite(E.x.MESSAGES, e);
    if (i || n.isPrivate?.()) return !1;
    let r = n.getGuildId?.() ?? null;
    return !(null == r || g.Ay.isGuildOrCategoryOrChannelMuted(r, n.id)) && !!d.A.can(N.xBc.READ_MESSAGE_HISTORY, n) && ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
}

function H(e, t, n) {
    if (!z(e, "TEXT")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let r = (0, x.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1
    });
    if (null == r || r.kind !== x.G.GuildText) return null;
    let l = D.getChannel(e);
    if (null != l) return l;
    let s = new x.Qb(r, t, n);
    return D.upsert(s), s
}

function Y(e, t, n) {
    if (!z(e, "VOICE")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let r = (0, x.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1
    });
    if (null == r || r.kind !== x.G.GuildVoice) return null;
    let l = O.getChannel(e);
    if (null != l) return l;
    let s = new x.Qb(r, t, n);
    return O.upsert(s), s
}
let W = 30 * A.A.Millis.MINUTE;

function B() {
    let e = Date.now(),
        t = e - W,
        n = u.A.affinities.filter(e => (e.score ?? 0) > 0).slice(0, 3).map(e => e.guildId),
        i = k();
    null == i || n.includes(i) || n.push(i);
    let r = L({
            includeVcProbability: !1
        }),
        l = L({
            includeVcProbability: !0
        });
    for (let i of n) {
        let n = o.A.getMutableGuildChannelsForGuild(i);
        for (let i in n) {
            let s = n[i];
            if (null != s) {
                if ((0, a.ke)(s.type)) {
                    let e = s.lastMessageId;
                    if (null == e) continue;
                    let n = I.default.extractTimestamp(e);
                    if (n < t || null != D.getChannel(i)) continue;
                    let l = F();
                    l.lastMessageAtMs = n, l.unread = h.Ay.hasUnread(i), l.mentionCount = h.Ay.getMentionCount(i), l.unread && (l.lastUnreadAtMs = n), l.mentionCount > 0 && (l.lastDirectMentionAtMs = n), H(i, l, r)
                }
                if (s.isVocal()) {
                    if (null != O.getChannel(i)) continue;
                    let t = Object.entries(f.A.getVoiceStatesForChannel(i));
                    if (0 === t.length) continue;
                    let n = new Map;
                    for (let [i] of t) n.set(i, e);
                    Y(i, {
                        ...V(),
                        voiceUsersWithJoinTimestampMs: n,
                        lastVoiceJoinAtMs: e
                    }, l)
                }
            }
        }
    }
    P()
}

function Z(e) {
    let t = o.A.getChannel(e);
    if (null == t) return !1;
    let n = t.getGuildId?.() ?? null;
    if (null == n || !g.Ay.isGuildOrCategoryOrChannelMuted(n, e)) return !1;
    let i = null != D.getChannel(e),
        r = null != O.getChannel(e);
    return i && D.delete(e), r && O.delete(e), i || r
}
class X extends r.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(o.A, u.A, T.A, S.default, d.A, h.Ay, c.A, s.A, m.default, g.Ay, f.A)
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? D.getChannel(e) : O.getChannel(e)
    }
    getActiveNowChannels(e) {
        let {
            kind: t
        } = e;
        return "VOICE" === t ? O.getSortedChannels() : D.getSortedChannels()
    }
    getActiveNowChannelIds(e) {
        let {
            kind: t
        } = e;
        return "VOICE" === t ? O.getSortedChannelIds() : D.getSortedChannelIds()
    }
    hasActiveNowChannelId(e) {
        let {
            kind: t,
            channelId: n
        } = e;
        return "VOICE" === t ? O.hasSortedChannelId(n) : D.hasSortedChannelId(n)
    }
    getScoreForChannelId(e) {
        let t = D.getChannel(e) ?? O.getChannel(e);
        if (null == t) return null;
        let n = L({
            includeVcProbability: t.candidate.kind === x.G.GuildVoice
        });
        return G(t, n)
    }
    getScoreBreakdownForChannelId(e) {
        let t = D.getChannel(e) ?? O.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === x.G.GuildVoice ? "VOICE" : "TEXT",
            i = L({
                includeVcProbability: t.candidate.kind === x.G.GuildVoice
            }),
            r = (0, x.aU)(t.candidate, {
                voiceGuildId: k(),
                mostRecentGuildId: b
            }),
            l = t.candidate.kind === x.G.DirectMessage || t.candidate.kind === x.G.GroupDM,
            s = l ? 0 : (0, x.EB)(t.candidate, i),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: r,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + r) * (l ? 1 : 1 + s),
            scoreInfo: t.lastScoreInfo
        }
    }
}
let K = e => (0, _.v$)(e, "OverlayActiveNowStore"),
    $ = new X(l.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: K(function(e) {
            if (e.tab !== E.x.MESSAGES) return !1;
            let t = e.targetId;
            if (e.isFavorite) {
                let e = null != D.getChannel(t),
                    n = null != O.getChannel(t);
                return e && D.delete(t), n && O.delete(t), e || n
            }
            return !1
        }),
        OVERLAY_MOUNTED: K(function(e) {
            return j(!0), B(), !0
        }),
        OVERLAY_UPDATE_OVERLAY_METHOD: K(function(e) {
            let {
                overlayMethod: t
            } = e;
            return t === p.Ue.OutOfProcess || t === p.Ue.OutOfProcessLimitedInteraction ? (j(!0), P(), !0) : !w() && j(!1)
        }),
        OVERLAY_CRASHED: K(function(e) {
            return !w() && j(!1)
        }),
        OVERLAY_SET_INPUT_LOCKED: K(function(e) {
            return !e.locked && (j(!0), P(), !0)
        }),
        FRIENDS_LIST_POPOUT_MOUNTED: K(function() {
            return R = !0, j(!0), B(), !0
        }),
        MESSAGE_CREATE: K(function(e) {
            if (!M || e.optimistic) return !1;
            let t = m.default.getCurrentUser()?.id ?? null,
                n = e.message?.author?.id ?? null;
            if (null == t || null == n || n === t) return !1;
            let i = o.A.getChannel(e.channelId);
            if (null == i || i.isPrivate() || !(0, a.ke)(i.type)) return !1;
            let r = function(e) {
                    let t = e.timestamp;
                    if (null == t) return Date.now();
                    let n = new Date(t).getTime();
                    return Number.isFinite(n) ? n : Date.now()
                }(e.message),
                l = L({
                    includeVcProbability: !1
                }),
                s = i.getGuildId?.() ?? null;
            if (!U({
                    isAlreadyTracked: null != D.getChannel(e.channelId),
                    guildId: s,
                    updatingUserId: n,
                    providers: l
                })) return !1;
            let u = H(e.channelId, F(), l);
            if (null == u) return !1;
            let d = (e.message?.mentions ?? []).some(e => e?.id === t),
                c = e.message?.mention_roles,
                h = Array.isArray(c) && c.length > 0,
                g = u.prepareForUpdate(r),
                f = new Map(g.recentMessageAuthorIds);
            f.set(n, r);
            let A = {
                lastMessageAtMs: r,
                unread: !0,
                lastUnreadAtMs: r,
                recentMessageAuthorId: n,
                recentMessageAuthorIds: f
            };
            return (d || h) && (A.mentionCount = Math.max(g.mentionCount, +!!d + +!!h), d && (A.lastDirectMentionAtMs = r), h && (A.lastRoleMentionAtMs = r)), u.updateSignalsAndRescore(A, r), u.prunable && D.delete(e.channelId), P(), !0
        }),
        MESSAGE_ACK: K(function(e) {
            if (!M) return !1;
            let t = D.getChannel(e.channelId);
            if (null == t) return !1;
            let n = Date.now(),
                i = {
                    unread: !1,
                    lastUnreadAtMs: null
                };
            return null != e.newMentionCount && (e.newMentionCount > 0 ? (i.mentionCount = e.newMentionCount, null == t.signals.lastDirectMentionAtMs && (i.lastDirectMentionAtMs = n)) : (i.mentionCount = 0, i.lastDirectMentionAtMs = null, i.lastRoleMentionAtMs = null)), t.updateSignalsAndRescore(i, n), t.prunable && D.delete(e.channelId), P(), !0
        }),
        TYPING_START: K(function(e) {
            if (!M) return !1;
            let t = m.default.getCurrentUser()?.id ?? null;
            if (null == t || e.userId === t) return !1;
            let n = o.A.getChannel(e.channelId);
            if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
            let i = Date.now(),
                r = L({
                    includeVcProbability: !1
                }),
                l = n.getGuildId?.() ?? null;
            if (!U({
                    isAlreadyTracked: null != D.getChannel(e.channelId),
                    guildId: l,
                    updatingUserId: e.userId,
                    providers: r
                })) return !1;
            let s = H(e.channelId, F(), r);
            if (null == s) return !1;
            let u = new Map(s.prepareForUpdate(i).typingUserIdsWithTimestampMs);
            u.set(e.userId, i);
            let d = Array.from(u.keys());
            return s.updateSignalsAndRescore({
                typingUserIdsWithTimestampMs: u,
                typingUserIds: d,
                isTyping: d.length > 0
            }, i), s.prunable && D.delete(e.channelId), P(), !0
        }),
        VOICE_STATE_UPDATES: K(function(e) {
            if (!M) return !1;
            let t = Date.now(),
                n = L({
                    includeVcProbability: !0
                }),
                i = !1;
            return O.applyBatch(() => {
                for (let r of e.voiceStates) {
                    let e = r.userId,
                        l = r.channelId ?? null,
                        s = r.oldChannelId ?? null,
                        a = n => {
                            let r = O.getChannel(n);
                            if (null == r) return;
                            let l = r.signals,
                                s = new Map(l.voiceUsersWithJoinTimestampMs);
                            s.delete(e);
                            let a = new Map(l.streamUsersWithTimestampMs);
                            a.delete(e);
                            let o = new Map(l.videoUsersWithTimestampMs);
                            o.delete(e);
                            let u = new Map(l.lastUnmuteActivityAtMs);
                            u.delete(e);
                            let d = new Map(l.lastUndeafenActivityAtMs);
                            d.delete(e), r.updateSignalsAndRescore({
                                voiceUsersWithJoinTimestampMs: s,
                                streamUsersWithTimestampMs: a,
                                videoUsersWithTimestampMs: o,
                                lastUnmuteActivityAtMs: u,
                                lastUndeafenActivityAtMs: d
                            }, t), r.prunable && O.delete(n), i = !0
                        };
                    if (null != s && s !== l && a(s), null != l) {
                        let a = o.A.getChannel(l),
                            u = a?.getGuildId?.() ?? null;
                        if (!U({
                                isAlreadyTracked: null != O.getChannel(l),
                                guildId: u,
                                updatingUserId: e,
                                providers: n
                            })) continue;
                        let d = Y(l, V(), n);
                        if (null == d) continue;
                        let c = d.prepareForUpdate(t),
                            h = null == s || s !== l,
                            g = new Map(c.voiceUsersWithJoinTimestampMs);
                        h && !g.has(e) && g.set(e, t);
                        let m = new Map(c.streamUsersWithTimestampMs);
                        r.selfStream ? m.has(e) || m.set(e, t) : m.delete(e);
                        let f = new Map(c.videoUsersWithTimestampMs);
                        r.selfVideo ? f.has(e) || f.set(e, t) : f.delete(e);
                        let A = new Map(c.lastUnmuteActivityAtMs);
                        if (!r.selfMute && !r.mute) {
                            let n = A.get(e) ?? null;
                            (null == n || t - n >= 15e3) && A.set(e, t)
                        }
                        let I = new Map(c.lastUndeafenActivityAtMs);
                        if (!r.selfDeaf && !r.deaf) {
                            let n = I.get(e) ?? null;
                            (null == n || t - n >= 15e3) && I.set(e, t)
                        }
                        d.updateSignalsAndRescore({
                            voiceUsersWithJoinTimestampMs: g,
                            lastVoiceJoinAtMs: h ? t : c.lastVoiceJoinAtMs,
                            streamUsersWithTimestampMs: m,
                            videoUsersWithTimestampMs: f,
                            lastUnmuteActivityAtMs: A,
                            lastUndeafenActivityAtMs: I
                        }, t), d.prunable && O.delete(l), i = !0
                    }
                }
            }), i && P(), i
        }),
        VOICE_CHANNEL_SELECT: K(function(e) {
            return P(), !0
        }),
        RTC_CONNECTION_STATE: K(function(e) {
            return P(), !0
        }),
        CHANNEL_SELECT: K(function(e) {
            let {
                channelId: t
            } = e;
            if (null == t) return !1;
            let n = o.A.getChannel(t);
            return !(null == n || n.isPrivate()) && (b = n.getGuildId?.() ?? null, P(), !0)
        }),
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: K(function(e) {
            return Z(e.channelId)
        }),
        USER_GUILD_SETTINGS_GUILD_UPDATE: K(function(e) {
            let t = e.guildId,
                n = !1;
            for (let e of D.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            for (let e of O.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            return n
        }),
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: K(function(e) {
            let t = e.guildId,
                n = !1;
            for (let e of D.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            for (let e of O.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            return n
        }),
        LOGOUT: K(function() {
            let e = D.size > 0 || O.size > 0;
            return D.clear(), O.clear(), M = !1, R = !1, b = null, e
        })
    })