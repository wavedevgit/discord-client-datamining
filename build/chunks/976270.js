/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => k
});
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(630054),
    s = t(793574),
    r = t(688810),
    d = t(915089),
    o = t(562153),
    c = t(183555),
    u = t(950191),
    A = t(722868),
    _ = t(716804),
    p = t(718019),
    x = t(31432),
    g = t(915614),
    m = t(559506),
    I = t(946356),
    f = t(810396),
    b = t(570314),
    h = t(490752),
    v = t(571077),
    j = t(587168),
    C = t(982985),
    y = t(159218),
    N = t(240783),
    E = t(371843),
    T = t(518477),
    L = t(652215),
    O = t(996988),
    P = t(985018),
    S = t(669924);

function k(e) {
    let {
        user: n,
        currentUser: t,
        guildId: k,
        originGuildId: M,
        channelId: B,
        messageId: R,
        roleId: G,
        sessionId: D,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: w,
        sourceAnalyticsLocations: W = []
    } = e, H = k === L.ME ? void 0 : k, z = (0, u.Ay)(n.id, H), Y = o.Ay.getName(H, B, n), X = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, r.Ay)([...W, s.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: D,
        guildId: H,
        channelId: B,
        messageId: R,
        roleId: G
    }), J = (0, E.A)(n), q = (0, A.A)({
        user: n,
        guildId: M,
        channelId: B,
        displayProfile: z,
        onClose: w
    });
    return (0, i.jsx)(r.f5, {
        value: K,
        children: (0, i.jsx)(c.of, {
            value: Q,
            isLoaded: z?.isLoaded,
            children: (0, i.jsx)(_.N, {
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
                                children: P.intl.format(P.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, i.jsxs)(I.A, {
                            user: n,
                            displayProfile: z,
                            themeType: O.d.MODAL,
                            children: [(0, i.jsx)(j.A, {
                                children: (0, i.jsx)(h.A, {
                                    user: n,
                                    guildId: H,
                                    viewProfileItem: q
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(g.A, {
                                    user: n,
                                    displayProfile: z,
                                    themeType: O.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, i.jsx)(p.A, {
                                        user: n,
                                        displayProfile: z,
                                        guildId: H,
                                        channelId: B,
                                        themeType: O.d.MODAL
                                    }), (0, i.jsx)(y.A, {
                                        user: n,
                                        themeType: O.d.MODAL,
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
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: S.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(v.A, {
                                            user: n,
                                            guildId: H
                                        }), (0, i.jsx)(b.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                className: S.Fd
                            }), (0, i.jsxs)("div", {
                                className: S.rf,
                                children: [(0, i.jsx)(f.A, {
                                    className: S.Xh,
                                    user: n,
                                    guildId: H,
                                    nickname: Y,
                                    pronouns: z?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(x.A, {
                                        displayProfile: z,
                                        themeType: O.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, i.jsx)(N.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: z,
                                    guildId: H,
                                    items: J,
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