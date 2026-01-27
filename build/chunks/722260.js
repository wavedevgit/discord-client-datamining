/** Chunk was on web.js **/
/** chunk id: 722260, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => a,
    m: () => o
});
var r = n(311907),
    i = n(698441);

function a(e, t) {
    return s((0, r.yK)([i.Ay], () => {
        var e, n;
        return null != (e = null == (n = i.Ay.getGuildScheduledEvent(t)) ? void 0 : n.guild_scheduled_event_exceptions) ? e : []
    }), e)
}

function o(e, t) {
    var n, r;
    return s(null != (n = null == (r = i.Ay.getGuildScheduledEvent(t)) ? void 0 : r.guild_scheduled_event_exceptions) ? n : [], e)
}

function s(e, t) {
    return null == e ? void 0 : e.find(e => e.event_exception_id === t)
}