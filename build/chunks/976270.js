/** chunk id: 976270 params = (module,exports,require) **/
n.d(t, {
    A: () => P
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(630054),
    l = n(793574),
    a = n(688810),
    d = n(915089),
    o = n(562153),
    c = n(183555),
    u = n(950191),
    A = n(722868),
    m = n(716804),
    x = n(718019),
    f = n(31432),
    p = n(915614),
    _ = n(559506),
    h = n(946356),
    g = n(810396),
    I = n(570314),
    j = n(490752),
    b = n(571077),
    v = n(587168),
    N = n(982985),
    C = n(159218),
    y = n(240783),
    E = n(371843),
    T = n(518477),
    L = n(652215),
    O = n(996988),
    R = n(985018),
    S = n(763563);

function P(e) {
    let {
        user: t,
        currentUser: n,
        guildId: P,
        channelId: M,
        messageId: G,
        roleId: k,
        sessionId: U,
        initialTabSection: w,
        initialScrollTarget: D,
        transitionState: B,
        openedAt: F,
        onClose: V,
        sourceAnalyticsLocations: z = [],
        showGuildProfile: W
    } = e, H = P === L.ME ? void 0 : P, Y = (0, u.Ay)(t.id, W ? H : void 0), X = o.Ay.getName(H, M, t), Q = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, a.Ay)([...z, l.A.USER_PROFILE_MODAL]), $ = (0, c.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: U,
        guildId: H,
        channelId: M,
        messageId: G,
        roleId: k
    }), J = (0, E.A)(t), Z = (0, A.A)({
        user: t,
        guildId: H,
        channelId: M,
        displayProfile: Y,
        onClose: V
    });
    return (0, i.jsx)(a.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: $,
            openedAt: F,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, i.jsx)(m.N, {
                value: D,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: B,
                    className: S.zr,
                    hideShadow: !0,
                    "aria-labelledby": Q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: Q,
                                children: R.intl.format(R.t.KRe1Fk, {
                                    name: X
                                })
                            })
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: t,
                            displayProfile: Y,
                            themeType: O.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(j.A, {
                                    user: t,
                                    guildId: H,
                                    viewProfileItem: Z
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(p.A, {
                                    user: t,
                                    displayProfile: Y,
                                    themeType: O.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: H,
                                        channelId: M,
                                        themeType: O.d.MODAL
                                    }), (0, i.jsx)(C.A, {
                                        user: t,
                                        themeType: O.d.MODAL,
                                        hasEntered: B === s.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: S.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: S.jS,
                                            children: (0, i.jsx)(N.e, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: S.pg,
                                            children: (0, i.jsx)(N.l, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: t,
                                            guildId: H
                                        }), (0, i.jsx)(I.A, {
                                            user: t
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(_.A, {
                                userId: t.id,
                                className: S.Fd
                            }), (0, i.jsxs)("div", {
                                className: S.rf,
                                children: [(0, i.jsx)(g.A, {
                                    className: S.Xh,
                                    user: t,
                                    guildId: H,
                                    nickname: X,
                                    pronouns: Y?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(f.A, {
                                        displayProfile: Y,
                                        themeType: O.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: Y,
                                    guildId: H,
                                    items: J,
                                    initialSection: w ?? T.RP.BOT_INFO,
                                    onClose: V
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
}