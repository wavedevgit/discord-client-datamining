/** chunk id: 121489 params = (module,exports,require) **/
t.d(a, {
    _O: () => c,
    dP: () => r,
    wQ: () => o
});
var n = t(954571),
    i = t(652215);

function o(e, a, t, o) {
    n.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: a,
        start_duration_secs: Math.min(a ?? t, t),
        sender_user_id: o
    })
}

function r(e, a, t, o, r) {
    n.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: a,
        end_duration_secs: Math.min(a ?? t, t),
        sender_user_id: o,
        duration_listening_secs: r
    })
}

function c(e, a) {
    n.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: a
    })
}