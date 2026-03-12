/** chunk id: 417021 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(311907),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    d = n(632738),
    o = n(994500),
    c = n(562153),
    u = n(183555),
    A = n(672385),
    m = n(950191),
    x = n(249790),
    p = n(946356),
    _ = n(254828),
    f = n(783123),
    h = n(652215),
    g = n(996988),
    I = n(985018),
    j = n(872563);

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: b,
        messageId: v,
        roleId: N,
        transitionState: C,
        openedAt: y,
        onHide: E,
        sourceAnalyticsLocations: T = []
    } = e, L = n === h.ME ? void 0 : n, P = (0, s.bG)([o.A], () => o.A.isBlocked(t.id)), {
        analyticsLocations: O
    } = (0, l.Ay)([...T, P ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]), S = (0, u.pb)({
        layout: "MODAL_V2",
        userId: t.id,
        showGuildProfile: !0,
        guildId: L,
        channelId: b,
        messageId: v,
        roleId: N
    }), R = [{
        icon: r.yr3,
        description: I.intl.string(I.t.kcuWva)
    }, {
        icon: r.yr3,
        description: I.intl.string(P ? I.t.QxrDY1 : I.t.W6fjkS)
    }], M = (0, m.Ay)(t.id, L), G = c.Ay.getName(M?.guildId, b, t), k = I.intl.formatToPlainString(I.t.KRe1Fk, {
        name: G
    });
    return (0, i.jsx)(l.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: S,
            openedAt: y,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, i.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: C,
                className: j.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: t,
                    displayProfile: M,
                    themeType: g.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: j.Tp
                    }), (0, i.jsxs)("div", {
                        className: j.Qs,
                        children: [(0, i.jsx)(x.A, {
                            user: t,
                            guildId: L
                        }), (0, i.jsxs)("div", {
                            className: j.FS,
                            children: [(0, i.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: I.intl.string(I.t.b33pLD)
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: I.intl.format(P ? I.t.T7QiLn : I.t.MnEowy, {
                                    username: G
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: j.vb,
                            children: R.map((e, t) => {
                                let {
                                    icon: n,
                                    description: s
                                } = e;
                                return (0, i.jsx)(d.PQ, {
                                    icon: n,
                                    title: s,
                                    titleVariant: "text-md/normal",
                                    color: r.LU0.colors.TEXT_DEFAULT.css
                                }, t)
                            })
                        }), (0, i.jsxs)(r.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(f.A, {
                                size: "md",
                                isBlocked: P,
                                onClick: () => {
                                    E(), (0, A.Wn)({
                                        action: P ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...S
                                    })
                                }
                            }), (0, i.jsx)(_.A, {
                                userId: t.id,
                                onClick: () => {
                                    E(), (0, A.Wn)({
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