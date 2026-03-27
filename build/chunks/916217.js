/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968),
    s = t(64700),
    r = t(397927),
    a = t(793574),
    l = t(688810),
    o = t(351966),
    d = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    A = t(950191),
    m = t(718019),
    x = t(31432),
    p = t(915614),
    f = t(389996),
    h = t(743987),
    g = t(900179),
    I = t(946356),
    j = t(810396),
    b = t(35241),
    v = t(587168),
    C = t(518477),
    N = t(652215),
    y = t(996988),
    E = t(985018),
    T = t(669924),
    L = t(824860),
    P = t(843796);

function O(e) {
    let {
        user: n,
        guildId: t,
        channelId: O,
        messageId: R,
        roleId: S,
        sessionId: M,
        transitionState: k,
        onClose: B,
        sourceAnalyticsLocations: G = []
    } = e, D = t === N.ME ? void 0 : t, U = (0, A.Ay)(n.id, D), w = u.Ay.getName(D, O, n), F = (0, d.GV)(), {
        analyticsLocations: V
    } = (0, l.Ay)([...G, a.A.USER_PROFILE_MODAL]), z = (0, _.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: D,
        channelId: O,
        messageId: R,
        roleId: S
    }), W = s.useRef(null), H = (0, c.M)(W);
    return (0, i.jsx)(l.f5, {
        value: V,
        children: (0, i.jsx)(_.of, {
            value: z,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(r.Fmo, {
                    component: (0, i.jsx)(r.AC4, {
                        children: (0, i.jsx)(r.H, {
                            id: F,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: w
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: n,
                        displayProfile: U,
                        themeType: y.d.MODAL,
                        ref: U?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(b.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(p.A, {
                                user: n,
                                displayProfile: U,
                                themeType: y.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(m.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: D,
                                    channelId: O,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: T.Xh,
                                user: n,
                                guildId: D,
                                nickname: w,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(x.A, {
                                    displayProfile: U,
                                    themeType: y.d.MODAL,
                                    onClose: B
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(r.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: N.tEg,
                                    children: (0, i.jsx)(r.VQ0.Item, {
                                        className: P.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.ZzAR2Y),
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(r.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.E, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(g.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: D,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, i.jsx)(o.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}