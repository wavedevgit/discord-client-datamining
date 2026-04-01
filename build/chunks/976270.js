/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => R
});
var i = t(627968);
t(64700);
var a = t(397927),
    s = t(630054),
    r = t(793574),
    l = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    _ = t(722868),
    p = t(716804),
    x = t(718019),
    A = t(31432),
    f = t(915614),
    m = t(559506),
    g = t(946356),
    I = t(810396),
    h = t(570314),
    b = t(490752),
    j = t(571077),
    v = t(587168),
    C = t(982985),
    N = t(159218),
    y = t(240783),
    E = t(371843),
    T = t(518477),
    L = t(652215),
    P = t(996988),
    O = t(985018),
    S = t(853293);

function R(e) {
    let {
        user: n,
        currentUser: t,
        guildId: R,
        originGuildId: k,
        channelId: M,
        messageId: B,
        roleId: D,
        sessionId: G,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: w,
        sourceAnalyticsLocations: W = []
    } = e, z = R === L.ME ? void 0 : R, H = (0, u.Ay)(n.id, z), Y = d.Ay.getName(z, M, n), X = (0, o.GV)(), {
        analyticsLocations: K
    } = (0, l.Ay)([...W, r.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: z,
        channelId: M,
        messageId: B,
        roleId: D
    }), q = (0, E.A)(n), J = (0, _.A)({
        user: n,
        guildId: k,
        channelId: M,
        displayProfile: H,
        onClose: w
    });
    return (0, i.jsx)(l.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: V,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: S.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(a.Fmo, {
                        component: (0, i.jsx)(a.AC4, {
                            children: (0, i.jsx)(a.H, {
                                id: X,
                                children: O.intl.format(O.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(g.A, {
                            user: n,
                            displayProfile: H,
                            themeType: P.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(b.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(f.A, {
                                    user: n,
                                    displayProfile: H,
                                    themeType: P.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: n,
                                        displayProfile: H,
                                        guildId: z,
                                        channelId: M,
                                        themeType: P.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: n,
                                        themeType: P.d.MODAL,
                                        hasEntered: F === a.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: S.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: S.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: s.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: S.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: s.A.popAll
                                            })
                                        }), (0, i.jsx)(j.A, {
                                            user: n,
                                            guildId: z
                                        }), (0, i.jsx)(h.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                className: S.Fd
                            }), (0, i.jsxs)("div", {
                                className: S.rf,
                                children: [(0, i.jsx)(I.A, {
                                    className: S.Xh,
                                    user: n,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(A.A, {
                                        displayProfile: H,
                                        themeType: P.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: H,
                                    guildId: z,
                                    items: q,
                                    initialSection: U ?? T.RP.BOT_INFO,
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