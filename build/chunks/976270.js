/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => k
});
var i = t(627968);
t(64700);
var a = t(397927),
    s = t(630054),
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
    g = t(915614),
    m = t(559506),
    I = t(946356),
    f = t(810396),
    b = t(570314),
    h = t(490752),
    j = t(571077),
    v = t(587168),
    C = t(982985),
    N = t(159218),
    y = t(240783),
    E = t(371843),
    T = t(518477),
    L = t(652215),
    O = t(996988),
    S = t(985018),
    P = t(669924);

function k(e) {
    let {
        user: n,
        currentUser: t,
        guildId: k,
        originGuildId: R,
        channelId: B,
        messageId: M,
        roleId: G,
        sessionId: D,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: W,
        sourceAnalyticsLocations: H = []
    } = e, z = k === L.ME ? void 0 : k, w = (0, u.Ay)(n.id, z), Y = d.Ay.getName(z, B, n), X = (0, o.GV)(), {
        analyticsLocations: K
    } = (0, r.Ay)([...H, l.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: D,
        guildId: z,
        channelId: B,
        messageId: M,
        roleId: G
    }), J = (0, E.A)(n), q = (0, _.A)({
        user: n,
        guildId: R,
        channelId: B,
        displayProfile: w,
        onClose: W
    });
    return (0, i.jsx)(r.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: w?.isLoaded,
            children: (0, i.jsx)(A.N, {
                value: V,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: P.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(a.Fmo, {
                        component: (0, i.jsx)(a.AC4, {
                            children: (0, i.jsx)(a.H, {
                                id: X,
                                children: S.intl.format(S.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: w,
                            themeType: O.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(h.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: q
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(g.A, {
                                    user: n,
                                    displayProfile: w,
                                    themeType: O.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: P.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: n,
                                        displayProfile: w,
                                        guildId: z,
                                        channelId: B,
                                        themeType: O.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: n,
                                        themeType: O.d.MODAL,
                                        hasEntered: F === a.ip4.ENTERED,
                                        onCloseProfile: W,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: s.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: s.A.popAll
                                            })
                                        }), (0, i.jsx)(j.A, {
                                            user: n,
                                            guildId: z
                                        }), (0, i.jsx)(b.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                className: P.Fd
                            }), (0, i.jsxs)("div", {
                                className: P.rf,
                                children: [(0, i.jsx)(f.A, {
                                    className: P.Xh,
                                    user: n,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: w?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(p.A, {
                                        displayProfile: w,
                                        themeType: O.d.MODAL,
                                        onClose: W
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: w,
                                    guildId: z,
                                    items: J,
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