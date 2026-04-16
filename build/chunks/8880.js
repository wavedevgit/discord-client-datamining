/** chunk id: 8880 params = (module,exports,require) **/
n.d(t, {
    A: () => c
});
var a = n(311907),
    i = n(73153);
let l = {
        speechRate: 1,
        currentMessage: null
    },
    s = l;
class r extends a.Ay.DeviceSettingsStore {
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
            currentMessage: n
        } = s;
        return null !== n && n.channelId === e && n.messageId === t
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
let c = new r(i.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        s = {
            ...s,
            currentMessage: {
                messageId: t,
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
    SET_TTS_SPEECH_RATE: function(e) {
        s = {
            ...s,
            speechRate: e.speechRate
        }
    }
})