/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968);
t(64700);
var s = t(311907),
    l = t(397927),
    a = t(734057),
    r = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    m = t(900179),
    x = t(280645),
    A = t(928223),
    p = t(518477),
    _ = t(985018),
    f = t(195723);

function h(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: h,
        onClose: g
    } = e, j = (0, s.bG)([o.A], () => o.A.getUserProfile(n.id)?.application), I = (0, s.bG)([a.A, r.A], () => a.A.getChannel(r.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: f.XG,
        children: [t?.bio != null && t?.bio !== "" && (0, i.jsx)(c.A, {
            userBio: t.bio,
            setLineClamp: !1
        }), j?.popularApplicationCommandIds != null && null != I && (0, i.jsx)(d.A, {
            applicationId: j.id,
            commandIds: j.popularApplicationCommandIds,
            channel: I,
            guildId: h,
            onClick: g
        }), t?.guildId != null && (0, i.jsx)(x.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(m.A, {
            heading: _.intl.string(_.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: n.id,
                guildId: h,
                tooltipDelay: p.In
            })
        }), (0, i.jsx)(A.A, {
            userId: n.id
        })]
    })
}