/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => h
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(734057),
    s = t(309010),
    d = t(622543),
    o = t(987112),
    c = t(389996),
    u = t(743987),
    _ = t(900179),
    p = t(280645),
    A = t(928223),
    g = t(518477),
    f = t(985018),
    m = t(824860);

function h(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: h,
        onClose: x
    } = e, I = (0, a.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), b = (0, a.bG)([r.A, s.A], () => r.A.getChannel(s.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, i.jsx)(c.E, {
            userBio: t?.bio,
            setLineClamp: !1
        }), I?.popularApplicationCommandIds != null && null != b && (0, i.jsx)(o.A, {
            applicationId: I.id,
            commandIds: I.popularApplicationCommandIds,
            channel: b,
            guildId: h,
            onClick: x
        }), t?.guildId != null && (0, i.jsx)(p.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(_.A, {
            heading: f.intl.string(f.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: n.id,
                guildId: h,
                tooltipDelay: g.In
            })
        }), (0, i.jsx)(A.A, {
            userId: n.id
        })]
    })
}