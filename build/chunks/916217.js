/** chunk id: 916217 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    o = n(915089),
    d = n(713517),
    c = n(182592),
    u = n(562153),
    _ = n(183555),
    A = n(950191),
    m = n(718019),
    x = n(31432),
    p = n(915614),
    f = n(389996),
    h = n(743987),
    g = n(900179),
    I = n(946356),
    j = n(810396),
    b = n(35241),
    v = n(587168),
    C = n(518477),
    N = n(652215),
    y = n(996988),
    E = n(985018),
    T = n(763563),
    L = n(195723),
    P = n(368519);

function O(e) {
    let {
        user: t,
        guildId: n,
        channelId: O,
        messageId: R,
        roleId: S,
        sessionId: M,
        transitionState: G,
        onClose: k,
        sourceAnalyticsLocations: B = []
    } = e, U = n === N.ME ? void 0 : n, D = (0, A.Ay)(t.id, U), F = u.Ay.getName(U, O, t), w = (0, o.GV)(), {
        analyticsLocations: V
    } = (0, l.Ay)([...B, a.A.USER_PROFILE_MODAL]), z = (0, _.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: M,
        guildId: U,
        channelId: O,
        messageId: R,
        roleId: S
    }), W = s.useRef(null), H = (0, d.M)(W);
    return (0, i.jsx)(l.f5, {
        value: V,
        children: (0, i.jsx)(_.of, {
            value: z,
            isLoaded: D?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(r.Fmo, {
                    component: (0, i.jsx)(r.AC4, {
                        children: (0, i.jsx)(r.H, {
                            id: w,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: F
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: t,
                        displayProfile: D,
                        themeType: y.d.MODAL,
                        ref: D?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(b.A, {
                                user: t
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(p.A, {
                                user: t,
                                displayProfile: D,
                                themeType: y.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(m.A, {
                                    user: t,
                                    displayProfile: D,
                                    guildId: U,
                                    channelId: O,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: T.Xh,
                                user: t,
                                guildId: U,
                                nickname: F,
                                pronouns: D?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(x.A, {
                                    displayProfile: D,
                                    themeType: y.d.MODAL,
                                    onClose: k
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
                                    children: [(0, i.jsx)(f.A, {
                                        userId: t.id,
                                        userBio: D?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(g.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: t.id,
                                            guildId: U,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), D?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: D?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}