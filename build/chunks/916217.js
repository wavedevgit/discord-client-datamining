/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => P
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
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
    v = t(35241),
    j = t(587168),
    C = t(518477),
    y = t(652215),
    N = t(996988),
    E = t(985018),
    T = t(669924),
    L = t(824860),
    O = t(843796);

function P(e) {
    let {
        user: n,
        guildId: t,
        channelId: P,
        messageId: S,
        roleId: k,
        sessionId: M,
        transitionState: B,
        onClose: R,
        sourceAnalyticsLocations: G = []
    } = e, D = t === y.ME ? void 0 : t, U = (0, _.Ay)(n.id, D), V = u.Ay.getName(D, P, n), F = (0, o.GV)(), {
        analyticsLocations: w
    } = (0, r.Ay)([...G, s.A.USER_PROFILE_MODAL]), W = (0, A.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: D,
        channelId: P,
        messageId: S,
        roleId: k
    }), H = a.useRef(null), z = (0, c.M)(H);
    return (0, i.jsx)(r.f5, {
        value: w,
        children: (0, i.jsx)(A.of, {
            value: W,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: B,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: F,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(b.A, {
                        user: n,
                        displayProfile: U,
                        themeType: N.d.MODAL,
                        ref: U?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(j.A, {
                            children: (0, i.jsx)(v.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(g.A, {
                                user: n,
                                displayProfile: U,
                                themeType: N.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(p.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: D,
                                    channelId: P,
                                    themeType: N.d.MODAL
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
                                    themeType: N.d.MODAL,
                                    onClose: R
                                })
                            }), (0, i.jsxs)("div", {
                                className: O.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: O.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: O.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
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