/** chunk id: 128490, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    l = n(397927),
    a = n(734057),
    r = n(309010),
    d = n(622543),
    o = n(987112),
    c = n(389996),
    u = n(743987),
    A = n(900179),
    _ = n(280645),
    x = n(928223),
    p = n(518477),
    m = n(985018),
    f = n(195723);

function h(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: h,
        onClose: I
    } = e, g = (0, s.bG)([d.A], () => d.A.getUserProfile(t.id)?.application), j = (0, s.bG)([a.A, r.A], () => a.A.getChannel(r.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: f.XG,
        children: [n?.bio != null && n?.bio !== "" && (0, i.jsx)(c.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), g?.popularApplicationCommandIds != null && null != j && (0, i.jsx)(o.A, {
            applicationId: g.id,
            commandIds: g.popularApplicationCommandIds,
            channel: j,
            guildId: h,
            onClick: I
        }), n?.guildId != null && (0, i.jsx)(_.A, {
            userId: t.id,
            guildId: n.guildId
        }), (0, i.jsx)(A.A, {
            heading: m.intl.string(m.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: t.id,
                guildId: h,
                tooltipDelay: p.In
            })
        }), (0, i.jsx)(x.A, {
            userId: t.id
        })]
    })
}