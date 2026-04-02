/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => S
});
var i = t(627968),
    l = t(64700),
    a = t(397927),
    s = t(793574),
    r = t(688810),
    d = t(351966),
    o = t(915089),
    c = t(713517),
    u = t(562153),
    A = t(183555),
    _ = t(950191),
    p = t(718019),
    x = t(31432),
    g = t(915614),
    m = t(389996),
    I = t(743987),
    f = t(900179),
    b = t(946356),
    h = t(810396),
    j = t(35241),
    v = t(587168),
    C = t(518477),
    N = t(652215),
    y = t(996988),
    E = t(985018),
    T = t(669924),
    L = t(824860),
    O = t(843796);

function S(e) {
    let {
        user: n,
        guildId: t,
        channelId: S,
        messageId: P,
        roleId: k,
        sessionId: B,
        transitionState: M,
        onClose: R,
        sourceAnalyticsLocations: G = []
    } = e, D = t === N.ME ? void 0 : t, U = (0, _.Ay)(n.id, D), V = u.Ay.getName(D, S, n), F = (0, o.GV)(), {
        analyticsLocations: W
    } = (0, r.Ay)([...G, s.A.USER_PROFILE_MODAL]), w = (0, A.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: B,
        guildId: D,
        channelId: S,
        messageId: P,
        roleId: k
    }), H = l.useRef(null), z = (0, c.M)(H);
    return (0, i.jsx)(r.f5, {
        value: W,
        children: (0, i.jsx)(A.of, {
            value: w,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(a.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(a.Fmo, {
                    component: (0, i.jsx)(a.AC4, {
                        children: (0, i.jsx)(a.H, {
                            id: F,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(b.A, {
                        user: n,
                        displayProfile: U,
                        themeType: y.d.MODAL,
                        ref: U?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(j.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(g.A, {
                                user: n,
                                displayProfile: U,
                                themeType: y.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(p.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: D,
                                    channelId: S,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(h.A, {
                                className: T.Xh,
                                user: n,
                                guildId: D,
                                nickname: V,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(x.A, {
                                    displayProfile: U,
                                    themeType: y.d.MODAL,
                                    onClose: R
                                })
                            }), (0, i.jsxs)("div", {
                                className: O.kL,
                                children: [(0, i.jsx)(a.VQ0, {
                                    className: O.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: N.tEg,
                                    children: (0, i.jsx)(a.VQ0.Item, {
                                        className: O.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.ZzAR2Y),
                                        children: (0, i.jsx)(a.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(a.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(m.E, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(f.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, i.jsx)(I.A, {
                                            userId: n.id,
                                            guildId: D,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, i.jsx)(d.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: z
                })]
            })
        })
    })
}