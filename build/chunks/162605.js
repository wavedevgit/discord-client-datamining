/** chunk id: 162605, original params: e,t,n (module,exports,require) **/
"use strict";
let r;
n.d(t, {
    A: () => J
}), n(896048);
var i, a = n(284009),
    o = n.n(a),
    s = n(735438),
    l = n.n(s),
    c = n(311907),
    u = n(205693),
    d = n(73153),
    f = n(15285),
    p = n(13433),
    _ = n(652896),
    h = n(834757),
    m = n(254057),
    g = n(723702),
    E = n(961350),
    y = n(430452),
    b = n(290863),
    O = n(383501),
    v = n(652215),
    A = n(502075);

function I(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let S = {},
    T = {},
    C = {},
    N = {},
    w = {},
    R = {},
    P = v.SO9.THEATRE,
    D = {};

function L(e, t, n, i) {
    return o()(null != r, "Creating RTCConnection without session."), new p.A({
        sessionId: r,
        streamKey: e,
        serverId: t,
        channelId: n,
        initialLayout: P,
        analyticsContext: i,
        parentMediaSessionId: O.A.getMediaSessionId()
    })
}

function x() {
    l().forEach(D, (e, t) => {
        e.destroy(e.isOwner ? "sender-disconnect" : "receiver-disconnect"), delete D[t], delete R[t]
    })
}

function M(e) {
    r = e.sessionId, x()
}

function j() {
    r = null, x()
}

function k(e) {
    var t, n;
    let {
        streamType: r,
        guildId: i,
        channelId: a,
        appContext: o,
        pid: s,
        sourceId: c,
        sourcePid: u,
        nativePickerStyleUsed: d,
        goLiveModalDurationMs: p,
        analyticsLocations: h
    } = e, m = (0, _._z)({
        streamType: r,
        guildId: i,
        channelId: a,
        ownerId: E.default.getId()
    });
    if (S[m] = {
            appContext: o,
            analyticsLocations: h
        }, l().forEach(D, e => {
            let {
                analyticsContext: t,
                isOwner: n
            } = e;
            t.setActionContext(o), t.setNativePickerStyleUsed(d), n && t.trackStart()
        }), null == s && (s = u), N[m] = c, C[m] = s, null != s) {
        let e = f.Ay.getGameForPID(s);
        null != e && (T[m] = {
            name: e.name,
            id: e.id,
            exe: e.exeName,
            distributor: e.distributor,
            sku: e.sku,
            gameMetadata: e.gameMetadata
        }), null == (t = D[m]) || t.analyticsContext.updateStreamApplication(T[m])
    } else null == (n = D[m]) || n.analyticsContext.updateStreamApplication(null);
    null != p ? w[m] = p : delete w[m]
}

function U(e) {
    let {
        appContext: t,
        streamKey: n
    } = e;
    S[n] = {
        appContext: t,
        analyticsLocations: void 0
    }, l().forEach(D, e => {
        let {
            analyticsContext: n,
            isOwner: r
        } = e;
        n.setActionContext(t), r && n.trackEnd()
    }), N[n] = null, C[n] = null, delete w[n]
}

function G(e) {
    let {
        streamKey: t,
        rtcServerId: n,
        rtcChannelId: r,
        region: i,
        viewerIds: a
    } = e, o = D[t], s = (0, _.Iy)(t);
    if (null == o && null != n) {
        var l, c;
        null == C[t] && (T[t] = null), null == T[t] && null == N[t] && (T[t] = (0, h.Ee)(s, b.A));
        let e = new p.t({
            streamRegion: i,
            streamApplication: T[t],
            streamSourceType: Q(N[t]),
            actionContext: null == (l = S[t]) ? void 0 : l.appContext,
            numViewers: null != a ? a.length : 0,
            goLiveModalDurationMs: w[t],
            analyticsLocations: null == (c = S[t]) ? void 0 : c.analyticsLocations
        });
        o = L(t, n, r, e), D[t] = o
    }
    delete R[t], d.h.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: o.getMediaEngineConnectionId()
    })
}

function V(e) {
    let t = D[e.streamKey];
    if (null == t) return !1;
    t.connect(e.endpoint, e.token)
}

function F(e) {
    let {
        connectionStats: t
    } = e;
    l().forEach(D, (e, n) => {
        e.updateStats(t)
    })
}

function B(e) {
    let {
        streamKey: t,
        viewerIds: n,
        paused: r
    } = e, i = D[t];
    if (null == i) return !1;
    null != n && i.analyticsContext.trackViewerCount(n.length), i.streamUpdate(r)
}

function H(e) {
    let {
        streamKey: t
    } = e, n = D[t];
    if (null == n) return !1;
    d.h.dispatch({
        type: "MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET",
        mediaEngineConnectionId: n.getMediaEngineConnectionId()
    }), n.destroy("stream-end"), delete D[t]
}

