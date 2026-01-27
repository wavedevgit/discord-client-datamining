/** Chunk was on web.js **/
/** chunk id: 601900, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    id: () => f,
    jY: () => d
});
var r = n(205693),
    i = n(652896),
    a = n(430452),
    o = n(383501),
    s = n(309010),
    l = n(162605);

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

function d() {
    var e;
    let t = s.A.getVoiceChannelId();
    return u({
        channelId: null != t ? t : void 0,
        mediaSessionId: null != (e = o.A.getMediaSessionId()) ? e : void 0,
        rtcConnectionId: o.A.getRTCConnectionId(),
        mediaContext: r.x.DEFAULT
    }, p())
}

function f(e) {
    var t;
    let {
        channelId: n,
        ownerId: a
    } = (0, i.Iy)(e), o = l.A.getRTCConnection(e);
    return u({
        channelId: n,
        mediaSessionId: null != (t = null == o ? void 0 : o.getMediaSessionId()) ? t : void 0,
        rtcConnectionId: null == o ? void 0 : o.getRTCConnectionId(),
        mediaContext: r.x.STREAM,
        streamKey: e,
        userId: a
    }, p())
}

function p() {
    var e, t, n;
    return {
        videoDeviceName: null == (e = a.A.getVideoDevices()[a.A.getVideoDeviceId()]) ? void 0 : e.name,
        audioInputDeviceName: null == (t = a.A.getInputDevices()[a.A.getInputDeviceId()]) ? void 0 : t.name,
        audioOutputDeviceName: null == (n = a.A.getOutputDevices()[a.A.getOutputDeviceId()]) ? void 0 : n.name
    }
}