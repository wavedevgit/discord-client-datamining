/** chunk id: 113763 params = (module,exports,require) **/
i.d(t, {
    A: () => A
});
var n = i(627968),
    l = i(64700),
    s = i(163126),
    a = i(688810),
    r = i(114212),
    d = i(183555),
    o = i(913453),
    c = i(229187),
    u = i(657331),
    g = i(503062),
    m = i(782505),
    h = i(515054),
    x = i(499044);

function A(e) {
    let {
        user: t,
        guildId: i,
        channelId: A,
        onClose: p
    } = e, {
        analyticsLocations: f
    } = (0, a.Ay)(), {
        context: I,
        trackUserProfileAction: j
    } = (0, d.NJ)(), {
        mutualFriends: v,
        mutualFriendsCount: S
    } = (0, o.A)(t), E = (0, s.A)();
    return l.useEffect(() => {
        (0, c.A)(t.id, E)
    }, [t.id, E]), (0, n.jsx)(h.K, {
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
                user: l,
                status: s
            } = e;
            return (0, n.jsx)(g.A, {
                user: l,
                status: s,
                guildId: i,
                channelId: A,
                onSelect: () => {
                    p?.(), j({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ...I,
                        userId: l.id,
                        sourceAnalyticsLocations: f
                    })
                }
            }, t)
        })
    })
}