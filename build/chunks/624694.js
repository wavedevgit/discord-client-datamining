/** Chunk was on web.js **/
/** chunk id: 624694, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
}), n(896048), n(321073);
var r, i = n(311907),
    a = n(73153),
    o = n(652896),
    s = n(961350),
    l = n(162605);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}
let u = 30,
    d = 15,
    f = {},
    p = {},
    _ = {};

function h(e) {
    return "packetsSent" in e
}

function m(e, t, n, r, i) {
    var a, o, s, l, c, u, d, f, p, _, m, g, E, y, b, O, v, A;
    let I = r.find(e => "video" === e.type);
    if (null == n && (n = {
            packetsSentOrReceived: 0,
            packetsLost: 0,
            packetLossRate: 0,
            frameRate: 0,
            resolution: 0,
            entropy: 0,
            numDatapoints: 0,
            frameRateAggregated: 0,
            resolutionAggregated: 0,
            entropyAggregated: 0,
            minVersion: e
        }), null == I) return n;
    let S = h(I) ? null != (a = I.packetsSent) ? a : 0 : null != (o = I.packetsReceived) ? o : 0,
        T = h(I) ? null != (s = I.packetsLost) ? s : 0 : null != (l = I.packetsLost) ? l : 0,
        C = h(I) ? null != (c = I.frameRateEncode) ? c : 0 : null != (u = I.frameRateDecode) ? u : 0,
        N = null != (d = null == (p = I.resolution) ? void 0 : p.height) ? d : 0,
        w = h(I) && null != (f = I.videoEntropy) ? f : 0;
    n.numDatapoints += 1, n.frameRateAggregated += C, n.resolutionAggregated += N, n.entropyAggregated += w;
    let R = null == i ? void 0 : i.find(e => "video" === e.type);
    if (null != R && t >= n.minVersion) {
        n.numDatapoints -= 1;
        let e = h(R) ? null != (_ = R.packetsSent) ? _ : 0 : null != (m = R.packetsReceived) ? m : 0,
            t = h(R) ? null != (g = R.packetsLost) ? g : 0 : null != (E = R.packetsLost) ? E : 0,
            r = h(R) ? null != (y = R.frameRateEncode) ? y : 0 : null != (b = R.frameRateDecode) ? b : 0,
            i = h(R) && null != (O = R.videoEntropy) ? O : 0,
            a = null != (v = null == (A = R.resolution) ? void 0 : A.height) ? v : 0;
        n.frameRateAggregated -= r, n.resolutionAggregated -= a, n.entropyAggregated -= i, n.packetsSentOrReceived = S - e, n.packetsLost = T - t
    } else n.packetsSentOrReceived = S, n.packetsLost = T;
    return n.frameRate = n.frameRateAggregated / n.numDatapoints, n.resolution = n.resolutionAggregated / n.numDatapoints, n.entropy = n.entropyAggregated / n.numDatapoints, n.packetLossRate = n.packetsLost / (n.packetsSentOrReceived + n.packetsLost), n
}

function g(e, t, n, r) {
    var i, a;
    null == e[t] && (e[t] = {});
    let o = s.default.getId();
    for (let s of (e[t][o] = m(n.version, null != (i = null == r ? void 0 : r.version) ? i : 0, e[t][o], n.stats.rtp.outbound, null == r ? void 0 : r.stats.rtp.outbound), Object.keys(n.stats.rtp.inbound))) e[t][s] = m(n.version, null != (a = null == r ? void 0 : r.version) ? a : 0, e[t][s], n.stats.rtp.inbound[s], null == r ? void 0 : r.stats.rtp.inbound[s])
}

function E(e) {
    let {
        connectionStats: t
    } = e, n = {};
    for (let e of t) {
        var r;
        let t, {
            mediaEngineConnectionId: i
        } = e;
        0 !== i.length && (n[i] = e, i in f || (f[i] = []), f[i].push(e), f[i].length > u && (t = f[i].shift()), g(_, i, e, null != (r = A(i, d)) ? r : void 0), g(p, i, e, t))
    }
}

function y(e, t) {
    var n, r;
    (null == (n = p[e]) ? void 0 : n[t]) != null && delete p[e][t], (null == (r = _[e]) ? void 0 : r[t]) != null && delete _[e][t]
}

function b(e) {
    let {
        mediaEngineConnectionId: t
    } = e;
    null != t && (delete f[t], delete p[t], delete _[t])
}

function O(e) {
    let {
        userId: t,
        mediaEngineConnectionId: n
    } = e;
    if (null == n) return !1;
    y(n, t)
}

function v(e) {
    var t;
    let {
        streamKey: n,
        paused: r
    } = e;
    if (r) return !1;
    let i = null == (t = l.A.getRTCConnection(n)) ? void 0 : t.getMediaEngineConnectionId();
    if (null == i) return !1;
    y(i, (0, o.Iy)(n).ownerId)
}

function A(e, t) {
    if (null == e) return null;
    let n = f[e];
    return null == n || n.length <= t ? null : n[n.length - t - 1]
}
class I extends(r = i.Ay.Store) {
    initialize() {
        this.waitFor(s.default, l.A)
    }
    getConnectionStats(e) {
        return A(e, 0)
    }
    getLastConnectionStats(e) {
        return A(e, 1)
    }
    getStatsHistory(e) {
        var t;
        return null == e ? [] : null != (t = f[e]) ? t : []
    }
    getAccumulatedPerformanceStats(e, t, n) {
        var r, i;
        return null == e ? null : null != (r = null == (i = ("long" === n ? p : _)[e]) ? void 0 : i[t]) ? r : null
    }
}
c(I, "displayName", "MediaEngineStatsStore");
let S = new I(a.h, {
    MEDIA_ENGINE_CONNECTION_STATS: E,
    MEDIA_ENGINE_CONNECTION_STATS_HISTORY_RESET: b,
    STREAM_UPDATE: v,
    RTC_CONNECTION_VIDEO: O
})