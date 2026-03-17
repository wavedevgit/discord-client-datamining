/** chunk id: 86404 params = (module,exports,require) **/
t.d(n, {
    A: () => p
});
var i = t(627968),
    s = t(64700),
    l = t(397927),
    a = t(163126),
    r = t(688810),
    o = t(183555),
    d = t(913453),
    c = t(229187),
    u = t(657331),
    m = t(503062),
    x = t(985018),
    A = t(781425);

function p(e) {
    let {
        user: n,
        guildId: t,
        channelId: p,
        onClose: _
    } = e, {
        mutualFriends: f
    } = (0, d.A)(n), {
        analyticsLocations: h
    } = (0, r.Ay)(), {
        context: g,
        trackUserProfileAction: j
    } = (0, o.NJ)(), I = (0, a.A)();
    return s.useEffect(() => {
        (0, c.A)(n.id, I)
    }, [n.id, I]), (0, i.jsx)(l.IpV, {
        className: A.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: A.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: A.Ie,
            children: [(0, i.jsx)("div", {
                className: A.on
            }), (0, i.jsx)("div", {
                className: A.BI,
                children: x.intl.string(x.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: n,
                user: s,
                status: l
            } = e;
            return (0, i.jsx)(m.A, {
                user: s,
                status: l,
                guildId: t,
                channelId: p,
                onSelect: () => {
                    var e;
                    _?.(), j({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...g,
                        userId: e,
                        sourceAnalyticsLocations: h
                    })
                }
            }, n)
        })
    })
}