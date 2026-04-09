/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    a = t(311907),
    r = t(397927),
    l = t(793574),
    o = t(688810),
    s = t(632738),
    d = t(994500),
    c = t(562153),
    _ = t(183555),
    u = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    m = t(254828),
    f = t(783123),
    h = t(652215),
    x = t(996988),
    I = t(985018),
    b = t(255412);

function v(e) {
    let {
        user: n,
        guildId: t,
        channelId: v,
        messageId: E,
        roleId: j,
        transitionState: y,
        onHide: C,
        sourceAnalyticsLocations: T = []
    } = e, S = t === h.ME ? void 0 : t, N = (0, a.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, o.Ay)([...T, N ? l.A.BLOCKED_PROFILE_MODAL : l.A.IGNORED_PROFILE_MODAL]), L = (0, _.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: S,
        channelId: v,
        messageId: E,
        roleId: j
    }), P = [{
        icon: r.yr3,
        description: I.intl.string(I.t.kcuWva)
    }, {
        icon: r.yr3,
        description: I.intl.string(N ? I.t.QxrDY1 : I.t.W6fjkS)
    }], D = (0, p.Ay)(n.id, S), O = c.Ay.getName(D?.guildId, v, n), k = I.intl.formatToPlainString(I.t.KRe1Fk, {
        name: O
    });
    return (0, i.jsx)(o.f5, {
        value: R,
        children: (0, i.jsx)(_.of, {
            value: L,
            isLoaded: D?.isLoaded,
            children: (0, i.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: b.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: D,
                    themeType: x.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: b.Tp
                    }), (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, i.jsx)(A.A, {
                            user: n,
                            guildId: S
                        }), (0, i.jsxs)("div", {
                            className: b.FS,
                            children: [(0, i.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: I.intl.string(I.t.b33pLD)
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: I.intl.format(N ? I.t.T7QiLn : I.t.MnEowy, {
                                    username: O
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.vb,
                            children: P.map((e, n) => {
                                let {
                                    icon: t,
                                    description: a
                                } = e;
                                return (0, i.jsx)(s.PQ, {
                                    icon: t,
                                    title: a,
                                    titleVariant: "text-md/normal",
                                    color: r.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(r.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(f.A, {
                                size: "md",
                                isBlocked: N,
                                onClick: () => {
                                    C(), (0, u.Wn)({
                                        action: N ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...L
                                    })
                                }
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                onClick: () => {
                                    C(), (0, u.Wn)({
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