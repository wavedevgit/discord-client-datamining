/** chunk id: 406595 params = (module,exports,require) **/
n.d(t, {
    A: () => z
});
var l = n(311907),
    i = n(713402),
    r = n(73153),
    s = n(21119),
    a = n(95701),
    u = n(734057),
    o = n(197305),
    d = n(576705),
    c = n(290863),
    h = n(222823),
    g = n(994500),
    I = n(287809),
    A = n(914853),
    f = n(956753),
    E = n(652215);
let m = Number.MAX_SAFE_INTEGER,
    S = new i.J(e => [e.tab], e => e.sortKey),
    p = new Set(Object.values(A.x)),
    N = new Map,
    T = !1;

function _(e, t, n) {
    return e < t ? t : e > n ? n : e
}

function C(e, t) {
    return String(e).padStart(t, "0")
}

function y(e) {
    return Number.isFinite(e) ? Math.floor(_(e, 0, m)) : Date.now()
}

function x(e) {
    return e ? "0" : "1"
}

function M(e, t) {
    return `${e}:${t}`
}

function v(e) {
    let t = N.get(e);
    return null == t && (t = new Map, N.set(e, t)), t
}

function D(e) {
    return Array.from(v(e).values())
}

function R() {
    let e = o.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let l = e[n].score ?? 0;
        l > t && (t = l)
    }
    return t > 0 ? t : 1
}

function U(e) {
    return {
        hasMention: h.Ay.getMentionCount(e) > 0,
        hasUnread: h.Ay.hasUnread(e)
    }
}

function O(e, t) {
    let n = u.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case A.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(E.xBc.READ_MESSAGE_HISTORY, n);
        case A.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(E.xBc.VIEW_CHANNEL, n);
        case A.x.FRIENDS:
            return !1;
        default:
            return e
    }
}

function G(e) {
    var t;
    let n, {
            tab: l,
            targetId: i,
            isOnline: r,
            affinityScore: s,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o
        } = e,
        d = {
            rowId: M(l, i),
            tab: l,
            targetId: i,
            isOnline: r,
            affinityScore: s,
            hasMention: a,
            hasUnread: u,
            addedTimestampMs: o,
            sortKey: ""
        };
    return d.sortKey = [(t = d).tab, x(t.isOnline), C(Math.round((1 - _(t.affinityScore, 0, 1)) * 1e6), 7), x(t.hasMention), x(t.hasUnread), (n = _(t.addedTimestampMs, 0, m), C(m - n, 16)), t.rowId].join("\0"), d
}

function w(e) {
    let {
        tab: t,
        targetId: n,
        addedTimestampMs: l,
        guildAffinityNormalizationMax: i,
        pruneInvalid: r
    } = e;
    if (t === A.x.FRIENDS) {
        if (null == I.default.getUser(n)) return {
            kind: "NOT_READY_YET"
        };
        if (!g.A.isFriend(n)) return r ? {
            kind: "INVALID"
        } : {
            kind: "NOT_READY_YET"
        };
        let e = function(e, t, n) {
            var l;
            if (e !== A.x.FRIENDS || null == I.default.getUser(t) || !g.A.isFriend(t)) return null;
            let i = (l = c.A.getStatus(t)) === E.clD.ONLINE || l === E.clD.IDLE || l === E.clD.DND,
                r = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = u.A.getDMFromUserId(t),
                {
                    hasMention: o,
                    hasUnread: d
                } = null != a ? U(a) : {
                    hasMention: !1,
                    hasUnread: !1
                };
            return G({
                tab: e,
                targetId: t,
                isOnline: i,
                affinityScore: r,
                hasMention: o,
                hasUnread: d,
                addedTimestampMs: n
            })
        }(t, n, l);
        return null == e ? r ? {
            kind: "INVALID"
        } : {
            kind: "NOT_READY_YET"
        } : {
            kind: "BUILT",
            row: e
        }
    }
    if (null == u.A.getChannel(n)) return {
        kind: "NOT_READY_YET"
    };
    if (!O(t, n)) return r ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    };
    let d = function(e, t, n, l) {
        if (!O(e, t)) return null;
        let i = u.A.getChannel(t);
        if (null == i) return null;
        let r = i.getGuildId() ?? null,
            s = _((null != r ? o.A.getGuildAffinity(r)?.score ?? 0 : 0) / l, 0, 1),
            {
                hasMention: d,
                hasUnread: c
            } = (0, a.ke)(i.type) || i.isDM() || i.isMultiUserDM() || i.isPrivate() ? U(t) : {
                hasMention: !1,
                hasUnread: !1
            };
        return G({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: s,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n
        })
    }(t, n, l, i);
    return null == d ? r ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    } : {
        kind: "BUILT",
        row: d
    }
}

