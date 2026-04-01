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
    m = n(503062),
    g = n(782505),
    p = n(515054),
    x = n(913329);

function f(e) {
    let {
        user: t,
        guildId: n,
        channelId: f,
        onClose: _
    } = e, {
        analyticsLocations: h
    } = (0, s.Ay)(), {
        context: A,
        trackUserProfileAction: I
    } = (0, o.NJ)(), {
        mutualFriends: v,
        mutualFriendsCount: j
    } = (0, c.A)(t), E = (0, l.A)();
    return a.useEffect(() => {
        (0, d.A)(t.id, E)
    }, [t.id, E]), (0, i.jsx)(p.K, {
        className: x.XG,
        children: null == v ? Array.from({
            length: j ?? 10
        }).map((e, t) => (0, i.jsxs)("div", {
            className: x.D$,
            children: [(0, i.jsx)(r.FQ, {
                width: 40,
                opacity: .08
            }), (0, i.jsx)(r.FQ, {
                width: 135,
                opacity: .08
            })]
        }, t)) : 0 === v.length ? (0, i.jsx)(g.IA, {}) : v.map(e => {
            let {
                key: t,
                user: a,
                status: l
            } = e;
            return (0, i.jsx)(m.A, {
                user: a,
                status: l,
                guildId: n,
                channelId: f,
                onSelect: () => {
                    _?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ...A,
                        userId: a.id,
                        sourceAnalyticsLocations: h
                    })
                }
            }, t)
        })
    })
}