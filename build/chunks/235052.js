/** chunk id: 235052 params = (module,exports,require) **/
n.d(t, {
    A: () => p,
    u: () => _
});
var i = n(627968);
n(64700);
var l = n(311907),
    a = n(397927),
    s = n(308368),
    r = n(627363),
    o = n(616356),
    c = n(961350),
    d = n(159426),
    u = n(762370),
    h = n(25528),
    m = n(652215),
    A = n(783198),
    g = n(985018);

function _(e, t, n) {
    let {
        enableRequestToStream: i
    } = d.m.useExperiment({
        guildId: t.guild_id,
        location: n
    }, {
        autoTrackExposure: !1
    }), a = (0, l.bG)([c.default], () => c.default.getId()), A = (0, h.Ay)(e, t.guild_id)[0], g = (0, l.bG)([o.A], () => null != o.A.getStreamForUser(e, t.getGuildId())), _ = (0, r.YY)(A?.application_id).data, p = (0, u.A)(e, t.id);
    return a !== e && null != A && null != _ && i && p && !g ? {
        playingApplication: _,
        handleRequestToStream: function(n) {
            s.A.sendActivityInvite({
                type: m.xL.STREAM_REQUEST,
                channelId: t.id,
                activity: A,
                content: `<@${e}>`,
                location: n,
                targetUserId: e
            })
        }
    } : null
}

function p(e, t) {
    let n = _(e, t, "useRequestToStreamItem");
    return null == n ? null : (0, i.jsx)(a.Drp, {
        id: "request-to-stream",
        label: g.intl.format(A.default["8qq+H7"], {
            applicationName: n.playingApplication.name
        }),
        action: () => n.handleRequestToStream("request to stream item"),
        icon: a.ofK,
        leadingAccessory: {
            type: "icon",
            icon: a.ofK
        }
    }, "request-to-stream")
}