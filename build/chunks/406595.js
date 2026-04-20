/** chunk id: 406595 params = (module,exports,require) **/
n.d(t, {
    A: () => W
});
var i = n(311907),
    l = n(713402),
    r = n(73153),
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
    p = new l.J(e => [e.tab], e => e.sortKey),
    _ = new Set(Object.values(f.x)),
    S = new Map,
    x = !1;

function T(e, t, n) {
    return e < t ? t : e > n ? n : e
}

function N(e, t) {
    return String(e).padStart(t, "0")
}

function C(e) {
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

function R(e) {
    return Array.from(M(e).values())
}

function D() {
    let e = u.A.affinities,
        t = 0;
    for (let n = 0; n < e.length; n += 1) {
        let i = e[n].score ?? 0;
        i > t && (t = i)
    }
    return t > 0 ? t : 1
}

function b(e) {
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
            targetId: l,
            isOnline: r,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u
        } = e,
        d = {
            rowId: y(i, l),
            tab: i,
            targetId: l,
            isOnline: r,
            affinityScore: s,
            hasMention: a,
            hasUnread: o,
            addedTimestampMs: u,
            sortKey: ""
        };
    return d.sortKey = [(t = d).tab, v(t.isOnline), N(Math.round((1 - T(t.affinityScore, 0, 1)) * 1e6), 7), v(t.hasMention), v(t.hasUnread), (n = T(t.addedTimestampMs, 0, E), N(E - n, 16)), t.rowId].join("\0"), d
}

function j(e) {
    let {
        tab: t,
        targetId: n,
        addedTimestampMs: i,
        guildAffinityNormalizationMax: l,
        pruneInvalid: r
    } = e;
    if (t === f.x.FRIENDS) {
        if (null == m.default.getUser(n)) return {
            kind: "NOT_READY_YET"
        };
        if (!g.A.isFriend(n)) return r ? {
            kind: "INVALID"
        } : {
            kind: "NOT_READY_YET"
        };
        let e = function(e, t, n) {
            var i;
            if (e !== f.x.FRIENDS || null == m.default.getUser(t) || !g.A.isFriend(t)) return null;
            let l = (i = c.A.getStatus(t)) === I.clD.ONLINE || i === I.clD.IDLE || i === I.clD.DND,
                r = s.A.getUserAffinity(t)?.communicationProbability ?? 0,
                a = o.A.getDMFromUserId(t),
                {
                    hasMention: u,
                    hasUnread: d
                } = null != a ? b(a) : {
                    hasMention: !1,
                    hasUnread: !1
                };
            return w({
                tab: e,
                targetId: t,
                isOnline: l,
                affinityScore: r,
                hasMention: u,
                hasUnread: d,
                addedTimestampMs: n
            })
        }(t, n, i);
        return null == e ? r ? {
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
    if (!O(t, n)) return r ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    };
    let d = function(e, t, n, i) {
        if (!O(e, t)) return null;
        let l = o.A.getChannel(t);
        if (null == l) return null;
        let r = l.getGuildId() ?? null,
            s = T((null != r ? u.A.getGuildAffinity(r)?.score ?? 0 : 0) / i, 0, 1),
            {
                hasMention: d,
                hasUnread: c
            } = (0, a.ke)(l.type) || l.isDM() || l.isMultiUserDM() || l.isPrivate() ? b(t) : {
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
    }(t, n, i, l);
    return null == d ? r ? {
        kind: "INVALID"
    } : {
        kind: "NOT_READY_YET"
    } : {
        kind: "BUILT",
        row: d
    }
}

function U(e, t) {
    return e.rowId !== t.rowId || e.tab !== t.tab || e.targetId !== t.targetId || e.isOnline !== t.isOnline || e.affinityScore !== t.affinityScore || e.hasMention !== t.hasMention || e.hasUnread !== t.hasUnread || e.addedTimestampMs !== t.addedTimestampMs || e.sortKey !== t.sortKey
}

function L(e) {
    let {
        pruneInvalid: t
    } = e, n = new Set(p.values().map(e => e.rowId)), i = D(), l = !1;
    for (let e of _) {
        let r = M(e);
        for (let [s, a] of r.entries()) {
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
                    (null == t || U(t, e)) && (l = p.set(e.rowId, e) || l);
                    break
                }
                case "NOT_READY_YET":
                    l = p.delete(o) || l;
                    break;
                case "INVALID":
                    r.delete(s), l = !0, l = p.delete(o) || l;
                    break;
                default:
                    return u
            }
        }
    }
    for (let e of n) l = p.delete(e) || l;
    return l
}

function k(e, t) {
    let n = M(e).delete(t),
        i = p.delete(y(e, t));
    return n || i
}

