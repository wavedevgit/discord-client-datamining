/** chunk id: 185657 params = (module,exports,require) **/
let i;
n.d(t, {
    A: () => L,
    j: () => N
}), n(321073);
var l, r = n(311907),
    s = n(713402),
    a = n(73153),
    o = n(870391),
    u = n(21119),
    d = n(734057),
    c = n(290863),
    h = n(994500),
    g = n(309010),
    m = n(461213),
    f = n(287809),
    A = n(977997),
    I = n(562153),
    E = n(914853),
    p = n(956753),
    _ = n(406595),
    S = n(70191),
    x = n(240516),
    T = n(652215),
    N = ((l = {}).FRIEND_REQUESTS = "FRIEND_REQUESTS", l.SUGGESTIONS = "SUGGESTIONS", l.SAME_ACTIVITY = "SAME_ACTIVITY", l.ACTIVITIES = "ACTIVITIES", l.IN_GAME = "IN_GAME", l.ONLINE = "ONLINE", l.OFFLINE = "OFFLINE", l);
let C = new s.J(function(e) {
    if ("FRIEND_REQUEST" === e.category) return ["FRIEND_REQUESTS"];
    if ("SUGGESTION" === e.category) return ["SUGGESTIONS"];
    let t = [];
    for (let n of (null != e.activityCategory && t.push(e.activityCategory), e.groupIds)) t.push(`GROUP:${n}`);
    return t
}, function(e) {
    return e.sortKey
});

function v(e, t) {
    return String(Math.floor(Math.max(0, Math.min(e, Number("9".repeat(t)))))).padStart(t, "0")
}

function y(e) {
    return v(1e6 - Math.max(0, Math.min(1e6, Math.round(1e6 * e))), 7)
}
let M = new Map;

function R() {
    let e = new Map;
    for (let t of o.A.getGroups())
        for (let n of t.userIds) {
            let i = e.get(n);
            null == i && (i = [], e.set(n, i)), i.push(t.id)
        }
    M = e
}

function D() {
    let e = m.A.getPrimaryActivity();
    i = e?.application_id
}

function b(e) {
    return e.type === T.$pd.PLAYING || e.type === T.$pd.COMPETING || e.type === T.$pd.WATCHING || e.type === T.$pd.STREAMING
}

function O(e) {
    let t = function(e) {
        let t = f.default.getUser(e);
        if (null == t) return null;
        let n = h.A.getRelationshipType(e),
            l = n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING,
            r = h.A.isFriend(e),
            s = c.A.getActivities(e),
            a = h.A.getNickname(e),
            o = u.A.getUserAffinity(e)?.communicationProbability ?? 0;
        return l ? function(e) {
            var t, n;
            let {
                userId: i,
                user: l,
                activities: r,
                nickname: s,
                relationshipType: a
            } = e, o = h.A.getSince(i), u = null != o ? new Date(o).getTime() : 0;
            return {
                id: i,
                userId: i,
                user: l,
                activities: r,
                nickname: s,
                relationshipType: a,
                category: "FRIEND_REQUEST",
                activityCategory: null,
                groupIds: [],
                sortKey: (t = Number.isFinite(u) ? u : 0, n = i, `REQ\0${v(Math.max(0,Math.min(0x9184e729fff,0x9184e729fff-Math.floor(t))),13)}\0${n}`)
            }
        }({
            userId: e,
            user: t,
            activities: s,
            nickname: a,
            relationshipType: n
        }) : r ? function(e) {
            let t, n, l, r, s, a, o, u, h, {
                    userId: f,
                    user: p,
                    activities: x,
                    nickname: N,
                    affinity: C
                } = e,
                {
                    category: v,
                    displayActivities: R
                } = (t = m.A.getPrimaryActivity(), n = i, l = t?.name != null && null != n, r = c.A.getStatus(f), s = A.A.getVoiceStateForUser(f), a = s?.channelId != null, u = (o = x.filter(b)).filter(S.A), h = o.filter(e => e.application_id === n), l && h.length > 0 ? {
                    category: "SAME_ACTIVITY",
                    displayActivities: h
                } : u.length > 0 ? {
                    category: "IN_GAME",
                    displayActivities: u
                } : a ? {
                    category: "ACTIVITIES",
                    displayActivities: x
                } : r === T.clD.ONLINE || r === T.clD.IDLE || r === T.clD.DND ? {
                    category: "ONLINE",
                    displayActivities: o
                } : {
                    category: "OFFLINE",
                    displayActivities: o
                }),
                D = "IN_GAME" === v ? R[0]?.name ?? null : null,
                O = M.get(f) ?? [],
                [w] = _.A.isFavorite(E.x.FRIENDS, f),
                j = g.A.getVoiceChannelId() ?? g.A.getChannelId(),
                U = null != j ? d.A.getChannel(j)?.guild_id : null,
                L = c.A.getStatus(f),
                k = L === T.clD.ONLINE,
                G = R.some(b),
                P = L === T.clD.DND || L === T.clD.IDLE,
                F = I.Ay.getName(U, j, p);
            return {
                id: f,
                userId: f,
                user: p,
                activities: R,
                nickname: N,
                category: "FRIEND",
                activityCategory: w ? null : v,
                groupIds: O,
                sortKey: function(e) {
                    let {
                        isOnline: t,
                        hasDisplayableActivity: n,
                        isDndOrIdle: i,
                        activityCategory: l,
                        inGameActivityName: r,
                        affinity: s,
                        displayName: a,
                        userId: o
                    } = e, u = t ? "0" : "1", d = n ? "0" : "1", c = i ? "0" : "1", h = a.toLowerCase();
                    if ("IN_GAME" === l) {
                        let e, t = (e = r?.trim().toLowerCase() ?? "").length > 0 ? e : "￿";
                        return `FRD\0${u}\0${d}\0${c}\0${t}\0${y(s)}\0${h}\0${o}`
                    }
                    return `FRD\0${u}\0${d}\0${c}\0${y(s)}\0${h}\0${o}`
                }({
                    isOnline: k,
                    hasDisplayableActivity: G,
                    isDndOrIdle: P,
                    activityCategory: v,
                    inGameActivityName: D,
                    affinity: C,
                    displayName: F,
                    userId: f
                })
            }
        }({
            userId: e,
            user: t,
            activities: s,
            nickname: a,
            affinity: o
        }) : function(e) {
            let {
                userId: t,
                user: n,
                activities: i,
                nickname: l,
                affinity: r
            } = e;
            if (!(r > x.u.HIGH_AFFINITY_MINIMUM)) return null;
            let s = A.A.getVoiceStateForUser(t),
                a = s?.channelId,
                o = null != a ? d.A.getChannel(a)?.guild_id : null,
                u = i.length > 0 || null != a,
                c = I.Ay.getName(o, a, n);
            return {
                id: t,
                userId: t,
                user: n,
                activities: i,
                nickname: l,
                category: "SUGGESTION",
                activityCategory: null,
                groupIds: [],
                sortKey: `SUG\0${u?"0":"1"}\0${y(r)}\0${c.toLowerCase()}\0${t}`
            }
        }({
            userId: e,
            user: t,
            activities: s,
            nickname: a,
            affinity: o
        })
    }(e);
    return null == t ? C.delete(e) : C.set(e, t)
}

