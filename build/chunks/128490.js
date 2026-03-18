/** chunk id: 128490 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    a = n(734057),
    l = n(309010),
    o = n(622543),
    d = n(987112),
    c = n(389996),
    u = n(743987),
    _ = n(900179),
    A = n(280645),
    m = n(928223),
    x = n(518477),
    p = n(985018),
    f = n(195723);

function h(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: h,
        onClose: g
    } = e, I = (0, s.bG)([o.A], () => o.A.getUserProfile(t.id)?.application), j = (0, s.bG)([a.A, l.A], () => a.A.getChannel(l.A.getChannelId()));
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: f.XG,
        children: [n?.bio != null && n?.bio !== "" && (0, i.jsx)(c.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), I?.popularApplicationCommandIds != null && null != j && (0, i.jsx)(d.A, {
            applicationId: I.id,
            commandIds: I.popularApplicationCommandIds,
            channel: j,
            guildId: h,
            onClick: g
        }), n?.guildId != null && (0, i.jsx)(A.A, {
            userId: t.id,
            guildId: n.guildId
        }), (0, i.jsx)(_.A, {
            heading: p.intl.string(p.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: t.id,
                guildId: h,
                tooltipDelay: x.In
            })
        }), (0, i.jsx)(m.A, {
            userId: t.id
        })]
    })
}