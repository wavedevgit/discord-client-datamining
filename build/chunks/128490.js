/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => I
});
var i = t(627968);
t(64700);
var l = t(311907),
    a = t(397927),
    s = t(734057),
    r = t(309010),
    d = t(622543),
    o = t(987112),
    c = t(389996),
    u = t(743987),
    A = t(900179),
    _ = t(280645),
    p = t(928223),
    x = t(518477),
    g = t(985018),
    m = t(824860);

function I(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: I,
        onClose: f
    } = e, b = (0, l.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), h = (0, l.bG)([s.A, r.A], () => s.A.getChannel(r.A.getChannelId()));
    return (0, i.jsxs)(a.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, i.jsx)(c.E, {
            userBio: t?.bio,
            setLineClamp: !1
        }), b?.popularApplicationCommandIds != null && null != h && (0, i.jsx)(o.A, {
            applicationId: b.id,
            commandIds: b.popularApplicationCommandIds,
            channel: h,
            guildId: I,
            onClick: f
        }), t?.guildId != null && (0, i.jsx)(_.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(A.A, {
            heading: g.intl.string(g.t["A//N4k"]),
            children: (0, i.jsx)(u.A, {
                userId: n.id,
                guildId: I,
                tooltipDelay: x.In
            })
        }), (0, i.jsx)(p.A, {
            userId: n.id
        })]
    })
}