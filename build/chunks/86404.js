/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => x
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
    A = t(503062),
    _ = t(985018),
    p = t(643146);

function x(e) {
    let {
        user: n,
        guildId: t,
        channelId: x,
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
        className: p.DK,
        fade: !0,
        children: null == m ? (0, i.jsx)("div", {
            className: p.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === m.length ? (0, i.jsxs)("div", {
            className: p.Ie,
            children: [(0, i.jsx)("div", {
                className: p.on
            }), (0, i.jsx)("div", {
                className: p.BI,
                children: _.intl.string(_.t["/5p4gx"])
            })]
        }) : m.map(e => {
            let {
                key: n,
                user: a,
                status: l
            } = e;
            return (0, i.jsx)(A.A, {
                user: a,
                status: l,
                guildId: t,
                channelId: x,
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