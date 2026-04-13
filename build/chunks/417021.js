/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => v
});
var i = t(627968),
    a = t(311907),
    l = t(397927),
    r = t(793574),
    d = t(688810),
    s = t(632738),
    o = t(994500),
    c = t(562153),
    _ = t(183555),
    u = t(672385),
    p = t(950191),
    A = t(249790),
    g = t(946356),
    h = t(254828),
    m = t(783123),
    I = t(652215),
    f = t(996988),
    x = t(985018),
    b = t(255412);

function v(e) {
    let {
        user: n,
        guildId: t,
        channelId: v,
        messageId: E,
        roleId: y,
        transitionState: j,
        onHide: T,
        sourceAnalyticsLocations: S = []
    } = e, N = t === I.ME ? void 0 : t, C = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
        analyticsLocations: R
    } = (0, d.Ay)([...S, C ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), P = (0, _.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: N,
        channelId: v,
        messageId: E,
        roleId: y
    }), L = [{
        icon: l.yr3,
        description: x.intl.string(x.t.kcuWva)
    }, {
        icon: l.yr3,
        description: x.intl.string(C ? x.t.QxrDY1 : x.t.W6fjkS)
    }], O = (0, p.Ay)(n.id, N), D = c.Ay.getName(O?.guildId, v, n), k = x.intl.formatToPlainString(x.t.KRe1Fk, {
        name: D
    });
    return (0, i.jsx)(d.f5, {
        value: R,
        children: (0, i.jsx)(_.of, {
            value: P,
            isLoaded: O?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: j,
                className: b.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(g.A, {
                    user: n,
                    displayProfile: O,
                    themeType: f.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: b.Tp
                    }), (0, i.jsxs)("div", {
                        className: b.Qs,
                        children: [(0, i.jsx)(A.A, {
                            user: n,
                            guildId: N
                        }), (0, i.jsxs)("div", {
                            className: b.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: x.intl.string(x.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: x.intl.format(C ? x.t.T7QiLn : x.t.MnEowy, {
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
                                return (0, i.jsx)(s.PQ, {
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
                                    T(), (0, u.Wn)({
                                        action: C ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: R,
                                        ...P
                                    })
                                }
                            }), (0, i.jsx)(h.A, {
                                userId: n.id,
                                onClick: () => {
                                    T(), (0, u.Wn)({
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