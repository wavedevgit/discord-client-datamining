/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => j
});
var i = t(627968),
    a = t(311907),
    s = t(397927),
    r = t(793574),
    l = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    _ = t(672385),
    A = t(950191),
    p = t(249790),
    x = t(946356),
    f = t(254828),
    m = t(783123),
    g = t(652215),
    I = t(996988),
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
    } = e, T = t === g.ME ? void 0 : t, L = (0, a.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: P
    } = (0, l.Ay)([...y, L ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), O = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: j,
        messageId: v,
        roleId: C
    }), S = [{
        icon: s.yr3,
        description: h.intl.string(h.t.kcuWva)
    }, {
        icon: s.yr3,
        description: h.intl.string(L ? h.t.QxrDY1 : h.t.W6fjkS)
    }], R = (0, A.Ay)(n.id, T), k = c.Ay.getName(R?.guildId, j, n), B = h.intl.formatToPlainString(h.t.KRe1Fk, {
        name: k
    });
    return (0, i.jsx)(l.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: O,
            isLoaded: R?.isLoaded,
            children: (0, i.jsx)(s.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: b.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(x.A, {
                    user: n,
                    displayProfile: R,
                    themeType: I.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: b.Tp
                    }), (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, i.jsx)(p.A, {
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
                                    username: k
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.vb,
                            children: S.map((e, n) => {
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
                            children: [(0, i.jsx)(m.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    E(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, i.jsx)(f.A, {
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