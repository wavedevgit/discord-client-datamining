/** chunk id: 54570 params = (module,exports,require) **/
n.d(e, {
    AU: () => r,
    kC: () => l,
    kP: () => a,
    pr: () => s,
    zU: () => o
});
var i = n(73153);

function r(t, e, n, r, a) {
    i.h.dispatch({
        type: "SPEAK_TEXT",
        text: t,
        interrupt: e,
        maxLength: n,
        onStart: r,
        onEnd: a
    })
}

function a(t, e) {
    i.h.dispatch({
        type: "SPEAK_MESSAGE",
        channel: t,
        message: e
    })
}

function l(t, e) {
    i.h.dispatch({
        type: "SPEAKING_MESSAGE",
        channelId: t,
        messageId: e
    })
}

function s() {
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