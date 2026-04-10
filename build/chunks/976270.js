/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968);
t(64700);
var a = t(397927),
    r = t(630054),
    l = t(793574),
    o = t(688810),
    d = t(915089),
    s = t(562153),
    c = t(183555),
    _ = t(950191),
    u = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    h = t(915614),
    m = t(559506),
    I = t(946356),
    f = t(810396),
    x = t(570314),
    b = t(490752),
    v = t(571077),
    E = t(587168),
    y = t(982985),
    j = t(159218),
    T = t(240783),
    S = t(371843),
    C = t(518477),
    N = t(652215),
    R = t(996988),
    L = t(985018),
    P = t(669924);

function O(e) {
    let {
        user: n,
        currentUser: t,
        guildId: O,
        originGuildId: D,
        channelId: k,
        messageId: B,
        roleId: U,
        sessionId: G,
        initialTabSection: M,
        initialScrollTarget: F,
        transitionState: w,
        onClose: V,
        sourceAnalyticsLocations: H = []
    } = e, W = O === N.ME ? void 0 : O, z = (0, _.Ay)(n.id, W), Y = s.Ay.getName(W, k, n), X = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, o.Ay)([...H, l.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: W,
        channelId: k,
        messageId: B,
        roleId: U
    }), q = (0, S.A)(n), J = (0, u.A)({
        user: n,
        guildId: D,
        channelId: k,
        displayProfile: z,
        onClose: V
    });
    return (0, i.jsx)(o.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: F,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: w,
                    className: P.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(a.Fmo, {
                        component: (0, i.jsx)(a.AC4, {
                            children: (0, i.jsx)(a.H, {
                                id: X,
                                children: L.intl.format(L.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: z,
                            themeType: R.d.MODAL,
                            children: [(0, i.jsx)(E.A, {
                                children: (0, i.jsx)(b.A, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(h.A, {
                                    user: n,
                                    displayProfile: z,
                                    themeType: R.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: P.El,
                                    children: [(0, i.jsx)(A.A, {
                                        user: n,
                                        displayProfile: z,
                                        guildId: W,
                                        channelId: k,
                                        themeType: R.d.MODAL
                                    }), (0, i.jsx)(j.A, {
                                        user: n,
                                        themeType: R.d.MODAL,
                                        hasEntered: w === a.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(y.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(y.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(v.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(x.A, {
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
                                    guildId: W,
                                    nickname: Y,
                                    pronouns: z?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(g.A, {
                                        displayProfile: z,
                                        themeType: R.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(T.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: W,
                                    items: q,
                                    initialSection: M ?? C.RP.BOT_INFO,
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