/** chunk id: 8880, original params: e,t,i (module,exports,require) **/
i.d(t, {
    A: () => o
});
var n = i(311907),
    r = i(73153);
let l = {
        speechRate: 1,
        currentMessage: null
    },
    a = l;
class s extends n.Ay.DeviceSettingsStore {
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
let o = new s(r.h, __OVERLAY__ ? {} : {
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