function w() {
    C.clear(), R(), D();
    let e = !1;
    for (let [t, n] of h.A.getMutableRelationships().entries())(n === T.eA$.PENDING_INCOMING || n === T.eA$.PENDING_OUTGOING) && (e = O(t) || e);
    for (let t of u.A.getUserAffinitiesMap().keys()) h.A.isFriend(t) || (e = O(t) || e);
    for (let t of h.A.getFriendIDs()) e = O(t) || e;
    return e
}
class j extends r.Ay.Store {
    static displayName = "FriendsWidgetFriendsStore";
    initialize() {
        this.waitFor(d.A, o.A, _.A, c.A, h.A, g.A, m.A, u.A, f.default, A.A), w()
    }
    getRows(e) {
        return [C.values(e), C.version]
    }
    getFriend(e) {
        return C.get(e)
    }
}
let U = e => (0, p.v$)(e, "FriendsWidgetFriendsStore"),
    L = new j(a.h, __OVERLAY__ ? {} : {
        POST_CONNECTION_OPEN: U(w),
        OVERLAY_INITIALIZE: U(w),
        CACHE_LOADED: U(w),
        CACHE_LOADED_LAZY: U(w),
        FRIENDS_LIST_POPOUT_MOUNTED: U(w),
        OVERLAY_FRIENDS_WIDGET_SET_FAVORITE: U(function(e) {
            return e.tab === E.x.FRIENDS && O(e.targetId)
        }),
        PRESENCE_UPDATES: U(function(e) {
            let t = !1;
            for (let n of e.updates) {
                let e = n.user?.id;
                null != e && (t = O(e) || t)
            }
            return t
        }),
        PRESENCES_REPLACE: U(function(e) {
            let t = !1;
            for (let n of e.presences) {
                let e = n.user?.id;
                null != e && (t = O(e) || t)
            }
            return t
        }),
        ACTIVITY_METADATA_UPDATE: U(function(e) {
            return O(e.userId)
        }),
        VOICE_STATE_UPDATES: U(function(e) {
            let t = !1;
            for (let n of e.voiceStates) t = O(n.userId) || t;
            return t
        }),
        VOICE_CHANNEL_SELECT: U(function(e) {
            D();
            let t = !1;
            for (let e of h.A.getFriendIDs()) t = O(e) || t;
            return t
        }),
        RELATIONSHIP_ADD: U(function(e) {
            return O(e.relationship.id)
        }),
        RELATIONSHIP_REMOVE: U(function(e) {
            return O(e.relationship.id)
        }),
        RELATIONSHIP_UPDATE: U(function(e) {
            return O(e.relationship.id)
        }),
        RELATIONSHIP_PENDING_INCOMING_REMOVED: U(function(e) {
            let t = !1;
            for (let e of C.values("FRIEND_REQUESTS", !0)) e.relationshipType === T.eA$.PENDING_INCOMING && (t = O(e.userId) || t);
            return t
        }),
        CREATE_FRIEND_GROUP: U(function(e) {
            return R(), !1
        }),
        DELETE_FRIEND_GROUP: U(function(e) {
            R();
            let t = !1;
            for (let e of h.A.getFriendIDs()) t = O(e) || t;
            return t
        }),
        ADD_USERS_TO_GROUP: U(function(e) {
            R();
            let t = !1;
            for (let n of e.userIds) t = O(n) || t;
            return t
        }),
        REMOVE_USERS_FROM_GROUP: U(function(e) {
            R();
            let t = !1;
            for (let n of e.userIds) t = O(n) || t;
            return t
        }),
        LOAD_USER_AFFINITIES_V2_SUCCESS: U(function(e) {
            let t = !1;
            for (let e of u.A.getUserAffinitiesMap().keys()) t = O(e) || t;
            return t
        }),
        USER_UPDATE: U(function(e) {
            return O(e.user.id)
        }),
        CURRENT_USER_UPDATE: U(function(e) {
            D();
            let t = !1;
            for (let e of h.A.getFriendIDs()) t = O(e) || t;
            return t
        }),
        LOGOUT: U(function() {
            let e = C.size() > 0;
            return C.clear(), i = void 0, M = new Map, e
        })
    })