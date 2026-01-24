/** Chunk was on 24921 **/
/** chunk id: 86039, original params: t,e,i (module,exports,require) **/
i.d(e, {
    A: () => a
});
var n = i(954571),
    l = i(652215);

function a(t) {
    let {
        problem: e,
        channel: i,
        embeddedActivityLocation: a,
        feedback: o,
        activityApplication: c,
        analyticsData: r = {},
        location: _,
        rating: d = null
    } = t;
    n.default.track(l.HAw.ACTIVITY_REPORT_PROBLEM, {
        reason: e,
        guild_id: null == i ? void 0 : i.getGuildId(),
        channel_id: null == i ? void 0 : i.id,
        application_id: null == c ? void 0 : c.id,
        application_name: null == c ? void 0 : c.name,
        location: _,
        rating: d,
        feedback: o,
        embedded_activity_location_kind: a.kind,
        rtc_connection_id: r.rtc_connection_id,
        media_session_id: r.media_session_id
    })
}