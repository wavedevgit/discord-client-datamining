/** chunk id: 121489 params = (module,exports,require) **/
n.d(t, {
    _O: () => s,
    dP: () => r,
    wQ: () => l
});
var i = n(954571),
    a = n(652215);

function l(e, t, n, l) {
    i.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(t ?? n, n),
        sender_user_id: l
    })
}

function r(e, t, n, l, r) {
    i.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(t ?? n, n),
        sender_user_id: l,
        duration_listening_secs: r
    })
}

function s(e, t) {
    i.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}