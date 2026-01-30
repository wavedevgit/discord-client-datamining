/** Chunk was on 64935 **/
/** chunk id: 121489, original params: e,t,n (module,exports,require) **/
n.d(t, {
    _O: () => s,
    dP: () => a,
    wQ: () => l
});
var r = n(954571),
    i = n(652215);

function l(e, t, n, l) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_STARTED, {
        message_id: e,
        total_duration_secs: t,
        start_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: l
    })
}

function a(e, t, n, l, a) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_ENDED, {
        message_id: e,
        total_duration_secs: t,
        end_duration_secs: Math.min(null != t ? t : n, n),
        sender_user_id: l,
        duration_listening_secs: a
    })
}

function s(e, t) {
    r.default.track(i.HAw.VOICE_MESSAGE_PLAYBACK_FAILED, {
        message_id: e,
        error_message: t
    })
}