/** chunk id: 121489 params = (module,exports,require) **/
n.d(t, {
    _O: () => l,
    dP: () => i,
    wQ: () => r
});
var a = n(954571),
    o = n(652215);

function r(e, t, n, r) {
    a.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: r
    })
}

function i(e, t, n, r, i) {
    a.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: r,
        duration_listening_secs: i
    })
}

function l(e, t) {
    a.default.track(o.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}