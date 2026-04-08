/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => E
});
var i = t(627968),
    a = t(311907),
    l = t(397927),
    r = t(793574),
    s = t(688810),
    d = t(632738),
    o = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    I = t(254828),
    m = t(783123),
    f = t(652215),
    x = t(996988),
    h = t(985018),
    v = t(336323);

function E(e) {
    let {
        user: n,
        guildId: t,
        channelId: E,
        messageId: b,
        roleId: y,
        transitionState: j,
        onHide: T,
        sourceAnalyticsLocations: N = []
    } = e, S = t === f.ME ? void 0 : t, C = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, s.Ay)([...N, C ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), L = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: S,
        channelId: E,
        messageId: b,
        roleId: y
    }), P = [{
        icon: l.yr3,
        description: h.intl.string(h.t.kcuWva)
    }, {
        icon: l.yr3,
        description: h.intl.string(C ? h.t.QxrDY1 : h.t.W6fjkS)
    }], O = (0, p.Ay)(n.id, S), D = c.Ay.getName(O?.guildId, E, n), U = h.intl.formatToPlainString(h.t.KRe1Fk, {
        name: D
    });
    return (0, i.jsx)(s.f5, {
        value: R,
        children: (0, i.jsx)(u.of, {
            value: L,
            isLoaded: O?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: j,
                className: v.zr,
                "aria-label": U,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: O,
                    themeType: x.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: v.Tp
                    }), (0, i.jsxs)("div", {
                        className: v.Qs,
                        children: [(0, i.jsx)(A.A, {
                            user: n,
                            guildId: S
                        }), (0, i.jsxs)("div", {
                            className: v.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: h.intl.string(h.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.format(C ? h.t.T7QiLn : h.t.MnEowy, {
                                    username: D
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: v.vb,
                            children: P.map((e, n) => {
                                let {
                                    icon: t,
                                    description: a
                                } = e;
                                return (0, i.jsx)(d.PQ, {
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
                                isBlocked: C,
                                onClick: () => {
                                    T(), (0, _.Wn)({
                                        action: C ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...L
                                    })
                                }
                            }), (0, i.jsx)(I.A, {
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