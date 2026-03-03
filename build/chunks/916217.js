/** chunk id: 916217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    a = n(793574),
    r = n(688810),
    d = n(915089),
    o = n(713517),
    c = n(182592),
    u = n(562153),
    A = n(183555),
    _ = n(950191),
    x = n(718019),
    p = n(31432),
    m = n(915614),
    f = n(389996),
    h = n(743987),
    I = n(900179),
    g = n(946356),
    j = n(810396),
    b = n(35241),
    N = n(587168),
    C = n(518477),
    E = n(652215),
    v = n(996988),
    T = n(985018),
    y = n(763563),
    L = n(195723),
    O = n(368519);

function S(e) {
    let {
        user: t,
        guildId: n,
        channelId: S,
        messageId: P,
        roleId: M,
        sessionId: R,
        transitionState: G,
        openedAt: k,
        onClose: D,
        sourceAnalyticsLocations: U = []
    } = e, B = n === E.ME ? void 0 : n, F = (0, _.Ay)(t.id, B), V = u.Ay.getName(B, S, t), w = (0, d.GV)(), {
        analyticsLocations: z
    } = (0, r.Ay)([...U, a.A.USER_PROFILE_MODAL]), H = (0, A.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: R,
        guildId: B,
        channelId: S,
        messageId: P,
        roleId: M
    }), W = s.useRef(null), Y = (0, o.M)(W);
    return (0, i.jsx)(r.f5, {
        value: z,
        children: (0, i.jsx)(A.of, {
            value: H,
            openedAt: k,
            fetchStartedAt: F?.fetchStartedAt,
            fetchEndedAt: F?.fetchEndedAt,
            isLoaded: F?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: y.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: w,
                            children: T.intl.format(T.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(g.A, {
                        user: t,
                        displayProfile: F,
                        themeType: v.d.MODAL,
                        ref: F?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(N.A, {
                            children: (0, i.jsx)(b.A, {
                                user: t
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(m.A, {
                                user: t,
                                displayProfile: F,
                                themeType: v.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: y.El,
                                children: (0, i.jsx)(x.A, {
                                    user: t,
                                    displayProfile: F,
                                    guildId: B,
                                    channelId: S,
                                    themeType: v.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: y.rf,
                            children: [(0, i.jsx)(j.A, {
                                className: y.Xh,
                                user: t,
                                guildId: B,
                                nickname: V,
                                pronouns: F?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(p.A, {
                                    displayProfile: F,
                                    themeType: v.d.MODAL,
                                    onClose: D
                                })
                            }), (0, i.jsxs)("div", {
                                className: O.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: O.$H,
                                    type: "top",
                                    selectedItem: C.RP.BOT_INFO,
                                    onItemSelect: E.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: O.YU,
                                        id: C.RP.BOT_INFO,
                                        "aria-label": T.intl.string(T.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: T.intl.string(T.t.ZzAR2Y)
                                        })
                                    }, C.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.A, {
                                        userId: t.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(I.A, {
                                        heading: T.intl.string(T.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: t.id,
                                            guildId: B,
                                            tooltipDelay: C.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), F?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: F?.profileEffect?.skuId,
                    isHovering: Y
                })]
            })
        })
    })
}