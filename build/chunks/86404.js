/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968),
    s = t(64700),
    a = t(397927),
    l = t(163126),
    r = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    _ = t(503062),
    A = t(985018),
    x = t(272823);

function p(e) {
    let {
        user: n,
        guildId: t,
        channelId: p,
        onClose: m
    } = e, {
        mutualFriends: g
    } = (0, d.A)(n), {
        analyticsLocations: I
    } = (0, r.Ay)(), {
        context: f,
        trackUserProfileAction: h
    } = (0, o.NJ)(), b = (0, l.A)();
    return s.useEffect(() => {
        (0, c.A)(n.id, b)
    }, [n.id, b]), (0, i.jsx)(a.IpV, {
        className: x.DK,
        fade: !0,
        children: null == g ? (0, i.jsx)("div", {
            className: x.Ie,
            children: (0, i.jsx)(a.y$y, {})
        }) : 0 === g.length ? (0, i.jsxs)("div", {
            className: x.Ie,
            children: [(0, i.jsx)("div", {
                className: x.on
            }), (0, i.jsx)("div", {
                className: x.BI,
                children: A.intl.string(A.t["/5p4gx"])
            })]
        }) : g.map(e => {
            let {
                key: n,
                user: s,
                status: a
            } = e;
            return (0, i.jsx)(_.A, {
                user: s,
                status: a,
                guildId: t,
                channelId: p,
                onSelect: () => {
                    var e;
                    m?.(), h({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...f,
                        userId: e,
                        sourceAnalyticsLocations: I
                    })
                }
            }, n)
        })
    })
}