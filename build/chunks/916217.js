/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => P
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
    h = t(915614),
    m = t(389996),
    f = t(743987),
    I = t(900179),
    x = t(946356),
    b = t(810396),
    v = t(35241),
    E = t(587168),
    y = t(518477),
    j = t(652215),
    T = t(996988),
    S = t(985018),
    C = t(669924),
    N = t(824860),
    R = t(843796);

function P(e) {
    let {
        user: n,
        guildId: t,
        channelId: P,
        messageId: L,
        roleId: O,
        sessionId: D,
        transitionState: k,
        onClose: B,
        sourceAnalyticsLocations: U = []
    } = e, G = t === j.ME ? void 0 : t, M = (0, p.Ay)(n.id, G), F = _.Ay.getName(G, P, n), w = (0, d.GV)(), {
        analyticsLocations: V
    } = (0, o.Ay)([...U, r.A.USER_PROFILE_MODAL]), H = (0, u.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: D,
        guildId: G,
        channelId: P,
        messageId: L,
        roleId: O
    }), W = a.useRef(null), z = (0, c.M)(W);
    return (0, i.jsx)(o.f5, {
        value: V,
        children: (0, i.jsx)(u.of, {
            value: H,
            isLoaded: M?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: C.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: w,
                            children: S.intl.format(S.t.KRe1Fk, {
                                name: F
                            })
                        })
                    }),
                    children: (0, i.jsxs)(x.A, {
                        user: n,
                        displayProfile: M,
                        themeType: T.d.MODAL,
                        ref: M?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(E.A, {
                            children: (0, i.jsx)(v.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(h.A, {
                                user: n,
                                displayProfile: M,
                                themeType: T.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: C.El,
                                children: (0, i.jsx)(A.A, {
                                    user: n,
                                    displayProfile: M,
                                    guildId: G,
                                    channelId: P,
                                    themeType: T.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: C.rf,
                            children: [(0, i.jsx)(b.A, {
                                className: C.Xh,
                                user: n,
                                guildId: G,
                                nickname: F,
                                pronouns: M?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(g.A, {
                                    displayProfile: M,
                                    themeType: T.d.MODAL,
                                    onClose: B
                                })
                            }), (0, i.jsxs)("div", {
                                className: R.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: R.$H,
                                    type: "top",
                                    selectedItem: y.RP.BOT_INFO,
                                    onItemSelect: j.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: R.YU,
                                        id: y.RP.BOT_INFO,
                                        "aria-label": S.intl.string(S.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: S.intl.string(S.t.ZzAR2Y)
                                        })
                                    }, y.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: N.XG,
                                    children: [(0, i.jsx)(m.E, {
                                        userId: n.id,
                                        userBio: M?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(I.A, {
                                        heading: S.intl.string(S.t["A//N4k"]),
                                        children: (0, i.jsx)(f.A, {
                                            userId: n.id,
                                            guildId: G,
                                            tooltipDelay: y.In
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