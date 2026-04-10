/** chunk id: 316541 params = (module,exports,require) **/
n.d(t, {
    A: () => $,
    u: () => v
}), n(321073);
var i, l = n(311907),
    r = n(73153),
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
    N = n(240516),
    C = n(652215),
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
            let l = e(i);
            l > 0 && t.push({
                channelId: n,
                score: l
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
    R = null,
    D = !1,
    b = new y(100),
    O = new y(100);

function w() {
    return S.default.isAnyOverlayRendering()
}

function j(e) {
    return (!!e || !D) && M !== e && (M = e, !0)
}

function U() {
    let e = c.A.getChannelId();
    if (null == e) return null;
    let t = o.A.getChannel(e);
    return t?.getGuildId?.() ?? null
}

function L(e) {
    let {
        isAlreadyTracked: t,
        guildId: n,
        updatingUserId: i,
        providers: l
    } = e;
    return !!(t || function(e, t) {
        if (null == e) return !1;
        if (null != R && e === R) return !0;
        let n = U();
        return null != n && e === n || t.getNormalizedGuildAffinity(e) > N.u.MINIMUM_GUILD_AFFINITY
    }(n, l)) || !!(null != i && l.getNormalizedUserAffinity(i) > N.u.MINIMUM_USER_AFFINITY)
}

function k(e) {
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
            if (n?.isFriend) return N.u.FRIEND_BASE_COMMUNICATION_AFFINITY;
            let i = n?.communicationProbability ?? 0,
                l = e.includeVcProbability ? Math.max(i, n?.vcProbability ?? 0) : i;
            return l <= 0 ? 0 : l >= 1 ? 1 : l
        }
    }
}

function G(e, t) {
    let n = (0, x.aU)(e.candidate, {
        voiceGuildId: U(),
        mostRecentGuildId: R
    });
    return e.score * (1 + n) * (e.candidate.kind === x.G.DirectMessage || e.candidate.kind === x.G.GroupDM ? 1 : 1 + (0, x.EB)(e.candidate, t))
}

function P() {
    let e = k({
            includeVcProbability: !1
        }),
        t = k({
            includeVcProbability: !0
        });
    b.rebuildSortedIndexIfDirty(t => G(t, e)), O.rebuildSortedIndexIfDirty(e => G(e, t))
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
    let l = n.getGuildId?.() ?? null;
    return !(null == l || g.Ay.isGuildOrCategoryOrChannelMuted(l, n.id)) && !!d.A.can(C.xBc.READ_MESSAGE_HISTORY, n) && ("TEXT" === t ? (0, a.ke)(n.type) : n.isVocal?.() === !0)
}

function H(e, t, n) {
    if (!z(e, "TEXT")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let l = (0, x.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1
    });
    if (null == l || l.kind !== x.G.GuildText) return null;
    let r = b.getChannel(e);
    if (null != r) return r;
    let s = new x.Qb(l, t, n);
    return b.upsert(s), s
}

function Y(e, t, n) {
    if (!z(e, "VOICE")) return null;
    let i = o.A.getChannel(e);
    if (null == i) return null;
    let l = (0, x.o5)({
        id: i.id,
        getGuildId: () => i.getGuildId?.() ?? null,
        isDM: () => i.isDM?.() ?? !1,
        isGroupDM: () => i.isGroupDM?.() ?? !1,
        isMultiUserDM: () => i.isMultiUserDM?.() ?? !1,
        recipients: i.recipients ?? [],
        isVocal: () => i.isVocal?.() ?? !1
    });
    if (null == l || l.kind !== x.G.GuildVoice) return null;
    let r = O.getChannel(e);
    if (null != r) return r;
    let s = new x.Qb(l, t, n);
    return O.upsert(s), s
}
let W = 30 * A.A.Millis.MINUTE;

