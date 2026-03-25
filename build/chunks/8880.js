/** chunk id: 8880 params = (module,exports,require) **/
i.d(t, {
    A: () => u
});
var n = i(311907),
    l = i(73153);
let s = {
        speechRate: 1,
        currentMessage: null
    },
    a = s;
class r extends n.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        a = {
            ...s,
            ...e ?? null
        }
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: i
        } = a;
        return null !== i && i.channelId === e && i.messageId === t
    }
    get currentMessage() {
        return a.currentMessage
    }
    get speechRate() {
        return a.speechRate
    }
    getUserAgnosticState() {
        return a
    }
}
let u = new r(l.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: i
        } = e;
        a = {
            ...a,
            currentMessage: {
                messageId: t,
                channelId: i
            }
        }
    },
    STOP_SPEAKING: function() {
        a = {
            ...a,
            currentMessage: null
        }
    },
    SET_TTS_SPEECH_RATE: function(e) {
        a = {
            ...a,
            speechRate: e.speechRate
        }
    }
})