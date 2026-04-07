/** chunk id: 54570 params = (module,exports,require) **/
n.d(e, {
    AU: () => l,
    kC: () => s,
    kP: () => r,
    pr: () => a,
    zU: () => o
});
var i = n(73153);

function l(t, e, n, l, r) {
    i.h.dispatch({
        type: "SPEAK_TEXT",
        text: t,
        interrupt: e,
        maxLength: n,
        onStart: l,
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

function a() {
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