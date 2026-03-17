/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => S
});
var i = t(627968);
t(64700);
var s = t(397927),
    l = t(630054),
    a = t(793574),
    r = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    m = t(722868),
    A = t(716804),
    x = t(718019),
    p = t(31432),
    _ = t(915614),
    f = t(559506),
    h = t(946356),
    j = t(810396),
    g = t(570314),
    I = t(490752),
    b = t(571077),
    v = t(587168),
    N = t(982985),
    y = t(159218),
    C = t(240783),
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
        channelId: M,
        messageId: G,
        roleId: k,
        sessionId: U,
        initialTabSection: w,
        initialScrollTarget: B,
        transitionState: D,
        onClose: F,
        sourceAnalyticsLocations: V = [],
        showGuildProfile: z
    } = e, W = S === L.ME ? void 0 : S, H = (0, u.Ay)(n.id, z ? W : void 0), Y = d.Ay.getName(W, M, n), X = (0, o.GV)(), {
        analyticsLocations: Q
    } = (0, r.Ay)([...V, a.A.USER_PROFILE_MODAL]), K = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: U,
        guildId: W,
        channelId: M,
        messageId: G,
        roleId: k
    }), $ = (0, T.A)(n), J = (0, m.A)({
        user: n,
        guildId: W,
        channelId: M,
        displayProfile: H,
        onClose: F
    });
    return (0, i.jsx)(r.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(A.N, {
                value: B,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: D,
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
                                children: (0, i.jsx)(I.A, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(_.A, {
                                    user: n,
                                    displayProfile: H,
                                    themeType: P.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: O.El,
                                    children: [(0, i.jsx)(x.A, {
                                        user: n,
                                        displayProfile: H,
                                        guildId: W,
                                        channelId: M,
                                        themeType: P.d.MODAL
                                    }), (0, i.jsx)(y.A, {
                                        user: n,
                                        themeType: P.d.MODAL,
                                        hasEntered: D === s.ip4.ENTERED,
                                        onCloseProfile: F,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: O.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: O.jS,
                                            children: (0, i.jsx)(N.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: O.pg,
                                            children: (0, i.jsx)(N.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(g.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: n.id,
                                className: O.Fd
                            }), (0, i.jsxs)("div", {
                                className: O.rf,
                                children: [(0, i.jsx)(j.A, {
                                    className: O.Xh,
                                    user: n,
                                    guildId: W,
                                    nickname: Y,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(p.A, {
                                        displayProfile: H,
                                        themeType: P.d.MODAL,
                                        onClose: F
                                    })
                                }), (0, i.jsx)(C.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: H,
                                    guildId: W,
                                    items: $,
                                    initialSection: w ?? E.RP.BOT_INFO,
                                    onClose: F
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
}