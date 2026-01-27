/** Chunk was on web.js **/
/** chunk id: 44718, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    t: () => _
});
var r = n(624694),
    i = n(430452),
    a = n(383501),
    o = n(927813),
    s = n(487329),
    l = n(601900);

function c(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function u(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            c(e, t, n[t])
        })
    }
    return e
}
let d = 30,
    f = 10 * o.A.Millis.SECOND,
    p = 30,
    _ = {
        getActiveErrors: () => {
            var e, t, n, o, c, _;
            if ((null != (e = null == (n = a.A.getRTCConnection()) ? void 0 : n.getDurationSeconds()) ? e : 0) < d || performance.now() - i.A.getLastAudioInputDeviceChangeTimestamp() < f) return;
            let h = null != (t = null == (c = r.A.getConnectionStats(null == (_ = a.A.getRTCConnection()) ? void 0 : _.getMediaEngineConnectionId())) || null == (o = c.stats.rtp.outbound.find(e => "audio" === e.type)) ? void 0 : o.sampleRateMismatchPercent) ? t : 0;
            if (Math.abs(h) > p) return [u({
                type: s.iy.AUDIO_CAPTURE_SAMPLE_RATE_MISMATCH,
                audioCaptureSampleRateMismatchPercent: h
            }, (0, l.jY)())]
        },
        makeErrorContextKey: e => "".concat(e.mediaSessionId, ":").concat(e.audioInputDeviceName)
    }