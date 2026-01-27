/** Chunk was on 92750 **/
/** chunk id: 8880, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => d
});
var s, r = n(311907),
    a = n(73153);

function i(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function l(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            s = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (s = s.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), s.forEach(function(t) {
            i(e, t, n[t])
        })
    }
    return e
}

function c(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var s = Object.getOwnPropertySymbols(e);
            n.push.apply(n, s)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let o = {
        speechRate: 1,
        currentMessage: null
    },
    u = o;
class p extends(s = r.Ay.DeviceSettingsStore) {
    initialize(e) {
        u = l({}, o, null != e ? e : null)
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: n
        } = u;
        return null !== n && n.channelId === e && n.messageId === t
    }
    get currentMessage() {
        return u.currentMessage
    }
    get speechRate() {
        return u.speechRate
    }
    getUserAgnosticState() {
        return u
    }
}
i(p, "displayName", "TTSStore"), i(p, "persistKey", "TTSStore"), i(p, "migrations", []);
let d = new p(a.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        u = c(l({}, u), {
            currentMessage: {
                messageId: t,
                channelId: n
            }
        })
    },
    STOP_SPEAKING: function() {
        u = c(l({}, u), {
            currentMessage: null
        })
    },
    SET_TTS_SPEECH_RATE: function(e) {
        u = c(l({}, u), {
            speechRate: e.speechRate
        })
    }
})