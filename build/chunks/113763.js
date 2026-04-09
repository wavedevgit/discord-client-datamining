/** chunk id: 113763 params = (module,exports,require) **/
n.d(t, {
    A: () => p
});
var i = n(627968),
    a = n(64700),
    l = n(163126),
    s = n(688810),
    r = n(114212),
    o = n(183555),
    d = n(913453),
    c = n(229187),
    u = n(657331),
    g = n(503062),
    m = n(782505),
    h = n(515054),
    x = n(913329);

function p(e) {
    let {
        user: t,
        guildId: n,
        channelId: p,
        onClose: f
    } = e, {
        analyticsLocations: A
    } = (0, s.Ay)(), {
        context: _,
        trackUserProfileAction: I
    } = (0, o.NJ)(), {
        mutualFriends: j,
        mutualFriendsCount: v
    } = (0, d.A)(t), b = (0, l.A)();
    return a.useEffect(() => {
        (0, c.A)(t.id, b)
    }, [t.id, b]), (0, i.jsx)(h.K, {
        className: x.XG,
        children: null == j ? Array.from({
            length: v ?? 10
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
                channelId: p,
                onSelect: () => {
                    f?.(), I({
                        action: "PRESS_MUTUAL_FRIEND"
                    }), (0, u.openUserProfileModal)({
                        ..._,
                        userId: a.id,
                        sourceAnalyticsLocations: A
                    })
                }
            }, t)
        })
    })
}