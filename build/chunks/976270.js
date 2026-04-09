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
    m = t(915614),
    I = t(559506),
    h = t(946356),
    f = t(810396),
    x = t(570314),
    v = t(490752),
    b = t(571077),
    E = t(587168),
    j = t(982985),
    y = t(159218),
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
        channelId: k,
        messageId: U,
        roleId: B,
        sessionId: G,
        initialTabSection: M,
        initialScrollTarget: F,
        transitionState: w,
        onClose: V,
        sourceAnalyticsLocations: H = []
    } = e, z = O === C.ME ? void 0 : O, W = (0, u.Ay)(n.id, z), Y = o.Ay.getName(z, k, n), X = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, s.Ay)([...H, r.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: z,
        channelId: k,
        messageId: U,
        roleId: B
    }), J = (0, N.A)(n), q = (0, _.A)({
        user: n,
        guildId: D,
        channelId: k,
        displayProfile: W,
        onClose: V
    });
    return (0, i.jsx)(s.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: W?.isLoaded,
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
                            displayProfile: W,
                            themeType: R.d.MODAL,
                            children: [(0, i.jsx)(E.A, {
                                children: (0, i.jsx)(v.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: q
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(m.A, {
                                    user: n,
                                    displayProfile: W,
                                    themeType: R.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: P.El,
                                    children: [(0, i.jsx)(A.A, {
                                        user: n,
                                        displayProfile: W,
                                        guildId: z,
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
                                        }), (0, i.jsx)(b.A, {
                                            user: n,
                                            guildId: z
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
                                children: [(0, i.jsx)(f.A, {
                                    className: P.Xh,
                                    user: n,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: W?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(g.A, {
                                        displayProfile: W,
                                        themeType: R.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(T.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: W,
                                    guildId: z,
                                    items: J,
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