/** chunk id: 86404, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => m
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(163126),
    a = n(688810),
    d = n(183555),
    o = n(913453),
    c = n(229187),
    u = n(657331),
    A = n(503062),
    x = n(985018),
    _ = n(781425);

function m(e) {
    let {
        user: t,
        guildId: n,
        channelId: m,
        onClose: p
    } = e, {
        mutualFriends: f
    } = (0, o.A)(t), {
        analyticsLocations: h
    } = (0, a.Ay)(), {
        context: I,
        trackUserProfileAction: g
    } = (0, d.NJ)(), j = (0, r.A)();
    return s.useEffect(() => {
        (0, c.A)(t.id, j)
    }, [t.id, j]), (0, i.jsx)(l.IpV, {
        className: _.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: _.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: _.Ie,
            children: [(0, i.jsx)("div", {
                className: _.on
            }), (0, i.jsx)("div", {
                className: _.BI,
                children: x.intl.string(x.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: t,
                user: s,
                status: l
            } = e;
            return (0, i.jsx)(A.A, {
                user: s,
                status: l,
                guildId: n,
                channelId: m,
                onSelect: () => {
                    var e;
                    p?.(), g({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...I,
                        userId: e,
                        sourceAnalyticsLocations: h
                    })
                }
            }, t)
        })
    })
}