/** chunk id: 121489 params = (module,exports,require) **/
a.d(t, {
    _O: () => c,
    dP: () => i,
    wQ: () => r
});
var n = a(954571),
    o = a(652215);

function r(e, t, a, r) {
    n.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? a, a),
        sender_user_id: r
    })
}

function i(e, t, a, r, i) {
    n.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? a, a),
        sender_user_id: r,
        duration_listening_secs: i
    })
}

function c(e, t) {
    n.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}