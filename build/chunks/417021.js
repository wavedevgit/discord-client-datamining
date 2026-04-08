/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968),
    a = t(311907),
    r = t(397927),
    l = t(793574),
    s = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    m = t(254828),
    I = t(783123),
    f = t(652215),
    h = t(996988),
    x = t(985018),
    v = t(255412);

function E(e) {
    let {
        user: n,
        guildId: t,
        channelId: E,
        messageId: b,
        roleId: C,
        transitionState: y,
        onHide: T,
        sourceAnalyticsLocations: j = []
    } = e, S = t === f.ME ? void 0 : t, N = (0, a.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, s.Ay)([...j, N ? l.A.BLOCKED_PROFILE_MODAL : l.A.IGNORED_PROFILE_MODAL]), L = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: S,
        channelId: E,
        messageId: b,
        roleId: C
    }), P = [{
        icon: r.yr3,
        description: x.intl.string(x.t.kcuWva)
    }, {
        icon: r.yr3,
        description: x.intl.string(N ? x.t.QxrDY1 : x.t.W6fjkS)
    }], O = (0, p.Ay)(n.id, S), U = c.Ay.getName(O?.guildId, E, n), k = x.intl.formatToPlainString(x.t.KRe1Fk, {
        name: U
    });
    return (0, i.jsx)(s.f5, {
        value: R,
        children: (0, i.jsx)(u.of, {
            value: L,
            isLoaded: O?.isLoaded,
            children: (0, i.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: v.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: O,
                    themeType: h.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: v.Tp
                    }), (0, i.jsxs)("div", {
                        className: v.Qs,
                        children: [(0, i.jsx)(A.A, {
                            user: n,
                            guildId: S
                        }), (0, i.jsxs)("div", {
                            className: v.FS,
                            children: [(0, i.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: x.intl.string(x.t.b33pLD)
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: x.intl.format(N ? x.t.T7QiLn : x.t.MnEowy, {
                                    username: U
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: v.vb,
                            children: P.map((e, n) => {
                                let {
                                    icon: t,
                                    description: a
                                } = e;
                                return (0, i.jsx)(o.PQ, {
                                    icon: t,
                                    title: a,
                                    titleVariant: "text-md/normal",
                                    color: r.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(r.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(I.A, {
                                size: "md",
                                isBlocked: N,
                                onClick: () => {
                                    T(), (0, _.Wn)({
                                        action: N ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...L
                                    })
                                }
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                onClick: () => {
                                    T(), (0, _.Wn)({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...L
                                    })
                                }
                            })]
                        })]
                    })]
                })
            })
        })
    })
}