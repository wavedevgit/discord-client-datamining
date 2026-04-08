/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(630054),
    r = t(793574),
    s = t(688810),
    d = t(915089),
    o = t(562153),
    c = t(183555),
    u = t(950191),
    _ = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    I = t(915614),
    m = t(559506),
    f = t(946356),
    x = t(810396),
    h = t(570314),
    v = t(490752),
    E = t(571077),
    b = t(587168),
    y = t(982985),
    j = t(159218),
    T = t(240783),
    N = t(371843),
    S = t(518477),
    C = t(652215),
    R = t(996988),
    L = t(985018),
    P = t(853293);

function O(e) {
    let {
        user: n,
        currentUser: t,
        guildId: O,
        originGuildId: D,
        channelId: U,
        messageId: k,
        roleId: B,
        sessionId: G,
        initialTabSection: M,
        initialScrollTarget: F,
        transitionState: V,
        onClose: w,
        sourceAnalyticsLocations: H = []
    } = e, W = O === C.ME ? void 0 : O, z = (0, u.Ay)(n.id, W), Y = o.Ay.getName(W, U, n), X = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, s.Ay)([...H, r.A.USER_PROFILE_MODAL]), J = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: W,
        channelId: U,
        messageId: k,
        roleId: B
    }), Q = (0, N.A)(n), q = (0, _.A)({
        user: n,
        guildId: D,
        channelId: U,
        displayProfile: z,
        onClose: w
    });
    return (0, i.jsx)(s.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: J,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: F,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: V,
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
                                children: [(0, i.jsx)(I.A, {
                                    user: n,
                                    displayProfile: z,
                                    themeType: R.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: P.El,
                                    children: [(0, i.jsx)(A.A, {
                                        user: n,
                                        displayProfile: z,
                                        guildId: W,
                                        channelId: U,
                                        themeType: R.d.MODAL
                                    }), (0, i.jsx)(j.A, {
                                        user: n,
                                        themeType: R.d.MODAL,
                                        hasEntered: V === a.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: P.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: P.jS,
                                            children: (0, i.jsx)(y.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: P.pg,
                                            children: (0, i.jsx)(y.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(E.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(h.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.A, {
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
                                        onClose: w
                                    })
                                }), (0, i.jsx)(T.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: W,
                                    items: Q,
                                    initialSection: M ?? S.RP.BOT_INFO,
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