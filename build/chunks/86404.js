/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => g
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(163126),
    s = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    _ = t(503062),
    p = t(985018),
    A = t(272823);

function g(e) {
    let {
        user: n,
        guildId: t,
        channelId: g,
        onClose: I
    } = e, {
        mutualFriends: m
    } = (0, d.A)(n), {
        analyticsLocations: f
    } = (0, s.Ay)(), {
        context: h,
        trackUserProfileAction: x
    } = (0, o.NJ)(), v = (0, r.A)();
    return a.useEffect(() => {
        (0, c.A)(n.id, v)
    }, [n.id, v]), (0, i.jsx)(l.IpV, {
        className: A.DK,
        fade: !0,
        children: null == m ? (0, i.jsx)("div", {
            className: A.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === m.length ? (0, i.jsxs)("div", {
            className: A.Ie,
            children: [(0, i.jsx)("div", {
                className: A.on
            }), (0, i.jsx)("div", {
                className: A.BI,
                children: p.intl.string(p.t["/5p4gx"])
            })]
        }) : m.map(e => {
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
                    I?.(), x({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = a.id, (0, u.openUserProfileModal)({
                        ...h,
                        userId: e,
                        sourceAnalyticsLocations: f
                    })
                }
            }, n)
        })
    })
}