/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968);
t(64700);
var a = t(397927),
    r = t(630054),
    l = t(793574),
    s = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    _ = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    m = t(915614),
    I = t(559506),
    f = t(946356),
    h = t(810396),
    x = t(570314),
    v = t(490752),
    E = t(571077),
    b = t(587168),
    C = t(982985),
    y = t(159218),
    T = t(240783),
    j = t(371843),
    S = t(518477),
    N = t(652215),
    R = t(996988),
    L = t(985018),
    P = t(669924);

function O(e) {
    let {
        user: n,
        currentUser: t,
        guildId: O,
        originGuildId: U,
        channelId: k,
        messageId: D,
        roleId: B,
        sessionId: M,
        initialTabSection: G,
        initialScrollTarget: F,
        transitionState: V,
        onClose: w,
        sourceAnalyticsLocations: H = []
    } = e, W = O === N.ME ? void 0 : O, z = (0, u.Ay)(n.id, W), Y = d.Ay.getName(W, k, n), K = (0, o.GV)(), {
        analyticsLocations: X
    } = (0, s.Ay)([...H, l.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: W,
        channelId: k,
        messageId: D,
        roleId: B
    }), J = (0, j.A)(n), q = (0, _.A)({
        user: n,
        guildId: U,
        channelId: k,
        displayProfile: z,
        onClose: w
    });
    return (0, i.jsx)(s.f5, {
        value: X,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: F,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: V,
                    className: P.zr,
                    hideShadow: !0,
                    "aria-labelledby": K,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(a.Fmo, {
                        component: (0, i.jsx)(a.AC4, {
                            children: (0, i.jsx)(a.H, {
                                id: K,
                                children: L.intl.format(L.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(f.A, {
                            user: n,
                            displayProfile: z,
                            themeType: R.d.MODAL,
                            children: [(0, i.jsx)(b.A, {
                                children: (0, i.jsx)(v.A, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: q
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(m.A, {
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
                                    }), (0, i.jsx)(y.A, {
                                        user: n,
                                        themeType: R.d.MODAL,
                                        hasEntered: V === a.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(E.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(x.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(I.A, {
                                userId: n.id,
                                className: P.Fd
                            }), (0, i.jsxs)("div", {
                                className: P.rf,
                                children: [(0, i.jsx)(h.A, {
                                    className: P.Xh,
                                    user: n,
                                    guildId: W,
                                    nickname: Y,
                                    pronouns: z?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(g.A, {
                                        displayProfile: z,
                                        themeType: R.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, i.jsx)(T.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: W,
                                    items: J,
                                    initialSection: G ?? S.RP.BOT_INFO,
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