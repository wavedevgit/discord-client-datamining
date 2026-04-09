/** chunk id: 113763 params = (module,exports,require) **/
i.d(t, {
    A: () => p
});
var n = i(627968),
    s = i(64700),
    l = i(163126),
    a = i(688810),
    r = i(114212),
    o = i(183555),
    d = i(913453),
    c = i(229187),
    u = i(657331),
    g = i(503062),
    m = i(782505),
    h = i(515054),
    x = i(913329);

function p(e) {
    let {
        user: t,
        guildId: i,
        channelId: p,
        onClose: A
    } = e, {
        analyticsLocations: f
    } = (0, a.Ay)(), {
        context: I,
        trackUserProfileAction: j
    } = (0, o.NJ)(), {
        mutualFriends: v,
        mutualFriendsCount: S
    } = (0, d.A)(t), b = (0, l.A)();
    return s.useEffect(() => {
        (0, c.A)(t.id, b)
    }, [t.id, b]), (0, n.jsx)(h.K, {
        className: x.XG,
        children: null == v ? Array.from({
            length: S ?? 10
        }).map((e, t) => (0, n.jsxs)("div", {
            className: x.D$,
            children: [(0, n.jsx)(r.FQ, {
                width: 40,
                opacity: .08
            }), (0, n.jsx)(r.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : 0 === v.length ? (0, n.jsx)(m.IA, {}) : v.map(e => {
            let {
                key: t,
                user: s,
                status: l
            } = e;
            return (0, n.jsx)(g.A, {
                user: s,
                status: l,
                guildId: i,
                channelId: p,
                onSelect: () => {
                    A?.(), j({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ...I,
                        userId: s.id,
                        sourceAnalyticsLocations: f
                    })
                }
            }, t)
        })
    })
}