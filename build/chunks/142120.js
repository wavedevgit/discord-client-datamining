/** Chunk was on web.js **/
/** chunk id: 142120, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => eb
});
var r, i = n(735438),
    a = n.n(i),
    o = n(311907),
    s = n(73153),
    l = n(956793),
    c = n(626584),
    u = n(652896),
    d = n(796774),
    f = n(617617),
    p = n(961350),
    _ = n(470710),
    h = n(734057),
    m = n(430452),
    g = n(383501),
    E = n(873985),
    y = n(309010),
    b = n(461213),
    O = n(162605),
    v = n(723702),
    A = n(175306),
    I = n(531013),
    S = n(33282),
    T = n(448515),
    C = n(652215),
    N = n(355097);

function w(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let R = window.DiscordNative;
I.sZ.dispatcher.getDispatchHandler = T.A;
let P = new c.A("ConnectionStore"),
    D = 100,
    L = 0,
    x = null,
    M = !0,
    j = null,
    k = null;

function U() {
    return I.sZ.isClosed() ? (P.verbose("Socket is reconnecting because of starting new session"), I.sZ.connect()) : (P.verbose("Socket is not reconnecting during a new session because it is not closed"), !1)
}

function G(e) {
    e.isSwitchingAccount && I.OV.handleAccountSwitch(), P.verbose("Closing socket because of logout"), I.sZ.close()
}

function F() {
    return P.verbose("session refresh dispatched", {
        isEstablished: I.sZ.isSessionEstablished()
    }), !!I.sZ.isSessionEstablished() && (I.sZ.close(), I.sZ.connect())
}
async function V(e) {
    L = Date.now(), x = e.sessionId, I.OV.handleConnectionOpen();
    let t = {},
        n = y.A.getVoiceChannelId();
    if (null != n) {
        var r, i, a, o, s, c, u, f;
        if ((null == (s = window) || null == (o = s.performance) || null == (a = o.getEntriesByType) || null == (i = a.call(o, "navigation")) || null == (r = i[0]) ? void 0 : r.type) !== "reload" && (null == (c = await (null == R || null == (f = R.processUtils) || null == (u = f.getLastCrash) ? void 0 : u.call(f))) ? void 0 : c.rendererCrashReason) == null && M) g.A.setLastSessionVoiceChannelId(null != n ? n : null), l.default.selectVoiceChannel(null);
        else {
            let e = h.A.getChannel(n);
            null != e && (t = {
                guildId: e.getGuildId(),
                channelId: n
            }, (0, d.CX)(n))
        }
    }
    I.Xo.update(t, !0), M = !1, k = null
}

function B() {
    P.verbose("connection closed dispatched"), L = Date.now()
}

function H() {
    k = null
}

function Y(e) {
    return e.resetSocket && (I.sZ.close(), I.sZ.dispatcher.clear(), I.sZ.connect()), !1
}

function W(e) {
    return I.Xo.update({
        guildId: e.guildId,
        channelId: e.channelId
    }), k = e.lockVoiceStateForResume && null != e.channelId ? e.channelId : null, (0, v.isIOS)() && j === C.g6G.BACKGROUND && (null == e.channelId ? I.sZ.close(!0) : I.sZ.isClosed() && (S.V(!1), I.sZ.connect())), !1
}

function K() {
    I.Xo.update()
}

function z(e) {
    var t;
    e.settings.type === N.oD.PRELOADED_USER_SETTINGS && (null == (t = e.settings.proto.clips) ? void 0 : t.allowVoiceRecording) != null && K()
}

function q(e) {
    let {
        voiceStates: t
    } = e;
    return t.reduce((e, t) => {
        if (p.default.getId() !== t.userId) return e;
        if (t.sessionId === x) {
            if (null != k) return P.verbose("Ignoring voice state for own session due to VSU lock on channel:", k), e;
            I.Xo.setState({
                guildId: t.guildId,
                channelId: t.channelId
            })
        } else {
            if (t.guildId !== I.Xo.guildId) return e;
            I.Xo.setState({
                guildId: null,
                channelId: null
            })
        }
        return !0
    }, !1)
}

function Z(e) {
    e.guild.id === I.Xo.guildId && I.Xo.setState({
        guildId: null,
        channelId: null
    })
}

function Q(e) {
    let {
        channelId: t
    } = e;
    if (t === I.Xo.channelId) {
        if (k === t) return !1;
        I.Xo.setState({
            guildId: null,
            channelId: null
        })
    }
}

function X(e) {
    let {
        channel: t
    } = e;
    t.id === I.Xo.channelId && I.Xo.setState({
        guildId: null,
        channelId: null
    })
}

function J(e) {
    if (e.state !== C.S7L.DISCONNECTED) return !1;
    e.willReconnect && (null != e.streamKey ? I.sZ.streamPing(e.streamKey) : I.sZ.voiceServerPing())
}

function $(e) {
    return (0, v.isIOS)() ? (p.default.isAuthenticated() && (j === C.g6G.INACTIVE && e.state === C.g6G.BACKGROUND && null == I.Xo.channelId ? I.sZ.close(!0) : j === C.g6G.BACKGROUND && e.state === C.g6G.ACTIVE && I.sZ.isClosed() && (S.V(!1), I.sZ.connect())), j = e.state) : e.state === C.g6G.ACTIVE && (S.V(!1), p.default.isAuthenticated() && I.sZ.resetBackoff("App state is active")), !1
}

function ee() {
    return I.Xo.update(), !1
}

function et() {
    return I.OV.update(), !1
}

function en(e) {
    return I.sZ.isSessionEstablished() && ("userIds" in e ? a()(e.userIds).chunk(D).forEach(t => {
        I.sZ.requestGuildMembers(e.guildIds, {
            userIds: t,
            presences: !!e.presences
        })
    }) : I.sZ.requestGuildMembers(e.guildIds, {
        query: e.query,
        limit: e.limit,
        presences: !!e.presences
    })), !1
}

function er(e) {
    let {
        guildId: t,
        query: n,
        continuationToken: r
    } = e;
    I.sZ.isSessionEstablished() && I.sZ.searchRecentMembers(t, {
        query: n,
        continuationToken: r
    })
}

function ei(e) {
    let {
        subscriptions: t
    } = e;
    return I.sZ.isSessionEstablished() && I.sZ.updateGuildSubscriptions(t), !1
}

function ea(e) {
    let {
        channelId: t
    } = e;
    return I.sZ.isSessionEstablished() && I.sZ.callConnect(t), !1
}

function eo(e) {
    let {
        channelIds: t
    } = e;
    return I.sZ.isSessionEstablished() && t.forEach(e => {
        I.sZ.callConnect(e)
    }), !1
}

function es(e) {
    let {
        sessionId: t,
        payload: n
    } = e;
    return I.sZ.isSessionEstablished() && I.sZ.remoteCommand(t, n), !1
}

function el(e) {
    I.sZ.isSessionEstablished() && I.sZ.streamDelete(e)
}

function ec() {
    let e = eu();
    O.A.getAllActiveStreamKeys().filter(t => t !== e).forEach(e => el(e))
}

function eu() {
    return O.A.getAllActiveStreamKeys().find(e => (0, u.Iy)(e).ownerId === p.default.getId())
}

function ed(e) {
    let {
        streamType: t,
        guildId: n,
        channelId: r
    } = e;
    if (I.sZ.isSessionEstablished()) {
        var i, a;
        let e = null != n ? null == (i = h.A.getChannel(r)) ? void 0 : i.rtcRegion : null == (a = _.A.getCall(r)) ? void 0 : a.region;
        I.sZ.streamCreate(t, n, r, null != e ? e : E.A.getPreferredRegion())
    }
    return !1
}

function ef(e) {
    let {
        streamKey: t,
        paused: n
    } = e;
    I.sZ.isSessionEstablished() && I.sZ.streamSetPaused(t, n)
}

function ep(e) {
    let {
        streamKey: t,
        allowMultiple: n
    } = e;
    return I.sZ.isSessionEstablished() && (n || ec(), I.sZ.streamWatch(t)), !1
}

function e_(e) {
    let {
        streamKey: t
    } = e;
    return el(t), K(), !1
}

function eh() {
    return I.sZ.expeditedHeartbeat(5e3, "user clicked on notification", !0), !1
}

function em(e) {
    let {
        guildId: t,
        channelId: n,
        threads: r
    } = e;
    I.sZ.requestForumUnreads(t, n, r)
}

function eg(e) {
    I.sZ.connectionState !== A.A.WILL_RECONNECT && I.sZ.resetSocketOnError(e.args)
}

function eE(e) {
    let {
        guildIds: t
    } = e;
    I.sZ.requestSoundboardSounds(t)
}
class ey extends(r = o.Ay.Store) {
    initialize() {
        this.waitFor(p.default, _.A, h.A, m.A, g.A, E.A, y.A, b.A, O.A, f.A), this.syncWith([m.A], ee), this.syncWith([b.A], et)
    }
    getSocket() {
        return I.sZ
    }
    isTryingToConnect() {
        return !I.sZ.isClosed()
    }
    isConnected() {
        return I.sZ.isSessionEstablished()
    }
    isConnectedOrOverlay() {
        return I.sZ.isSessionEstablished() || __OVERLAY__
    }
    lastTimeConnectedChanged() {
        return L
    }
}
w(ey, "displayName", "GatewayConnectionStore");
let eb = new ey(s.h, {
    START_SESSION: U,
    LOGIN_SUCCESS: F,
    LOGOUT: G,
    CLEAR_CACHES: Y,
    CONNECTION_OPEN: e => {
        V(e)
    },
    CONNECTION_RESUMED: H,
    CONNECTION_CLOSED: B,
    RTC_CONNECTION_STATE: J,
    VOICE_CHANNEL_SELECT: W,
    VOICE_STATE_UPDATES: q,
    GUILD_DELETE: Z,
    CHANNEL_DELETE: X,
    CALL_DELETE: Q,
    APP_STATE_UPDATE: $,
    GUILD_MEMBERS_REQUEST: en,
    GUILD_SEARCH_RECENT_MEMBERS: er,
    GUILD_SUBSCRIPTIONS_FLUSH: ei,
    CALL_CONNECT: ea,
    CALL_CONNECT_MULTIPLE: eo,
    STREAM_CREATE: K,
    STREAM_START: ed,
    STREAM_WATCH: ep,
    STREAM_STOP: e_,
    STREAM_SET_PAUSED: ef,
    PUSH_NOTIFICATION_CLICK: eh,
    REQUEST_FORUM_UNREADS: em,
    REQUEST_SOUNDBOARD_SOUNDS: eE,
    REMOTE_COMMAND: es,
    RESET_SOCKET: eg,
    CLIPS_SETTINGS_UPDATE: K,
    RUNNING_GAMES_CHANGE: K,
    USER_SETTINGS_PROTO_UPDATE: z
})