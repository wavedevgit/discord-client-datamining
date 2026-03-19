/** chunk id: 417021 params = (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968),
    s = t(311907),
    r = t(397927),
    a = t(793574),
    l = t(688810),
    o = t(632738),
    d = t(994500),
    c = t(562153),
    u = t(183555),
    A = t(672385),
    _ = t(950191),
    m = t(249790),
    x = t(946356),
    p = t(254828),
    f = t(783123),
    h = t(652215),
    g = t(996988),
    I = t(985018),
    j = t(872563);

function b(e) {
    let {
        user: n,
        guildId: t,
        channelId: b,
        messageId: v,
        roleId: C,
        transitionState: N,
        onHide: y,
        sourceAnalyticsLocations: E = []
    } = e, T = t === h.ME ? void 0 : t, L = (0, s.bG)([d.A], () => d.A.isBlocked(n.id)), {
        analyticsLocations: O
    } = (0, l.Ay)([...E, L ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]), P = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: b,
        messageId: v,
        roleId: C
    }), R = [{
        icon: r.yr3,
        description: I.intl.string(I.t.kcuWva)
    }, {
        icon: r.yr3,
        description: I.intl.string(L ? I.t.QxrDY1 : I.t.W6fjkS)
    }], S = (0, _.Ay)(n.id, T), M = c.Ay.getName(S?.guildId, b, n), k = I.intl.formatToPlainString(I.t.KRe1Fk, {
        name: M
    });
    return (0, i.jsx)(l.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: P,
            isLoaded: S?.isLoaded,
            children: (0, i.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: j.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(x.A, {
                    user: n,
                    displayProfile: S,
                    themeType: g.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: j.Tp
                    }), (0, i.jsxs)("div", {
                        className: j.Qs,
                        children: [(0, i.jsx)(m.A, {
                            user: n,
                            guildId: T
                        }), (0, i.jsxs)("div", {
                            className: j.FS,
                            children: [(0, i.jsx)(r.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: I.intl.string(I.t.b33pLD)
                            }), (0, i.jsx)(r.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: I.intl.format(L ? I.t.T7QiLn : I.t.MnEowy, {
                                    username: M
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: j.vb,
                            children: R.map((e, n) => {
                                let {
                                    icon: t,
                                    description: s
                                } = e;
                                return (0, i.jsx)(o.PQ, {
                                    icon: t,
                                    title: s,
                                    titleVariant: "text-md/normal",
                                    color: r.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(r.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(f.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    y(), (0, A.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...P
                                    })
                                }
                            }), (0, i.jsx)(p.A, {
                                userId: n.id,
                                onClick: () => {
                                    y(), (0, A.Wn)({
                                        action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                        analyticsLocations: O,
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