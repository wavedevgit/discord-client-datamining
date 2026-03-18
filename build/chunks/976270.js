/** chunk id: 976270 params = (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968);
n(64700);
var s = n(397927),
    r = n(630054),
    a = n(793574),
    l = n(688810),
    o = n(915089),
    d = n(562153),
    c = n(183555),
    u = n(950191),
    _ = n(722868),
    A = n(716804),
    m = n(718019),
    x = n(31432),
    p = n(915614),
    f = n(559506),
    h = n(946356),
    g = n(810396),
    I = n(570314),
    j = n(490752),
    b = n(571077),
    v = n(587168),
    C = n(982985),
    N = n(159218),
    y = n(240783),
    E = n(371843),
    T = n(518477),
    L = n(652215),
    P = n(996988),
    O = n(985018),
    R = n(763563);

function S(e) {
    let {
        user: t,
        currentUser: n,
        guildId: S,
        originGuildId: M,
        channelId: G,
        messageId: k,
        roleId: B,
        sessionId: U,
        initialTabSection: D,
        initialScrollTarget: F,
        transitionState: w,
        onClose: V,
        sourceAnalyticsLocations: z = []
    } = e, W = S === L.ME ? void 0 : S, H = (0, u.Ay)(t.id, W), X = d.Ay.getName(W, G, t), Y = (0, o.GV)(), {
        analyticsLocations: Q
    } = (0, l.Ay)([...z, a.A.USER_PROFILE_MODAL]), K = (0, c.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: U,
        guildId: W,
        channelId: G,
        messageId: k,
        roleId: B
    }), $ = (0, E.A)(t), J = (0, _.A)({
        user: t,
        guildId: M,
        channelId: G,
        displayProfile: H,
        onClose: V
    });
    return (0, i.jsx)(l.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(A.N, {
                value: F,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: w,
                    className: R.zr,
                    hideShadow: !0,
                    "aria-labelledby": Y,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: Y,
                                children: O.intl.format(O.t.KRe1Fk, {
                                    name: X
                                })
                            })
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: t,
                            displayProfile: H,
                            themeType: P.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(j.A, {
                                    user: t,
                                    guildId: W,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(p.A, {
                                    user: t,
                                    displayProfile: H,
                                    themeType: P.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: R.El,
                                    children: [(0, i.jsx)(m.A, {
                                        user: t,
                                        displayProfile: H,
                                        guildId: W,
                                        channelId: G,
                                        themeType: P.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: t,
                                        themeType: P.d.MODAL,
                                        hasEntered: w === s.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: R.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: R.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: R.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: t,
                                            guildId: W
                                        }), (0, i.jsx)(I.A, {
                                            user: t
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: t.id,
                                className: R.Fd
                            }), (0, i.jsxs)("div", {
                                className: R.rf,
                                children: [(0, i.jsx)(g.A, {
                                    className: R.Xh,
                                    user: t,
                                    guildId: W,
                                    nickname: X,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(x.A, {
                                        displayProfile: H,
                                        themeType: P.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: H,
                                    guildId: W,
                                    items: $,
                                    initialSection: D ?? T.RP.BOT_INFO,
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