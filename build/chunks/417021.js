/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    s = t(311907),
    a = t(397927),
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
    m = t(254828),
    g = t(783123),
    I = t(652215),
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
        onHide: E,
        sourceAnalyticsLocations: y = []
    } = e, T = t === I.ME ? void 0 : t, L = (0, s.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: P
    } = (0, r.Ay)([...y, L ? l.A.BLOCKED_PROFILE_MODAL : l.A.IGNORED_PROFILE_MODAL]), O = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: j,
        messageId: v,
        roleId: C
    }), S = [{
        icon: a.yr3,
        description: h.intl.string(h.t.kcuWva)
    }, {
        icon: a.yr3,
        description: h.intl.string(L ? h.t.QxrDY1 : h.t.W6fjkS)
    }], R = (0, A.Ay)(n.id, T), k = c.Ay.getName(R?.guildId, j, n), B = h.intl.formatToPlainString(h.t.KRe1Fk, {
        name: k
    });
    return (0, i.jsx)(r.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: O,
            isLoaded: R?.isLoaded,
            children: (0, i.jsx)(a.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: b.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: n,
                    displayProfile: R,
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
                            children: [(0, i.jsx)(a.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: h.intl.string(h.t.b33pLD)
                            }), (0, i.jsx)(a.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.format(L ? h.t.T7QiLn : h.t.MnEowy, {
                                    username: k
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.vb,
                            children: S.map((e, n) => {
                                let {
                                    icon: t,
                                    description: s
                                } = e;
                                return (0, i.jsx)(o.PQ, {
                                    icon: t,
                                    title: s,
                                    titleVariant: "text-md/normal",
                                    color: a.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(a.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(g.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    E(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                onClick: () => {
                                    E(), (0, _.Wn)({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
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