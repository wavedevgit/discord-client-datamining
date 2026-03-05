/** chunk id: 235052, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => p,
    u: () => E
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    a = n(308368),
    o = n(627363),
    u = n(616356),
    s = n(961350),
    d = n(159426),
    c = n(762370),
    A = n(25528),
    h = n(652215),
    g = n(426127),
    f = n(985018);

function E(e, t, n) {
    let {
        enableRequestToStream: l
    } = d.m.useExperiment({
        guildId: t.guild_id,
        location: n
    }, {
        autoTrackExposure: !1
    }), r = (0, i.bG)([s.default], () => s.default.getId()), g = (0, A.Ay)(e, t.guild_id)[0], f = (0, i.bG)([u.A], () => null != u.A.getStreamForUser(e, t.getGuildId())), E = (0, o.YY)(g?.application_id).data, p = (0, c.A)(e, t.id);
    return r !== e && null != g && null != E && l && p && !f ? {
        playingApplication: E,
        handleRequestToStream: function(n) {
            a.A.sendActivityInvite({
                type: h.xL.STREAM_REQUEST,
                channelId: t.id,
                activity: g,
                content: `<@${e}>`,
                location: n,
                targetUserId: e
            })
        }
    } : null
}

function p(e, t) {
    let n = E(e, t, "useRequestToStreamItem");
    return null == n ? null : (0, l.jsx)(r.Drp, {
        id: "request-to-stream",
        label: f.intl.format(g.default["8qq+H7"], {
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