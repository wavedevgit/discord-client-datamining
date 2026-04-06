/** chunk id: 916217 params = (module,exports,require) **/
i.d(n, {
    A: () => O
});
var t = i(627968),
    a = i(64700),
    l = i(397927),
    s = i(793574),
    r = i(688810),
    d = i(351966),
    o = i(915089),
    c = i(713517),
    u = i(562153),
    _ = i(183555),
    A = i(950191),
    p = i(718019),
    x = i(31432),
    g = i(915614),
    m = i(389996),
    I = i(743987),
    f = i(900179),
    b = i(946356),
    h = i(810396),
    v = i(35241),
    j = i(587168),
    C = i(518477),
    y = i(652215),
    N = i(996988),
    E = i(985018),
    T = i(669924),
    L = i(824860),
    P = i(843796);

function O(e) {
    let {
        user: n,
        guildId: i,
        channelId: O,
        messageId: S,
        roleId: k,
        sessionId: B,
        transitionState: M,
        onClose: R,
        sourceAnalyticsLocations: D = []
    } = e, G = i === y.ME ? void 0 : i, U = (0, A.Ay)(n.id, G), V = u.Ay.getName(G, O, n), F = (0, o.GV)(), {
        analyticsLocations: w
    } = (0, r.Ay)([...D, s.A.USER_PROFILE_MODAL]), z = (0, _.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: B,
        guildId: G,
        channelId: O,
        messageId: S,
        roleId: k
    }), W = a.useRef(null), H = (0, c.M)(W);
    return (0, t.jsx)(r.f5, {
        value: w,
        children: (0, t.jsx)(_.of, {
            value: z,
            isLoaded: U?.isLoaded,
            children: (0, t.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, t.jsx)(l.Fmo, {
                    component: (0, t.jsx)(l.AC4, {
                        children: (0, t.jsx)(l.H, {
                            id: F,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, t.jsxs)(b.A, {
                        user: n,
                        displayProfile: U,
                        themeType: N.d.MODAL,
                        ref: U?.profileEffect != null ? W : void 0,
                        children: [(0, t.jsx)(j.A, {
                            children: (0, t.jsx)(v.A, {
                                user: n
                            })
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsx)(g.A, {
                                user: n,
                                displayProfile: U,
                                themeType: N.d.MODAL
                            }), (0, t.jsx)("div", {
                                className: T.El,
                                children: (0, t.jsx)(p.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: G,
                                    channelId: O,
                                    themeType: N.d.MODAL
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: T.rf,
                            children: [(0, t.jsx)(h.A, {
                                className: T.Xh,
                                user: n,
                                guildId: G,
                                nickname: V,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, t.jsx)(x.A, {
                                    displayProfile: U,
                                    themeType: N.d.MODAL,
                                    onClose: R
                                })
                            }), (0, t.jsxs)("div", {
                                className: P.kL,
                                children: [(0, t.jsx)(l.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, t.jsx)(l.VQ0.Item, {
                                        className: P.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.ZzAR2Y),
                                        children: (0, t.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, t.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, t.jsx)(m.E, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, t.jsx)(f.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, t.jsx)(I.A, {
                                            userId: n.id,
                                            guildId: G,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, t.jsx)(d.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}