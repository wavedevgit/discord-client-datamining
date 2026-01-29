/** Chunk was on 32502 **/
/** chunk id: 8880, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i, l = n(311907),
    s = n(73153);

function r(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function a(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), i.forEach(function(t) {
            r(e, t, n[t])
        })
    }
    return e
}

function o(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
        }
        return n
    })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let c = {
        speechRate: 1,
        currentMessage: null
    },
    d = c;
class u extends(i = l.Ay.DeviceSettingsStore) {
    initialize(e) {
        d = a({}, c, null != e ? e : null)
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: n
        } = d;
        return null !== n && n.channelId === e && n.messageId === t
    }
    get currentMessage() {
        return d.currentMessage
    }
    get speechRate() {
        return d.speechRate
    }
    getUserAgnosticState() {
        return d
    }
}
r(u, "displayName", "TTSStore"), r(u, "persistKey", "TTSStore"), r(u, "migrations", []);
let h = new u(s.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        d = o(a({}, d), {
            currentMessage: {
                messageId: t,
                channelId: n
            }
        })
    },
    STOP_SPEAKING: function() {
        d = o(a({}, d), {
            currentMessage: null
        })
    },
    SET_TTS_SPEECH_RATE: function(e) {
        d = o(a({}, d), {
            speechRate: e.speechRate
        })
    }
})