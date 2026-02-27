/** chunk id: 417021, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => b
});
var i = n(627968),
    s = n(311907),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    d = n(632738),
    o = n(994500),
    c = n(562153),
    u = n(183555),
    A = n(672385),
    x = n(950191),
    _ = n(249790),
    m = n(946356),
    p = n(254828),
    f = n(783123),
    h = n(652215),
    I = n(996988),
    g = n(985018),
    j = n(599929);

function b(e) {
    let {
        user: t,
        guildId: n,
        channelId: b,
        messageId: N,
        roleId: v,
        transitionState: E,
        openedAt: T,
        onHide: C,
        sourceAnalyticsLocations: y = []
    } = e, L = n === h.ME ? void 0 : n, S = (0, s.bG)([o.A], () => o.A.isBlocked(t.id)), {
        analyticsLocations: O
    } = (0, a.Ay)([...y, S ? r.A.BLOCKED_PROFILE_MODAL : r.A.IGNORED_PROFILE_MODAL]), P = (0, u.pb)({
        layout: "MODAL_V2",
        userId: t.id,
        showGuildProfile: !0,
        guildId: L,
        channelId: b,
        messageId: N,
        roleId: v
    }), R = [{
        icon: l.yr3,
        description: g.intl.string(g.t.kcuWva)
    }, {
        icon: l.yr3,
        description: g.intl.string(S ? g.t.QxrDY1 : g.t.W6fjkS)
    }], M = (0, x.Ay)(t.id, L), G = c.Ay.getName(M?.guildId, b, t), k = g.intl.formatToPlainString(g.t.KRe1Fk, {
        name: G
    });
    return (0, i.jsx)(a.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: P,
            openedAt: T,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: E,
                className: j.zr,
                "aria-label": k,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(m.A, {
                    user: t,
                    displayProfile: M,
                    themeType: I.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: j.Tp
                    }), (0, i.jsxs)("div", {
                        className: j.Qs,
                        children: [(0, i.jsx)(_.A, {
                            user: t,
                            guildId: L
                        }), (0, i.jsxs)("div", {
                            className: j.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: g.intl.string(g.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: g.intl.format(S ? g.t.T7QiLn : g.t.MnEowy, {
                                    username: G
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: j.vb,
                            children: R.map((e, t) => {
                                let {
                                    icon: n,
                                    description: s
                                } = e;
                                return (0, i.jsx)(d.PQ, {
                                    icon: n,
                                    title: s,
                                    titleVariant: "text-md/normal",
                                    color: l.LU0.colors.TEXT_DEFAULT.css
                                }, t)
                            })
                        }), (0, i.jsxs)(l.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(f.A, {
                                size: "md",
                                isBlocked: S,
                                onClick: () => {
                                    C(), (0, A.Wn)({
                                        action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                        analyticsLocations: O,
                                        ...P
                                    })
                                }
                            }), (0, i.jsx)(p.A, {
                                userId: t.id,
                                onClick: () => {
                                    C(), (0, A.Wn)({
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