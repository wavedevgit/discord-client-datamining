/** chunk id: 943577, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => eR
}), n(896048), n(321073);
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(170148),
    c = n(550151),
    u = n(765379),
    d = n(90644),
    f = n(61330),
    p = n(960076),
    _ = n(323073),
    h = n(627363),
    m = n(587895),
    g = n(626584),
    E = n(142120),
    y = n(294857),
    b = n(516085),
    O = n(21119),
    v = n(57985),
    A = n(907459),
    I = n(443795),
    S = n(823441),
    T = n(47407),
    C = n(616356),
    N = n(734057),
    w = n(153488),
    R = n(629016),
    P = n(71393),
    D = n(576705),
    L = n(290863),
    x = n(994500),
    M = n(287809),
    j = n(977997),
    k = n(403362),
    U = n(652215);

function G(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function V(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            G(e, t, n[t])
        })
    }
    return e
}

function F(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function B(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : F(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let H = "party-",
    Y = "channel-",
    W = "user-",
    K = 1e3,
    z = !1,
    q = !1,
    Z = [],
    Q = [],
    X = {},
    J = {},
    $ = new Set,
    ee = new Set;

function et() {
    let e = x.A.getFriendIDs();
    return new Set(w.A.hasConsented(U.YAq.PERSONALIZATION) ? [...O.A.getUserAffinities().filter(e => e.communicationRank <= 15).map(e => e.otherUserId), ...e] : e)
}

function en(e) {
    return L.A.findActivity(e, e => e.type !== U.$pd.CUSTOM_STATUS)
}

function er(e) {
    return null == X[e] && (X = B(V({}, X), {
        [e]: new T.A({
            name: e
        })
    })), X[e]
}

function ei(e) {
    return null == J[e] && (J = B(V({}, J), {
        [e]: new S.A({
            url: e
        })
    })), J[e]
}

function ea(e) {
    ee.has(e) || $.add(e)
}

function eo(e) {
    if ((0, d.A)(e)) return I.HT;
    if ((0, f.A)(e)) return er(e.name);
    let t = null != e.application_id ? m.A.getApplication(e.application_id) : null;
    return null != t ? t : (0, p.A)(e) && null != e.url ? ei(e.url) : (null != e.application_id && ea(e.application_id), t)
}

function es(e) {
    let t = m.A.getApplication(e);
    return null != t ? t : "string" != typeof e ? (new g.A("NowPlayingViewStore").error("Unknown type for applicationId: ".concat(typeof e, ", value: ").concat(e), {
        tags: {
            source: "ACTIVITIES"
        }
    }), null) : e === I.WY ? I.HT : e.startsWith(T.W) ? er(e.slice(T.W.length)) : e.startsWith(S.K) ? ei(e.slice(S.K.length)) : (ea(e), null)
}

function el(e) {
    let t = j.A.getVoiceStateForUser(e);
    return (null == t ? void 0 : t.channelId) != null && D.A.canWithPartialContext(U.xBc.VIEW_CHANNEL, {
        channelId: t.channelId
    }) ? t.channelId : null
}

function ec(e) {
    return a()(e).groupBy(e => {
        var t;
        let n = el(e.id),
            r = en(e.id);
        return null != n ? "".concat(Y).concat(n) : (null == r || null == (t = r.party) ? void 0 : t.id) != null ? "".concat(H).concat(r.party.id) : "".concat(W).concat(e.id)
    })
}

function eu(e, t) {
    let n = e => e.game.name;
    return a()(e).orderBy([t, n], ["desc", "asc"])
}

function ed(e) {
    return x.A.isFriend(e.id)
}

function ef(e, t, n) {
    let r, i = M.default.getCurrentUser(),
        o = O.A.getUserAffinitiesMap(),
        s = (0, A.L)(t, o, "NowPlayingViewStore - partiedMembers"),
        d = s.map(e => e.id),
        f = s.filter(t => e.has(t.id)),
        p = !1,
        h = [],
        m = new Set,
        g = !1,
        E = [];
    for (let e of s) {
        var S, T, w, x;
        let t = C.A.getAnyStreamForUser(e.id),
            n = N.A.getChannel(null == t ? void 0 : t.channelId);
        if ((0, _.qR)(n)) continue;
        let r = en(e.id);
        if (null != t && E.push({
                stream: t,
                streamUser: e,
                activity: r
            }), null == r) continue;
        let o = (0, y.A)(r);
        if (null == o) continue;
        g = o === I.WY;
        let d = es(o);
        if ((0, u.A)(r)) {
            let t = (0, l.A)();
            if ((0, c.Ay)({
                    activity: r,
                    userId: e.id,
                    application: d,
                    channelId: null == (w = j.A.getVoiceStateForUser(e.id)) ? void 0 : w.channelId,
                    currentUser: i,
                    isActivitiesEnabledForCurrentPlatform: t,
                    ChannelStore: N.A,
                    VoiceStateStore: j.A,
                    PermissionStore: D.A,
                    GuildStore: P.A
                }) !== c.Gy.CAN_JOIN) continue
        }
        if (!b.IS(r) || null == d || m.has(d.id)) continue;
        let f = null != r ? eo(r) : null;
        (null == f || f.id !== d.id) && (r = null);
        let O = [];
        O = null != r && null != r.party && null != r.party.id ? Array.from(null != (x = R.A.getParty(r.party.id)) ? x : []).reduce((e, t) => {
            let n = M.default.getUser(t);
            return null != n && e.push(n), e
        }, []) : s.filter(e => {
            let t = en(e.id),
                n = null != t ? eo(t) : null;
            return null != n && n.id === d.id
        }), (O = a().orderBy(O, [ed], ["desc"])).length !== s.length && (p = !0), m.add(d.id), h.push({
            game: d,
            activity: r,
            activityUser: e,
            startedPlayingTime: null != (S = null == r || null == (T = r.timestamps) ? void 0 : T.start) ? S : null == r ? void 0 : r.created_at,
            playingMembers: O
        })
    }
    let U = 1 === f.length,
        G = [],
        V = new Set,
        F = new Set;
    for (let e of s) {
        let t = el(e.id),
            n = N.A.getChannel(t),
            i = null != n ? n.getGuildId() : null,
            o = P.A.getGuild(i);
        if (F.has(i) && V.has(t) || null == n || null == o || n.id === o.afkChannelId) null == n && (r = null, U = !0);
        else {
            let e = j.A.getVoiceStatesForChannel(n.id),
                l = (0, v.Y1)("NowPlayingViewStore - voiceMembers"),
                c = ed;
            null != l && (c = e => {
                var t, n;
                let r = O.A.getUserAffinity(e.id);
                return "vc_probability" === l ? null != (t = null == r ? void 0 : r.vcProbability) ? t : 0 : null != (n = null == r ? void 0 : r.communicationProbability) ? n : 0
            });
            let u = a()(e).map(e => {
                let {
                    userId: t
                } = e;
                return M.default.getUser(t)
            }).filter(k.Vq).orderBy([c], ["desc"]).value();
            u.filter(e => !d.includes(e.id)).forEach(e => s.push(e)), U ? F.has(i) || (r = null) : (r = o, U = !0), F.add(i), V.add(t), G.push({
                channel: n,
                guild: o,
                members: u,
                voiceStates: e
            })
        }
    }
    return {
        id: n,
        voiceChannels: G,
        isSpotifyActivity: g,
        priorityMembers: f.map(e => ({
            user: e,
            status: L.A.getStatus(e.id)
        })),
        partiedMembers: s,
        showPlayingMembers: p,
        guildContext: r,
        currentActivities: eu(h, e => {
            var t;
            return null != (t = e.startedPlayingTime) ? t : 0
        }).value(),
        applicationStreams: E
    }
}

function ep(e) {
    let t = et(),
        n = ef.bind(null, t);
    return a()(e).mapValues(n)
}

function e_(e) {
    let t = e => e.priorityMembers.map(e => e.user.username.toLowerCase()).join(" "),
        n = e => e.currentActivities.length > 0,
        r = e => e.voiceChannels.length > 0,
        i = e => e.applicationStreams.length > 0,
        a = e => e.partiedMembers.length > 1,
        o = e => e.isSpotifyActivity;
    return e.values().orderBy([eh, a, i, r, n, o, t], ["asc", "desc", "desc", "desc", "desc", "asc", "asc"]).value()
}

function eh(e) {
    return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.some(e => {
        let {
            voiceStates: t
        } = e;
        return Object.values(t).some(e => !1 === e.discoverable)
    })
}

function em(e) {
    return 0 !== e.voiceChannels.length && e.voiceChannels.length > 0 && e.voiceChannels.every(e => {
        let {
            voiceStates: t
        } = e;
        return Object.values(t).every(e => !1 === e.discoverable)
    })
}

function eg(e) {
    return e.partiedMembers.some(e => x.A.isBlockedOrIgnored(e.id))
}

function eE(e) {
    return e.filter(e => {
        let t = eg(e),
            n = em(e);
        return (e.voiceChannels.length >= 1 || e.currentActivities.length > 0 || e.applicationStreams.length > 0) && !t && !n
    })
}

function ey(e) {
    return e.map(e => ({
        type: U.ZzC.USER,
        party: e
    }))
}

function eb() {
    if ($.size > 0) {
        let e = Array.from($);
        h.Ay.fetchApplications(e), e.forEach(e => ee.add(e)), $.clear()
    }
}

function eO() {
    return z && E.A.isConnected()
}

function ev() {
    if (!eO()) return !1;
    $.clear(), Q = ey(Z = eE(e_(ep(ec(Array.from(et()).reduce((e, t) => {
        let n = M.default.getUser(t);
        return null == n || n.bot || e.push(n), e
    }, [])))))), eb(), q = !0
}
let eA = a().throttle(() => {
    ev(), ew.emitChange()
}, K);

function eI() {
    return !!eO() && (eA(), !1)
}

function eS() {
    z = !1, Z = [], Q = [], $.clear()
}

function eT() {
    z = !0, eA()
}

function eC() {
    z = !1
}
class eN extends(r = o.Ay.Store) {
    initialize() {
        this.syncWith([M.default, m.A, L.A, R.A, j.A, C.A, x.A, w.A, O.A], eI), this.waitFor(m.A, C.A, N.A, w.A, R.A, E.A, P.A, D.A, L.A, x.A, O.A, M.default, j.A)
    }
    get currentActivityParties() {
        return Z
    }
    get nowPlayingCards() {
        return Q
    }
    get isMounted() {
        return z
    }
    get loaded() {
        return q
    }
}
G(eN, "displayName", "NowPlayingViewStore");
let ew = new eN(s.h, {
        LOGOUT: eS,
        NOW_PLAYING_MOUNTED: eT,
        NOW_PLAYING_UNMOUNTED: eC
    }),
    eR = ew