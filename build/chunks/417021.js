/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    s = t(311907),
    l = t(397927),
    r = t(793574),
    a = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    A = t(672385),
    _ = t(950191),
    x = t(249790),
    p = t(946356),
    m = t(254828),
    I = t(783123),
    f = t(652215),
    g = t(996988),
    h = t(985018),
    b = t(336323);

function j(e) {
    let {
        user: n,
        guildId: t,
        channelId: j,
        messageId: C,
        roleId: E,
        transitionState: N,
        onHide: v,
        sourceAnalyticsLocations: T = []
    } = e, y = t === f.ME ? void 0 : t, L = (0, s.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: P
    } = (0, a.Ay)([...T, L ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), O = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: y,
        channelId: j,
        messageId: C,
        roleId: E
    }), S = [{
        icon: l.yr3,
        description: h.intl.string(h.t.kcuWva)
    }, {
        icon: l.yr3,
        description: h.intl.string(L ? h.t.QxrDY1 : h.t.W6fjkS)
    }], R = (0, _.Ay)(n.id, y), M = c.Ay.getName(R?.guildId, j, n), B = h.intl.formatToPlainString(h.t.KRe1Fk, {
        name: M
    });
    return (0, i.jsx)(a.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: O,
            isLoaded: R?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: b.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: n,
                    displayProfile: R,
                    themeType: g.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: b.Tp
                    }), (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, i.jsx)(x.A, {
                            user: n,
                            guildId: y
                        }), (0, i.jsxs)("div", {
                            className: b.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: h.intl.string(h.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: h.intl.format(L ? h.t.T7QiLn : h.t.MnEowy, {
                                    username: M
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
                                    color: l.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(l.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(I.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    v(), (0, A.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                onClick: () => {
                                    v(), (0, A.Wn)({
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