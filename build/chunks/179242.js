/** chunk id: 179242 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => x
});
var i = n(627968);
n(64700);
var s = n(163126),
    l = n(688810),
    a = n(114212),
    r = n(345942),
    o = n(183555),
    c = n(913453),
    d = n(229187),
    u = n(657331),
    h = n(21241),
    A = n(503062),
    m = n(51943),
    p = n(946356),
    g = n(359656),
    _ = n(985018),
    f = n(576968);

function x(e) {
    let {
        user: t,
        channelId: n
    } = e, {
        analyticsLocations: x
    } = (0, l.Ay)(), {
        context: C
    } = (0, o.NJ)(), E = (0, s.A)(), {
        mutualFriendsCount: I,
        mutualFriends: N,
        mutualGuilds: b
    } = (0, c.A)(t), S = !t.bot && null != I && I > 0, T = null != b && b.length > 0;
    return S || T ? (0, i.jsxs)(p.A.Overlay, {
        className: f.Lw,
        children: [T && (0, i.jsx)(g.A, {
            section: "MUTUAL_GUILDS",
            header: _.intl.string(_.t["4lTDZq"]),
            listClassName: f.p_,
            items: b.map(e => {
                let {
                    guild: n,
                    nick: s
                } = e;
                return (0, i.jsx)(m.A, {
                    user: t,
                    guild: n,
                    nick: s,
                    onSelect: () => (0, r.u)(n.id)
                }, n.id)
            })
        }), T && S && (0, i.jsx)(h.A, {
            className: f.yF
        }), S && (0, i.jsx)(g.A, {
            section: "MUTUAL_FRIENDS",
            header: _.intl.string(_.t["0mTJ3j"]),
            listClassName: f.p_,
            onExpand: () => (0, d.A)(t.id, E),
            items: null == N ? Array.from({
                length: I
            }).map((e, t) => (0, i.jsxs)("div", {
                className: f.nC,
                children: [(0, i.jsx)(a.FQ, {
                    width: 40,
                    opacity: .08
                }), (0, i.jsx)(a.FQ, {
                    width: 135,
                    opacity: .08
                })]
            }, t)) : N.map(e => {
                let {
                    key: t,
                    user: s,
                    status: l
                } = e;
                return (0, i.jsx)(A.A, {
                    user: s,
                    status: l,
                    channelId: n,
                    onSelect: () => {
                        (0, u.openUserProfileModal)({
                            ...C,
                            userId: s.id,
                            sourceAnalyticsLocations: x
                        })
                    }
                }, t)
            })
        })]
    }) : null
}