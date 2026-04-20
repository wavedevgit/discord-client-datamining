/** chunk id: 883344 params = (module,exports,require) **/
n.d(t, {
    A: () => eN
}), n(321073);
var i = n(681154),
    l = n(311907),
    a = n(73153),
    r = n(99753),
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
    N = n(105971),
    S = n(116127),
    x = n(596720),
    b = n(449e3),
    v = n(859524),
    y = n(652215),
    O = n(424994);
let L = +C.A.Millis.DAY,
    R = 3 * C.A.Millis.DAY,
    P = [],
    D = null,
    j = 0,
    M = [],
    w = [],
    U = {},
    G = {},
    k = {},
    V = {},
    B = {},
    H = {},
    F = 0,
    Y = !1,
    W = !1,
    K = !1,
    q = null,
    z = null,
    $ = 0,
    Q = [],
    X = [],
    Z = 0,
    J = [],
    ee = 0,
    et = !0,
    en = !1,
    ei = new Set,
    el = !1,
    ea = !1,
    er = 0,
    es = 0;

function eo(e, t) {
    if (Date.now() - j > 6 * C.A.Millis.HOUR) {
        let n = new Set(e.map(e => e.id));
        return t.slice(0, 20).filter(e => n.has(e.id)).length >= 3
    }
    return !1
}

function ed(e) {
    if (!S.A.filterStaffContent()) return !0;
    if ((0, v.xj)(e)) {
        if (e.data.guild_id === x.VL) return !0;
        let t = m.A.getGuild(e.data.guild_id);
        if (null == t || t.features.has(y.GuildFeatures.INTERNAL_EMPLOYEE_ONLY)) return !1
    }
    return !0
}

function ec(e, t, n, i) {
    let l = e.filter(e => e.type !== n);
    return t.forEach((e, t) => {
        (t + 1) * i < l.length ? l.splice((t + 1) * i, 0, e) : l.push(e)
    }), l
}

function eu() {
    if (Q = Q.filter(e => e.type !== x.Mm.RECOMMENDED_GUILDS), X = X.filter(e => e.type !== x.Mm.RECOMMENDED_GUILDS), 0 === J.length) return;
    let e = "recommendedGuilds",
        t = m.A.getGuildsArray().filter(e => e.features.has(y.GuildFeatures.COMMUNITY)).length >= 5,
        n = b.A.getReadTimestamp(e);
    if (t && null != n && Date.now() - ee > L && Date.now() - n < R) return;
    let i = {
        id: e,
        type: x.Mm.RECOMMENDED_GUILDS,
        score: 50
    };
    if (k[i.id] = i, G[i.id] = i, 0 === Q.length) X = [i, ...X];
    else if (!t && Q.length < 5 || t && Q.length < 10) Q = [...Q, i];
    else if (t) {
        let e = Math.round(2 * Math.random()) + 3 - 1;
        Q.splice(e, 0, i)
    } else Q.splice(5, 0, i)
}

function eA() {
    let e = new Set;
    if (M.forEach(t => {
            e.add(t.id)
        }), null != z)
        if (e.has(z.id)) {
            let e = z.id,
                t = z.type,
                n = M.findIndex(n => n.id === e && n.type === t); - 1 !== n && (z = M[n], M = M.filter(t => t.id !== e), M = [z, ...M])
        } else M = [z, ...M], e.add(z.id);
    M.forEach(e => {
        G[e.id] = e, e.type === x.Mm.CUSTOM_STATUS && (I.A.isBlockedOrIgnored(e.data.user_id) ? V[e.id] = !0 : k[e.id] = (0, v.YM)(e))
    })
}

