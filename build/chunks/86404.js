/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
    s = t(163126),
    r = t(688810),
    d = t(183555),
    o = t(913453),
    c = t(229187),
    u = t(657331),
    _ = t(503062),
    A = t(985018),
    x = t(643146);

function p(e) {
    let {
        user: n,
        guildId: t,
        channelId: p,
        onClose: g
    } = e, {
        mutualFriends: m
    } = (0, o.A)(n), {
        analyticsLocations: I
    } = (0, r.Ay)(), {
        context: f,
        trackUserProfileAction: b
    } = (0, d.NJ)(), h = (0, s.A)();
    return a.useEffect(() => {
        (0, c.A)(n.id, h)
    }, [n.id, h]), (0, i.jsx)(l.IpV, {
        className: x.DK,
        fade: !0,
        children: null == m ? (0, i.jsx)("div", {
            className: x.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === m.length ? (0, i.jsxs)("div", {
            className: x.Ie,
            children: [(0, i.jsx)("div", {
                className: x.on
            }), (0, i.jsx)("div", {
                className: x.BI,
                children: A.intl.string(A.t["/5p4gx"])
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
                channelId: p,
                onSelect: () => {
                    var e;
                    g?.(), b({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = a.id, (0, u.openUserProfileModal)({
                        ...f,
                        userId: e,
                        sourceAnalyticsLocations: I
                    })
                }
            }, n)
        })
    })
}