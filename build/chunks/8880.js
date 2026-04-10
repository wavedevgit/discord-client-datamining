/** chunk id: 8880 params = (module,exports,require) **/
i.d(t, {
    A: () => c
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
    initialize(e) {
        s = {
            ...l,
            ...e ?? null
        }
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: i
        } = s;
        return null !== i && i.channelId === e && i.messageId === t
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
let c = new r(a.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: i
        } = e;
        s = {
            ...s,
            currentMessage: {
                messageId: t,
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
    SET_TTS_SPEECH_RATE: function(e) {
        s = {
            ...s,
            speechRate: e.speechRate
        }
    }
})