/** chunk id: 113763 params = (module,exports,require) **/
n.d(t, {
    A: () => f
});
var i = n(627968),
    a = n(64700),
    l = n(163126),
    s = n(688810),
    r = n(114212),
    o = n(183555),
    c = n(913453),
    d = n(229187),
    u = n(657331),
    g = n(503062),
    m = n(782505),
    p = n(515054),
    x = n(913329);

function f(e) {
    let {
        user: t,
        guildId: n,
        channelId: f,
        onClose: h
    } = e, {
        analyticsLocations: _
    } = (0, s.Ay)(), {
        context: A,
        trackUserProfileAction: I
    } = (0, o.NJ)(), {
        mutualFriends: j,
        mutualFriendsCount: E
    } = (0, c.A)(t), v = (0, l.A)();
    return a.useEffect(() => {
        (0, d.A)(t.id, v)
    }, [t.id, v]), (0, i.jsx)(p.K, {
        className: x.XG,
        children: null == j ? Array.from({
            length: E ?? 10
        }).map((e, t) => (0, i.jsxs)("div", {
            className: x.D$,
            children: [(0, i.jsx)(r.FQ, {
                width: 40,
                opacity: .08
            }), (0, i.jsx)(r.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : 0 === j.length ? (0, i.jsx)(m.IA, {}) : j.map(e => {
            let {
                key: t,
                user: a,
                status: l
            } = e;
            return (0, i.jsx)(g.A, {
                user: a,
                status: l,
                guildId: n,
                channelId: f,
                onSelect: () => {
                    h?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ...A,
                        userId: a.id,
                        sourceAnalyticsLocations: _
                    })
                }
            }, t)
        })
    })
}