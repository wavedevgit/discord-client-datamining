/** chunk id: 916217 params = (module,exports,require) **/
t.d(n, {
    A: () => R
});
var i = t(627968),
    s = t(64700),
    l = t(397927),
    a = t(793574),
    r = t(688810),
    o = t(915089),
    d = t(713517),
    c = t(182592),
    u = t(562153),
    m = t(183555),
    A = t(950191),
    x = t(718019),
    p = t(31432),
    _ = t(915614),
    f = t(389996),
    h = t(743987),
    j = t(900179),
    g = t(946356),
    I = t(810396),
    b = t(35241),
    v = t(587168),
    N = t(518477),
    y = t(652215),
    C = t(996988),
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
        sourceAnalyticsLocations: U = []
    } = e, w = t === y.ME ? void 0 : t, B = (0, A.Ay)(n.id, w), D = u.Ay.getName(w, R, n), F = (0, o.GV)(), {
        analyticsLocations: V
    } = (0, r.Ay)([...U, a.A.USER_PROFILE_MODAL]), z = (0, m.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: w,
        channelId: R,
        messageId: O,
        roleId: S
    }), W = s.useRef(null), H = (0, d.M)(W);
    return (0, i.jsx)(r.f5, {
        value: V,
        children: (0, i.jsx)(m.of, {
            value: z,
            isLoaded: B?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: E.zr,
                hideShadow: !0,
                "aria-labelledby": F,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: F,
                            children: T.intl.format(T.t.KRe1Fk, {
                                name: D
                            })
                        })
                    }),
                    children: (0, i.jsxs)(g.A, {
                        user: n,
                        displayProfile: B,
                        themeType: C.d.MODAL,
                        ref: B?.profileEffect != null ? W : void 0,
                        children: [(0, i.jsx)(v.A, {
                            children: (0, i.jsx)(b.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(_.A, {
                                user: n,
                                displayProfile: B,
                                themeType: C.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: E.El,
                                children: (0, i.jsx)(x.A, {
                                    user: n,
                                    displayProfile: B,
                                    guildId: w,
                                    channelId: R,
                                    themeType: C.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: E.rf,
                            children: [(0, i.jsx)(I.A, {
                                className: E.Xh,
                                user: n,
                                guildId: w,
                                nickname: D,
                                pronouns: B?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(p.A, {
                                    displayProfile: B,
                                    themeType: C.d.MODAL,
                                    onClose: k
                                })
                            }), (0, i.jsxs)("div", {
                                className: P.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: P.$H,
                                    type: "top",
                                    selectedItem: N.RP.BOT_INFO,
                                    onItemSelect: y.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: P.YU,
                                        id: N.RP.BOT_INFO,
                                        "aria-label": T.intl.string(T.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: T.intl.string(T.t.ZzAR2Y)
                                        })
                                    }, N.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.A, {
                                        userId: n.id,
                                        userBio: B?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(j.A, {
                                        heading: T.intl.string(T.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: w,
                                            tooltipDelay: N.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), B?.profileEffect != null && (0, i.jsx)(c.A, {
                    skuId: B?.profileEffect?.skuId,
                    isHovering: H
                })]
            })
        })
    })
}