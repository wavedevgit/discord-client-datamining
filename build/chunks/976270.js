/** chunk id: 976270, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(630054),
    r = n(793574),
    a = n(688810),
    d = n(915089),
    o = n(562153),
    c = n(183555),
    u = n(950191),
    A = n(722868),
    x = n(716804),
    _ = n(718019),
    m = n(31432),
    p = n(915614),
    f = n(559506),
    h = n(946356),
    I = n(810396),
    g = n(570314),
    j = n(490752),
    b = n(571077),
    N = n(587168),
    v = n(982985),
    E = n(159218),
    T = n(240783),
    C = n(371843),
    y = n(518477),
    L = n(652215),
    S = n(996988),
    O = n(985018),
    P = n(763563);

function R(e) {
    let {
        user: t,
        currentUser: n,
        guildId: R,
        channelId: M,
        messageId: G,
        roleId: k,
        sessionId: D,
        initialTabSection: U,
        initialScrollTarget: B,
        transitionState: F,
        openedAt: V,
        onClose: w,
        sourceAnalyticsLocations: z = [],
        showGuildProfile: H
    } = e, W = R === L.ME ? void 0 : R, Y = (0, u.Ay)(t.id, H ? W : void 0), X = o.Ay.getName(W, M, t), Q = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, a.Ay)([...z, r.A.USER_PROFILE_MODAL]), $ = (0, c.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: D,
        guildId: W,
        channelId: M,
        messageId: G,
        roleId: k
    }), J = (0, C.A)(t), Z = (0, A.A)({
        user: t,
        guildId: W,
        channelId: M,
        displayProfile: Y,
        onClose: w
    });
    return (0, i.jsx)(a.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: $,
            openedAt: V,
            fetchStartedAt: Y?.fetchStartedAt,
            fetchEndedAt: Y?.fetchEndedAt,
            isLoaded: Y?.isLoaded,
            children: (0, i.jsx)(x.N, {
                value: B,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: P.zr,
                    hideShadow: !0,
                    "aria-labelledby": Q,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: Q,
                                children: O.intl.format(O.t.KRe1Fk, {
                                    name: X
                                })
                            })
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: t,
                            displayProfile: Y,
                            themeType: S.d.MODAL,
                            children: [(0, i.jsx)(N.A, {
                                children: (0, i.jsx)(j.A, {
                                    user: t,
                                    guildId: W,
                                    viewProfileItem: Z
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(p.A, {
                                    user: t,
                                    displayProfile: Y,
                                    themeType: S.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: P.El,
                                    children: [(0, i.jsx)(_.A, {
                                        user: t,
                                        displayProfile: Y,
                                        guildId: W,
                                        channelId: M,
                                        themeType: S.d.MODAL
                                    }), (0, i.jsx)(E.A, {
                                        user: t,
                                        themeType: S.d.MODAL,
                                        hasEntered: F === s.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(v.e, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(v.l, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: t,
                                            guildId: W
                                        }), (0, i.jsx)(g.A, {
                                            user: t
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: t.id,
                                className: P.Fd
                            }), (0, i.jsxs)("div", {
                                className: P.rf,
                                children: [(0, i.jsx)(I.A, {
                                    className: P.Xh,
                                    user: t,
                                    guildId: W,
                                    nickname: X,
                                    pronouns: Y?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(m.A, {
                                        displayProfile: Y,
                                        themeType: S.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, i.jsx)(T.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: Y,
                                    guildId: W,
                                    items: J,
                                    initialSection: U ?? y.RP.BOT_INFO,
                                    onClose: w
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
}