/** chunk id: 976270 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968);
t(64700);
var a = t(397927),
    l = t(630054),
    r = t(793574),
    d = t(688810),
    s = t(915089),
    o = t(562153),
    c = t(183555),
    _ = t(950191),
    u = t(722868),
    p = t(716804),
    A = t(718019),
    g = t(31432),
    h = t(915614),
    m = t(559506),
    I = t(946356),
    f = t(810396),
    x = t(570314),
    b = t(490752),
    v = t(571077),
    E = t(587168),
    y = t(982985),
    j = t(159218),
    T = t(240783),
    S = t(371843),
    N = t(518477),
    C = t(652215),
    R = t(996988),
    P = t(985018),
    L = t(669924);

function O(e) {
    let {
        user: n,
        currentUser: t,
        guildId: O,
        originGuildId: D,
        channelId: k,
        messageId: B,
        roleId: U,
        sessionId: G,
        initialTabSection: M,
        initialScrollTarget: F,
        transitionState: w,
        onClose: V,
        sourceAnalyticsLocations: H = []
    } = e, z = O === C.ME ? void 0 : O, W = (0, _.Ay)(n.id, z), Y = o.Ay.getName(z, k, n), X = (0, s.GV)(), {
        analyticsLocations: Q
    } = (0, d.Ay)([...H, r.A.USER_PROFILE_MODAL]), K = (0, c.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: G,
        guildId: z,
        channelId: k,
        messageId: B,
        roleId: U
    }), q = (0, S.A)(n), J = (0, u.A)({
        user: n,
        guildId: D,
        channelId: k,
        displayProfile: W,
        onClose: V
    });
    return (0, i.jsx)(d.f5, {
        value: Q,
        children: (0, i.jsx)(c.of, {
            value: K,
            isLoaded: W?.isLoaded,
            children: (0, i.jsx)(p.N, {
                value: F,
                children: (0, i.jsx)(a.EOs, {
                    "data-migration-pending": !0,
                    transitionState: w,
                    className: L.zr,
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
                            displayProfile: W,
                            themeType: R.d.MODAL,
                            children: [(0, i.jsx)(E.A, {
                                children: (0, i.jsx)(b.A, {
                                    user: n,
                                    guildId: z,
                                    viewProfileItem: J
                                })
                            }), (0, i.jsxs)("div", {
                                children: [(0, i.jsx)(h.A, {
                                    user: n,
                                    displayProfile: W,
                                    themeType: R.d.MODAL
                                }), (0, i.jsxs)("div", {
                                    className: L.El,
                                    children: [(0, i.jsx)(A.A, {
                                        user: n,
                                        displayProfile: W,
                                        guildId: z,
                                        channelId: k,
                                        themeType: R.d.MODAL
                                    }), (0, i.jsx)(j.A, {
                                        user: n,
                                        themeType: R.d.MODAL,
                                        hasEntered: w === a.ip4.ENTERED,
                                        onCloseProfile: V,
                                        disableToolbar: !0
                                    }), (0, i.jsxs)("div", {
                                        className: L.Pz,
                                        children: [(0, i.jsx)("div", {
                                            className: L.jS,
                                            children: (0, i.jsx)(y.e, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)("div", {
                                            className: L.pg,
                                            children: (0, i.jsx)(y.l, {
                                                variant: "secondary",
                                                userId: n.id,
                                                onClose: l.A.popAll
                                            })
                                        }), (0, i.jsx)(v.A, {
                                            user: n,
                                            guildId: z
                                        }), (0, i.jsx)(x.A, {
                                            user: n
                                        })]
                                    })]
                                })]
                            }), (0, i.jsx)(m.A, {
                                userId: n.id,
                                className: L.Fd
                            }), (0, i.jsxs)("div", {
                                className: L.rf,
                                children: [(0, i.jsx)(f.A, {
                                    className: L.Xh,
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
                                    items: q,
                                    initialSection: M ?? N.RP.BOT_INFO,
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