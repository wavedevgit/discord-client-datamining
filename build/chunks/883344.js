/** chunk id: 883344 params = (module,exports,require) **/
n.d(t, {
    A: () => ex
}), n(321073);
var i = n(681154),
    a = n(311907),
    r = n(73153),
    l = n(99753),
    s = n(20805),
    o = n(583846),
    d = n(49463),
    c = n(698441),
    u = n(141468),
    A = n(961350),
    h = n(734057),
    _ = n(197305),
    m = n(71393),
    g = n(320501),
    p = n(576705),
    E = n(222823),
    I = n(994500),
    f = n(543465),
    C = n(927813),
    T = n(449054),
    N = n(661191),
    S = n(105971),
    x = n(335934),
    y = n(116127),
    v = n(596720),
    b = n(449e3),
    O = n(859524),
    L = n(652215),
    R = n(424994);
let P = +C.A.Millis.DAY,
    D = 3 * C.A.Millis.DAY,
    M = [],
    j = null,
    w = 0,
    U = [],
    G = [],
    k = {},
    V = {},
    B = {},
    H = {},
    F = {},
    Y = {},
    W = 0,
    K = !1,
    q = !1,
    z = !1,
    $ = null,
    Q = null,
    X = 0,
    Z = [],
    J = [],
    ee = 0,
    et = [],
    en = 0,
    ei = !0,
    ea = !1,
    er = new Set,
    el = !1,
    es = !1,
    eo = 0,
    ed = 0;

function ec(e, t) {
    if (Date.now() - w > 6 * C.A.Millis.HOUR) {
        let n = new Set(e.map(e => e.id));
        return t.slice(0, 20).filter(e => n.has(e.id)).length >= 3
    }
    return !1
}

function eu(e) {
    if (!y.A.filterStaffContent()) return !0;
    if ((0, O.xj)(e)) {
        if (e.data.guild_id === v.VL) return !0;
        let t = m.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(L.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1
    }
    return !0
}

function eA(e, t, n, i) {
    let a = e.filter(e => e.type !== n);
    return t.forEach((e, t) => {
        (t + 1) * i < a.length ? a.splice((t + 1) * i, 0, e) : a.push(e)
    }), a
}

function eh() {
    if (Z = Z.filter(e => e.type !== v.Mm.RECOMMENDED_GUILDS), J = J.filter(e => e.type !== v.Mm.RECOMMENDED_GUILDS), 0 === et.length) return;
    let e = "recommendedGuilds",
        t = m.A.getGuildsArray().filter(e => e.features.has(L.GuildFeatures.COMMUNITY)).length >= 5,
        n = b.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - en > P && Date.now() - n < D) return;
    let i = {
        id: e,
        type: v.Mm.RECOMMENDED_GUILDS,
        score: 50
    };
    if (B[i.id] = i, V[i.id] = i, 0 === Z.length) J = [i, ...J];
    else if (!t && Z.length < 5 || t && Z.length < 10) Z = [...Z, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Z.splice(e, 0, i)
    } else Z.splice(5, 0, i)
}

function e_() {
    let e = new Set;
    if (U.forEach(t => {
            e.add(t.id)
        }), null != Q)
        if (e.has(Q.id)) {
            let e = Q.id,
                t = Q.type,
                n = U.findIndex(n => n.id === e && n.type === t); - 1 !== n && (Q = U[n], U = U.filter(t => t.id !== e), U = [Q, ...U])
        } else U = [Q, ...U], e.add(Q.id);
    U.forEach(e => {
        V[e.id] = e, e.type === v.Mm.CUSTOM_STATUS && (I.A.isBlockedOrIgnored(e.data.user_id) ? H[e.id] = !0 : B[e.id] = (0, O.YM)(e))
    })
}

