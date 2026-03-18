/** chunk id: 417021 params = (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(311907),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    o = n(632738),
    d = n(994500),
    c = n(562153),
    u = n(183555),
    _ = n(672385),
    A = n(950191),
    m = n(249790),
    x = n(946356),
    p = n(254828),
    f = n(783123),
    h = n(652215),
    g = n(996988),
    I = n(985018),
    j = n(599929);

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: b,
        messageId: v,
        roleId: C,
        transitionState: N,
        onHide: y,
        sourceAnalyticsLocations: E = []
    } = e, T = n === h.ME ? void 0 : n, L = (0, s.bG)([d.A], () => d.A.isBlocked(t.id)), {
        analyticsLocations: P
    } = (0, l.Ay)([...E, L ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]), O = (0, u.pb)({
        layout: "MODAL_V2",
        userId: t.id,
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
    }], S = (0, A.Ay)(t.id, T), M = c.Ay.getName(S?.guildId, b, t), G = I.intl.formatToPlainString(I.t.KRe1Fk, {
        name: M
    });
    return (0, i.jsx)(l.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: O,
            isLoaded: S?.isLoaded,
            children: (0, i.jsx)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: N,
                className: j.zr,
                "aria-label": G,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(x.A, {
                    user: t,
                    displayProfile: S,
                    themeType: g.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: j.Tp
                    }), (0, i.jsxs)("div", {
                        className: j.Qs,
                        children: [(0, i.jsx)(m.A, {
                            user: t,
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
                            children: R.map((e, t) => {
                                let {
                                    icon: n,
                                    description: s
                                } = e;
                                return (0, i.jsx)(o.PQ, {
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
                                isBlocked: L,
                                onClick: () => {
                                    y(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, i.jsx)(p.A, {
                                userId: t.id,
                                onClick: () => {
                                    y(), (0, _.Wn)({
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