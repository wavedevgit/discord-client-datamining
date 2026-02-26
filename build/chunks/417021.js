/** chunk id: 417021, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => b
});
var i = t(627968),
    s = t(311907),
    l = t(397927),
    a = t(793574),
    r = t(688810),
    d = t(632738),
    c = t(994500),
    o = t(562153),
    u = t(183555),
    A = t(672385),
    x = t(950191),
    m = t(249790),
    _ = t(946356),
    p = t(254828),
    f = t(783123),
    h = t(652215),
    I = t(996988),
    j = t(985018),
    g = t(872563);

function b(e) {
    let {
        user: n,
        guildId: t,
        channelId: b,
        messageId: N,
        roleId: v,
        transitionState: T,
        openedAt: E,
        onHide: y,
        sourceAnalyticsLocations: C = []
    } = e, L = t === h.ME ? void 0 : t, S = (0, s.bG)([c.A], () => c.A.isBlocked(n.id)), {
        analyticsLocations: O
    } = (0, r.Ay)([...C, S ? a.A.BLOCKED_PROFILE_MODAL : a.A.IGNORED_PROFILE_MODAL]), P = (0, u.pb)({
        layout: "MODAL_V2",
        userId: n.id,
        showGuildProfile: !0,
        guildId: L,
        channelId: b,
        messageId: N,
        roleId: v
    }), R = [{
        icon: l.yr3,
        description: j.intl.string(j.t.kcuWva)
    }, {
        icon: l.yr3,
        description: j.intl.string(S ? j.t.QxrDY1 : j.t.W6fjkS)
    }], M = (0, x.Ay)(n.id, L), G = o.Ay.getName(M?.guildId, b, n), D = j.intl.formatToPlainString(j.t.KRe1Fk, {
        name: G
    });
    return (0, i.jsx)(r.f5, {
        value: O,
        children: (0, i.jsx)(u.of, {
            value: P,
            openedAt: E,
            fetchStartedAt: M?.fetchStartedAt,
            fetchEndedAt: M?.fetchEndedAt,
            isLoaded: M?.isLoaded,
            children: (0, i.jsx)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: T,
                className: g.zr,
                "aria-label": D,
                parentComponent: "RestrictedUserProfileModalV2",
                children: (0, i.jsxs)(_.A, {
                    user: n,
                    displayProfile: M,
                    themeType: I.d.MODAL_V2,
                    children: [(0, i.jsx)("div", {
                        className: g.Tp
                    }), (0, i.jsxs)("div", {
                        className: g.Qs,
                        children: [(0, i.jsx)(m.A, {
                            user: n,
                            guildId: L
                        }), (0, i.jsxs)("div", {
                            className: g.FS,
                            children: [(0, i.jsx)(l.Heading, {
                                variant: "heading-xl/bold",
                                color: "text-default",
                                children: j.intl.string(j.t.b33pLD)
                            }), (0, i.jsx)(l.Text, {
                                variant: "text-md/medium",
                                color: "text-default",
                                children: j.intl.format(S ? j.t.T7QiLn : j.t.MnEowy, {
                                    username: G
                                })
                            })]
                        }), (0, i.jsx)("div", {
                            className: g.vb,
                            children: R.map((e, n) => {
                                let {
                                    icon: t,
                                    description: s
                                } = e;
                                return (0, i.jsx)(d.PQ, {
                                    icon: t,
                                    title: s,
                                    titleVariant: "text-md/normal",
                                    color: l.LU0.colors.TEXT_DEFAULT.css
                                }, n)
                            })
                        }), (0, i.jsxs)(l.BJc, {
                            align: "center",
                            children: [(0, i.jsx)(f.A, {
                                size: "md",
                                isBlocked: S,
                                onClick: () => {
                                    y(), (0, A.Wn)({
                                        action: S ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
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