function em(e) {
    let t, n, a, r, d;
    if (U.length > 0 && (M = U, U = [], G = []), W++, null != e) Z = e.newUnread, J = e.newRead;
    else {
        let [e, t] = eg(M);
        Z = e, J = t
    }
    y.A.onlyShowRecentGeneratedCandidates() || (function() {
        let e = m.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != F[n] && F[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = h.A.getChannel(n.channel_id);
                        if (!p.A.can(L.xBc.VIEW_CHANNEL, e)) continue
                    }
                    if (((0, c.W$)(n, 2 * C.A.Seconds.DAY) || (0, c.Fd)(n)) && (null == B[n.id] && (B[n.id] = {
                            id: n.id,
                            type: v.Mm.GUILD_EVENT,
                            score: 10,
                            event_id: n.id
                        }), t.push({
                            id: n.id,
                            type: v.Mm.GUILD_EVENT,
                            score: 10,
                            data: {
                                guild_id: n.guild_id,
                                event_id: n.id,
                                channel_id: n.channel_id ?? void 0
                            }
                        }), ++i >= 1)) break
                }
        }
        t.sort((e, t) => {
            let n = _.A.getGuildAffinity(e.data.guild_id),
                i = _.A.getGuildAffinity(t.data.guild_id);
            return (null != i ? i.score : 0) - (null != n ? n.score : 0)
        });
        let n = [],
            i = [];
        t.forEach(e => {
            V[e.id] = e, null != b.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e)
        }), Z = eA(Z, n, v.Mm.GUILD_EVENT, 7), J = eA(J, i, v.Mm.GUILD_EVENT, 7)
    }(), t = new Set, n = {}, a = [], r = [], (d = l.A.getFeed(R.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5), d.forEach(e => {
        if (t.has(e.content.id) || e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME && e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS && e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME || (0, o.I5)(e.content)) return;
        if ((0, s.zD)(e.content)) {
            if (null == n[e.content.author_id] && (n[e.content.author_id] = new Set), n[e.content.author_id].has(e.content.extra.application_id)) return;
            n[e.content.author_id].add(e.content.extra.application_id)
        }
        null == B[e.content.id] && (B[e.content.id] = {
            id: e.content.id,
            type: v.Mm.ACTIVITY,
            score: 15,
            activity: e.content
        });
        let l = {
            id: e.content.id,
            type: v.Mm.ACTIVITY,
            score: 15,
            data: {
                user_id: e.content.author_id,
                content_id: e.content.id
            }
        };
        t.add(e.content.id), V[l.id] = l, null != b.A.getReadTimestamp(l.id) ? r.push(l) : a.push(l)
    }), Z = eA(Z, a, v.Mm.ACTIVITY, 5), J = eA(J, r, v.Mm.ACTIVITY, 5), eh()), null != k.load_id && j !== k.load_id && (S.k.trackFeedLoaded({
        newTrackingProps: k,
        hasNewContent: q,
        unreadFeedItems: Z,
        readFeedItems: J,
        homeSessionId: "gravity"
    }), j = k.load_id ?? null, k = {}), ee = 0, Z.length + J.length === 0 && (es = !0), (0, O.kx)([...Z, ...J], 0, v.w5), ea = !1
}

function eg(e) {
    let t = [],
        n = [],
        i = [];
    return e.forEach(e => {
        let a = null != b.A.getReadTimestamp(e.id);
        e.type === v.Mm.MESSAGE && e.data.message_context?.external_content_application_id == null && (a = a || !(0, O.$r)(e.data.channel_id, e.data.message_id)), a ? t.push(e) : e.type === v.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e)
    }), [
        [...i, ...n], t.sort((e, t) => (0, O.tI)(e.id, t.id))
    ]
}

function ep(e, t) {
    let n = [],
        i = new Set(M.map(e => e.id));
    for (let a of e) !(a.type === v.Mm.RECOMMENDED_GUILDS || i.has(a.id)) && null == b.A.getReadTimestamp(a.id) && (a.type !== v.Mm.MESSAGE || (0, O.$r)(a.data.channel_id, a.data.message_id) && a.data.channel_id !== t) && n.push(a);
    return n
}

function eE(e, t) {
    return e.filter(e => !(0, O.xj)(e) || e.data.channel_id !== t)
}

function eI(e, t) {
    (0, O.Wu)(t) === O.n$.MUTED && (M = eE(M, e), Z = eE(Z, e), J = eE(J, e), U = eE(U, e), G = eE(G, e))
}

function ef(e, t) {
    return e.filter(e => !(0, O.xj)(e) || e.data.guild_id !== t)
}

function eC(e, t) {
    (0, O.Wu)(t) === O.n$.MUTED && (M = ef(M, e), Z = ef(Z, e), J = ef(J, e), U = ef(U, e), G = ef(G, e))
}

