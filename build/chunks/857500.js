/** Chunk was on web.js **/
/** chunk id: 857500, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => E
}), n(896048);
var r = n(73153),
    i = n(439372),
    a = n(961350),
    o = n(131319),
    s = n(734057),
    l = n(309010),
    c = n(117549),
    u = n(652215);

function d(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function f() {
    let e = l.A.getVoiceChannelId(),
        t = o.A.bitrate;
    if (null == e) return;
    let n = s.A.getChannel(e);
    null == n || t !== n.bitrate && r.h.dispatch({
        type: "SET_CHANNEL_BITRATE",
        bitrate: n.bitrate
    })
}

function p() {
    var e;
    let t = l.A.getVoiceChannelId(),
        n = c.A.mode;
    if (null == t) return;
    let i = s.A.getChannel(t);
    if (null == i) return;
    let a = null != (e = i.videoQualityMode) ? e : u.K3c.AUTO;
    n !== a && r.h.dispatch({
        type: "SET_CHANNEL_VIDEO_QUALITY_MODE",
        mode: a
    })
}

function _() {
    f(), p()
}

function h(e) {
    let {
        channels: t
    } = e;
    for (let e of t) l.A.getVoiceChannelId() === e.id && _()
}

function m(e) {
    let {
        voiceStates: t
    } = e;
    t.forEach(e => {
        a.default.getSessionId() === e.sessionId && _()
    })
}
class g extends i.A {
    constructor(...e) {
        super(...e), d(this, "actions", {
            CHANNEL_UPDATES: h,
            VOICE_STATE_UPDATES: m
        })
    }
}
let E = new g