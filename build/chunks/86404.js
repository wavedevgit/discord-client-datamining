/** chunk id: 86404 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(163126),
    l = n(688810),
    d = n(183555),
    o = n(913453),
    c = n(229187),
    u = n(657331),
    A = n(503062),
    m = n(985018),
    x = n(230836);

function p(e) {
    let {
        user: t,
        guildId: n,
        channelId: p,
        onClose: _
    } = e, {
        mutualFriends: f
    } = (0, o.A)(t), {
        analyticsLocations: h
    } = (0, l.Ay)(), {
        context: g,
        trackUserProfileAction: I
    } = (0, d.NJ)(), j = (0, a.A)();
    return s.useEffect(() => {
        (0, c.A)(t.id, j)
    }, [t.id, j]), (0, i.jsx)(r.IpV, {
        className: x.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: x.Ie,
            children: (0, i.jsx)(r.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: x.Ie,
            children: [(0, i.jsx)("div", {
                className: x.on
            }), (0, i.jsx)("div", {
                className: x.BI,
                children: m.intl.string(m.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: t,
                user: s,
                status: r
            } = e;
            return (0, i.jsx)(A.A, {
                user: s,
                status: r,
                guildId: n,
                channelId: p,
                onSelect: () => {
                    var e;
                    _?.(), I({
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