/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => O
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
    _ = t(183555),
    A = t(950191),
    x = t(718019),
    p = t(31432),
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
    P = t(843796);

function O(e) {
    let {
        user: n,
        guildId: t,
        channelId: O,
        messageId: S,
        roleId: k,
        sessionId: B,
        transitionState: M,
        onClose: R,
        sourceAnalyticsLocations: D = []
    } = e, G = t === y.ME ? void 0 : t, U = (0, A.Ay)(n.id, G), V = u.Ay.getName(G, O, n), F = (0, o.GV)(), {
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
    return (0, i.jsx)(r.f5, {
        value: w,
        children: (0, i.jsx)(_.of, {
            value: z,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
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
                        ref: U?.profileEffect != null ? W : void 0,
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
                                children: (0, i.jsx)(x.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: G,
                                    channelId: O,
                                    themeType: N.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(h.A, {
                                className: T.Xh,
                                user: n,
                                guildId: G,
                                nickname: V,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(p.A, {
                                    displayProfile: U,
                                    themeType: N.d.MODAL,
                                    onClose: R
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: P.YU,
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
                                            guildId: G,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, i.jsx)(d.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}