/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => P
});
var i = t(627968),
    a = t(64700),
    l = t(397927),
    r = t(793574),
    s = t(688810),
    d = t(351966),
    o = t(915089),
    c = t(713517),
    u = t(562153),
    _ = t(183555),
    p = t(950191),
    A = t(718019),
    g = t(31432),
    f = t(915614),
    m = t(389996),
    h = t(743987),
    x = t(900179),
    I = t(946356),
    b = t(810396),
    v = t(35241),
    E = t(587168),
    j = t(518477),
    y = t(652215),
    T = t(996988),
    N = t(985018),
    S = t(669924),
    C = t(824860),
    R = t(843796);

function P(e) {
    let {
        user: n,
        guildId: t,
        channelId: P,
        messageId: L,
        roleId: O,
        sessionId: D,
        transitionState: k,
        onClose: B,
        sourceAnalyticsLocations: U = []
    } = e, M = t === y.ME ? void 0 : t, G = (0, p.Ay)(n.id, M), F = u.Ay.getName(M, P, n), w = (0, o.GV)(), {
        analyticsLocations: V
    } = (0, s.Ay)([...U, r.A.USER_PROFILE_MODAL]), H = (0, _.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: D,
        guildId: M,
        channelId: P,
        messageId: L,
        roleId: O
    }), W = a.useRef(null), z = (0, c.M)(W);
    return (0, i.jsx)(s.f5, {
        value: V,
        children: (0, i.jsx)(_.of, {
            value: H,
            isLoaded: G?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: k,
                className: S.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: w,
                            children: N.intl.format(N.t.KRe1Fk, {
                                name: F
                            })
                        })
                    }),
                    children: (0, i.jsxs)(I.A, {
                        user: n,
                        displayProfile: G,
                        themeType: T.d.MODAL,
                        ref: G?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(E.A, {
                            children: (0, i.jsx)(v.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(f.A, {
                                user: n,
                                displayProfile: G,
                                themeType: T.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: S.El,
                                children: (0, i.jsx)(A.A, {
                                    user: n,
                                    displayProfile: G,
                                    guildId: M,
                                    channelId: P,
                                    themeType: T.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: S.rf,
                            children: [(0, i.jsx)(b.A, {
                                className: S.Xh,
                                user: n,
                                guildId: M,
                                nickname: F,
                                pronouns: G?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(g.A, {
                                    displayProfile: G,
                                    themeType: T.d.MODAL,
                                    onClose: B
                                })
                            }), (0, i.jsxs)("div", {
                                className: R.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: R.$H,
                                    type: "top",
                                    selectedItem: j.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: R.YU,
                                        id: j.RP.BOT_INFO,
                                        "aria-label": N.intl.string(N.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: N.intl.string(N.t.ZzAR2Y)
                                        })
                                    }, j.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: C.XG,
                                    children: [(0, i.jsx)(m.E, {
                                        userId: n.id,
                                        userBio: G?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(x.A, {
                                        heading: N.intl.string(N.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: M,
                                            tooltipDelay: j.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), G?.profileEffect != null && (0, i.jsx)(d.A, {
                    skuId: G?.profileEffect?.skuId,
                    isHovering: z
                })]
            })
        })
    })
}