function F(e, t) {
    return e.rowId !== t.rowId || e.tab !== t.tab || e.targetId !== t.targetId || e.isOnline !== t.isOnline || e.affinityScore !== t.affinityScore || e.hasMention !== t.hasMention || e.hasUnread !== t.hasUnread || e.addedTimestampMs !== t.addedTimestampMs || e.sortKey !== t.sortKey
}

function L(e) {
    let {
        pruneInvalid: t
    } = e, n = new Set(S.values().map(e => e.rowId)), l = R(), i = !1;
    for (let e of p) {
        let r = v(e);
        for (let [s, a] of r.entries()) {
            let u = M(e, s),
                o = w({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: l,
                    pruneInvalid: t
                });
            switch (n.delete(u), o.kind) {
                case "BUILT": {
                    let e = o.row,
                        t = S.get(e.rowId);
                    (null == t || F(t, e)) && (i = S.set(e.rowId, e) || i);
                    break
                }
                case "NOT_READY_YET":
                    i = S.delete(u) || i;
                    break;
                case "INVALID":
                    r.delete(s), i = !0, i = S.delete(u) || i;
                    break;
                default:
                    return o
            }
        }
    }
    for (let e of n) i = S.delete(e) || i;
    return i
}

function b(e, t) {
    let n = v(e).delete(t),
        l = S.delete(M(e, t));
    return n || l
}

function k(e) {
    let {
        tab: t,
        targetId: n,
        pruneInvalid: l,
        guildAffinityNormalizationMax: i
    } = e, r = v(t), s = r.get(n), a = M(t, n);
    if (null == s) return S.delete(a);
    let u = w({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: i,
        pruneInvalid: l
    });
    switch (u.kind) {
        case "BUILT": {
            let e = u.row,
                t = S.get(e.rowId);
            return !!(null == t || F(t, e)) && S.set(e.rowId, e)
        }
        case "NOT_READY_YET":
            return S.delete(a);
        case "INVALID":
            return l && r.delete(n), S.delete(a);
        default:
            return u
    }
}

function P(e, t) {
    let {
        pruneInvalid: n
    } = t, l = v(e);
    if (0 === l.size && 0 === S.values(e).length) return !1;
    let i = R(),
        r = !1,
        s = new Set;
    for (let t of l.keys()) s.add(M(e, t)), r = k({
        tab: e,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: i
    }) || r;
    for (let t of S.values(e)) s.has(t.rowId) || (r = S.delete(t.rowId) || r);
    return r
}

function j(e, t) {
    let {
        pruneInvalid: n
    } = t, l = v(A.x.FRIENDS);
    if (0 === l.size) return !1;
    let i = R(),
        r = !1;
    for (let t of l.keys()) u.A.getDMFromUserId(t) === e && (r = k({
        tab: A.x.FRIENDS,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: i
    }) || r);
    return r
}

function V(e) {
    let t = T,
        n = R(),
        l = !1;
    return v(A.x.MESSAGES).has(e) && (l = k({
        tab: A.x.MESSAGES,
        targetId: e,
        pruneInvalid: t,
        guildAffinityNormalizationMax: n
    }) || l), l = j(e, {
        pruneInvalid: t
    }) || l
}

