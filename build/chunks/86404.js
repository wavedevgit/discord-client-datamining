/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => g
});
var i = t(627968),
    a = t(64700),
    r = t(397927),
    l = t(163126),
    o = t(688810),
    s = t(183555),
    d = t(913453),
    c = t(229187),
    _ = t(657331),
    u = t(503062),
    p = t(985018),
    A = t(643146);

function g(e) {
    let {
        user: n,
        guildId: t,
        channelId: g,
        onClose: m
    } = e, {
        mutualFriends: f
    } = (0, d.A)(n), {
        analyticsLocations: h
    } = (0, o.Ay)(), {
        context: x,
        trackUserProfileAction: I
    } = (0, s.NJ)(), b = (0, l.A)();
    return a.useEffect(() => {
        (0, c.A)(n.id, b)
    }, [n.id, b]), (0, i.jsx)(r.IpV, {
        className: A.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: A.Ie,
            children: (0, i.jsx)(r.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: A.Ie,
            children: [(0, i.jsx)("div", {
                className: A.on
            }), (0, i.jsx)("div", {
                className: A.BI,
                children: p.intl.string(p.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: n,
                user: a,
                status: r
            } = e;
            return (0, i.jsx)(u.A, {
                user: a,
                status: r,
                guildId: t,
                channelId: g,
                onSelect: () => {
                    var e;
                    m?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = a.id, (0, _.openUserProfileModal)({
                        ...x,
                        userId: e,
                        sourceAnalyticsLocations: h
                    })
                }
            }, n)
        })
    })
}