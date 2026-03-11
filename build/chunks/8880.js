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
    a = l;
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(t) {
        a = {
            ...l,
            ...t ?? null
        }
    }
    isSpeakingMessage(t, e) {
        let {
            currentMessage: n
        } = a;
        return null !== n && n.channelId === t && n.messageId === e
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
let o = new s(r.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(t) {
        let {
            messageId: e,
            channelId: n
        } = t;
        a = {
            ...a,
            currentMessage: {
                messageId: e,
                channelId: n
            }
        }
    },
    STOP_SPEAKING: function() {
        a = {
            ...a,
            currentMessage: null
        }
    },
    SET_TTS_SPEECH_RATE: function(t) {
        a = {
            ...a,
            speechRate: t.speechRate
        }
    }
})