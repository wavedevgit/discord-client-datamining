/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => g
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(163126),
    d = t(688810),
    s = t(183555),
    o = t(913453),
    c = t(229187),
    u = t(657331),
    _ = t(503062),
    p = t(985018),
    A = t(928666);

function g(e) {
    let {
        user: n,
        guildId: t,
        channelId: g,
        onClose: f
    } = e, {
        mutualFriends: h
    } = (0, o.A)(n), {
        analyticsLocations: m
    } = (0, d.Ay)(), {
        context: x,
        trackUserProfileAction: I
    } = (0, s.NJ)(), b = (0, r.A)();
    return a.useEffect(() => {
        (0, c.A)(n.id, b)
    }, [n.id, b]), (0, i.jsx)(l.IpV, {
        className: A.DK,
        fade: !0,
        children: null == h ? (0, i.jsx)("div", {
            className: A.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === h.length ? (0, i.jsxs)("div", {
            className: A.Ie,
            children: [(0, i.jsx)("div", {
                className: A.on
            }), (0, i.jsx)("div", {
                className: A.BI,
                children: p.intl.string(p.t["/5p4gx"])
            })]
        }) : h.map(e => {
            let {
                key: n,
                user: a,
                status: l
            } = e;
            return (0, i.jsx)(_.A, {
                user: a,
                status: l,
                guildId: t,
                channelId: g,
                onSelect: () => {
                    var e;
                    f?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = a.id, (0, u.openUserProfileModal)({
                        ...x,
                        userId: e,
                        sourceAnalyticsLocations: m
                    })
                }
            }, n)
        })
    })
}