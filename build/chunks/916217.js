/** chunk id: 916217 params = (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    a = n(793574),
    l = n(688810),
    d = n(915089),
    o = n(713517),
    c = n(182592),
    u = n(562153),
    A = n(183555),
    m = n(950191),
    x = n(718019),
    p = n(31432),
    _ = n(915614),
    f = n(389996),
    h = n(743987),
    g = n(900179),
    I = n(946356),
    j = n(810396),
    b = n(35241),
    v = n(587168),
    N = n(518477),
    C = n(652215),
    y = n(996988),
    E = n(985018),
    T = n(200445),
    L = n(199385),
    P = n(735633);

function O(e) {
    let {
        user: t,
        guildId: n,
        channelId: O,
        messageId: S,
        roleId: R,
        sessionId: M,
        transitionState: G,
        openedAt: k,
        onClose: U,
        sourceAnalyticsLocations: w = []
    } = e, B = n === C.ME ? void 0 : n, D = (0, m.Ay)(t.id, B), F = u.Ay.getName(B, O, t), V = (0, d.GV)(), {
        analyticsLocations: z
    } = (0, l.Ay)([...w, a.A.USER_PROFILE_MODAL]), W = (0, A.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: M,
        guildId: B,
        channelId: O,
        messageId: S,
        roleId: R
    }), H = s.useRef(null), X = (0, o.M)(H);
    return (0, i.jsx)(l.f5, {
        value: z,
        children: (0, i.jsx)(A.of, {
            value: W,
            openedAt: k,
            fetchStartedAt: D?.fetchStartedAt,
            fetchEndedAt: D?.fetchEndedAt,
            isLoaded: D?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": V,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(r.Fmo, {
                    component: (0, i.jsx)(r.AC4, {
                        children: (0, i.jsx)(r.H, {
                            id: V,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: F
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: t,
                        displayProfile: D,
                        themeType: y.d.MODAL,
                        ref: D?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(b.A, {
                                user: t
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(_.A, {
                                user: t,
                                displayProfile: D,
                                themeType: y.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(x.A, {
                                    user: t,
                                    displayProfile: D,
                                    guildId: B,
                                    channelId: O,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: T.Xh,
                                user: t,
                                guildId: B,
                                nickname: F,
                                pronouns: D?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(p.A, {
                                    displayProfile: D,
                                    themeType: y.d.MODAL,
                                    onClose: U
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(r.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: N.RP.BOT_INFO,
                                    onItemSelect: C.tEg,
                                    children: (0, i.jsx)(r.VQ0.Item, {
                                        className: P.YU,
                                        id: N.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.ZzAR2Y),
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.ZzAR2Y)
                                        })
                                    }, N.RP.BOT_INFO)
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
                                            guildId: B,
                                            tooltipDelay: N.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), D?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: D?.profileEffect?.skuId,
                    isHovering: X
                })]
            })
        })
    })
}