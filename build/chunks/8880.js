/** chunk id: 8880, original params: e,t,n (module,exports,require) **/
n.d(t, {
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
    initialize(e) {
        a = {
            ...l,
            ...e ?? null
        }
    }
    isSpeakingMessage(e, t) {
        let {
            currentMessage: n
        } = a;
        return null !== n && n.channelId === e && n.messageId === t
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
    SPEAKING_MESSAGE: function(e) {
        let {
            messageId: t,
            channelId: n
        } = e;
        a = {
            ...a,
            currentMessage: {
                messageId: t,
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
    SET_TTS_SPEECH_RATE: function(e) {
        a = {
            ...a,
            speechRate: e.speechRate
        }
    }
})