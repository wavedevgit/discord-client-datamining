/** Chunk was on 64228 **/
/** chunk id: 128490, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => h
});
var l = n(627968);
n(64700);
var i = n(311907),
    r = n(397927),
    s = n(734057),
    o = n(309010),
    a = n(622543),
    c = n(987112),
    d = n(389996),
    u = n(743987),
    p = n(900179),
    m = n(280645),
    f = n(928223),
    A = n(518477),
    x = n(985018),
    j = n(195723);

function h(e) {
    let {
        user: t,
        displayProfile: n,
        guildId: h,
        onClose: g
    } = e, v = (0, i.bG)([a.A], () => {
        var e;
        return null == (e = a.A.getUserProfile(t.id)) ? void 0 : e.application
    }), b = (0, i.bG)([s.A, o.A], () => s.A.getChannel(o.A.getChannelId()));
    return (0, l.jsxs)(r.IpV, {
        fade: !0,
        className: j.XG,
        children: [(null == n ? void 0 : n.bio) != null && (null == n ? void 0 : n.bio) !== "" && (0, l.jsx)(d.A, {
            userBio: n.bio,
            setLineClamp: !1
        }), (null == v ? void 0 : v.popularApplicationCommandIds) != null && null != b && (0, l.jsx)(c.A, {
            applicationId: v.id,
            commandIds: v.popularApplicationCommandIds,
            channel: b,
            guildId: h,
            onClick: g
        }), (null == n ? void 0 : n.guildId) != null && (0, l.jsx)(m.A, {
            userId: t.id,
            guildId: n.guildId
        }), (0, l.jsx)(p.A, {
            heading: x.intl.string(x.t["A//N4k"]),
            children: (0, l.jsx)(u.A, {
                userId: t.id,
                guildId: h,
                tooltipDelay: A.In
            })
        }), (0, l.jsx)(f.A, {
            userId: t.id
        })]
    })
}