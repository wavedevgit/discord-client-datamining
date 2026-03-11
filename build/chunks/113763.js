/** chunk id: 113763 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    l = n(64700),
    a = n(163126),
    s = n(688810),
    r = n(114212),
    o = n(183555),
    c = n(913453),
    d = n(229187),
    u = n(657331),
    m = n(503062),
    g = n(782505),
    x = n(515054),
    f = n(828151);

function p(e) {
    let {
        user: t,
        guildId: n,
        channelId: p,
        onClose: h
    } = e, {
        analyticsLocations: _
    } = (0, s.Ay)(), {
        context: A,
        trackUserProfileAction: I
    } = (0, o.NJ)(), {
        mutualFriends: j,
        mutualFriendsCount: v
    } = (0, c.A)(t), E = (0, a.A)();
    return l.useEffect(() => {
        (0, d.A)(t.id, E)
    }, [t.id, E]), (0, i.jsx)(x.K, {
        className: f.XG,
        children: null == j ? Array.from({
            length: v ?? 10
        }).map((e, t) => (0, i.jsxs)("div", {
            className: f.D$,
            children: [(0, i.jsx)(r.FQ, {
                width: 40,
                opacity: .08
            }), (0, i.jsx)(r.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : 0 === j.length ? (0, i.jsx)(g.IA, {}) : j.map(e => {
            let {
                key: t,
                user: l,
                status: a
            } = e;
            return (0, i.jsx)(m.A, {
                user: l,
                status: a,
                guildId: n,
                channelId: p,
                onSelect: () => {
                    h?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ...A,
                        userId: l.id,
                        sourceAnalyticsLocations: _
                    })
                }
            }, t)
        })
    })
}