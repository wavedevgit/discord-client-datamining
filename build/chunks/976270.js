/** Chunk was on 63974 **/
/** chunk id: 976270, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
}), n(896048);
var l = n(627968);
n(64700);
var i = n(397927),
    r = n(630054),
    s = n(793574),
    o = n(688810),
    a = n(915089),
    d = n(562153),
    c = n(183555),
    u = n(950191),
    p = n(722868),
    f = n(716804),
    m = n(718019),
    A = n(31432),
    x = n(915614),
    g = n(559506),
    j = n(946356),
    h = n(810396),
    b = n(570314),
    v = n(490752),
    I = n(571077),
    y = n(587168),
    _ = n(982985),
    O = n(159218),
    N = n(240783),
    E = n(371843),
    P = n(518477),
    T = n(652215),
    C = n(996988),
    S = n(985018),
    L = n(763563);

function R(e) {
    let {
        user: t,
        currentUser: n,
        guildId: R,
        channelId: D,
        messageId: w,
        roleId: M,
        sessionId: G,
        initialTabSection: U,
        initialScrollTarget: k,
        transitionState: F,
        openedAt: V,
        onClose: B,
        sourceAnalyticsLocations: W = [],
        showGuildProfile: K
    } = e, z = R === T.ME ? void 0 : R, H = (0, u.Ay)(t.id, K ? z : void 0), Y = d.Ay.getName(z, D, t), J = (0, a.GV)(), {
        analyticsLocations: X
    } = (0, o.Ay)([...W, s.A.USER_PROFILE_MODAL]), Q = (0, c.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: G,
        guildId: z,
        channelId: D,
        messageId: w,
        roleId: M
    }), $ = (0, E.A)(t), Z = (0, p.A)({
        user: t,
        guildId: z,
        channelId: D,
        displayProfile: H,
        onClose: B
    });
    return (0, l.jsx)(o.f5, {
        value: X,
        children: (0, l.jsx)(c.of, {
            value: Q,
            openedAt: V,
            fetchStartedAt: null == H ? void 0 : H.fetchStartedAt,
            fetchEndedAt: null == H ? void 0 : H.fetchEndedAt,
            isLoaded: null == H ? void 0 : H.isLoaded,
            children: (0, l.jsx)(f.N, {
                value: k,
                children: (0, l.jsx)(i.EOs, {
                    "data-migration-pending": !0,
                    transitionState: F,
                    className: L.zr,
                    hideShadow: !0,
                    "aria-labelledby": J,
                    parentComponent: "BotUserProfileModal",
                    children: (0, l.jsx)(i.Fmo, {
                        component: (0, l.jsx)(i.AC4, {
                            children: (0, l.jsx)(i.H, {
                                id: J,
                                children: S.intl.format(S.t.KRe1Fk, {
                                    name: Y
                                })
                            })
                        }),
                        children: (0, l.jsxs)(j.A, {
                            user: t,
                            displayProfile: H,
                            themeType: C.d.MODAL,
                            children: [(0, l.jsx)(y.A, {
                                children: (0, l.jsx)(v.A, {
                                    user: t,
                                    guildId: z,
                                    viewProfileItem: Z
                                })
                            }), (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(x.A, {
                                    user: t,
                                    displayProfile: H,
                                    themeType: C.d.MODAL
                                }), (0, l.jsxs)("div", {
                                    className: L.El,
                                    children: [(0, l.jsx)(m.A, {
                                        user: t,
                                        displayProfile: H,
                                        guildId: z,
                                        channelId: D,
                                        themeType: C.d.MODAL
                                    }), (0, l.jsx)(O.A, {
                                        user: t,
                                        themeType: C.d.MODAL,
                                        hasEntered: F === i.ip4.ENTERED,
                                        onCloseProfile: B,
                                        disableToolbar: !0
                                    }), (0, l.jsxs)("div", {
                                        className: L.Pz,
                                        children: [(0, l.jsx)("div", {
                                            className: L.jS,
                                            children: (0, l.jsx)(_.e, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, l.jsx)("div", {
                                            className: L.pg,
                                            children: (0, l.jsx)(_.l, {
                                                variant: "secondary",
                                                userId: t.id,
                                                onClose: r.A.popAll
                                            })
                                        }), (0, l.jsx)(I.A, {
                                            user: t,
                                            guildId: z
                                        }), (0, l.jsx)(b.A, {
                                            user: t
                                        })]
                                    })]
                                })]
                            }), (0, l.jsx)(g.A, {
                                userId: t.id,
                                className: L.Fd
                            }), (0, l.jsxs)("div", {
                                className: L.rf,
                                children: [(0, l.jsx)(h.A, {
                                    className: L.Xh,
                                    user: t,
                                    guildId: z,
                                    nickname: Y,
                                    pronouns: null == H ? void 0 : H.pronouns,
                                    nicknameVariant: "heading-xl/bold",
                                    tags: (0, l.jsx)(A.A, {
                                        displayProfile: H,
                                        themeType: C.d.MODAL,
                                        onClose: B
                                    })
                                }), (0, l.jsx)(N.A, {
                                    user: t,
                                    currentUser: n,
                                    displayProfile: H,
                                    guildId: z,
                                    items: $,
                                    initialSection: null != U ? U : P.RP.BOT_INFO,
                                    onClose: B
                                })]
                            })]
                        })
                    })
                })
            })
        })
    })
}