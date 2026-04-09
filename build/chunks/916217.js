/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => L
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(793574),
    o = t(688810),
    s = t(351966),
    d = t(915089),
    c = t(713517),
    _ = t(562153),
    u = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    m = t(915614),
    f = t(389996),
    h = t(743987),
    x = t(900179),
    I = t(946356),
    b = t(810396),
    v = t(35241),
    E = t(587168),
    j = t(518477),
    y = t(652215),
    C = t(996988),
    T = t(985018),
    S = t(669924),
    N = t(824860),
    R = t(843796);

function L(e) {
    let {
        user: n,
        guildId: t,
        channelId: L,
        messageId: P,
        roleId: D,
        sessionId: O,
        transitionState: k,
        onClose: B,
        sourceAnalyticsLocations: U = []
    } = e, G = t === y.ME ? void 0 : t, M = (0, p.Ay)(n.id, G), F = _.Ay.getName(G, L, n), w = (0, d.GV)(), {
        analyticsLocations: V
    } = (0, o.Ay)([...U, r.A.USER_PROFILE_MODAL]), H = (0, u.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: O,
        guildId: G,
        channelId: L,
        messageId: P,
        roleId: D
    }), W = a.useRef(null), z = (0, c.M)(W);
    return (0, i.jsx)(o.f5, {
        value: V,
        children: (0, i.jsx)(u.of, {
            value: H,
            isLoaded: M?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: w,
                            children: T.intl.format(T.t.KRe1Fk, {
                                name: F
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: n,
                        displayProfile: M,
                        themeType: C.d.MODAL,
                        ref: M?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(E.A, {
                            children: (0, i.jsx)(v.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(m.A, {
                                user: n,
                                displayProfile: M,
                                themeType: C.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: S.El,
                                children: (0, i.jsx)(A.A, {
                                    user: n,
                                    displayProfile: M,
                                    guildId: G,
                                    channelId: L,
                                    themeType: C.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: S.rf,
                            children: [(0, i.jsx)(b.A, {
                                className: S.Xh,
                                user: n,
                                guildId: G,
                                nickname: F,
                                pronouns: M?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(g.A, {
                                    displayProfile: M,
                                    themeType: C.d.MODAL,
                                    onClose: B
                                })
                            }), (0, i.jsxs)("div", {
                                className: R.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: R.$H,
                                    type: "top",
                                    selectedItem: j.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: R.YU,
                                        id: j.RP.BOT_INFO,
                                        "aria-label": T.intl.string(T.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: T.intl.string(T.t.ZzAR2Y)
                                        })
                                    }, j.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: N.XG,
                                    children: [(0, i.jsx)(f.E, {
                                        userId: n.id,
                                        userBio: M?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(x.A, {
                                        heading: T.intl.string(T.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: G,
                                            tooltipDelay: j.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), M?.profileEffect != null && (0, i.jsx)(s.A, {
                    skuId: M?.profileEffect?.skuId,
                    isHovering: z
                })]
            })
        })
    })
}