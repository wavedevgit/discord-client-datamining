/** Chunk was on web.js **/
/** chunk id: 677698, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    z: () => _
});
var r = n(961350),
    i = n(430452),
    a = n(383501),
    o = n(927813),
    s = n(487329),
    l = n(601900),
    c = n(548370);

function u(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function d(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            u(e, t, n[t])
        })
    }
    return e
}
let f = 10,
    p = 20 * o.A.Millis.SECOND,
    _ = {
        getActiveErrors: () => {
            let e = a.A.getRTCConnection();
            if (null == e) return null;
            let t = e.getMediaEngineConnectionId();
            if (null == t || !i.A.isVideoEnabled()) return null;
            let n = a.A.getLastNonZeroRemoteVideoSinkWantsTime();
            if (null != n && performance.now() - n < p || !e.hasActiveRemoteWants()) return null;
            let o = (0, c.xA)(t, r.default.getId());
            return null == o ? null : o.short.frameRate < f || o.long.frameRate < f ? [d({
                type: s.iy.CAMERA_SEND_LOW_FPS,
                userId: r.default.getId()
            }, (0, l.jY)())] : void 0
        },
        makeErrorContextKey: e => "".concat(e.mediaSessionId)
    }