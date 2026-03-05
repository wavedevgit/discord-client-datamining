/** chunk id: 54570, original params: t,e,n (module,exports,require) **/
n.d(e, {
    AU: () => a,
    kC: () => s,
    kP: () => r,
    pr: () => l,
    zU: () => o
});
var i = n(73153);

function a(t, e, n, a, r) {
    i.h.dispatch({
        type: "SPEAK_TEXT",
        text: t,
        interrupt: e,
        maxLength: n,
        onStart: a,
        onEnd: r
    })
}

function r(t, e) {
    i.h.dispatch({
        type: "SPEAK_MESSAGE",
        channel: t,
        message: e
    })
}

function s(t, e) {
    i.h.dispatch({
        type: "SPEAKING_MESSAGE",
        channelId: t,
        messageId: e
    })
}

function l() {
    i.h.dispatch({
        type: "STOP_SPEAKING"
    })
}

function o(t) {
    i.h.dispatch({
        type: "SET_TTS_SPEECH_RATE",
        speechRate: t
    })
}