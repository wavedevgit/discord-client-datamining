/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968),
    a = t(311907),
    l = t(397927),
    r = t(793574),
    s = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    I = t(254828),
    m = t(783123),
    f = t(652215),
    h = t(996988),
    x = t(985018),
    v = t(336323);

function E(e) {
    let {
        user: n,
        guildId: t,
        channelId: E,
        messageId: b,
        roleId: y,
        transitionState: C,
        onHide: j,
        sourceAnalyticsLocations: S = []
    } = e, T = t === f.ME ? void 0 : t, N = (0, a.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, s.Ay)([...S, N ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), L = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: E,
        messageId: b,
        roleId: y
    }), P = [{
        icon: l.yr3,
        description: x.intl.string(x.t.kcuWva)
    }, {
        icon: l.yr3,
        description: x.intl.string(N ? x.t.QxrDY1 : x.t.W6fjkS)
    }], O = (0, p.Ay)(n.id, T), k = c.Ay.getName(O?.guildId, E, n), D = x.intl.formatToPlainString(x.t.KRe1Fk, {
        name: k
    });
    return (0, i.jsx)(s.f5, {
        value: R,
        children: (0, i.jsx)(u.of, {
            value: L,
            isLoaded: O?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: C,
                className: v.zr,
                "aria-label": D,
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
                            guildId: T
                        }), (0, i.jsxs)("div", {
                            className: v.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: x.intl.string(x.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: x.intl.format(N ? x.t.T7QiLn : x.t.MnEowy, {
                                    username: k
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
                                    color: l.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(l.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(m.A, {
                                size: "md",
                                isBlocked: N,
                                onClick: () => {
                                    j(), (0, _.Wn)({
                                        action: N ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...L
                                    })
                                }
                            }), (0, i.jsx)(I.A, {
                                userId: n.id,
                                onClick: () => {
                                    j(), (0, _.Wn)({
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