/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => D
});
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(630054),
    r = t(793574),
    o = t(688810),
    s = t(915089),
    d = t(562153),
    c = t(183555),
    _ = t(950191),
    u = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    m = t(915614),
    f = t(559506),
    h = t(946356),
    x = t(810396),
    I = t(570314),
    b = t(490752),
    v = t(571077),
    E = t(587168),
    j = t(982985),
    y = t(159218),
    C = t(240783),
    T = t(371843),
    S = t(518477),
    N = t(652215),
    R = t(996988),
    L = t(985018),
    P = t(669924);

function D(e) {
    let {
        user: n,
        currentUser: t,
        guildId: D,
        originGuildId: O,
        channelId: k,
        messageId: B,
        roleId: U,
        sessionId: G,
        initialTabSection: M,
        initialScrollTarget: F,
        transitionState: w,
        onClose: V,
        sourceAnalyticsLocations: H = []
    } = e, W = D === N.ME ? void 0 : D, z = (0, _.Ay)(n.id, W), Y = d.Ay.getName(W, k, n), X = (0, s.GV)(), {
        analyticsLocations: K
    } = (0, o.Ay)([...H, r.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: W,
        channelId: k,
        messageId: B,
        roleId: U
    }), q = (0, T.A)(n), J = (0, u.A)({
        user: n,
        guildId: O,
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
                        children: (0, i.jsxs)(h.A, {
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
                                        hasEntered: w === a.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(j.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(j.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(v.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(I.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: n.id,
                                className: P.Fd
                            }), (0, i.jsxs)("div", {
                                className: P.rf,
                                children: [(0, i.jsx)(x.A, {
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
                                }), (0, i.jsx)(C.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: W,
                                    items: q,
                                    initialSection: M ?? S.RP.BOT_INFO,
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