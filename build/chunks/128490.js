/** chunk id: 128490 params = (module,exports,require) **/
t.d(n, {
    A: () => f
});
var i = t(627968);
t(64700);
var a = t(311907),
    l = t(397927),
    r = t(734057),
    o = t(309010),
    s = t(622543),
    d = t(987112),
    c = t(389996),
    _ = t(743987),
    u = t(900179),
    p = t(280645),
    A = t(928223),
    g = t(518477),
    h = t(985018),
    m = t(824860);

function f(e) {
    let {
        user: n,
        displayProfile: t,
        guildId: f,
        onClose: I
    } = e, x = (0, a.bG)([s.A], () => s.A.getUserProfile(n.id)?.application), b = (0, a.bG)([r.A, o.A], () => r.A.getChannel(o.A.getChannelId()));
    return (0, i.jsxs)(l.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, i.jsx)(c.E, {
            userBio: t?.bio,
            setLineClamp: !1
        }), x?.popularApplicationCommandIds != null && null != b && (0, i.jsx)(d.A, {
            applicationId: x.id,
            commandIds: x.popularApplicationCommandIds,
            channel: b,
            guildId: f,
            onClick: I
        }), t?.guildId != null && (0, i.jsx)(p.A, {
            userId: n.id,
            guildId: t.guildId
        }), (0, i.jsx)(u.A, {
            heading: h.intl.string(h.t["A//N4k"]),
            children: (0, i.jsx)(_.A, {
                userId: n.id,
                guildId: f,
                tooltipDelay: g.In
            })
        }), (0, i.jsx)(A.A, {
            userId: n.id
        })]
    })
}