/** chunk id: 54570 params = (module,exports,require) **/
i.d(e, {
    AU: () => l,
    kC: () => s,
    kP: () => r,
    pr: () => a,
    zU: () => o
});
var n = i(73153);

function l(t, e, i, l, r) {
    n.h.dispatch({
        type: "SPEAK_TEXT",
        text: t,
        interrupt: e,
        maxLength: i,
        onStart: l,
        onEnd: r
    })
}

function r(t, e) {
    n.h.dispatch({
        type: "SPEAK_MESSAGE",
        channel: t,
        message: e
    })
}

function s(t, e) {
    n.h.dispatch({
        type: "SPEAKING_MESSAGE",
        channelId: t,
        messageId: e
    })
}

function a() {
    n.h.dispatch({
        type: "STOP_SPEAKING"
    })
}

function o(t) {
    n.h.dispatch({
        type: "SET_TTS_SPEECH_RATE",
        speechRate: t
    })
}