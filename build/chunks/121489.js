/** chunk id: 121489 params = (module,exports,require) **/
n.d(t, {
    _O: () => s,
    dP: () => l,
    wQ: () => a
});
var i = n(954571),
    r = n(652215);

function a(e, t, n, a) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: a
    })
}

function l(e, t, n, a, l) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: a,
        duration_listening_secs: l
    })
}

function s(e, t) {
    i.default.track(r.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}