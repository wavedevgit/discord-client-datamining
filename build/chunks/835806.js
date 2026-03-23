/** chunk id: 835806 params = (module,exports,require) **/
n.d(t, {
    A: () => _
});
var i = n(954571),
    a = n(652215);

function _(e) {
    let {
        problem: t,
        stream: n,
        feedback: _,
        streamApplication: o,
        analyticsData: r,
        location: l,
        rating: s = null,
        category: c,
        variant: d
    } = e;
    i.default.track(a.HAw.STREAM_REPORT_PROBLEM, {
        reason: t,
        category: c,
        reason_variant: d,
        streamer_user_id: n.ownerId,
        stream_channel_id: n.channelId,
        guild_id: n.guildId,
        application_id: null != o ? o.id : null,
        application_name: null != o ? o.name : null,
        location: l,
        rating: s,
        feedback: _,
        ...r
    })
}