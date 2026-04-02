/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    a = t(311907),
    s = t(397927),
    l = t(793574),
    r = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    A = t(950191),
    x = t(249790),
    p = t(946356),
    g = t(254828),
    I = t(783123),
    m = t(652215),
    f = t(996988),
    h = t(985018),
    b = t(336323);

function j(e) {
    let {
        user: n,
        guildId: t,
        channelId: j,
        messageId: v,
        roleId: C,
        transitionState: N,
        onHide: y,
        sourceAnalyticsLocations: E = []
    } = e, T = t === m.ME ? void 0 : t, L = (0, a.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: O
    } = (0, r.Ay)([...E, L ? l.A.BLOCKED_PROFILE_MODAL : l.A.IGNORED_PROFILE_MODAL]), S = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: j,
        messageId: v,
        roleId: C
    }), P = [{
        icon: s.yr3,
        description: h.intl.string(h.t.kcuWva)
    }, {
        icon: s.yr3,
        description: h.intl.string(L ? h.t.QxrDY1 : h.t.W6fjkS)
    }], k = (0, A.Ay)(n.id, T), R = c.Ay.getName(k?.guildId, j, n), B = h.intl.formatToPlainString(h.t.KRe1Fk, {
        name: R
    });
    return (0, i.jsx)(r.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: S,
            isLoaded: k?.isLoaded,
            children: (0, i.jsx)(s.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: b.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: n,
                    displayProfile: k,
                    themeType: f.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: b.Tp
                    }), (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, i.jsx)(x.A, {
                            user: n,
                            guildId: T
                        }), (0, i.jsxs)("div", {
                            className: b.FS,
                            children: [(0, i.jsx)(s.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: h.intl.string(h.t.b33pLD)
                            }), (0, i.jsx)(s.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.format(L ? h.t.T7QiLn : h.t.MnEowy, {
                                    username: R
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.vb,
                            children: P.map((e, n) => {
                                let {
                                    icon: t,
                                    description: a
                                } = e;
                                return (0, i.jsx)(o.PQ, {
                                    icon: t,
                                    title: a,
                                    titleVariant: "text-md/normal",
                                    color: s.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(s.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(I.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    y(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...S
                                    })
                                }
                            }), (0, i.jsx)(g.A, {
                                userId: n.id,
                                onClick: () => {
                                    y(), (0, _.Wn)({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...S
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