function Y(e) {
    let {
        layout: t
    } = e;
    P = t, Object.values(D).forEach(e => e.layoutChange(t))
}

function W() {
    return !0
}

function K(e) {
    let {
        context: t,
        wants: n,
        userId: r,
        guildId: i,
        channelId: a
    } = e, o = (0, _._z)({
        streamType: null == i ? A.U4.CALL : A.U4.GUILD,
        guildId: i,
        channelId: a,
        ownerId: r
    });
    if (t !== u.x.STREAM || null == D[o] || !Object.entries(n).some(e => {
            let [t, n] = e;
            return "any" !== t && 0 !== n
        })) return !1;
    R[o] = performance.now()
}

function z(e) {
    return l().some(D, t => t === e.connection)
}

function q(e) {
    let {
        userId: t,
        context: n,
        quality: r
    } = e;
    l().forEach(D, e => {
        e.setSimulcastDebugOverride(t, n, r)
    })
}

function Z(e) {
    let {
        streamId: t,
        dimensions: n,
        zoom: r
    } = e;
    l().forEach(D, e => {
        null == e || e.setVideoSize(t, n, r)
    })
}

function Q(e) {
    var t, n, r;
    if (null == e) return "unknown";
    if (g.isPlatformEmbedded || (null == (t = platform) ? void 0 : t.name) === "Chrome") {
        if (e.startsWith("web-contents-media-stream:")) return "tab";
        else if (e.startsWith("window:")) return "window";
        else if (e.startsWith("screen:")) return "screen"
    } else if ((null == (n = platform) ? void 0 : n.name) === "Firefox")
        if ("" !== e) return "window";
        else return "screen";
    else if ((null == (r = platform) ? void 0 : r.name) === "Safari") return "window";
    return "unknown"
}
class X extends(i = c.Ay.Store) {
    initialize() {
        this.waitFor(E.default, y.A, O.A, f.Ay)
    }
    getRTCConnections() {
        return D
    }
    getAllActiveStreamKeys() {
        return Object.keys(D)
    }
    getRTCConnection(e) {
        return D[e]
    }
    getQuality(e) {
        var t, n;
        return (0, m.A)(y.A) && null != e && null != (t = null == (n = D[e]) ? void 0 : n.quality) ? t : v.bFR.UNKNOWN
    }
    getMediaSessionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getMediaSessionId() : null
    }
    getRtcConnectionId(e) {
        if (null == e) return null;
        let t = D[e];
        if (null != t) return null != t ? t.getRTCConnectionId() : null
    }
    getVideoStats(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getVideoStats() : null
    }
    getHostname(e) {
        if (null == e) return "";
        let t = D[e];
        return null != t && null != t.hostname ? t.hostname : ""
    }
    getRegion(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getRegion() : null
    }
    getMaxViewers(e) {
        if (null == e) return null;
        let t = D[e];
        return null != t ? t.getMaxViewers() : null
    }
    getStreamSourceId(e) {
        return N[e]
    }
    getLastNonZeroRemoteVideoSinkWantsTime(e) {
        return R[e]
    }
    getUserIds(e) {
        let t = D[e];
        return null == t ? void 0 : t.getUserIds()
    }
    isUserConnected(e, t) {
        let n = D[e];
        return null == n ? void 0 : n.getIsUserConnected(t)
    }
    getSecureFramesState(e) {
        let t = D[e];
        return null == t ? void 0 : t.getSecureFramesState()
    }
    getSecureFramesRosterMapEntry(e, t) {
        let n = D[e],
            r = null == n ? void 0 : n.getSecureFramesRosterMap();
        return null == r ? void 0 : r.get(t)
    }
}
I(X, "displayName", "StreamRTCConnectionStore");
let J = new X(d.h, !y.A.isSupported() || __OVERLAY__ ? {} : {
    CONNECTION_OPEN: M,
    CONNECTION_CLOSED: j,
    RTC_CONNECTION_STATE: W,
    RTC_CONNECTION_PING: W,
    RTC_CONNECTION_LOSS_RATE: W,
    RTC_CONNECTION_UPDATE_ID: z,
    RTC_CONNECTION_SECURE_FRAMES_UPDATE: W,
    RTC_CONNECTION_REMOTE_VIDEO_SINK_WANTS: K,
    STREAM_START: k,
    STREAM_STOP: U,
    STREAM_CREATE: G,
    STREAM_SERVER_UPDATE: V,
    STREAM_UPDATE: B,
    STREAM_DELETE: H,
    MEDIA_ENGINE_CONNECTION_STATS: F,
    STREAM_LAYOUT_UPDATE: Y,
    RTC_DEBUG_SET_SIMULCAST_OVERRIDE: q,
    VIDEO_SIZE_UPDATE: Z
})