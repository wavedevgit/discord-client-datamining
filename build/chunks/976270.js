/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => R
});
var i = t(627968);
t(64700);
var s = t(397927),
    a = t(630054),
    l = t(793574),
    r = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    _ = t(722868),
    A = t(716804),
    x = t(718019),
    p = t(31432),
    m = t(915614),
    g = t(559506),
    I = t(946356),
    f = t(810396),
    h = t(570314),
    b = t(490752),
    j = t(571077),
    v = t(587168),
    C = t(982985),
    N = t(159218),
    E = t(240783),
    y = t(371843),
    T = t(518477),
    L = t(652215),
    O = t(996988),
    P = t(985018),
    S = t(669924);

function R(e) {
    let {
        user: n,
        currentUser: t,
        guildId: R,
        originGuildId: k,
        channelId: B,
        messageId: M,
        roleId: D,
        sessionId: G,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: W,
        sourceAnalyticsLocations: H = []
    } = e, w = R === L.ME ? void 0 : R, z = (0, u.Ay)(n.id, w), Y = d.Ay.getName(w, B, n), X = (0, o.GV)(), {
        analyticsLocations: K
    } = (0, r.Ay)([...H, l.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: w,
        channelId: B,
        messageId: M,
        roleId: D
    }), q = (0, y.A)(n), J = (0, _.A)({
        user: n,
        guildId: k,
        channelId: B,
        displayProfile: z,
        onClose: W
    });
    return (0, i.jsx)(r.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(A.N, {
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
                                children: P.intl.format(P.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: z,
                            themeType: O.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(b.A, {
                                    user: n,
                                    guildId: w,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(m.A, {
                                    user: n,
                                    displayProfile: z,
                                    themeType: O.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: n,
                                        displayProfile: z,
                                        guildId: w,
                                        channelId: B,
                                        themeType: O.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: n,
                                        themeType: O.d.MODAL,
                                        hasEntered: F === s.ip4.ENTERED,
                                        onCloseProfile: W,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: S.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: S.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: a.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: S.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: a.A.popAll
                                            })
                                        }), (0, i.jsx)(j.A, {
                                            user: n,
                                            guildId: w
                                        }), (0, i.jsx)(h.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(g.A, {
                                userId: n.id,
                                className: S.Fd
                            }), (0, i.jsxs)("div", {
                                className: S.rf,
                                children: [(0, i.jsx)(f.A, {
                                    className: S.Xh,
                                    user: n,
                                    guildId: w,
                                    nickname: Y,
                                    pronouns: z?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(p.A, {
                                        displayProfile: z,
                                        themeType: O.d.MODAL,
                                        onClose: W
                                    })
                                }), (0, i.jsx)(E.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: w,
                                    items: q,
                                    initialSection: U ?? T.RP.BOT_INFO,
                                    onClose: W
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
}