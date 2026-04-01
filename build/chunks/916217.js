/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968),
    s = t(64700),
    a = t(397927),
    l = t(793574),
    r = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    A = t(950191),
    x = t(718019),
    p = t(31432),
    m = t(915614),
    g = t(389996),
    I = t(743987),
    f = t(900179),
    h = t(946356),
    b = t(810396),
    j = t(35241),
    v = t(587168),
    C = t(518477),
    N = t(652215),
    E = t(996988),
    y = t(985018),
    T = t(669924),
    L = t(824860),
    P = t(843796);

function O(e) {
    let {
        user: n,
        guildId: t,
        channelId: O,
        messageId: S,
        roleId: R,
        sessionId: k,
        transitionState: B,
        onClose: M,
        sourceAnalyticsLocations: D = []
    } = e, G = t === N.ME ? void 0 : t, U = (0, A.Ay)(n.id, G), V = u.Ay.getName(G, O, n), F = (0, d.GV)(), {
        analyticsLocations: W
    } = (0, r.Ay)([...D, l.A.USER_PROFILE_MODAL]), H = (0, _.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: k,
        guildId: G,
        channelId: O,
        messageId: S,
        roleId: R
    }), w = s.useRef(null), z = (0, c.M)(w);
    return (0, i.jsx)(r.f5, {
        value: W,
        children: (0, i.jsx)(_.of, {
            value: H,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(a.EOs, {
                "data-migration-pending": !0,
                transitionState: B,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(a.Fmo, {
                    component: (0, i.jsx)(a.AC4, {
                        children: (0, i.jsx)(a.H, {
                            id: F,
                            children: y.intl.format(y.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(h.A, {
                        user: n,
                        displayProfile: U,
                        themeType: E.d.MODAL,
                        ref: U?.profileEffect != null ? w : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(j.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(m.A, {
                                user: n,
                                displayProfile: U,
                                themeType: E.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(x.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: G,
                                    channelId: O,
                                    themeType: E.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(b.A, {
                                className: T.Xh,
                                user: n,
                                guildId: G,
                                nickname: V,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(p.A, {
                                    displayProfile: U,
                                    themeType: E.d.MODAL,
                                    onClose: M
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(a.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: N.tEg,
                                    children: (0, i.jsx)(a.VQ0.Item, {
                                        className: P.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": y.intl.string(y.t.ZzAR2Y),
                                        children: (0, i.jsx)(a.Text, {
                                            variant: "text-sm/normal",
                                            children: y.intl.string(y.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(a.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(g.E, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(f.A, {
                                        heading: y.intl.string(y.t["A//N4k"]),
                                        children: (0, i.jsx)(I.A, {
                                            userId: n.id,
                                            guildId: G,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, i.jsx)(o.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: z
                })]
            })
        })
    })
}