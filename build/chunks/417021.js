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
    _ = t(672385),
    A = t(950191),
    x = t(249790),
    p = t(946356),
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
        transitionState: y,
        onHide: N,
        sourceAnalyticsLocations: E = []
    } = e, T = t === I.ME ? void 0 : t, L = (0, a.bG)([o.A], () => o.A.isBlocked(n.id)), {
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
    return (0, i.jsx)(r.f5, {
        value: P,
        children: (0, i.jsx)(u.of, {
            value: O,
            isLoaded: k?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: y,
                className: h.zr,
                "aria-label": M,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(p.A, {
                    user: n,
                    displayProfile: k,
                    themeType: f.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: h.Tp
                    }), (0, i.jsxs)("div", {
                        className: h.Qs,
                        children: [(0, i.jsx)(x.A, {
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
                                    username: B
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: h.vb,
                            children: S.map((e, n) => {
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
                                    N(), (0, _.Wn)({
                                        action: L ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: P,
                                        ...O
                                    })
                                }
                            }), (0, i.jsx)(g.A, {
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