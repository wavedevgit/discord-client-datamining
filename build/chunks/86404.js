/** chunk id: 86404 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(163126),
    l = n(688810),
    o = n(183555),
    d = n(913453),
    c = n(229187),
    u = n(657331),
    _ = n(503062),
    A = n(985018),
    m = n(781425);

function x(e) {
    let {
        user: t,
        guildId: n,
        channelId: x,
        onClose: p
    } = e, {
        mutualFriends: f
    } = (0, d.A)(t), {
        analyticsLocations: h
    } = (0, l.Ay)(), {
        context: g,
        trackUserProfileAction: I
    } = (0, o.NJ)(), j = (0, a.A)();
    return s.useEffect(() => {
        (0, c.A)(t.id, j)
    }, [t.id, j]), (0, i.jsx)(r.IpV, {
        className: m.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: m.Ie,
            children: (0, i.jsx)(r.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: m.Ie,
            children: [(0, i.jsx)("div", {
                className: m.on
            }), (0, i.jsx)("div", {
                className: m.BI,
                children: A.intl.string(A.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: t,
                user: s,
                status: r
            } = e;
            return (0, i.jsx)(_.A, {
                user: s,
                status: r,
                guildId: n,
                channelId: x,
                onSelect: () => {
                    var e;
                    p?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...g,
                        userId: e,
                        sourceAnalyticsLocations: h
                    })
                }
            }, t)
        })
    })
}