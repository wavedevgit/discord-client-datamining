/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => x
});
var i = t(627968),
    a = t(64700),
    s = t(397927),
    r = t(163126),
    l = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    _ = t(503062),
    A = t(985018),
    p = t(272823);

function x(e) {
    let {
        user: n,
        guildId: t,
        channelId: x,
        onClose: f
    } = e, {
        mutualFriends: m
    } = (0, d.A)(n), {
        analyticsLocations: g
    } = (0, l.Ay)(), {
        context: I,
        trackUserProfileAction: h
    } = (0, o.NJ)(), b = (0, r.A)();
    return a.useEffect(() => {
        (0, c.A)(n.id, b)
    }, [n.id, b]), (0, i.jsx)(s.IpV, {
        className: p.DK,
        fade: !0,
        children: null == m ? (0, i.jsx)("div", {
            className: p.Ie,
            children: (0, i.jsx)(s.y$y, {})
        }) : 0 === m.length ? (0, i.jsxs)("div", {
            className: p.Ie,
            children: [(0, i.jsx)("div", {
                className: p.on
            }), (0, i.jsx)("div", {
                className: p.BI,
                children: A.intl.string(A.t["/5p4gx"])
            })]
        }) : m.map(e => {
            let {
                key: n,
                user: a,
                status: s
            } = e;
            return (0, i.jsx)(_.A, {
                user: a,
                status: s,
                guildId: t,
                channelId: x,
                onSelect: () => {
                    var e;
                    f?.(), h({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = a.id, (0, u.openUserProfileModal)({
                        ...I,
                        userId: e,
                        sourceAnalyticsLocations: g
                    })
                }
            }, n)
        })
    })
}