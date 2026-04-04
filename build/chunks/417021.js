/** chunk id: 417021 params = (module,exports,require) **/
i.d(n, {
    A: () => v
});
var t = i(627968),
    a = i(311907),
    l = i(397927),
    s = i(793574),
    r = i(688810),
    d = i(632738),
    o = i(994500),
    c = i(562153),
    u = i(183555),
    _ = i(672385),
    A = i(950191),
    p = i(249790),
    x = i(946356),
    g = i(254828),
    m = i(783123),
    I = i(652215),
    f = i(996988),
    b = i(985018),
    h = i(255412);

function v(e) {
    let {
        user: n,
        guildId: i,
        channelId: v,
        messageId: j,
        roleId: C,
        transitionState: y,
        onHide: N,
        sourceAnalyticsLocations: E = []
    } = e, T = i === I.ME ? void 0 : i, L = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
        analyticsLocations: P
    } = (0, r.Ay)([...E, L ? s.A.BLOCKED_PROFILE_MODAL : s.A.IGNORED_PROFILE_MODAL]), O = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        guildId: T,
        channelId: v,
        messageId: j,
        roleId: C
    }), S = [{
        icon: l.yr3,
        description: b.intl.string(b.t.kcuWva)
    }, {
        icon: l.yr3,
        description: b.intl.string(L ? b.t.QxrDY1 : b.t.W6fjkS)
    }], k = (0, A.Ay)(n.id, T), B = c.Ay.getName(k?.guildId, v, n), M = b.intl.formatToPlainString(b.t.KRe1Fk, {
        name: B
    });
    return (0, t.jsx)(r.f5, {
        value: P,
        children: (0, t.jsx)(u.of, {
            value: O,
            isLoaded: k?.isLoaded,
            children: (0, t.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: h.zr,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, t.jsxs)(x.A, {
                    user: n,
                    displayProfile: k,
                    themeType: f.d.MODAL_V2,
                    children: [(0, t.jsx)("div", {
                        className: h.Tp
                    }), (0, t.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, t.jsx)(p.A, {
                            user: n,
                            guildId: T
                        }), (0, t.jsxs)("div", {
                            className: h.FS,
                            children: [(0, t.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: b.intl.string(b.t.b33pLD)
                            }), (0, t.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: b.intl.format(L ? b.t.T7QiLn : b.t.MnEowy, {
                                    username: B
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: h.vb,
                            children: S.map((e, n) => {
                                let {
                                    icon: i,
                                    description: a
                                } = e;
                                return (0, t.jsx)(d.PQ, {
                                    icon: i,
                                    title: a,
                                    titleVariant: "text-md/normal",
                                    color: l.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, t.jsxs)(l.BJc, {
                            align: "center",
                            children: [(0, t.jsx)(m.A, {
                                size: "md",
                                isBlocked: L,
                                onClick: () => {
                                    N(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, t.jsx)(g.A, {
                                userId: n.id,
                                onClick: () => {
                                    N(), (0, _.Wn)({
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