function H() {
    return T = !0, L({
        pruneInvalid: !0
    })
}
class Y extends l.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(u.A, o.A, d.A, c.A, h.Ay, g.A, s.A, I.default),
            function(e) {
                N = new Map, S.clear();
                for (let t of p)(function(e, t) {
                    let n = function(e, t) {
                            if (null == e) return [];
                            switch (t) {
                                case A.x.FRIENDS:
                                    return e.friendsFavoriteTargetIds ?? [];
                                case A.x.MESSAGES:
                                    return e.messagesFavoriteTargetIds ?? [];
                                case A.x.VOICE:
                                    return e.voiceFavoriteTargetIds ?? [];
                                default:
                                    return t
                            }
                        }(e, t),
                        l = v(t),
                        i = 0;
                    for (let e of n) {
                        let t = null == e || "string" != typeof e.targetId ? null : {
                            targetId: e.targetId,
                            addedTimestampMs: y(e.addedTimestampMs)
                        };
                        null != t && (l.set(t.targetId, t), i += 1)
                    };
                })(e, t)
            }(e), L({
                pruneInvalid: !1
            })
    }
    getState() {
        return {
            friendsFavoriteTargetIds: D(A.x.FRIENDS),
            messagesFavoriteTargetIds: D(A.x.MESSAGES),
            voiceFavoriteTargetIds: D(A.x.VOICE)
        }
    }
    getFavoriteTargetIdsForTab(e) {
        return [S.values(e).map(e => e.targetId), S.version]
    }
    isFavorite(e, t) {
        return [v(e).has(t), S.version]
    }
}
let W = e => (0, f.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    z = new Y(r.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: W(function(e) {
            let t = M(e.tab, e.targetId);
            if (!e.isFavorite) {
                let n = v(e.tab).delete(e.targetId),
                    l = S.delete(t);
                return n || l
            }
            let n = y(e.addedTimestampMs ?? v(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                l = v(e.tab);
            l.set(e.targetId, {
                targetId: e.targetId,
                addedTimestampMs: n
            });
            let i = R(),
                r = w({
                    tab: e.tab,
                    targetId: e.targetId,
                    addedTimestampMs: n,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: T
                });
            switch (r.kind) {
                case "BUILT": {
                    let e = r.row,
                        t = S.get(e.rowId);
                    (null == t || F(t, e)) && S.set(e.rowId, e);
                    break
                }
                case "NOT_READY_YET":
                    S.delete(t);
                    break;
                case "INVALID":
                    l.delete(e.targetId), S.delete(t);
                    break;
                default:
                    return r
            }
            return !0
        }),
        POST_CONNECTION_OPEN: W(H),
        OVERLAY_INITIALIZE: W(H),
        CACHE_LOADED: W(H),
        CACHE_LOADED_LAZY: W(H),
        FRIENDS_LIST_POPOUT_MOUNTED: W(H),
        PRESENCE_UPDATES: W(function(e) {
            let t = v(A.x.FRIENDS);
            if (0 === t.size) return !1;
            let n = R(),
                l = !1;
            for (let i of e.updates) {
                let e = i.user?.id;
                null != e && t.has(e) && (l = k({
                    tab: A.x.FRIENDS,
                    targetId: e,
                    pruneInvalid: T,
                    guildAffinityNormalizationMax: n
                }) || l)
            }
            return l
        }),
        PRESENCES_REPLACE: W(function(e) {
            let t = v(A.x.FRIENDS);
            if (0 === t.size) return !1;
            let n = R(),
                l = !1;
            for (let i of e.presences) {
                let e = i.user?.id;
                null != e && t.has(e) && (l = k({
                    tab: A.x.FRIENDS,
                    targetId: e,
                    pruneInvalid: T,
                    guildAffinityNormalizationMax: n
                }) || l)
            }
            return l
        }),
        LOAD_USER_AFFINITIES_V2_SUCCESS: W(function() {
            return P(A.x.FRIENDS, {
                pruneInvalid: T
            })
        }),
        LOAD_GUILD_AFFINITIES_SUCCESS: W(function() {
            let e = T;
            return P(A.x.MESSAGES, {
                pruneInvalid: e
            }) || P(A.x.VOICE, {
                pruneInvalid: e
            })
        }),
        MESSAGE_CREATE: W(e => V(e.channelId)),
        MESSAGE_ACK: W(e => V(e.channelId)),
        CHANNEL_ACK: W(e => V(e.channelId)),
        CHANNEL_UPDATES: W(function(e) {
            let t = T,
                n = R(),
                l = !1,
                i = v(A.x.MESSAGES),
                r = v(A.x.VOICE);
            for (let s of e.channels) {
                let e = s?.id;
                null != e && (i.has(e) && (l = k({
                    tab: A.x.MESSAGES,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n
                }) || l), r.has(e) && (l = k({
                    tab: A.x.VOICE,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n
                }) || l), l = j(e, {
                    pruneInvalid: t
                }) || l)
            }
            return l
        }),
        CHANNEL_DELETE: W(function(e) {
            let t = e.channel?.id;
            if (null == t) return !1;
            let n = !1;
            return n = b(A.x.MESSAGES, t) || n, n = b(A.x.VOICE, t) || n, n = j(t, {
                pruneInvalid: T
            }) || n
        }),
        RELATIONSHIP_ADD: W(function(e) {
            let t = e.relationship?.id;
            if (null == t || !v(A.x.FRIENDS).has(t)) return !1;
            let n = R();
            return k({
                tab: A.x.FRIENDS,
                targetId: t,
                pruneInvalid: T,
                guildAffinityNormalizationMax: n
            })
        }),
        RELATIONSHIP_REMOVE: W(function(e) {
            let t = e.relationship?.id;
            return null != t && b(A.x.FRIENDS, t)
        }),
        LOGOUT: W(function() {
            let e = S.size() > 0 || N.size > 0;
            return S.clear(), N = new Map, T = !1, e
        })
    })