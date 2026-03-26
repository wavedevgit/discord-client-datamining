/** chunk id: 8880 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(311907),
    a = n(73153);
let s = {
        speechRate: 1,
        currentMessage: null
    },
    r = s;
class l extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(t) {
        r = {
            ...s,
            ...t ?? null
        }
    }
    isSpeakingMessage(t, e) {
        let {
            currentMessage: n
        } = r;
        return null !== n && n.channelId === t && n.messageId === e
    }
    get currentMessage() {
        return r.currentMessage
    }
    get speechRate() {
        return r.speechRate
    }
    getUserAgnosticState() {
        return r
    }
}
let o = new l(a.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(t) {
        let {
            messageId: e,
            channelId: n
        } = t;
        r = {
            ...r,
            currentMessage: {
                messageId: e,
                channelId: n
            }
        }
    },
    STOP_SPEAKING: function() {
        r = {
            ...r,
            currentMessage: null
        }
    },
    SET_TTS_SPEECH_RATE: function(t) {
        r = {
            ...r,
            speechRate: t.speechRate
        }
    }
})