/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => S
});
var i = t(627968);
t(64700);
var s = t(397927),
    r = t(630054),
    a = t(793574),
    l = t(688810),
    o = t(915089),
    d = t(562153),
    c = t(183555),
    u = t(950191),
    A = t(722868),
    _ = t(716804),
    m = t(718019),
    x = t(31432),
    p = t(915614),
    f = t(559506),
    h = t(946356),
    g = t(810396),
    I = t(570314),
    j = t(490752),
    b = t(571077),
    v = t(587168),
    C = t(982985),
    N = t(159218),
    y = t(240783),
    E = t(371843),
    T = t(518477),
    L = t(652215),
    O = t(996988),
    P = t(985018),
    R = t(763563);

function S(e) {
    let {
        user: n,
        currentUser: t,
        guildId: S,
        originGuildId: M,
        channelId: k,
        messageId: G,
        roleId: B,
        sessionId: U,
        initialTabSection: D,
        initialScrollTarget: w,
        transitionState: F,
        onClose: V,
        sourceAnalyticsLocations: z = []
    } = e, W = S === L.ME ? void 0 : S, H = (0, u.Ay)(n.id, W), X = d.Ay.getName(W, k, n), Y = (0, o.GV)(), {
        analyticsLocations: Q
    } = (0, l.Ay)([...z, a.A.USER_PROFILE_MODAL]), K = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: U,
        guildId: W,
        channelId: k,
        messageId: G,
        roleId: B
    }), J = (0, E.A)(n), $ = (0, A.A)({
        user: n,
        guildId: M,
        channelId: k,
        displayProfile: H,
        onClose: V
    });
    return (0, i.jsx)(l.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(_.N, {
                value: w,
                children: (0, i.jsx)(s.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: R.zr,
                    hideShadow: !0,
                    "aria-labelledby": Y,
                    parentComponent: "BotUserProfileModal",
                    children: (0, i.jsx)(s.Fmo, {
                        component: (0, i.jsx)(s.AC4, {
                            children: (0, i.jsx)(s.H, {
                                id: Y,
                                children: P.intl.format(P.t.KRe1Fk, {
                                    name: X
                                })
                            })
                        }),
                        children: (0, i.jsxs)(h.A, {
                            user: n,
                            displayProfile: H,
                            themeType: O.d.MODAL,
                            children: [(0, i.jsx)(v.A, {
                                children: (0, i.jsx)(j.A, {
                                    user: n,
                                    guildId: W,
                                    viewProfileItem: $
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(p.A, {
                                    user: n,
                                    displayProfile: H,
                                    themeType: O.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: R.El,
                                    children: [(0, i.jsx)(m.A, {
                                        user: n,
                                        displayProfile: H,
                                        guildId: W,
                                        channelId: k,
                                        themeType: O.d.MODAL
                                    }), (0, i.jsx)(N.A, {
                                        user: n,
                                        themeType: O.d.MODAL,
                                        hasEntered: F === s.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: R.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: R.jS,
                                            children: (0, i.jsx)(C.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: R.pg,
                                            children: (0, i.jsx)(C.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, i.jsx)(b.A, {
                                            user: n,
                                            guildId: W
                                        }), (0, i.jsx)(I.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(f.A, {
                                userId: n.id,
                                className: R.Fd
                            }), (0, i.jsxs)("div", {
                                className: R.rf,
                                children: [(0, i.jsx)(g.A, {
                                    className: R.Xh,
                                    user: n,
                                    guildId: W,
                                    nickname: X,
                                    pronouns: H?.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, i.jsx)(x.A, {
                                        displayProfile: H,
                                        themeType: O.d.MODAL,
                                        onClose: V
                                    })
                                }), (0, i.jsx)(y.A, {
                                    user: n,
                                    currentUser: t,
                                    displayProfile: H,
                                    guildId: W,
                                    items: J,
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