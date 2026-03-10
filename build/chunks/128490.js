/** chunk id: 128490 params = (module,exports,require) **/
n.d(t, {
    A: () => h
});
var i = n(627968);
n(64700);
var s = n(311907),
    r = n(397927),
    l = n(734057),
    a = n(309010),
    d = n(622543),
    o = n(987112),
    c = n(389996),
    u = n(743987),
    A = n(900179),
    m = n(280645),
    x = n(928223),
    f = n(518477),
    _ = n(985018),
    p = n(195723);

function h(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: h,
        onClose: g
    } = e, I = (0, s.bG)([d.A], () => d.A.getUserProfile(t.id)?.application), j = (0, s.bG)([l.A, a.A], () => l.A.getChannel(a.A.getChannelId()));
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: p.XG,
        children: [n?.bio != null && n?.bio !== "" && (0, i.jsx)(c.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), I?.popularApplicationCommandIds != null && null != j && (0, i.jsx)(o.A, {
            applicationId: I.id,
            commandIds: I.popularApplicationCommandIds,
            channel: j,
            guildId: h,
            onClick: g
        }), n?.guildId != null && (0, i.jsx)(m.A, {
            userId: t.id,
            guildId: n.guildId
        }), (0, i.jsx)(A.A, {
            heading: _.intl.string(_.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: t.id,
                guildId: h,
                tooltipDelay: f.In
            })
        }), (0, i.jsx)(x.A, {
            userId: t.id
        })]
    })
}