/** chunk id: 121489, original params: e,t,i (module,exports,require) **/
i.d(t, {
    _O: () => l,
    dP: () => o,
    wQ: () => r
});
var n = i(954571),
    a = i(652215);

function r(e, t, i, r) {
    n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : i, i),
        sender_user_id: r
    })
}

function o(e, t, i, r, o) {
    n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : i, i),
        sender_user_id: r,
        duration_listening_secs: o
    })
}

function l(e, t) {
    n.default.track(a.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}