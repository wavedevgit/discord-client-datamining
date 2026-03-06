/** chunk id: 8880 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(311907),
    a = n(73153);
let r = {
        speechRate: 1,
        currentMessage: null
    },
    l = r;
class s extends i.Ay.DeviceSettingsStore {
    static displayName = "TTSStore";
    static persistKey = "TTSStore";
    static migrations = [];
    initialize(e) {
        l = {
            ...r,
            ...e ?? null
        }
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: n
        } = l;
        return null !== n && n.channelId === e && n.messageId === t
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
let o = new s(a.h, __OVERLAY__ ? {} : {
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        l = {
            ...l,
            currentMessage: {
                messageId: t,
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
    SET_TTS_SPEECH_RATE: function(e) {
        l = {
            ...l,
            speechRate: e.speechRate
        }
    }
})