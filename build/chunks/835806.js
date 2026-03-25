/** chunk id: 835806 params = (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(954571),
    a = t(652215);

function _(e) {
    let {
        problem: n,
        stream: t,
        feedback: _,
        streamApplication: o,
        analyticsData: r,
        location: l,
        rating: s = null,
        category: c,
        variant: d
    } = e;
    i.default.track(a.HAw.STREAM_REPORT_PROBLEM, {
        reason: n,
        category: c,
        reason_variant: d,
        streamer_user_id: t.ownerId,
        stream_channel_id: t.channelId,
        guild_id: t.guildId,
        application_id: null != o ? o.id : null,
        application_name: null != o ? o.name : null,
        location: l,
        rating: s,
        feedback: _,
        ...r
    })
}