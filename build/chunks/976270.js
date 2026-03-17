/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => S
});
var i = t(627968);
t(64700);
var s = t(397927),
    r = t(630054),
    l = t(793574),
    a = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    A = t(722868),
    m = t(716804),
    _ = t(718019),
    x = t(31432),
    p = t(915614),
    f = t(559506),
    h = t(946356),
    g = t(810396),
    I = t(570314),
    j = t(490752),
    b = t(571077),
    v = t(587168),
    N = t(982985),
    C = t(159218),
    y = t(240783),
    T = t(371843),
    E = t(518477),
    L = t(652215),
    P = t(996988),
    R = t(985018),
    O = t(763563);

function S(e) {
    let {
        user: n,
        currentUser: t,
        guildId: S,
        originGuildId: M,
        channelId: G,
        messageId: k,
        roleId: B,
        sessionId: D,
        initialTabSection: U,
        initialScrollTarget: w,
        transitionState: F,
        onClose: V,
        sourceAnalyticsLocations: W = []
    } = e, z = S === L.ME ? void 0 : S, H = (0, u.Ay)(n.id, z), Y = d.Ay.getName(z, G, n), X = (0, o.GV)(), {
        analyticsLocations: Q
    } = (0, a.Ay)([...W, l.A.USER_PROFILE_MODAL]), K = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: D,
        guildId: z,
        channelId: G,
        messageId: k,
        roleId: B
    }), $ = (0, T.A)(n), J = (0, A.A)({
        user: n,
        guildId: M,
        channelId: G,
        displayProfile: H,
        onClose: V
    });
    return (0, i.jsx)(a.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(m.N, {
                value: w,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: O.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: X,
                                children: R.intl.format(R.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: n,
                            displayProfile: H,
                            themeType: P.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(j.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(p.A, {
                                    user: n,
                                    displayProfile: H,
                                    themeType: P.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: O.El,
                                    children: [(0, i.jsx)(_.A, {
                                        user: n,
                                        displayProfile: H,
                                        guildId: z,
                                        channelId: G,
                                        themeType: P.d.MODAL
                                    }), (0, i.jsx)(C.A, {
                                        user: n,
                                        themeType: P.d.MODAL,
                                        hasEntered: F === s.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: O.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: O.jS,
                                            children: (0, i.jsx)(N.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: O.pg,
                                            children: (0, i.jsx)(N.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: n,
                                            guildId: z
                                        }), (0, i.jsx)(I.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: n.id,
                                className: O.Fd
                            }), (0, i.jsxs)("div", {
                                className: O.rf,
                                children: [(0, i.jsx)(g.A, {
                                    className: O.Xh,
                                    user: n,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(x.A, {
                                        displayProfile: H,
                                        themeType: P.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: H,
                                    guildId: z,
                                    items: $,
                                    initialSection: U ?? E.RP.BOT_INFO,
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