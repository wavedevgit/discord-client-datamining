/** chunk id: 128490 params = (module,exports,require) **/
i.d(n, {
    A: () => I
});
var t = i(627968);
i(64700);
var a = i(311907),
    l = i(397927),
    s = i(734057),
    r = i(309010),
    d = i(622543),
    o = i(987112),
    c = i(389996),
    u = i(743987),
    _ = i(900179),
    A = i(280645),
    p = i(928223),
    x = i(518477),
    g = i(985018),
    m = i(824860);

function I(e) {
    let {
        user: n,
        displayProfile: i,
        guildId: I,
        onClose: f
    } = e, b = (0, a.bG)([d.A], () => d.A.getUserProfile(n.id)?.application), h = (0, a.bG)([s.A, r.A], () => s.A.getChannel(r.A.getChannelId()));
    return (0, t.jsxs)(l.IpV, {
        fade: !0,
        className: m.XG,
        children: [(0, t.jsx)(c.E, {
            userBio: i?.bio,
            setLineClamp: !1
        }), b?.popularApplicationCommandIds != null && null != h && (0, t.jsx)(o.A, {
            applicationId: b.id,
            commandIds: b.popularApplicationCommandIds,
            channel: h,
            guildId: I,
            onClick: f
        }), i?.guildId != null && (0, t.jsx)(A.A, {
            userId: n.id,
            guildId: i.guildId
        }), (0, t.jsx)(_.A, {
            heading: g.intl.string(g.t["A//N4k"]),
            children: (0, t.jsx)(u.A, {
                userId: n.id,
                guildId: I,
                tooltipDelay: x.In
            })
        }), (0, t.jsx)(p.A, {
            userId: n.id
        })]
    })
}