/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => R
});
var i = t(627968);
t(64700);
var s = t(397927),
    l = t(630054),
    r = t(793574),
    a = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    A = t(722868),
    _ = t(716804),
    x = t(718019),
    p = t(31432),
    m = t(915614),
    I = t(559506),
    f = t(946356),
    g = t(810396),
    h = t(570314),
    b = t(490752),
    j = t(571077),
    C = t(587168),
    E = t(982985),
    N = t(159218),
    v = t(240783),
    T = t(371843),
    y = t(518477),
    L = t(652215),
    P = t(996988),
    O = t(985018),
    S = t(853293);

function R(e) {
    let {
        user: n,
        currentUser: t,
        guildId: R,
        originGuildId: M,
        channelId: B,
        messageId: k,
        roleId: D,
        sessionId: G,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: w,
        sourceAnalyticsLocations: H = []
    } = e, z = R === L.ME ? void 0 : R, W = (0, u.Ay)(n.id, z), Y = d.Ay.getName(z, B, n), X = (0, o.GV)(), {
        analyticsLocations: K
    } = (0, a.Ay)([...H, r.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: z,
        channelId: B,
        messageId: k,
        roleId: D
    }), J = (0, T.A)(n), $ = (0, A.A)({
        user: n,
        guildId: M,
        channelId: B,
        displayProfile: W,
        onClose: w
    });
    return (0, i.jsx)(a.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(_.N, {
                value: V,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: S.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: X,
                                children: O.intl.format(O.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(f.A, {
                            user: n,
                            displayProfile: W,
                            themeType: P.d.MODAL,
                            children: [(0, i.jsx)(C.A, {
                                children: (0, i.jsx)(b.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: $
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(m.A, {
                                    user: n,
                                    displayProfile: W,
                                    themeType: P.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: n,
                                        displayProfile: W,
                                        guildId: z,
                                        channelId: B,
                                        themeType: P.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: n,
                                        themeType: P.d.MODAL,
                                        hasEntered: F === s.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: S.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: S.jS,
                                            children: (0, i.jsx)(E.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: S.pg,
                                            children: (0, i.jsx)(E.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(j.A, {
                                            user: n,
                                            guildId: z
                                        }), (0, i.jsx)(h.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(I.A, {
                                userId: n.id,
                                className: S.Fd
                            }), (0, i.jsxs)("div", {
                                className: S.rf,
                                children: [(0, i.jsx)(g.A, {
                                    className: S.Xh,
                                    user: n,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: W?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(p.A, {
                                        displayProfile: W,
                                        themeType: P.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, i.jsx)(v.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: W,
                                    guildId: z,
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