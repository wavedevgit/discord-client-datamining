/** chunk id: 121489 params = (module,exports,require) **/
a.d(t, {
    _O: () => l,
    dP: () => o,
    wQ: () => i
});
var n = a(954571),
    r = a(652215);

function i(e, t, a, i) {
    n.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? a, a),
        sender_user_id: i
    })
}

function o(e, t, a, i, o) {
    n.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? a, a),
        sender_user_id: i,
        duration_listening_secs: o
    })
}

function l(e, t) {
    n.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}