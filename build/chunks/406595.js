/** chunk id: 406595 params = (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(311907),
    r = n(713402),
    l = n(73153),
    s = n(21119),
    a = n(95701),
    o = n(734057),
    u = n(197305),
    d = n(576705),
    c = n(290863),
    h = n(222823),
    g = n(994500),
    m = n(287809),
    f = n(914853),
    A = n(956753),
    I = n(652215);
let E = Number.MAX_SAFE_INTEGER,
    p = new r.J(e => [e.tab], e => e.sortKey),
    _ = new Set(Object.values(f.x)),
    S = new Map,
    x = !1;

function T(e, t, n) {
    return e < t ? t : e > n ? n : e
}

function C(e, t) {
    return String(e).padStart(t, "0")
}

function N(e) {
    return Number.isFinite(e) ? Math.floor(T(e, 0, E)) : Date.now()
}

function v(e) {
    return e ? "0" : "1"
}

function y(e, t) {
    return `${e}:${t}`
}

function M(e) {
    let t = S.get(e);
    return null == t && (t = new Map, S.set(e, t)), t
}

function b(e) {
    return Array.from(M(e).values())
}

function R() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i)
    }
    return t > 0 ? t : 1
}

function D(e) {
    return {
        hasMention: h.Ay.getMentionCount(e) > 0,
        hasUnread: h.Ay.hasUnread(e)
    }
}

function O(e, t) {
    let n = o.A.getChannel(t);
    if (null == n) return !1;
    switch (e) {
        case f.x.MESSAGES:
            if (n.isDM() || n.isMultiUserDM() || n.isPrivate()) return !0;
            if (!(0, a.ke)(n.type)) return !1;
            return d.A.can(I.xBc.READ_MESSAGE_HISTORY, n);
        case f.x.VOICE:
            if (!(0, a.ay)(n.type)) return !1;
            return d.A.can(I.xBc.VIEW_CHANNEL, n);
        case f.x.FRIENDS:
            return !1;
        default:
            return e
    }
}

function w(e) {
    var t;
    let n, {
            tab: i,
            targetId: r,
            isOnline: l,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u
        } = e,
        d = {
            rowId: y(i, r),
            tab: i,
            targetId: r,
            isOnline: l,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u,
            sortKey: ""
        };
    return d.sortKey = [(t = d).tab, v(t.isOnline), C(Math.round((1 - T(t.affinityScore, 0, 1)) * 1e6), 7), v(t.hasMention), v(t.hasUnread), (n = T(t.addedTimestampMs, 0, E), C(E - n, 16)), t.rowId].join("\0"), d
}

function j(e) {
    let {
        tab: t,
        targetId: n,
        addedTimestampMs: i,
        guildAffinityNormalizationMax: r,
        pruneInvalid: l
    } = e;
    if (t === f.x.FRIENDS) {
        if (null == m.default.getUser(n)) return {
            kind: "NOT_READY_YET"
        };
        if (!g.A.isFriend(n)) return l ? {
            kind: "INVALID"
        } : {
            kind: "NOT_READY_YET"
        };
        let e = function(e, t, n) {
            var i;
            if (e !== f.x.FRIENDS || null == m.default.getUser(t) || !g.A.isFriend(t)) return null;
            let r = (i = c.A.getStatus(t)) === I.clD.ONLINE || i === I.clD.IDLE || i === I.clD.DND,
                l = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                {
                    hasMention: u,
                    hasUnread: d
                } = null != a ? D(a) : {
                    hasMention: !1,
                    hasUnread: !1
                };
            return w({
                tab: e,
                targetId: t,
                isOnline: r,
                affinityScore: l,
                hasMention: u,
                hasUnread: d,
                addedTimestampMs: n
            })
        }(t, n, i);
        return null == e ? l ? {
            kind: "INVALID"
        } : {
            kind: "NOT_READY_YET"
        } : {
            kind: "BUILT",
            row: e
        }
    }
    if (null == o.A.getChannel(n)) return {
        kind: "NOT_READY_YET"
    };
    if (!O(t, n)) return l ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    };
    let d = function(e, t, n, i) {
        if (!O(e, t)) return null;
        let r = o.A.getChannel(t);
        if (null == r) return null;
        let l = r.getGuildId() ?? null,
            s = T((null != l ? u.A.getGuildAffinity(l)?.score ?? 0 : 0) / i, 0, 1),
            {
                hasMention: d,
                hasUnread: c
            } = (0, a.ke)(r.type) || r.isDM() || r.isMultiUserDM() || r.isPrivate() ? D(t) : {
                hasMention: !1,
                hasUnread: !1
            };
        return w({
            tab: e,
            targetId: t,
            isOnline: !1,
            affinityScore: s,
            hasMention: d,
            hasUnread: c,
            addedTimestampMs: n
        })
    }(t, n, i, r);
    return null == d ? l ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    } : {
        kind: "BUILT",
        row: d
    }
}

function k(e, t) {
    return e.rowId !== t.rowId || e.tab !== t.tab || e.targetId !== t.targetId || e.isOnline !== t.isOnline || e.affinityScore !== t.affinityScore || e.hasMention !== t.hasMention || e.hasUnread !== t.hasUnread || e.addedTimestampMs !== t.addedTimestampMs || e.sortKey !== t.sortKey
}

function U(e) {
    let {
        pruneInvalid: t
    } = e, n = new Set(p.values().map(e => e.rowId)), i = R(), r = !1;
    for (let e of _) {
        let l = M(e);
        for (let [s, a] of l.entries()) {
            let o = y(e, s),
                u = j({
                    tab: e,
                    targetId: s,
                    addedTimestampMs: a.addedTimestampMs,
                    guildAffinityNormalizationMax: i,
                    pruneInvalid: t
                });
            switch (n.delete(o), u.kind) {
                case "BUILT": {
                    let e = u.row,
                        t = p.get(e.rowId);
                    (null == t || k(t, e)) && (r = p.set(e.rowId, e) || r);
                    break
                }
                case "NOT_READY_YET":
                    r = p.delete(o) || r;
                    break;
                case "INVALID":
                    l.delete(s), r = !0, r = p.delete(o) || r;
                    break;
                default:
                    return u
            }
        }
    }
    for (let e of n) r = p.delete(e) || r;
    return r
}

function L(e, t) {
    let n = M(e).delete(t),
        i = p.delete(y(e, t));
    return n || i
}

function G(e) {
    let {
        tab: t,
        targetId: n,
        pruneInvalid: i,
        guildAffinityNormalizationMax: r
    } = e, l = M(t), s = l.get(n), a = y(t, n);
    if (null == s) return p.delete(a);
    let o = j({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: r,
        pruneInvalid: i
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = p.get(e.rowId);
            return !!(null == t || k(t, e)) && p.set(e.rowId, e)
        }
        case "NOT_READY_YET":
            return p.delete(a);
        case "INVALID":
            return i && l.delete(n), p.delete(a);
        default:
            return o
    }
}

function P(e, t) {
    let {
        pruneInvalid: n
    } = t, i = M(e);
    if (0 === i.size && 0 === p.values(e).length) return !1;
    let r = R(),
        l = !1,
        s = new Set;
    for (let t of i.keys()) s.add(y(e, t)), l = G({
        tab: e,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: r
    }) || l;
    for (let t of p.values(e)) s.has(t.rowId) || (l = p.delete(t.rowId) || l);
    return l
}

function F(e, t) {
    let {
        pruneInvalid: n
    } = t, i = M(f.x.FRIENDS);
    if (0 === i.size) return !1;
    let r = R(),
        l = !1;
    for (let t of i.keys()) o.A.getDMFromUserId(t) === e && (l = G({
        tab: f.x.FRIENDS,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: r
    }) || l);
    return l
}

function V(e) {
    let t = x,
        n = R(),
        i = !1;
    return M(f.x.MESSAGES).has(e) && (i = G({
        tab: f.x.MESSAGES,
        targetId: e,
        pruneInvalid: t,
        guildAffinityNormalizationMax: n
    }) || i), i = F(e, {
        pruneInvalid: t
    }) || i
}

function z() {
    return x = !0, U({
        pruneInvalid: !0
    })
}
class H extends i.Ay.PersistedStore {
    static displayName = "OverlayFriendsWidgetFavoritesStore";
    static persistKey = "OverlayFriendsWidgetFavoritesStore";
    initialize(e) {
        this.waitFor(o.A, u.A, d.A, c.A, h.Ay, g.A, s.A, m.default),
            function(e) {
                S = new Map, p.clear();
                for (let t of _)(function(e, t) {
                    let n = function(e, t) {
                            if (null == e) return [];
                            switch (t) {
                                case f.x.FRIENDS:
                                    return e.friendsFavoriteTargetIds ?? [];
                                case f.x.MESSAGES:
                                    return e.messagesFavoriteTargetIds ?? [];
                                case f.x.VOICE:
                                    return e.voiceFavoriteTargetIds ?? [];
                                default:
                                    return t
                            }
                        }(e, t),
                        i = M(t),
                        r = 0;
                    for (let e of n) {
                        let t = null == e || "string" != typeof e.targetId ? null : {
                            targetId: e.targetId,
                            addedTimestampMs: N(e.addedTimestampMs)
                        };
                        null != t && (i.set(t.targetId, t), r += 1)
                    };
                })(e, t)
            }(e), U({
                pruneInvalid: !1
            })
    }
    getState() {
        return {
            friendsFavoriteTargetIds: b(f.x.FRIENDS),
            messagesFavoriteTargetIds: b(f.x.MESSAGES),
            voiceFavoriteTargetIds: b(f.x.VOICE)
        }
    }
    getFavoriteTargetIdsForTab(e) {
        return [p.values(e).map(e => e.targetId), p.version]
    }
    isFavorite(e, t) {
        return [M(e).has(t), p.version]
    }
}
let Y = e => (0, A.v$)(e, "OverlayFriendsWidgetFavoritesStore"),
    W = new H(l.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function(e) {
            let t = y(e.tab, e.targetId);
            if (!e.isFavorite) {
                let n = M(e.tab).delete(e.targetId),
                    i = p.delete(t);
                return n || i
            }
            let n = N(e.addedTimestampMs ?? M(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                i = M(e.tab);
            i.set(e.targetId, {
                targetId: e.targetId,
                addedTimestampMs: n
            });
            let r = R(),
                l = j({
                    tab: e.tab,
                    targetId: e.targetId,
                    addedTimestampMs: n,
                    guildAffinityNormalizationMax: r,
                    pruneInvalid: x
                });
            switch (l.kind) {
                case "BUILT": {
                    let e = l.row,
                        t = p.get(e.rowId);
                    (null == t || k(t, e)) && p.set(e.rowId, e);
                    break
                }
                case "NOT_READY_YET":
                    p.delete(t);
                    break;
                case "INVALID":
                    i.delete(e.targetId), p.delete(t);
                    break;
                default:
                    return l
            }
            return !0
        }),
        POST_CONNECTION_OPEN: Y(z),
        OVERLAY_INITIALIZE: Y(z),
        CACHE_LOADED: Y(z),
        CACHE_LOADED_LAZY: Y(z),
        FRIENDS_LIST_POPOUT_MOUNTED: Y(z),
        PRESENCE_UPDATES: Y(function(e) {
            let t = M(f.x.FRIENDS);
            if (0 === t.size) return !1;
            let n = R(),
                i = !1;
            for (let r of e.updates) {
                let e = r.user?.id;
                null != e && t.has(e) && (i = G({
                    tab: f.x.FRIENDS,
                    targetId: e,
                    pruneInvalid: x,
                    guildAffinityNormalizationMax: n
                }) || i)
            }
            return i
        }),
        PRESENCES_REPLACE: Y(function(e) {
            let t = M(f.x.FRIENDS);
            if (0 === t.size) return !1;
            let n = R(),
                i = !1;
            for (let r of e.presences) {
                let e = r.user?.id;
                null != e && t.has(e) && (i = G({
                    tab: f.x.FRIENDS,
                    targetId: e,
                    pruneInvalid: x,
                    guildAffinityNormalizationMax: n
                }) || i)
            }
            return i
        }),
        LOAD_USER_AFFINITIES_V2_SUCCESS: Y(function() {
            return P(f.x.FRIENDS, {
                pruneInvalid: x
            })
        }),
        LOAD_GUILD_AFFINITIES_SUCCESS: Y(function() {
            let e = x;
            return P(f.x.MESSAGES, {
                pruneInvalid: e
            }) || P(f.x.VOICE, {
                pruneInvalid: e
            })
        }),
        MESSAGE_CREATE: Y(e => V(e.channelId)),
        MESSAGE_ACK: Y(e => V(e.channelId)),
        CHANNEL_ACK: Y(e => V(e.channelId)),
        CHANNEL_UPDATES: Y(function(e) {
            let t = x,
                n = R(),
                i = !1,
                r = M(f.x.MESSAGES),
                l = M(f.x.VOICE);
            for (let s of e.channels) {
                let e = s?.id;
                null != e && (r.has(e) && (i = G({
                    tab: f.x.MESSAGES,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n
                }) || i), l.has(e) && (i = G({
                    tab: f.x.VOICE,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n
                }) || i), i = F(e, {
                    pruneInvalid: t
                }) || i)
            }
            return i
        }),
        CHANNEL_DELETE: Y(function(e) {
            let t = e.channel?.id;
            if (null == t) return !1;
            let n = !1;
            return n = L(f.x.MESSAGES, t) || n, n = L(f.x.VOICE, t) || n, n = F(t, {
                pruneInvalid: x
            }) || n
        }),
        RELATIONSHIP_ADD: Y(function(e) {
            let t = e.relationship?.id;
            if (null == t || !M(f.x.FRIENDS).has(t)) return !1;
            let n = R();
            return G({
                tab: f.x.FRIENDS,
                targetId: t,
                pruneInvalid: x,
                guildAffinityNormalizationMax: n
            })
        }),
        RELATIONSHIP_REMOVE: Y(function(e) {
            let t = e.relationship?.id;
            return null != t && L(f.x.FRIENDS, t)
        }),
        LOGOUT: Y(function() {
            let e = p.size() > 0 || S.size > 0;
            return p.clear(), S = new Map, x = !1, e
        })
    })