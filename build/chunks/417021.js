/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => v
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
    f = t(254828),
    m = t(783123),
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
        onHide: T,
        sourceAnalyticsLocations: N = []
    } = e, S = t === h.ME ? void 0 : t, C = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, s.Ay)([...N, C ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), P = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: S,
        channelId: v,
        messageId: E,
        roleId: j
    }), L = [{
        icon: l.yr3,
        description: I.intl.string(I.t.kcuWva)
    }, {
        icon: l.yr3,
        description: I.intl.string(C ? I.t.QxrDY1 : I.t.W6fjkS)
    }], O = (0, p.Ay)(n.id, S), D = c.Ay.getName(O?.guildId, v, n), k = I.intl.formatToPlainString(I.t.KRe1Fk, {
        name: D
    });
    return (0, i.jsx)(s.f5, {
        value: R,
        children: (0, i.jsx)(u.of, {
            value: P,
            isLoaded: O?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: b.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: O,
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
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: I.intl.string(I.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: I.intl.format(C ? I.t.T7QiLn : I.t.MnEowy, {
                                    username: D
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: b.vb,
                            children: L.map((e, n) => {
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
                                        ...P
                                    })
                                }
                            }), (0, i.jsx)(f.A, {
                                userId: n.id,
                                onClick: () => {
                                    T(), (0, _.Wn)({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...P
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