/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => R
});
var i = t(627968),
    s = t(64700),
    r = t(397927),
    l = t(793574),
    a = t(688810),
    o = t(915089),
    d = t(713517),
    c = t(182592),
    u = t(562153),
    A = t(183555),
    m = t(950191),
    _ = t(718019),
    x = t(31432),
    p = t(915614),
    f = t(389996),
    h = t(743987),
    g = t(900179),
    I = t(946356),
    j = t(810396),
    b = t(35241),
    v = t(587168),
    N = t(518477),
    C = t(652215),
    y = t(996988),
    T = t(985018),
    E = t(763563),
    L = t(195723),
    P = t(368519);

function R(e) {
    let {
        user: n,
        guildId: t,
        channelId: R,
        messageId: O,
        roleId: S,
        sessionId: M,
        transitionState: G,
        onClose: k,
        sourceAnalyticsLocations: B = []
    } = e, D = t === C.ME ? void 0 : t, U = (0, m.Ay)(n.id, D), w = u.Ay.getName(D, R, n), F = (0, o.GV)(), {
        analyticsLocations: V
    } = (0, a.Ay)([...B, l.A.USER_PROFILE_MODAL]), W = (0, A.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: D,
        channelId: R,
        messageId: O,
        roleId: S
    }), z = s.useRef(null), H = (0, d.M)(z);
    return (0, i.jsx)(a.f5, {
        value: V,
        children: (0, i.jsx)(A.of, {
            value: W,
            isLoaded: U?.isLoaded,
            children: (0, i.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: E.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(r.Fmo, {
                    component: (0, i.jsx)(r.AC4, {
                        children: (0, i.jsx)(r.H, {
                            id: F,
                            children: T.intl.format(T.t.KRe1Fk, {
                                name: w
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: n,
                        displayProfile: U,
                        themeType: y.d.MODAL,
                        ref: U?.profileEffect != null ? z : void 0,
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
                                className: E.El,
                                children: (0, i.jsx)(_.A, {
                                    user: n,
                                    displayProfile: U,
                                    guildId: D,
                                    channelId: R,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: E.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: E.Xh,
                                user: n,
                                guildId: D,
                                nickname: w,
                                pronouns: U?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(x.A, {
                                    displayProfile: U,
                                    themeType: y.d.MODAL,
                                    onClose: k
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
                                        "aria-label": T.intl.string(T.t.ZzAR2Y),
                                        children: (0, i.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: T.intl.string(T.t.ZzAR2Y)
                                        })
                                    }, N.RP.BOT_INFO)
                                }), (0, i.jsxs)(r.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.A, {
                                        userId: n.id,
                                        userBio: U?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(g.A, {
                                        heading: T.intl.string(T.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: D,
                                            tooltipDelay: N.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), U?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: U?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}