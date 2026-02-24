/** chunk id: 86404, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => _
});
var i = t(627968),
    s = t(64700),
    l = t(397927),
    a = t(163126),
    r = t(688810),
    d = t(183555),
    c = t(913453),
    o = t(229187),
    u = t(657331),
    A = t(503062),
    x = t(985018),
    m = t(230836);

function _(e) {
    let {
        user: n,
        guildId: t,
        channelId: _,
        onClose: p
    } = e, {
        mutualFriends: f
    } = (0, c.A)(n), {
        analyticsLocations: h
    } = (0, r.Ay)(), {
        context: I,
        trackUserProfileAction: j
    } = (0, d.NJ)(), g = (0, a.A)();
    return s.useEffect(() => {
        (0, o.A)(n.id, g)
    }, [n.id, g]), (0, i.jsx)(l.IpV, {
        className: m.DK,
        fade: !0,
        children: null == f ? (0, i.jsx)("div", {
            className: m.Ie,
            children: (0, i.jsx)(l.y$y, {})
        }) : 0 === f.length ? (0, i.jsxs)("div", {
            className: m.Ie,
            children: [(0, i.jsx)("div", {
                className: m.on
            }), (0, i.jsx)("div", {
                className: m.BI,
                children: x.intl.string(x.t["/5p4gx"])
            })]
        }) : f.map(e => {
            let {
                key: n,
                user: s,
                status: l
            } = e;
            return (0, i.jsx)(A.A, {
                user: s,
                status: l,
                guildId: t,
                channelId: _,
                onSelect: () => {
                    var e;
                    p?.(), j({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), e = s.id, (0, u.openUserProfileModal)({
                        ...I,
                        userId: e,
                        sourceAnalyticsLocations: h
                    })
                }
            }, n)
        })
    })
}