/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => I
});
var i = t(627968);
t(64700);
var a = t(311907),
    r = t(397927),
    l = t(734057),
    o = t(309010),
    d = t(622543),
    s = t(987112),
    c = t(389996),
    _ = t(743987),
    u = t(900179),
    p = t(280645),
    A = t(928223),
    g = t(518477),
    h = t(985018),
    m = t(824860);

function I(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: I,
        onClose: f
    } = e, x = (0, a.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), b = (0, a.bG)([l.A, o.A], () => l.A.getChannel(o.A.getChannelId()));
    return (0, i.jsxs)(r.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, i.jsx)(c.E, {
            userBio: t?.bio,
            setLineClamp: !1
        }), x?.popularApplicationCommandIds != null && null != b && (0, i.jsx)(s.A, {
            applicationId: x.id,
            commandIds: x.popularApplicationCommandIds,
            channel: b,
            guildId: I,
            onClick: f
        }), t?.guildId != null && (0, i.jsx)(p.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(u.A, {
            heading: h.intl.string(h.t["A//N4k"]),
            children: (0, i.jsx)(_.A, {
                userId: n.id,
                guildId: I,
                tooltipDelay: g.In
            })
        }), (0, i.jsx)(A.A, {
            userId: n.id
        })]
    })
}