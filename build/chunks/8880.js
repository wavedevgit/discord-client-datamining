/** chunk id: 8880 params = (module,exports,require) **/
i.d(e, {
    A: () => d
});
var n = i(311907),
    a = i(73153);
let l = {
        speechRate: 1,
        currentMessage: null
    },
    s = l;
class r extends n.Ay.DeviceSettingsStore {
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
            currentMessage: i
        } = s;
        return null !== i && i.channelId === t && i.messageId === e
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
let d = new r(a.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(t) {
        let {
            messageId: e,
            channelId: i
        } = t;
        s = {
            ...s,
            currentMessage: {
                messageId: e,
                channelId: i
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