function eT(e) {
    let {
        type: t,
        messageId: n,
        userId: i,
        emoji: a,
        reactionType: r
    } = e, l = B[n];
    if (null == l || l.type !== v.Mm.MESSAGE) return !1;
    let s = A.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t ? l.message = l.message.addReaction(a, s, e.colors, r) : l.message = l.message.removeReaction(a, s, r)
}

function eN(e) {
    let {
        channelId: t
    } = e, n = [], i = [];
    Z.forEach((e, a) => {
        (a > ee || !z) && e.type === v.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e)
    });
    let a = q,
        [r, l] = eg(U);
    if (G = ep(r, t), q = z ? a && G.length >= v.$P : a && ec(i, U), 0 === n.length && a === q) return !1;
    0 !== n.length && (Z = i, J = [...J, ...n])
}
class eS extends a.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(A.default, h.A, l.A, d.A, _.A, c.Ay, m.A, y.A, b.A, g.A, p.A, E.Ay, I.A, f.Ay), null != e && ((M = e.dehydratedItems ?? []).forEach(e => {
            V[e.id] = e
        }), F = e.customGuildScores ?? {}, Y = e.customChannelScoresByGuild ?? {}, X = e.numOpens ?? 0, w = e.lastOpened ?? 0, en = e.lastJoinedRecommendedGuild ?? 0, ed = e.lastTakenICYMISurvey ?? 0)
    }
    getVersion() {
        return W
    }
    getDehydratedItems() {
        return M
    }
    getNewDehydratedItems() {
        return U
    }
    getDehydratedItem(e) {
        return V[e] ?? null
    }
    getHydratedItem(e) {
        return B[e] ?? null
    }
    getMessage(e) {
        let t = B[e];
        return null == t || t.type !== v.Mm.MESSAGE ? null : t.message
    }
    getHydratedItems() {
        return B
    }
    getUnreadDisplayItems() {
        return Z
    }
    getNewUnreadDehydratedItems() {
        return G
    }
    getReadDisplayItems() {
        return J
    }
    getNextIndexToHydrate() {
        return ee
    }
    getMissingItems() {
        return H
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === O.n$.MUTED || this.getCustomChannelScore(e, t) === O.n$.MUTED
    }
    getCustomChannelScore(e, t) {
        return null == Y[e] || null == Y[e][t] ? O.n$.UNKNOWN : (0, O.Wu)(Y[e][t])
    }
    getCustomGuildScore(e) {
        return F[e] ?? 0
    }
    getCustomGuildScores() {
        return F
    }
    hasNewContent() {
        return q
    }
    getCurrentStatusAttachments(e) {
        return null == $ || $[0] !== e ? [] : $[1]
    }
    getLoadId() {
        return j
    }
    hasOpenedEnoughTimes() {
        return 5 === X
    }
    hasOpened() {
        return z
    }
    getDiscoverableGuilds() {
        return et
    }
    videosMuted() {
        return ei
    }
    isRefreshing() {
        return ea
    }
    isHydrating() {
        return er.size > 0
    }
    notificationItem() {
        return Q
    }
    getIsTabFocused() {
        return el
    }
    isFirstPageHydrated() {
        return es
    }
    lastScrollEvent() {
        return eo
    }
    lastTakenICYMISurvey() {
        return ed
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e ? [...Z, ...J].findIndex(e => e.type === v.Mm.RECOMMENDED_GUILDS) : [...Z, ...J].filter(e => null != B[e.id]).findIndex(t => t.id === e)
    }
    getState() {
        return {
            dehydratedItems: M,
            numOpens: X,
            customGuildScores: F,
            customChannelScoresByGuild: Y,
            lastOpened: w,
            lastJoinedRecommendedGuild: en,
            lastTakenICYMISurvey: ed
        }
    }
}
let ex = new eS(r.h, {
    LOGOUT: function() {
        M = [], U = [], G = [], V = {}, k = {}, B = {}, H = {}, j = null, F = {}, Y = {}, W = 0, K = !1, q = !1, z = !1, Z = [], J = [], ee = 0, w = 0, en = 0, ei = !0, ea = !1, er = new Set, Q = null, el = !1, es = !1, $ = null, eo = 0
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function(e) {
        let {
            messageItem: t,
            customStatusItem: n
        } = e;
        if (null != n) return Q = n, null != j && (U = U.length > 0 ? U : [...M], e_(), em()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: v.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: L.rbe.GUILD_TEXT
                }
            };
            if (V[t.message.id] = e, B[t.message.id] = {
                    ...e,
                    message: (0, u.rh)(t.message)
                }, null == j && null == k) {
                let [t, n] = eg(M = [e, ...M]);
                Z = t, J = n
            } else U = [e, ...U], em();
            return !0
        }
        return !1
    },
    LOAD_ICYMI_DEHYDRATED: function(e) {
        let {
            items: t,
            loadId: n,
            startTime: i,
            isInitialLoad: a,
            isReloading: r
        } = e;
        U = function(e) {
            let {
                contentGenerationEnabled: t
            } = (0, x.o$)("processRawItems", !1), n = y.A.onlyShowRecentGeneratedCandidates(), i = new Set(v.H8);
            n ? i = new Set([v.Mm.GENERATED_CANDIDATE]) : t && i.add(v.Mm.GENERATED_CANDIDATE);
            let a = e.filter(e => i.has(e.type)).filter(eu);
            return n && a.sort((e, t) => N.default.extractTimestamp(t.id) - N.default.extractTimestamp(e.id)), a.map(e => {
                if (e.type === v.Mm.MESSAGE && null != e.data.message_context) {
                    let t = {};
                    null != e.data.message_context.reply_message_id && 0 !== parseInt(e.data.message_context.reply_message_id) && (t.reply_message_id = e.data.message_context.reply_message_id), null != e.data.message_context.before_message_id && 0 !== parseInt(e.data.message_context.before_message_id) && (t.before_message_id = e.data.message_context.before_message_id), null != e.data.message_context.after_message_id && 0 !== parseInt(e.data.message_context.after_message_id) && (t.after_message_id = e.data.message_context.after_message_id), null != e.data.message_context.external_content_application_id && 0 !== parseInt(e.data.message_context.external_content_application_id) && (t.external_content_application_id = e.data.message_context.external_content_application_id), null != e.data.message_context.reference_message_id && 0 !== parseInt(e.data.message_context.reference_message_id) && (t.reference_message_id = e.data.message_context.reference_message_id), e.data.message_context = t
                }
                return e
            })
        }(t), e_(), k = {
            load_id: n,
            load_time_millis: Date.now() - i,
            feed_item_ids: U.map(e => e.id)
        };
        let [l, s] = eg(U);
        if (G = ep(l), !z || 0 === W || a) W = 0, !el && ec(l, U) ? (q = !0, K = !0) : q = !1, em({
            newUnread: l,
            newRead: s
        });
        else {
            W > 0 && (Q = null);
            let e = G.length > v.$P;
            r || (q = e), e && ((0, O.kx)([...l, ...s], 0, v.w5), l.length + s.length === 0 && (es = !0))
        }
        S.k.trackFeedLoaded({
            newTrackingProps: k,
            hasNewContent: q,
            unreadFeedItems: l,
            readFeedItems: s,
            homeSessionId: el ? "foreground_load" : "background_load"
        })
    },
    LOAD_ICYMI_HYDRATED: function(e) {
        let {
            messageItems: t,
            activityItems: n,
            generatedCandidateItems: i,
            requestMessageItems: a,
            requestActivityItems: r,
            requestGeneratedCandidateItems: l,
            startingIndex: s,
            endingIndex: o
        } = e;
        es = !0, B = {
            ...B
        };
        let d = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
            c = n.reduce((e, t) => (e[t.id] = t, e), {}),
            u = i.reduce((e, t) => (e[t.content_id] = t, e), {});
        a.forEach(e => {
            let t = d[e.message_id];
            if (null == t) {
                H[e.message_id] = !0;
                return
            }
            let n = V[e.message_id];
            null == n && (n = {
                id: e.message_id,
                type: v.Mm.MESSAGE,
                score: -1,
                data: {
                    guild_id: t.guild_id,
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    channel_type: L.rbe.GUILD_TEXT,
                    has_mention: !1
                }
            });
            let i = g.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, O.Rh)(t, n);
                B[t.message.id] = {
                    ...e,
                    message: i
                }
            } else B[t.message.id] = (0, O.Rh)(t, n)
        }), r.forEach(e => {
            let t = c[e.content_id];
            if (null == t) {
                H[e.content_id] = !0;
                return
            }
            let n = V[e.content_id];
            if (null == n) {
                H[e.content_id] = !0;
                return
            }
            B[t.id] = {
                ...n,
                activity: t
            }
        }), l.forEach(e => {
            let t = u[e.content_id];
            if (null == t) {
                H[e.content_id] = !0;
                return
            }
            let n = V[e.content_id];
            if (null == n || n.type !== v.Mm.GENERATED_CANDIDATE) {
                H[e.content_id] = !0;
                return
            }
            B[t.content_id] = {
                ...n,
                candidate: (0, O.GM)(t)
            }
        }), s === ee && (ee = o), er.delete((0, O.Vq)(s, o))
    },
    LOAD_ICYMI_CUSTOM_SCORES: function(e) {
        let {
            scores: t
        } = e;
        for (let e of t)
            for (let t of (F[e.guild_id] = e.guild_score, eC(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == Y[e.guild_id] && (Y[e.guild_id] = {}), Y[e.guild_id][t] = e.custom_channel_scores[t], eI(t, e.custom_channel_scores[t]);
        F = {
            ...F
        }, Y = {
            ...Y
        }
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function(e) {
        let {
            guilds: t
        } = e;
        et = t.map(e => (0, T.jE)(e.guild)), eh()
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function(e) {
        let {
            channelScores: t,
            guildId: n,
            guildScore: i
        } = e;
        null != i && (F[n] = i, eC(n, i), F = {
            ...F
        }), t?.forEach(e => {
            let {
                channelId: t,
                score: i
            } = e;
            null == Y[n] && (Y[n] = {}), Y[n][t] = i, eI(t, i), Y = {
                ...Y
            }
        })
    },
    RELOAD_ICYMI: function() {
        if (0 === U.length) return !1;
        em(), q = !1
    },
    ICYMI_TAB_OPENED: function() {
        z = !0, w = Date.now(), K && (K = !1, q = !1), X < 5 && X++
    },
    ICYMI_FEEDBACK_GIVEN: function() {
        X = 6
    },
    MESSAGE_REACTION_ADD: eT,
    MESSAGE_REACTION_ADD_MANY: function(e) {
        let {
            messageId: t,
            reactions: n
        } = e, i = B[t];
        if (null == i || i.type !== v.Mm.MESSAGE) return !1;
        let a = A.default.getId();
        i.message = i.message.addReactionBatch(n, a)
    },
    MESSAGE_REACTION_REMOVE: eT,
    MESSAGE_REACTION_REMOVE_ALL: function(e) {
        let {
            messageId: t
        } = e, n = B[t];
        if (null == n || n.type !== v.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", [])
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
        let {
            messageId: t,
            emoji: n
        } = e, i = B[t];
        if (null == i || i.type !== v.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n)
    },
    CHANNEL_ACK: eN,
    MESSAGE_ACK: eN,
    ICYMI_JOINED_RECOMMENDED_GUILD: function() {
        en = Date.now()
    },
    ICYMI_SET_VIDEOS_MUTED: function(e) {
        let {
            muted: t
        } = e;
        ei = t
    },
    ICYMI_SET_REFRESHING: function(e) {
        let {
            refreshing: t
        } = e;
        ea = t
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function(e) {
        let {
            hydrationId: t
        } = e;
        er.add(t)
    },
    LOAD_ICYMI_HYDRATED_FAILED: function(e) {
        let {
            hydrationId: t
        } = e;
        er.delete(t)
    },
    ICYMI_SET_FOCUSED_TAB: function(e) {
        let {
            focused: t
        } = e;
        el = t
    },
    LOAD_ICYMI_CURRENT_STATUS_MEDIA: function(e) {
        let {
            attachments: t,
            createdAtMs: n
        } = e;
        if (null == t || 0 === t.length) {
            $ = null;
            return
        }
        $ = [n, [...t]]
    },
    ICYMI_SCROLL_EVENT: function(e) {
        let {
            timestamp: t
        } = e;
        eo = t
    },
    ICYMI_TAKE_SURVEY: function(e) {
        let {
            takenAt: t
        } = e;
        ed = t
    }
})