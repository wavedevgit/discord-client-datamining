/** chunk id: 916217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(793574),
    a = n(688810),
    d = n(915089),
    o = n(713517),
    c = n(182592),
    u = n(562153),
    A = n(183555),
    m = n(950191),
    x = n(718019),
    f = n(31432),
    _ = n(915614),
    p = n(389996),
    h = n(743987),
    g = n(900179),
    I = n(946356),
    j = n(810396),
    v = n(35241),
    b = n(587168),
    N = n(518477),
    C = n(652215),
    y = n(996988),
    E = n(985018),
    T = n(200445),
    L = n(199385),
    O = n(735633);

function R(e) {
    let {
        user: t,
        guildId: n,
        channelId: R,
        messageId: S,
        roleId: P,
        sessionId: M,
        transitionState: G,
        openedAt: k,
        onClose: U,
        sourceAnalyticsLocations: D = []
    } = e, w = n === C.ME ? void 0 : n, F = (0, m.Ay)(t.id, w), B = u.Ay.getName(w, R, t), V = (0, d.GV)(), {
        analyticsLocations: z
    } = (0, a.Ay)([...D, l.A.USER_PROFILE_MODAL]), W = (0, A.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: M,
        guildId: w,
        channelId: R,
        messageId: S,
        roleId: P
    }), H = s.useRef(null), X = (0, o.M)(H);
    return (0, i.jsx)(a.f5, {
        value: z,
        children: (0, i.jsx)(A.of, {
            value: W,
            openedAt: k,
            fetchStartedAt: F?.fetchStartedAt,
            fetchEndedAt: F?.fetchEndedAt,
            isLoaded: F?.isLoaded,
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
                                name: B
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: t,
                        displayProfile: F,
                        themeType: y.d.MODAL,
                        ref: F?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(b.A, {
                            children: (0, i.jsx)(v.A, {
                                user: t
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(_.A, {
                                user: t,
                                displayProfile: F,
                                themeType: y.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: T.El,
                                children: (0, i.jsx)(x.A, {
                                    user: t,
                                    displayProfile: F,
                                    guildId: w,
                                    channelId: R,
                                    themeType: y.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: T.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: T.Xh,
                                user: t,
                                guildId: w,
                                nickname: B,
                                pronouns: F?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(f.A, {
                                    displayProfile: F,
                                    themeType: y.d.MODAL,
                                    onClose: U
                                })
                            }), (0, i.jsxs)("div", {
                                className: O.kL,
                                children: [(0, i.jsx)(r.VQ0, {
                                    className: O.$H,
                                    type: "top",
                                    selectedItem: N.RP.BOT_INFO,
                                    onItemSelect: C.tEg,
                                    children: (0, i.jsx)(r.VQ0.Item, {
                                        className: O.YU,
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
                                    children: [(0, i.jsx)(p.A, {
                                        userId: t.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(g.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: t.id,
                                            guildId: w,
                                            tooltipDelay: N.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), F?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: F?.profileEffect?.skuId,
                    isHovering: X
                })]
            })
        })
    })
}