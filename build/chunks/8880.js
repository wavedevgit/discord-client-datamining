/** chunk id: 8880 params = (module,exports,require) **/
n.d(e, {
    A: () => o
});
var i = n(311907),
    r = n(73153);
let a = {
        speechRate: 1,
        currentMessage: null
    },
    l = a;
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(t) {
        l = {
            ...a,
            ...t ?? null
        }
    }
    isSpeakingMessage(t, e) {
        let {
            currentMessage: n
        } = l;
        return null !== n && n.channelId === t && n.messageId === e
    }
    get currentMessage() {
        return l.currentMessage
    }
    get speechRate() {
        return l.speechRate
    }
    getUserAgnosticState() {
        return l
    }
}
let o = new s(r.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(t) {
        let {
            messageId: e,
            channelId: n
        } = t;
        l = {
            ...l,
            currentMessage: {
                messageId: e,
                channelId: n
            }
        }
    },
    STOP_SPEAKING: function() {
        l = {
            ...l,
            currentMessage: null
        }
    },
    SET_TTS_SPEECH_RATE: function(t) {
        l = {
            ...l,
            speechRate: t.speechRate
        }
    }
})