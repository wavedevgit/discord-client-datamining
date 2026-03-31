/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968),
    s = t(64700),
    l = t(397927),
    r = t(163126),
    a = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    A = t(503062),
    _ = t(985018),
    x = t(272823);

function p(e) {
    let {
        user: n,
        guildId: t,
        channelId: p,
        onClose: m
    } = e, {
        mutualFriends: I
    } = (0, d.A)(n), {
        analyticsLocations: f
    } = (0, a.Ay)(), {
        context: g,
        trackUserProfileAction: h
    } = (0, o.NJ)(), b = (0, r.A)();
    return s.useEffect(() => {
        (0, c.A)(n.id, b)
    }, [n.id, b]), (0, i.jsx)(l.IpV, {
        className: x.DK,
        fade: !0,
        children: null == I ? (0, i.jsx)("div", {
            className: x.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === I.length ? (0, i.jsxs)("div", {
            className: x.Ie,
            children: [(0, i.jsx)("div", {
                className: x.on
            }), (0, i.jsx)("div", {
                className: x.BI,
                children: _.intl.string(_.t["/5p4gx"])
            })]
        }) : I.map(e => {
            let {
                key: n,
                user: s,
                status: l
            } = e;
            return (0, i.jsx)(A.A, {
                user: s,
                status: l,
                guildId: t,
                channelId: p,
                onSelect: () => {
                    var e;
                    m?.(), h({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...g,
                        userId: e,
                        sourceAnalyticsLocations: f
                    })
                }
            }, n)
        })
    })
}