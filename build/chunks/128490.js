/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(734057),
    s = t(309010),
    o = t(622543),
    d = t(987112),
    c = t(389996),
    u = t(743987),
    _ = t(900179),
    p = t(280645),
    A = t(928223),
    g = t(518477),
    I = t(985018),
    m = t(47049);

function f(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: f,
        onClose: h
    } = e, x = (0, a.bG)([o.A], () => o.A.getUserProfile(n.id)?.application), v = (0, a.bG)([r.A, s.A], () => r.A.getChannel(s.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, i.jsx)(c.E, {
            userBio: t?.bio,
            setLineClamp: !1
        }), x?.popularApplicationCommandIds != null && null != v && (0, i.jsx)(d.A, {
            applicationId: x.id,
            commandIds: x.popularApplicationCommandIds,
            channel: v,
            guildId: f,
            onClick: h
        }), t?.guildId != null && (0, i.jsx)(p.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(_.A, {
            heading: I.intl.string(I.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: n.id,
                guildId: f,
                tooltipDelay: g.In
            })
        }), (0, i.jsx)(A.A, {
            userId: n.id
        })]
    })
}