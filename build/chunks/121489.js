/** chunk id: 121489 params = (module,exports,require) **/
n.d(t, {
    _O: () => s,
    dP: () => a,
    wQ: () => r
});
var i = n(954571),
    l = n(652215);

function r(e, t, n, r) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: r
    })
}

function a(e, t, n, r, a) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: r,
        duration_listening_secs: a
    })
}

function s(e, t) {
    i.default.track(l.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}