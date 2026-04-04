/** chunk id: 86404 params = (module,exports,require) **/
i.d(n, {
    A: () => x
});
var t = i(627968),
    a = i(64700),
    l = i(397927),
    s = i(163126),
    r = i(688810),
    d = i(183555),
    o = i(913453),
    c = i(229187),
    u = i(657331),
    _ = i(503062),
    A = i(985018),
    p = i(643146);

function x(e) {
    let {
        user: n,
        guildId: i,
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
    }, [n.id, h]), (0, t.jsx)(l.IpV, {
        className: p.DK,
        fade: !0,
        children: null == m ? (0, t.jsx)("div", {
            className: p.Ie,
            children: (0, t.jsx)(l.y$y, {})
        }) : 0 === m.length ? (0, t.jsxs)("div", {
            className: p.Ie,
            children: [(0, t.jsx)("div", {
                className: p.on
            }), (0, t.jsx)("div", {
                className: p.BI,
                children: A.intl.string(A.t["/5p4gx"])
            })]
        }) : m.map(e => {
            let {
                key: n,
                user: a,
                status: l
            } = e;
            return (0, t.jsx)(_.A, {
                user: a,
                status: l,
                guildId: i,
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