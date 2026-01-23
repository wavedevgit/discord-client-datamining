/** Chunk was on web.js **/
/** chunk id: 309010, original params: e,t,n (module,exports,require) **/
"use strict";
let r, i, a, s, o, l, c;
n.d(t, {
    A: () => eo,
    c: () => Y
}), n(896048);
var u, d = n(735438),
    f = n.n(d),
    p = n(136722),
    _ = n(311907),
    h = n(506774),
    m = n(73153),
    g = n(976860),
    E = n(95701),
    y = n(403362),
    b = n(961350),
    O = n(734057),
    v = n(808728),
    A = n(71393),
    I = n(430452),
    S = n(576705),
    T = n(967198),
    C = n(652215),
    N = n(746080);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function R(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            w(e, t, n[t])
        })
    }
    return e
}

function P(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function D(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : P(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let x = "SelectedChannelStore",
    L = 3e5,
    j = 6e4,
    M = {},
    k = {},
    U = {},
    G = new Set;

function V(e) {
    return String(e)
}

function F() {
    __OVERLAY__ || h.w.set(x, {
        selectedChannelId: a,
        selectedVoiceChannelId: o,
        lastChannelFollowingDestination: s,
        lastConnectedTime: l,
        selectedChannelIds: M,
        mostRecentSelectedTextChannelIds: U,
        knownThreadIds: f()(M).values().concat(f().values(U)).filter(y.Vq).uniq().filter(e => {
            let t = O.A.getBasicChannel(e);
            return G.has(e) || null != t && E.Le.has(t.type)
        }).value()
    })
}

function B(e) {
    if (null != e) {
        let t = v.Ay.getDefaultChannel(e);
        if (null != t) return t.id
    }
}

function H(e, t) {
    if (null == e || null == t || U[e] === t) return !1;
    let n = O.A.getChannel(t),
        r = null != n && (0, E.ke)(n.type),
        i = (null == n ? void 0 : n.getGuildId()) === e;
    return !!r && !!i && (U[e] = t, !0)
}

function Y(e) {
    let t = O.A.getMutableBasicGuildChannelsForGuild(e),
        n = f().find(t, e => e.type === C.rbe.GUILD_VOICE);
    return null == n ? void 0 : n.id
}

function W() {
    let e = !1,
        t = A.A.getGuildsArray();
    return f().each(M, (t, n) => {
        null != t && (O.A.hasChannel(t) || t === a || G.has(t) || (0, N.mP)(t)) || (delete M[n], delete k[n], e = !0)
    }), f().each(U, (t, n) => {
        null != t && (O.A.hasChannel(t) || G.has(t)) || (delete U[n], e = !0)
    }), t.forEach(e => {
        let t = M[e.id];
        null == U[e.id] && H(e.id, t)
    }), null != l && Date.now() - l >= L && (o = null, e = !0), e
}

function K(e) {
    if (r = e.sessionId, null != o) {
        let e = O.A.getChannel(o);
        null != e && S.A.can(p.kg(C.xBc.VIEW_CHANNEL, C.xBc.CONNECT), e) || (o = null)
    }
    W() && F()
}

function z(e) {
    r = e.sessionId, o = e.selectedVoiceChannelId, M = {}, k = {}, a = e.selectedChannelId, M[e.selectedGuildId] = e.selectedChannelId, H(e.selectedGuildId, a), W()
}

function q() {
    r = null
}

function Z(e) {
    let {
        guildId: t,
        channelId: n
    } = e;
    if (void 0 === t) return !1;
    null == n && (n = B(t)), null != a && n !== a && (i = a), a = n, H(t, n), M[V(t)] !== n && (k[V(t)] = M[V(t)], M[V(t)] = a), F()
}

function X(e) {
    let {
        channelId: t
    } = e;
    if (null == t) {
        let e = O.A.getChannel(o),
            t = null == e ? void 0 : e.guild_id;
        null != t && t !== T.A.getGuildId() && M[t] === o && (M[t] = B(t))
    }
    o = t, F()
}

function Q(e, t, n) {
    let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
    if (G.delete(e), null == t) {
        let n = T.A.getGuildId();
        M[V(n)] === e && (t = n)
    }
    let i = null != A.A.getGuild(t) ? t : null,
        a = !1;
    o === e && (o = null, a = !0), M[V(i)] === e && (M[V(i)] = r && null != n ? n : B(V(i)), T.A.getGuildId() === i && (0, g.bG)(C.BVt.CHANNEL(t, M[V(i)])), a = !0), null != i && U[i] === e && (delete U[i], a = !0), a && F()
}

function J(e) {
    let {
        type: t,
        channel: n
    } = e;
    Q(n.id, n.guild_id, n.parent_id, "THREAD_DELETE" === t)
}

function $(e) {
    let {
        channels: t
    } = e;
    for (let e of t)
        if (e.isScheduledForDeletion()) {
            let t = E.Le.has(e.type);
            Q(e.id, e.guild_id, e.parent_id, t)
        }
}

function ee(e) {
    let {
        guild: t
    } = e;
    if (null == M[t.id]) {
        let e = B(t.id);
        M[t.id] = e, H(t.id, e), F()
    }
}

function et(e) {
    let {
        guild: {
            id: t,
            unavailable: n
        }
    } = e;
    if (o === M[t] && (o = null), n) return !1;
    delete U[t], delete M[t], F()
}

function en(e) {
    let {
        voiceStates: t
    } = e;
    return t.reduce((e, t) => {
        var n, i, a;
        if (t.sessionId === r) {
            clearInterval(c);
            let e = null == (n = O.A.getChannel(o)) ? void 0 : n.getGuildId();
            t.guildId !== e && null == t.channelId || (o = t.channelId), l = Date.now(), null != o && (c = setInterval(() => {
                l = Date.now(), F()
            }, j)), F()
        } else {
            if (t.userId !== b.default.getId()) return e;
            clearInterval(c), c = void 0, l = 0;
            let n = null == (i = O.A.getChannel(o)) ? void 0 : i.getGuildId(),
                r = null == (a = O.A.getChannel(t.channelId)) ? void 0 : a.getGuildId();
            (null != n && r === n || o === t.channelId) && (o = null), F()
        }
        return !0
    }, !1)
}

function er(e) {
    let {
        channelId: t,
        guildId: n
    } = e;
    (null == s || t !== s.channelId) && (s = {
        channelId: t,
        guildId: n
    }, F())
}

function ei() {
    M = {}, a = null, i = void 0, U = {}, s = {}, o = null, h.w.remove(x)
}

function ea(e) {
    let {
        channel: t
    } = e;
    switch (t.type) {
        case C.rbe.GUILD_ANNOUNCEMENT:
        case C.rbe.GUILD_TEXT:
            let n = t.guild_id;
            if (null != n && null == U[n] && (U[n] = t.id), null != n && null == M[n]) return M[n] = B(n), !0
    }
    return !1
}
class es extends(u = _.Ay.Store) {
    initialize() {
        if (!__OVERLAY__) {
            var e, t;
            let n = null != (e = h.w.get(x)) ? e : {
                selectedChannelId: a,
                selectedVoiceChannelId: o,
                lastChannelFollowingDestination: s,
                lastConnectedTime: l,
                selectedChannelIds: M,
                mostRecentSelectedTextChannelIds: U
            };
            null != n.knownThreadIds && (G = new Set(n.knownThreadIds)), o = n.selectedVoiceChannelId, s = n.lastChannelFollowingDestination, l = n.lastConnectedTime, U = null != (t = n.mostRecentSelectedTextChannelIds) ? t : {}, null != n.selectedChannelIds && (M = D(R({}, n.selectedChannelIds), {
                null: null
            }))
        }
        this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(b.default, O.A, v.Ay, A.A, I.A, S.A, T.A)
    }
    getChannelId(e) {
        var t, n;
        let r = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
            i = V(e === C.ME ? null : null != (t = null != e ? e : T.A.getGuildId()) ? t : null);
        return r ? null != (n = M[i]) ? n : B(i) : M[i]
    }
    getVoiceChannelId() {
        return I.A.isSupported() ? o : null
    }
    getMostRecentSelectedTextChannelId(e) {
        var t;
        return null == e ? null : null != (t = U[e]) ? t : null
    }
    getCurrentlySelectedChannelId(e) {
        return null != e ? M[e] : a
    }
    getLastSelectedChannelId(e) {
        return null != e ? k[e] : i
    }
    getLastSelectedChannels(e) {
        return k[e]
    }
    getLastChannelFollowingDestination() {
        return s
    }
}
w(es, "displayName", "SelectedChannelStore");
let eo = new es(m.h, {
    CONNECTION_OPEN: K,
    OVERLAY_INITIALIZE: z,
    CONNECTION_CLOSED: q,
    CHANNEL_SELECT: Z,
    CHANNEL_CREATE: ea,
    CHANNEL_DELETE: J,
    CHANNEL_UPDATES: $,
    THREAD_DELETE: J,
    GUILD_CREATE: ee,
    GUILD_DELETE: et,
    VOICE_CHANNEL_SELECT: X,
    VOICE_STATE_UPDATES: en,
    CHANNEL_FOLLOWER_CREATED: er,
    LOGOUT: ei
})