function G(e) {
    let {
        tab: t,
        targetId: n,
        pruneInvalid: i,
        guildAffinityNormalizationMax: l
    } = e, r = M(t), s = r.get(n), a = y(t, n);
    if (null == s) return p.delete(a);
    let o = j({
        tab: t,
        targetId: n,
        addedTimestampMs: s.addedTimestampMs,
        guildAffinityNormalizationMax: l,
        pruneInvalid: i
    });
    switch (o.kind) {
        case "BUILT": {
            let e = o.row,
                t = p.get(e.rowId);
            return !!(null == t || U(t, e)) && p.set(e.rowId, e)
        }
        case "NOT_READY_YET":
            return p.delete(a);
        case "INVALID":
            return i && r.delete(n), p.delete(a);
        default:
            return o
    }
}

function P(e, t) {
    let {
        pruneInvalid: n
    } = t, i = M(e);
    if (0 === i.size && 0 === p.values(e).length) return !1;
    let l = D(),
        r = !1,
        s = new Set;
    for (let t of i.keys()) s.add(y(e, t)), r = G({
        tab: e,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: l
    }) || r;
    for (let t of p.values(e)) s.has(t.rowId) || (r = p.delete(t.rowId) || r);
    return r
}

function F(e, t) {
    let {
        pruneInvalid: n
    } = t, i = M(f.x.FRIENDS);
    if (0 === i.size) return !1;
    let l = D(),
        r = !1;
    for (let t of i.keys()) o.A.getDMFromUserId(t) === e && (r = G({
        tab: f.x.FRIENDS,
        targetId: t,
        pruneInvalid: n,
        guildAffinityNormalizationMax: l
    }) || r);
    return r
}

function V(e) {
    let t = x,
        n = D(),
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
    return x = !0, L({
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
                        l = 0;
                    for (let e of n) {
                        let t = null == e || "string" != typeof e.targetId ? null : {
                            targetId: e.targetId,
                            addedTimestampMs: C(e.addedTimestampMs)
                        };
                        null != t && (i.set(t.targetId, t), l += 1)
                    };
                })(e, t)
            }(e), L({
                pruneInvalid: !1
            })
    }
    getState() {
        return {
            friendsFavoriteTargetIds: R(f.x.FRIENDS),
            messagesFavoriteTargetIds: R(f.x.MESSAGES),
            voiceFavoriteTargetIds: R(f.x.VOICE)
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
    W = new H(r.h, __OVERLAY__ ? {} : {
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: Y(function(e) {
            let t = y(e.tab, e.targetId);
            if (!e.isFavorite) {
                let n = M(e.tab).delete(e.targetId),
                    i = p.delete(t);
                return n || i
            }
            let n = C(e.addedTimestampMs ?? M(e.tab).get(e.targetId)?.addedTimestampMs ?? Date.now()),
                i = M(e.tab);
            i.set(e.targetId, {
                targetId: e.targetId,
                addedTimestampMs: n
            });
            let l = D(),
                r = j({
                    tab: e.tab,
                    targetId: e.targetId,
                    addedTimestampMs: n,
                    guildAffinityNormalizationMax: l,
                    pruneInvalid: x
                });
            switch (r.kind) {
                case "BUILT": {
                    let e = r.row,
                        t = p.get(e.rowId);
                    (null == t || U(t, e)) && p.set(e.rowId, e);
                    break
                }
                case "NOT_READY_YET":
                    p.delete(t);
                    break;
                case "INVALID":
                    i.delete(e.targetId), p.delete(t);
                    break;
                default:
                    return r
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
            let n = D(),
                i = !1;
            for (let l of e.updates) {
                let e = l.user?.id;
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
            let n = D(),
                i = !1;
            for (let l of e.presences) {
                let e = l.user?.id;
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
                n = D(),
                i = !1,
                l = M(f.x.MESSAGES),
                r = M(f.x.VOICE);
            for (let s of e.channels) {
                let e = s?.id;
                null != e && (l.has(e) && (i = G({
                    tab: f.x.MESSAGES,
                    targetId: e,
                    pruneInvalid: t,
                    guildAffinityNormalizationMax: n
                }) || i), r.has(e) && (i = G({
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
            return n = k(f.x.MESSAGES, t) || n, n = k(f.x.VOICE, t) || n, n = F(t, {
                pruneInvalid: x
            }) || n
        }),
        RELATIONSHIP_ADD: Y(function(e) {
            let t = e.relationship?.id;
            if (null == t || !M(f.x.FRIENDS).has(t)) return !1;
            let n = D();
            return G({
                tab: f.x.FRIENDS,
                targetId: t,
                pruneInvalid: x,
                guildAffinityNormalizationMax: n
            })
        }),
        RELATIONSHIP_REMOVE: Y(function(e) {
            let t = e.relationship?.id;
            return null != t && k(f.x.FRIENDS, t)
        }),
        LOGOUT: Y(function() {
            let e = p.size() > 0 || S.size > 0;
            return p.clear(), S = new Map, x = !1, e
        })
    })