/** chunk id: 235052 params = (module,exports,require) **/
n.d(e, {
    A: () => _,
    u: () => f
});
var i = n(627968);
n(64700);
var l = n(311907),
    r = n(397927),
    a = n(308368),
    o = n(627363),
    u = n(616356),
    d = n(961350),
    s = n(159426),
    c = n(762370),
    A = n(25528),
    g = n(652215),
    h = n(783198),
    E = n(985018);

function f(t, e, n) {
    let {
        enableRequestToStream: i
    } = s.m.useExperiment({
        guildId: e.guild_id,
        location: n
    }, {
        autoTrackExposure: !1
    }), r = (0, l.bG)([d.default], () => d.default.getId()), h = (0, A.Ay)(t, e.guild_id)[0], E = (0, l.bG)([u.A], () => null != u.A.getStreamForUser(t, e.getGuildId())), f = (0, o.YY)(h?.application_id).data, _ = (0, c.A)(t, e.id);
    return r !== t && null != h && null != f && i && _ && !E ? {
        playingApplication: f,
        handleRequestToStream: function(n) {
            a.A.sendActivityInvite({
                type: g.xL.STREAM_REQUEST,
                channelId: e.id,
                activity: h,
                content: `<@${t}>`,
                location: n,
                targetUserId: t
            })
        }
    } : null
}

function _(t, e) {
    let n = f(t, e, "useRequestToStreamItem");
    return null == n ? null : (0, i.jsx)(r.Drp, {
        id: "request-to-stream",
        label: E.intl.format(h.default["8qq+H7"], {
            applicationName: n.playingApplication.name
        }),
        action: () => n.handleRequestToStream("request to stream item"),
        icon: r.ofK,
        leadingAccessory: {
            type: "icon",
            icon: r.ofK
        }
    }, "request-to-stream")
}