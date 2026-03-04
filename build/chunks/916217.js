/** chunk id: 916217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => O
});
var i = n(627968),
    s = n(64700),
    l = n(397927),
    r = n(793574),
    a = n(688810),
    d = n(915089),
    o = n(713517),
    c = n(182592),
    u = n(562153),
    A = n(183555),
    x = n(950191),
    _ = n(718019),
    m = n(31432),
    p = n(915614),
    f = n(389996),
    h = n(743987),
    I = n(900179),
    g = n(946356),
    j = n(810396),
    b = n(35241),
    N = n(587168),
    v = n(518477),
    E = n(652215),
    T = n(996988),
    C = n(985018),
    y = n(763563),
    L = n(195723),
    S = n(368519);

function O(e) {
    let {
        user: t,
        guildId: n,
        channelId: O,
        messageId: P,
        roleId: R,
        sessionId: M,
        transitionState: G,
        openedAt: k,
        onClose: D,
        sourceAnalyticsLocations: U = []
    } = e, B = n === E.ME ? void 0 : n, F = (0, x.Ay)(t.id, B), V = u.Ay.getName(B, O, t), w = (0, d.GV)(), {
        analyticsLocations: z
    } = (0, a.Ay)([...U, r.A.USER_PROFILE_MODAL]), H = (0, A.pb)({
        layout: "MODAL",
        userId: t.id,
        sourceSessionId: M,
        guildId: B,
        channelId: O,
        messageId: P,
        roleId: R
    }), W = s.useRef(null), Y = (0, o.M)(W);
    return (0, i.jsx)(a.f5, {
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
                            children: C.intl.format(C.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(g.A, {
                        user: t,
                        displayProfile: F,
                        themeType: T.d.MODAL,
                        ref: F?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(N.A, {
                            children: (0, i.jsx)(b.A, {
                                user: t
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(p.A, {
                                user: t,
                                displayProfile: F,
                                themeType: T.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: y.El,
                                children: (0, i.jsx)(_.A, {
                                    user: t,
                                    displayProfile: F,
                                    guildId: B,
                                    channelId: O,
                                    themeType: T.d.MODAL
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
                                tags: (0, i.jsx)(m.A, {
                                    displayProfile: F,
                                    themeType: T.d.MODAL,
                                    onClose: D
                                })
                            }), (0, i.jsxs)("div", {
                                className: S.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: S.$H,
                                    type: "top",
                                    selectedItem: v.RP.BOT_INFO,
                                    onItemSelect: E.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: S.YU,
                                        id: v.RP.BOT_INFO,
                                        "aria-label": C.intl.string(C.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: C.intl.string(C.t.ZzAR2Y)
                                        })
                                    }, v.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.A, {
                                        userId: t.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(I.A, {
                                        heading: C.intl.string(C.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: t.id,
                                            guildId: B,
                                            tooltipDelay: v.In
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