/** Chunk was on 97492 **/
/** chunk id: 179242, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => y
});
var r = n(627968);
n(64700);
var l = n(163126),
    i = n(688810),
    s = n(114212),
    a = n(345942),
    o = n(183555),
    c = n(913453),
    u = n(229187),
    d = n(657331),
    p = n(21241),
    h = n(503062),
    f = n(51943),
    g = n(946356),
    m = n(359656),
    b = n(985018),
    A = n(576968);

function y(e) {
    let {
        user: t,
        channelId: n
    } = e, {
        analyticsLocations: y
    } = (0, i.Ay)(), {
        context: _
    } = (0, o.NJ)(), O = (0, l.A)(), {
        mutualFriendsCount: j,
        mutualFriends: v,
        mutualGuilds: x
    } = (0, c.A)(t), E = !t.bot && null != j && j > 0, C = null != x && x.length > 0;
    return E || C ? (0, r.jsxs)(g.A.Overlay, {
        className: A.Lw,
        children: [C && (0, r.jsx)(m.A, {
            section: "MUTUAL_GUILDS",
            header: b.intl.string(b.t["4lTDZq"]),
            listClassName: A.p_,
            items: x.map(e => {
                let {
                    guild: n,
                    nick: l
                } = e;
                return (0, r.jsx)(f.A, {
                    user: t,
                    guild: n,
                    nick: l,
                    onSelect: () => (0, a.u)(n.id)
                }, n.id)
            })
        }), C && E && (0, r.jsx)(p.A, {
            className: A.yF
        }), E && (0, r.jsx)(m.A, {
            section: "MUTUAL_FRIENDS",
            header: b.intl.string(b.t["0mTJ3j"]),
            listClassName: A.p_,
            onExpand: () => (0, u.A)(t.id, O),
            items: null == v ? Array.from({
                length: j
            }).map((e, t) => (0, r.jsxs)("div", {
                className: A.nC,
                children: [(0, r.jsx)(s.FQ, {
                    width: 40,
                    opacity: .08
                }), (0, r.jsx)(s.FQ, {
                    width: 135,
                    opacity: .08
                })]
            }, t)) : v.map(e => {
                let {
                    key: t,
                    user: l,
                    status: i
                } = e;
                return (0, r.jsx)(h.A, {
                    user: l,
                    status: i,
                    channelId: n,
                    onSelect: () => {
                        var e, t;
                        (0, d.openUserProfileModal)((e = function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {},
                                    r = Object.keys(n);
                                "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable
                                }))), r.forEach(function(t) {
                                    var r;
                                    r = n[t], t in e ? Object.defineProperty(e, t, {
                                        value: r,
                                        enumerable: !0,
                                        configurable: !0,
                                        writable: !0
                                    }) : e[t] = r
                                })
                            }
                            return e
                        }({}, _), t = t = {
                            userId: l.id,
                            sourceAnalyticsLocations: y
                        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
                            var n = Object.keys(e);
                            if (Object.getOwnPropertySymbols) {
                                var r = Object.getOwnPropertySymbols(e);
                                n.push.apply(n, r)
                            }
                            return n
                        })(Object(t)).forEach(function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                        }), e))
                    }
                }, t)
            })
        })]
    }) : null
}