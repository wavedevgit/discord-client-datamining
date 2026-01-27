/** Chunk was on web.js **/
/** chunk id: 806246, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(734057),
    i = n(383501),
    a = n(607567);

function o(e) {
    var t;
    return null == e ? {
        channel_id: void 0,
        guild_id: void 0,
        media_session_id: i.A.getMediaSessionId(),
        call_num_participants: 0
    } : {
        channel_id: e,
        guild_id: null == (t = r.A.getChannel(e)) ? void 0 : t.guild_id,
        media_session_id: i.A.getMediaSessionId(),
        call_num_participants: a.Ay.countVoiceStatesForChannel(e)
    }
}