/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    a = t(311907),
    l = t(397927),
    s = t(793574),
    r = t(688810),
    d = t(632738),
    o = t(994500),
    c = t(562153),
    u = t(183555),
    A = t(672385),
    _ = t(950191),
    p = t(249790),
    x = t(946356),
    g = t(254828),
    m = t(783123),
    I = t(652215),
    f = t(996988),
    b = t(985018),
    h = t(255412);

function v(e) {
    let {
        user: n,
        guildId: t,
        channelId: v,
        messageId: j,
        roleId: C,
        transitionState: N,
        onHide: y,
        sourceAnalyticsLocations: E = []
    } = e, T = t === I.ME ? void 0 : t, L = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
        analyticsLocations: O
    } = (0, r.Ay)([...E, L ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), S = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: v,
        messageId: j,
        roleId: C
    }), P = [{
        icon: l.yr3,
        description: b.intl.string(b.t.kcuWva)
    }, {
        icon: l.yr3,
        description: b.intl.string(L ? b.t.QxrDY1 : b.t.W6fjkS)
    }], k = (0, _.Ay)(n.id, T), M = c.Ay.getName(k?.guildId, v, n), B = b.intl.formatToPlainString(b.t.KRe1Fk, {
        name: M
    });
    return (0, i.jsx)(r.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: S,
            isLoaded: k?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: h.zr,
                "aria-label": B,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(x.A, {
                    user: n,
                    displayProfile: k,
                    themeType: f.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: h.Tp
                    }), (0, i.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, i.jsx)(p.A, {
                            user: n,
                            guildId: T
                        }), (0, i.jsxs)("div", {
                            className: h.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: b.intl.string(b.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: b.intl.format(L ? b.t.T7QiLn : b.t.MnEowy, {
                                    username: M
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: h.vb,
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
                                isBlocked: L,
                                onClick: () => {
                                    y(), (0, A.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...S
                                    })
                                }
                            }), (0, i.jsx)(g.A, {
                                userId: n.id,
                                onClick: () => {
                                    y(), (0, A.Wn)({
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