/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968),
    a = t(64700),
    s = t(397927),
    r = t(793574),
    l = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    A = t(950191),
    p = t(718019),
    x = t(31432),
    f = t(915614),
    m = t(389996),
    g = t(743987),
    I = t(900179),
    h = t(946356),
    b = t(810396),
    j = t(35241),
    v = t(587168),
    C = t(518477),
    N = t(652215),
    E = t(996988),
    y = t(985018),
    T = t(853293),
    L = t(47049),
    P = t(613761);

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
        analyticsLocations: w
    } = (0, l.Ay)([...D, r.A.USER_PROFILE_MODAL]), W = (0, _.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: k,
        guildId: G,
        channelId: O,
        messageId: S,
        roleId: R
    }), H = a.useRef(null), z = (0, c.M)(H);
    return (0, i.jsx)(l.f5, {
        value: w,
        children: (0, i.jsx)(_.of, {
            value: W,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(s.EOs, {
                "data-migration-pending": !0,
                transitionState: B,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(s.Fmo, {
                    component: (0, i.jsx)(s.AC4, {
                        children: (0, i.jsx)(s.H, {
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
                        ref: U?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(j.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(f.A, {
                                user: n,
                                displayProfile: U,
                                themeType: E.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(p.A, {
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
                                tags: (0, i.jsx)(x.A, {
                                    displayProfile: U,
                                    themeType: E.d.MODAL,
                                    onClose: M
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(s.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: N.tEg,
                                    children: (0, i.jsx)(s.VQ0.Item, {
                                        className: P.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": y.intl.string(y.t.ZzAR2Y),
                                        children: (0, i.jsx)(s.Text, {
                                            variant: "text-sm/normal",
                                            children: y.intl.string(y.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(s.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(m.E, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(I.A, {
                                        heading: y.intl.string(y.t["A//N4k"]),
                                        children: (0, i.jsx)(g.A, {
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