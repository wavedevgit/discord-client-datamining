/** chunk id: 8880 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(311907),
    r = n(73153);
let l = {
        speechRate: 1,
        currentMessage: null
    },
    s = l;
class a extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(t) {
        s = {
            ...l,
            ...t ?? null
        }
    }
    isSpeakingMessage(t, e) {
        let {
            currentMessage: n
        } = s;
        return null !== n && n.channelId === t && n.messageId === e
    }
    get currentMessage() {
        return s.currentMessage
    }
    get speechRate() {
        return s.speechRate
    }
    getUserAgnosticState() {
        return s
    }
}
let o = new a(r.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(t) {
        let {
            messageId: e,
            channelId: n
        } = t;
        s = {
            ...s,
            currentMessage: {
                messageId: e,
                channelId: n
            }
        }
    },
    STOP_SPEAKING: function() {
        s = {
            ...s,
            currentMessage: null
        }
    },
    SET_TTS_SPEECH_RATE: function(t) {
        s = {
            ...s,
            speechRate: t.speechRate
        }
    }
})