function eh(e) {
    let t, n, l, a, d;
    if (M.length > 0 && (P = M, M = [], w = []), F++, null != e) Q = e.newUnread, X = e.newRead;
    else {
        let [e, t] = e_(P);
        Q = e, X = t
    }(function() {
        let e = m.A.getGuildIds(),
            t = [];
        for (let n of e) {
            if (null != B[n] && B[n] < 0) continue;
            let e = c.Ay.getGuildScheduledEventsForGuild(n),
                i = 0;
            for (let n of e)
                if (!(0, c.AZ)(n)) {
                    if (null != n.channel_id) {
                        let e = h.A.getChannel(n.channel_id);
                        if (!p.A.can(y.xBc.VIEW_CHANNEL, e)) continue
                    }
                    if (((0, c.W$)(n, 2 * C.A.Seconds.DAY) || (0, c.Fd)(n)) && (null == k[n.id] && (k[n.id] = {
                            id: n.id,
                            type: x.Mm.GUILD_EVENT,
                            score: 10,
                            event_id: n.id
                        }), t.push({
                            id: n.id,
                            type: x.Mm.GUILD_EVENT,
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
            G[e.id] = e, null != b.A.getReadTimestamp(e.id) ? i.push(e) : n.push(e)
        }), Q = ec(Q, n, x.Mm.GUILD_EVENT, 7), X = ec(X, i, x.Mm.GUILD_EVENT, 7)
    })(), t = new Set, n = {}, l = [], a = [], (d = r.A.getFeed(O.X1.GLOBAL_FEED)?.entries ?? []).sort((e, t) => e.rank - t.rank).slice(0, 5), d.forEach(e => {
        if (t.has(e.content.id) || e.content.content_type !== i.ContentInventoryEntryType.PLAYED_GAME && e.content.content_type !== i.ContentInventoryEntryType.CUSTOM_STATUS && e.content.content_type !== i.ContentInventoryEntryType.TOP_GAME || (0, o.I5)(e.content)) return;
        if ((0, s.zD)(e.content)) {
            if (null == n[e.content.author_id] && (n[e.content.author_id] = new Set), n[e.content.author_id].has(e.content.extra.application_id)) return;
            n[e.content.author_id].add(e.content.extra.application_id)
        }
        null == k[e.content.id] && (k[e.content.id] = {
            id: e.content.id,
            type: x.Mm.ACTIVITY,
            score: 15,
            activity: e.content
        });
        let r = {
            id: e.content.id,
            type: x.Mm.ACTIVITY,
            score: 15,
            data: {
                user_id: e.content.author_id,
                content_id: e.content.id
            }
        };
        t.add(e.content.id), G[r.id] = r, null != b.A.getReadTimestamp(r.id) ? a.push(r) : l.push(r)
    }), Q = ec(Q, l, x.Mm.ACTIVITY, 5), X = ec(X, a, x.Mm.ACTIVITY, 5), eu(), null != U.load_id && D !== U.load_id && (N.k.trackFeedLoaded({
        newTrackingProps: U,
        hasNewContent: W,
        unreadFeedItems: Q,
        readFeedItems: X,
        homeSessionId: "gravity"
    }), D = U.load_id ?? null, U = {}), Z = 0, Q.length + X.length === 0 && (ea = !0), (0, v.kx)([...Q, ...X], 0, x.w5), en = !1
}

function e_(e) {
    let t = [],
        n = [],
        i = [];
    return e.forEach(e => {
        let l = null != b.A.getReadTimestamp(e.id);
        e.type === x.Mm.MESSAGE && e.data.message_context?.external_content_application_id == null && (l = l || !(0, v.$r)(e.data.channel_id, e.data.message_id)), l ? t.push(e) : e.type === x.Mm.MESSAGE && e.data.has_mention ? i.push(e) : n.push(e)
    }), [
        [...i, ...n], t.sort((e, t) => (0, v.tI)(e.id, t.id))
    ]
}

function em(e, t) {
    let n = [],
        i = new Set(P.map(e => e.id));
    for (let l of e) !(l.type === x.Mm.RECOMMENDED_GUILDS || i.has(l.id)) && null == b.A.getReadTimestamp(l.id) && (l.type !== x.Mm.MESSAGE || (0, v.$r)(l.data.channel_id, l.data.message_id) && l.data.channel_id !== t) && n.push(l);
    return n
}

function eg(e, t) {
    return e.filter(e => !(0, v.xj)(e) || e.data.channel_id !== t)
}

function ep(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && (P = eg(P, e), Q = eg(Q, e), X = eg(X, e), M = eg(M, e), w = eg(w, e))
}

function eE(e, t) {
    return e.filter(e => !(0, v.xj)(e) || e.data.guild_id !== t)
}

function eI(e, t) {
    (0, v.Wu)(t) === v.n$.MUTED && (P = eE(P, e), Q = eE(Q, e), X = eE(X, e), M = eE(M, e), w = eE(w, e))
}

function ef(e) {
    let {
        type: t,
        messageId: n,
        userId: i,
        emoji: l,
        reactionType: a
    } = e, r = k[n];
    if (null == r || r.type !== x.Mm.MESSAGE) return !1;
    let s = A.default.getId() === i;
    "MESSAGE_REACTION_ADD" === t ? r.message = r.message.addReaction(l, s, e.colors, a) : r.message = r.message.removeReaction(l, s, a)
}

function eC(e) {
    let {
        channelId: t
    } = e, n = [], i = [];
    Q.forEach((e, l) => {
        (l > Z || !K) && e.type === x.Mm.MESSAGE && e.data.channel_id === t ? n.push(e) : i.push(e)
    });
    let l = W,
        [a, r] = e_(M);
    if (w = em(a, t), W = K ? l && w.length >= x.$P : l && eo(i, M), 0 === n.length && l === W) return !1;
    0 !== n.length && (Q = i, X = [...X, ...n])
}
class eT extends l.Ay.PersistedStore {
    static displayName = "ICYMIStore";
    static persistKey = "ICYMIStore";
    initialize(e) {
        this.waitFor(A.default, h.A, r.A, d.A, _.A, c.Ay, m.A, S.A, b.A, g.A, p.A, E.Ay, I.A, f.Ay), null != e && ((P = e.dehydratedItems ?? []).forEach(e => {
            G[e.id] = e
        }), B = e.customGuildScores ?? {}, H = e.customChannelScoresByGuild ?? {}, $ = e.numOpens ?? 0, j = e.lastOpened ?? 0, ee = e.lastJoinedRecommendedGuild ?? 0, es = e.lastTakenICYMISurvey ?? 0)
    }
    getVersion() {
        return F
    }
    getDehydratedItems() {
        return P
    }
    getNewDehydratedItems() {
        return M
    }
    getDehydratedItem(e) {
        return G[e] ?? null
    }
    getHydratedItem(e) {
        return k[e] ?? null
    }
    getMessage(e) {
        let t = k[e];
        return null == t || t.type !== x.Mm.MESSAGE ? null : t.message
    }
    getHydratedItems() {
        return k
    }
    getUnreadDisplayItems() {
        return Q
    }
    getNewUnreadDehydratedItems() {
        return w
    }
    getReadDisplayItems() {
        return X
    }
    getNextIndexToHydrate() {
        return Z
    }
    getMissingItems() {
        return V
    }
    customMuted(e, t) {
        return this.getCustomGuildScore(e) === v.n$.MUTED || this.getCustomChannelScore(e, t) === v.n$.MUTED
    }
    getCustomChannelScore(e, t) {
        return null == H[e] || null == H[e][t] ? v.n$.UNKNOWN : (0, v.Wu)(H[e][t])
    }
    getCustomGuildScore(e) {
        return B[e] ?? 0
    }
    getCustomGuildScores() {
        return B
    }
    hasNewContent() {
        return W
    }
    getCurrentStatusAttachments(e) {
        return null == q || q[0] !== e ? [] : q[1]
    }
    getLoadId() {
        return D
    }
    hasOpenedEnoughTimes() {
        return 5 === $
    }
    hasOpened() {
        return K
    }
    getDiscoverableGuilds() {
        return J
    }
    videosMuted() {
        return et
    }
    isRefreshing() {
        return en
    }
    isHydrating() {
        return ei.size > 0
    }
    notificationItem() {
        return z
    }
    getIsTabFocused() {
        return el
    }
    isFirstPageHydrated() {
        return ea
    }
    lastScrollEvent() {
        return er
    }
    lastTakenICYMISurvey() {
        return es
    }
    getIndexInHydratedFeed(e) {
        return "recommended_guilds" === e || "recommendedGuilds" === e ? [...Q, ...X].findIndex(e => e.type === x.Mm.RECOMMENDED_GUILDS) : [...Q, ...X].filter(e => null != k[e.id]).findIndex(t => t.id === e)
    }
    getState() {
        return {
            dehydratedItems: P,
            numOpens: $,
            customGuildScores: B,
            customChannelScoresByGuild: H,
            lastOpened: j,
            lastJoinedRecommendedGuild: ee,
            lastTakenICYMISurvey: es
        }
    }
}
let eN = new eT(a.h, {
    LOGOUT: function() {
        P = [], M = [], w = [], G = {}, U = {}, k = {}, V = {}, D = null, B = {}, H = {}, F = 0, Y = !1, W = !1, K = !1, Q = [], X = [], Z = 0, j = 0, ee = 0, et = !0, en = !1, ei = new Set, z = null, el = !1, ea = !1, q = null, er = 0
    },
    LOAD_ICYMI_FROM_NOTIFICATION: function(e) {
        let {
            messageItem: t,
            customStatusItem: n
        } = e;
        if (null != n) return z = n, null != D && (M = M.length > 0 ? M : [...P], eA(), eh()), !0;
        if (null != t) {
            let e = {
                id: t.message.id,
                type: x.Mm.MESSAGE,
                score: 50,
                data: {
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    guild_id: t.guild_id,
                    channel_type: y.rbe.GUILD_TEXT
                }
            };
            if (G[t.message.id] = e, k[t.message.id] = {
                    ...e,
                    message: (0, u.rh)(t.message)
                }, null == D && null == U) {
                let [t, n] = e_(P = [e, ...P]);
                Q = t, X = n
            } else M = [e, ...M], eh();
            return !0
        }
        return !1
    },
    LOAD_ICYMI_DEHYDRATED: function(e) {
        let t, {
            items: n,
            loadId: i,
            startTime: l,
            isInitialLoad: a,
            isReloading: r
        } = e;
        t = new Set(x.H8), M = n.filter(e => t.has(e.type)).filter(ed).map(e => {
            if (e.type === x.Mm.MESSAGE && null != e.data.message_context) {
                let t = {};
                null != e.data.message_context.reply_message_id && 0 !== parseInt(e.data.message_context.reply_message_id) && (t.reply_message_id = e.data.message_context.reply_message_id), null != e.data.message_context.before_message_id && 0 !== parseInt(e.data.message_context.before_message_id) && (t.before_message_id = e.data.message_context.before_message_id), null != e.data.message_context.after_message_id && 0 !== parseInt(e.data.message_context.after_message_id) && (t.after_message_id = e.data.message_context.after_message_id), null != e.data.message_context.external_content_application_id && 0 !== parseInt(e.data.message_context.external_content_application_id) && (t.external_content_application_id = e.data.message_context.external_content_application_id), null != e.data.message_context.reference_message_id && 0 !== parseInt(e.data.message_context.reference_message_id) && (t.reference_message_id = e.data.message_context.reference_message_id), e.data.message_context = t
            }
            return e
        }), eA(), U = {
            load_id: i,
            load_time_millis: Date.now() - l,
            feed_item_ids: M.map(e => e.id)
        };
        let [s, o] = e_(M);
        if (w = em(s), !K || 0 === F || a) F = 0, !el && eo(s, M) ? (W = !0, Y = !0) : W = !1, eh({
            newUnread: s,
            newRead: o
        });
        else {
            F > 0 && (z = null);
            let e = w.length > x.$P;
            r || (W = e), e && ((0, v.kx)([...s, ...o], 0, x.w5), s.length + o.length === 0 && (ea = !0))
        }
        N.k.trackFeedLoaded({
            newTrackingProps: U,
            hasNewContent: W,
            unreadFeedItems: s,
            readFeedItems: o,
            homeSessionId: el ? "foreground_load" : "background_load"
        })
    },
    LOAD_ICYMI_HYDRATED: function(e) {
        let {
            messageItems: t,
            activityItems: n,
            requestMessageItems: i,
            requestActivityItems: l,
            startingIndex: a,
            endingIndex: r
        } = e;
        ea = !0, k = {
            ...k
        };
        let s = t.reduce((e, t) => (e[t.message.id] = t, e), {}),
            o = n.reduce((e, t) => (e[t.id] = t, e), {});
        i.forEach(e => {
            let t = s[e.message_id];
            if (null == t) {
                V[e.message_id] = !0;
                return
            }
            let n = G[e.message_id];
            null == n && (n = {
                id: e.message_id,
                type: x.Mm.MESSAGE,
                score: -1,
                data: {
                    guild_id: t.guild_id,
                    channel_id: t.channel_id,
                    message_id: t.message.id,
                    channel_type: y.rbe.GUILD_TEXT,
                    has_mention: !1
                }
            });
            let i = g.A.getMessage(t.channel_id, t.message.id);
            if (null != i) {
                let e = (0, v.Rh)(t, n);
                k[t.message.id] = {
                    ...e,
                    message: i
                }
            } else k[t.message.id] = (0, v.Rh)(t, n)
        }), l.forEach(e => {
            let t = o[e.content_id];
            if (null == t) {
                V[e.content_id] = !0;
                return
            }
            let n = G[e.content_id];
            if (null == n) {
                V[e.content_id] = !0;
                return
            }
            k[t.id] = {
                ...n,
                activity: t
            }
        }), a === Z && (Z = r), ei.delete((0, v.Vq)(a, r))
    },
    LOAD_ICYMI_CUSTOM_SCORES: function(e) {
        let {
            scores: t
        } = e;
        for (let e of t)
            for (let t of (B[e.guild_id] = e.guild_score, eI(e.guild_id, e.guild_score), Object.keys(e.custom_channel_scores))) null == H[e.guild_id] && (H[e.guild_id] = {}), H[e.guild_id][t] = e.custom_channel_scores[t], ep(t, e.custom_channel_scores[t]);
        B = {
            ...B
        }, H = {
            ...H
        }
    },
    LOAD_ICYMI_RECOMMENDED_GUILDS: function(e) {
        let {
            guilds: t
        } = e;
        J = t.map(e => (0, T.jE)(e.guild)), eu()
    },
    ICYMI_CUSTOM_SCORES_UPDATED: function(e) {
        let {
            channelScores: t,
            guildId: n,
            guildScore: i
        } = e;
        null != i && (B[n] = i, eI(n, i), B = {
            ...B
        }), t?.forEach(e => {
            let {
                channelId: t,
                score: i
            } = e;
            null == H[n] && (H[n] = {}), H[n][t] = i, ep(t, i), H = {
                ...H
            }
        })
    },
    RELOAD_ICYMI: function() {
        if (0 === M.length) return !1;
        eh(), W = !1
    },
    ICYMI_TAB_OPENED: function() {
        K = !0, j = Date.now(), Y && (Y = !1, W = !1), $ < 5 && $++
    },
    ICYMI_FEEDBACK_GIVEN: function() {
        $ = 6
    },
    MESSAGE_REACTION_ADD: ef,
    MESSAGE_REACTION_ADD_MANY: function(e) {
        let {
            messageId: t,
            reactions: n
        } = e, i = k[t];
        if (null == i || i.type !== x.Mm.MESSAGE) return !1;
        let l = A.default.getId();
        i.message = i.message.addReactionBatch(n, l)
    },
    MESSAGE_REACTION_REMOVE: ef,
    MESSAGE_REACTION_REMOVE_ALL: function(e) {
        let {
            messageId: t
        } = e, n = k[t];
        if (null == n || n.type !== x.Mm.MESSAGE) return !1;
        n.message = n.message.set("reactions", [])
    },
    MESSAGE_REACTION_REMOVE_EMOJI: function(e) {
        let {
            messageId: t,
            emoji: n
        } = e, i = k[t];
        if (null == i || i.type !== x.Mm.MESSAGE) return !1;
        i.message = i.message.removeReactionsForEmoji(n)
    },
    CHANNEL_ACK: eC,
    MESSAGE_ACK: eC,
    ICYMI_JOINED_RECOMMENDED_GUILD: function() {
        ee = Date.now()
    },
    ICYMI_SET_VIDEOS_MUTED: function(e) {
        let {
            muted: t
        } = e;
        et = t
    },
    ICYMI_SET_REFRESHING: function(e) {
        let {
            refreshing: t
        } = e;
        en = t
    },
    LOAD_ICYMI_HYDRATED_ATTEMPT: function(e) {
        let {
            hydrationId: t
        } = e;
        ei.add(t)
    },
    LOAD_ICYMI_HYDRATED_FAILED: function(e) {
        let {
            hydrationId: t
        } = e;
        ei.delete(t)
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
            q = null;
            return
        }
        q = [n, [...t]]
    },
    ICYMI_SCROLL_EVENT: function(e) {
        let {
            timestamp: t
        } = e;
        er = t
    },
    ICYMI_TAKE_SURVEY: function(e) {
        let {
            takenAt: t
        } = e;
        es = t
    }
})