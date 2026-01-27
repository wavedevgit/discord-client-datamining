/** Chunk was on web.js **/
/** chunk id: 926571, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => o
});
var r = n(954571),
    i = n(863922),
    a = n(652215);

function o(e) {
    let {
        summary: t,
        guildId: n,
        channelId: o,
        rating: s = null,
        problem: l = null,
        feedback: c = "",
        location: u
    } = e;
    (0, i.C7)(t, s), r.default.track(a.HAw.SUMMARIES_REPORT_PROBLEM, {
        reason: l,
        location: u,
        rating: s,
        feedback: c,
        participant_count: t.people.length,
        message_count: t.count,
        start_message_id: t.startId,
        guild_id: n,
        channel_id: o,
        summary_id: t.id,
        summary_source: t.source,
        summary_type: t.type
    })
}