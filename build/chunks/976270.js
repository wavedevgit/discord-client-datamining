/** chunk id: 976270 params = (module,exports,require) **/
i.d(n, {
    A: () => k
});
var t = i(627968);
i(64700);
var a = i(397927),
    l = i(630054),
    s = i(793574),
    r = i(688810),
    d = i(915089),
    o = i(562153),
    c = i(183555),
    u = i(950191),
    _ = i(722868),
    A = i(716804),
    p = i(718019),
    x = i(31432),
    g = i(915614),
    m = i(559506),
    I = i(946356),
    f = i(810396),
    b = i(570314),
    h = i(490752),
    v = i(571077),
    j = i(587168),
    C = i(982985),
    y = i(159218),
    N = i(240783),
    E = i(371843),
    T = i(518477),
    L = i(652215),
    P = i(996988),
    O = i(985018),
    S = i(669924);

function k(e) {
    let {
        user: n,
        currentUser: i,
        guildId: k,
        originGuildId: B,
        channelId: M,
        messageId: R,
        roleId: D,
        sessionId: G,
        initialTabSection: U,
        initialScrollTarget: V,
        transitionState: F,
        onClose: w,
        sourceAnalyticsLocations: z = []
    } = e, W = k === L.ME ? void 0 : k, H = (0, u.Ay)(n.id, W), Y = o.Ay.getName(W, M, n), X = (0, d.GV)(), {
        analyticsLocations: K
    } = (0, r.Ay)([...z, s.A.USER_PROFILE_MODAL]), J = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: W,
        channelId: M,
        messageId: R,
        roleId: D
    }), Q = (0, E.A)(n), q = (0, _.A)({
        user: n,
        guildId: B,
        channelId: M,
        displayProfile: H,
        onClose: w
    });
    return (0, t.jsx)(r.f5, {
        value: K,
        children: (0, t.jsx)(c.of, {
            value: J,
            isLoaded: H?.isLoaded,
            children: (0, t.jsx)(A.N, {
                value: V,
                children: (0, t.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: S.zr,
                    hideShadow: !0,
                    "aria-labelledby": X,
                    parentComponent: "BotUserProfileModal",
                    children: (0, t.jsx)(a.Fmo, {
                        component: (0, t.jsx)(a.AC4, {
                            children: (0, t.jsx)(a.H, {
                                id: X,
                                children: O.intl.format(O.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, t.jsxs)(I.A, {
                            user: n,
                            displayProfile: H,
                            themeType: P.d.MODAL,
                            children: [(0, t.jsx)(j.A, {
                                children: (0, t.jsx)(h.A, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: q
                                })
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)(g.A, {
                                    user: n,
                                    displayProfile: H,
                                    themeType: P.d.MODAL
                                }), (0, t.jsxs)("div", {
                                    className: S.El,
                                    children: [(0, t.jsx)(p.A, {
                                        user: n,
                                        displayProfile: H,
                                        guildId: W,
                                        channelId: M,
                                        themeType: P.d.MODAL
                                    }), (0, t.jsx)(y.A, {
                                        user: n,
                                        themeType: P.d.MODAL,
                                        hasEntered: F === a.ip4.ENTERED,
                                        onCloseProfile: w,
                                        disableToolbar: !0
                                    }), (0, t.jsxs)("div", {
                                        className: S.Pz,
                                        children: [(0, t.jsx)("div", {
                                            className: S.jS,
                                            children: (0, t.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, t.jsx)("div", {
                                            className: S.pg,
                                            children: (0, t.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, t.jsx)(v.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, t.jsx)(b.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, t.jsx)(m.A, {
                                userId: n.id,
                                className: S.Fd
                            }), (0, t.jsxs)("div", {
                                className: S.rf,
                                children: [(0, t.jsx)(f.A, {
                                    className: S.Xh,
                                    user: n,
                                    guildId: W,
                                    nickname: Y,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, t.jsx)(x.A, {
                                        displayProfile: H,
                                        themeType: P.d.MODAL,
                                        onClose: w
                                    })
                                }), (0, t.jsx)(N.A, {
                                    user: n,
                                    currentUser: i,
                                    displayProfile: H,
                                    guildId: W,
                                    items: Q,
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