/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => x
});
var i = t(627968),
    s = t(64700),
    r = t(397927),
    l = t(163126),
    a = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    A = t(503062),
    m = t(985018),
    _ = t(781425);

function x(e) {
    let {
        user: n,
        guildId: t,
        channelId: x,
        onClose: p
    } = e, {
        mutualFriends: f
    } = (0, d.A)(n), {
        analyticsLocations: h
    } = (0, a.Ay)(), {
        context: g,
        trackUserProfileAction: I
    } = (0, o.NJ)(), j = (0, l.A)();
    return s.useEffect(() => {
        (0, c.A)(n.id, j)
    }, [n.id, j]), (0, i.jsx)(r.IpV, {
        className: _.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: _.Ie,
            children: (0, i.jsx)(r.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: _.Ie,
            children: [(0, i.jsx)("div", {
                className: _.on
            }), (0, i.jsx)("div", {
                className: _.BI,
                children: m.intl.string(m.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: n,
                user: s,
                status: r
            } = e;
            return (0, i.jsx)(A.A, {
                user: s,
                status: r,
                guildId: t,
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
            }, n)
        })
    })
}