function B() {
    let e = Date.now(),
        t = e - W,
        n = u.A.affinities.filter(e => (e.score ?? 0) > 0).slice(0, 3).map(e => e.guildId),
        i = U();
    null == i || n.includes(i) || n.push(i);
    let l = k({
            includeVcProbability: !1
        }),
        r = k({
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
                    if (n < t || null != b.getChannel(i)) continue;
                    let r = F();
                    r.lastMessageAtMs = n, r.unread = h.Ay.hasUnread(i), r.mentionCount = h.Ay.getMentionCount(i), r.unread && (r.lastUnreadAtMs = n), r.mentionCount > 0 && (r.lastDirectMentionAtMs = n), H(i, r, l)
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
                    }, r)
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
    let i = null != b.getChannel(e),
        l = null != O.getChannel(e);
    return i && b.delete(e), l && O.delete(e), i || l
}
class X extends l.Ay.Store {
    static displayName = "OverlayActiveNowStore";
    initialize() {
        this.waitFor(o.A, u.A, T.A, S.default, d.A, h.Ay, c.A, s.A, m.default, g.Ay, f.A)
    }
    getActiveNowChannelByChannelId(e, t) {
        return "TEXT" === t ? b.getChannel(e) : O.getChannel(e)
    }
    getActiveNowChannels(e) {
        let {
            kind: t
        } = e;
        return "VOICE" === t ? O.getSortedChannels() : b.getSortedChannels()
    }
    getActiveNowChannelIds(e) {
        let {
            kind: t
        } = e;
        return "VOICE" === t ? O.getSortedChannelIds() : b.getSortedChannelIds()
    }
    hasActiveNowChannelId(e) {
        let {
            kind: t,
            channelId: n
        } = e;
        return "VOICE" === t ? O.hasSortedChannelId(n) : b.hasSortedChannelId(n)
    }
    getScoreForChannelId(e) {
        let t = b.getChannel(e) ?? O.getChannel(e);
        if (null == t) return null;
        let n = k({
            includeVcProbability: t.candidate.kind === x.G.GuildVoice
        });
        return G(t, n)
    }
    getScoreBreakdownForChannelId(e) {
        let t = b.getChannel(e) ?? O.getChannel(e) ?? null;
        if (null == t) return null;
        let n = t.candidate.kind === x.G.GuildVoice ? "VOICE" : "TEXT",
            i = k({
                includeVcProbability: t.candidate.kind === x.G.GuildVoice
            }),
            l = (0, x.aU)(t.candidate, {
                voiceGuildId: U(),
                mostRecentGuildId: R
            }),
            r = t.candidate.kind === x.G.DirectMessage || t.candidate.kind === x.G.GroupDM,
            s = r ? 0 : (0, x.EB)(t.candidate, i),
            a = t.score;
        return {
            channelId: e,
            kind: n,
            baseScore: a,
            contextBoost: l,
            guildAffinity: null != t.candidate.guildId ? i.getNormalizedGuildAffinity(t.candidate.guildId) : 0,
            finalScore: a * (1 + l) * (r ? 1 : 1 + s),
            scoreInfo: t.lastScoreInfo
        }
    }
}
let K = e => (0, _.v$)(e, "OverlayActiveNowStore"),
    $ = new X(r.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: K(function(e) {
            if (e.tab !== E.x.MESSAGES) return !1;
            let t = e.targetId;
            if (e.isFavorite) {
                let e = null != b.getChannel(t),
                    n = null != O.getChannel(t);
                return e && b.delete(t), n && O.delete(t), e || n
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
            return D = !0, j(!0), B(), !0
        }),
        MESSAGE_CREATE: K(function(e) {
            if (!M || e.optimistic) return !1;
            let t = m.default.getCurrentUser()?.id ?? null,
                n = e.message?.author?.id ?? null;
            if (null == t || null == n || n === t) return !1;
            let i = o.A.getChannel(e.channelId);
            if (null == i || i.isPrivate() || !(0, a.ke)(i.type)) return !1;
            let l = function(e) {
                    let t = e.timestamp;
                    if (null == t) return Date.now();
                    let n = new Date(t).getTime();
                    return Number.isFinite(n) ? n : Date.now()
                }(e.message),
                r = k({
                    includeVcProbability: !1
                }),
                s = i.getGuildId?.() ?? null;
            if (!L({
                    isAlreadyTracked: null != b.getChannel(e.channelId),
                    guildId: s,
                    updatingUserId: n,
                    providers: r
                })) return !1;
            let u = H(e.channelId, F(), r);
            if (null == u) return !1;
            let d = (e.message?.mentions ?? []).some(e => e?.id === t),
                c = e.message?.mention_roles,
                h = Array.isArray(c) && c.length > 0,
                g = u.prepareForUpdate(l),
                f = new Map(g.recentMessageAuthorIds);
            f.set(n, l);
            let A = {
                lastMessageAtMs: l,
                unread: !0,
                lastUnreadAtMs: l,
                recentMessageAuthorId: n,
                recentMessageAuthorIds: f
            };
            return (d || h) && (A.mentionCount = Math.max(g.mentionCount, +!!d + +!!h), d && (A.lastDirectMentionAtMs = l), h && (A.lastRoleMentionAtMs = l)), u.updateSignalsAndRescore(A, l), u.prunable && b.delete(e.channelId), P(), !0
        }),
        MESSAGE_ACK: K(function(e) {
            if (!M) return !1;
            let t = b.getChannel(e.channelId);
            if (null == t) return !1;
            let n = Date.now(),
                i = {
                    unread: !1,
                    lastUnreadAtMs: null
                };
            return null != e.newMentionCount && (e.newMentionCount > 0 ? (i.mentionCount = e.newMentionCount, null == t.signals.lastDirectMentionAtMs && (i.lastDirectMentionAtMs = n)) : (i.mentionCount = 0, i.lastDirectMentionAtMs = null, i.lastRoleMentionAtMs = null)), t.updateSignalsAndRescore(i, n), t.prunable && b.delete(e.channelId), P(), !0
        }),
        TYPING_START: K(function(e) {
            if (!M) return !1;
            let t = m.default.getCurrentUser()?.id ?? null;
            if (null == t || e.userId === t) return !1;
            let n = o.A.getChannel(e.channelId);
            if (null == n || n.isPrivate() || !(0, a.ke)(n.type)) return !1;
            let i = Date.now(),
                l = k({
                    includeVcProbability: !1
                }),
                r = n.getGuildId?.() ?? null;
            if (!L({
                    isAlreadyTracked: null != b.getChannel(e.channelId),
                    guildId: r,
                    updatingUserId: e.userId,
                    providers: l
                })) return !1;
            let s = H(e.channelId, F(), l);
            if (null == s) return !1;
            let u = new Map(s.prepareForUpdate(i).typingUserIdsWithTimestampMs);
            u.set(e.userId, i);
            let d = Array.from(u.keys());
            return s.updateSignalsAndRescore({
                typingUserIdsWithTimestampMs: u,
                typingUserIds: d,
                isTyping: d.length > 0
            }, i), s.prunable && b.delete(e.channelId), P(), !0
        }),
        VOICE_STATE_UPDATES: K(function(e) {
            if (!M) return !1;
            let t = Date.now(),
                n = k({
                    includeVcProbability: !0
                }),
                i = !1;
            return O.applyBatch(() => {
                for (let l of e.voiceStates) {
                    let e = l.userId,
                        r = l.channelId ?? null,
                        s = l.oldChannelId ?? null,
                        a = n => {
                            let l = O.getChannel(n);
                            if (null == l) return;
                            let r = l.signals,
                                s = new Map(r.voiceUsersWithJoinTimestampMs);
                            s.delete(e);
                            let a = new Map(r.streamUsersWithTimestampMs);
                            a.delete(e);
                            let o = new Map(r.videoUsersWithTimestampMs);
                            o.delete(e);
                            let u = new Map(r.lastUnmuteActivityAtMs);
                            u.delete(e);
                            let d = new Map(r.lastUndeafenActivityAtMs);
                            d.delete(e), l.updateSignalsAndRescore({
                                voiceUsersWithJoinTimestampMs: s,
                                streamUsersWithTimestampMs: a,
                                videoUsersWithTimestampMs: o,
                                lastUnmuteActivityAtMs: u,
                                lastUndeafenActivityAtMs: d
                            }, t), l.prunable && O.delete(n), i = !0
                        };
                    if (null != s && s !== r && a(s), null != r) {
                        let a = o.A.getChannel(r),
                            u = a?.getGuildId?.() ?? null;
                        if (!L({
                                isAlreadyTracked: null != O.getChannel(r),
                                guildId: u,
                                updatingUserId: e,
                                providers: n
                            })) continue;
                        let d = Y(r, V(), n);
                        if (null == d) continue;
                        let c = d.prepareForUpdate(t),
                            h = null == s || s !== r,
                            g = new Map(c.voiceUsersWithJoinTimestampMs);
                        h && !g.has(e) && g.set(e, t);
                        let m = new Map(c.streamUsersWithTimestampMs);
                        l.selfStream ? m.has(e) || m.set(e, t) : m.delete(e);
                        let f = new Map(c.videoUsersWithTimestampMs);
                        l.selfVideo ? f.has(e) || f.set(e, t) : f.delete(e);
                        let A = new Map(c.lastUnmuteActivityAtMs);
                        if (!l.selfMute && !l.mute) {
                            let n = A.get(e) ?? null;
                            (null == n || t - n >= 15e3) && A.set(e, t)
                        }
                        let I = new Map(c.lastUndeafenActivityAtMs);
                        if (!l.selfDeaf && !l.deaf) {
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
                        }, t), d.prunable && O.delete(r), i = !0
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
            return !(null == n || n.isPrivate()) && (R = n.getGuildId?.() ?? null, P(), !0)
        }),
        USER_GUILD_SETTINGS_CHANNEL_UPDATE: K(function(e) {
            return Z(e.channelId)
        }),
        USER_GUILD_SETTINGS_GUILD_UPDATE: K(function(e) {
            let t = e.guildId,
                n = !1;
            for (let e of b.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            for (let e of O.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            return n
        }),
        USER_GUILD_SETTINGS_GUILD_AND_CHANNELS_UPDATE: K(function(e) {
            let t = e.guildId,
                n = !1;
            for (let e of b.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            for (let e of O.getSortedChannels()) e.candidate.guildId === t && (n = Z(e.candidate.channelId) || n);
            return n
        }),
        LOGOUT: K(function() {
            let e = b.size > 0 || O.size > 0;
            return b.clear(), O.clear(), M = !1, D = !1, R = null, e
        })
    })