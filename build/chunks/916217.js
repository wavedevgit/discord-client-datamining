/** Chunk was on 64228 **/
/** chunk id: 916217, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => S
}), n(896048);
var l = n(627968),
    i = n(64700),
    r = n(397927),
    s = n(793574),
    o = n(688810),
    a = n(915089),
    c = n(713517),
    d = n(182592),
    u = n(562153),
    p = n(183555),
    m = n(950191),
    f = n(718019),
    A = n(31432),
    x = n(915614),
    j = n(389996),
    h = n(743987),
    g = n(900179),
    v = n(946356),
    b = n(810396),
    I = n(35241),
    y = n(587168),
    _ = n(518477),
    O = n(652215),
    N = n(996988),
    E = n(985018),
    T = n(763563),
    P = n(195723),
    C = n(368519);

function S(e) {
    var t;
    let {
        user: n,
        guildId: S,
        channelId: L,
        messageId: R,
        roleId: D,
        sessionId: w,
        transitionState: M,
        openedAt: G,
        onClose: U,
        sourceAnalyticsLocations: k = []
    } = e, F = S === O.ME ? void 0 : S, V = (0, m.Ay)(n.id, F), B = u.Ay.getName(F, L, n), W = (0, a.GV)(), {
        analyticsLocations: K
    } = (0, o.Ay)([...k, s.A.USER_PROFILE_MODAL]), z = (0, p.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: w,
        guildId: F,
        channelId: L,
        messageId: R,
        roleId: D
    }), H = i.useRef(null), Y = (0, c.M)(H);
    return (0, l.jsx)(o.f5, {
        value: K,
        children: (0, l.jsx)(p.of, {
            value: z,
            openedAt: G,
            fetchStartedAt: null == V ? void 0 : V.fetchStartedAt,
            fetchEndedAt: null == V ? void 0 : V.fetchEndedAt,
            isLoaded: null == V ? void 0 : V.isLoaded,
            children: (0, l.jsxs)(r.EOs, {
                "data-migration-pending": !0,
                transitionState: M,
                className: T.zr,
                hideShadow: !0,
                "aria-labelledby": W,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, l.jsx)(r.Fmo, {
                    component: (0, l.jsx)(r.AC4, {
                        children: (0, l.jsx)(r.H, {
                            id: W,
                            children: E.intl.format(E.t.KRe1Fk, {
                                name: B
                            })
                        })
                    }),
                    children: (0, l.jsxs)(v.A, {
                        user: n,
                        displayProfile: V,
                        themeType: N.d.MODAL,
                        ref: (null == V ? void 0 : V.profileEffect) != null ? H : void 0,
                        children: [(0, l.jsx)(y.A, {
                            children: (0, l.jsx)(I.A, {
                                user: n
                            })
                        }), (0, l.jsxs)("div", {
                            children: [(0, l.jsx)(x.A, {
                                user: n,
                                displayProfile: V,
                                themeType: N.d.MODAL
                            }), (0, l.jsx)("div", {
                                className: T.El,
                                children: (0, l.jsx)(f.A, {
                                    user: n,
                                    displayProfile: V,
                                    guildId: F,
                                    channelId: L,
                                    themeType: N.d.MODAL
                                })
                            })]
                        }), (0, l.jsxs)("div", {
                            className: T.rf,
                            children: [(0, l.jsx)(b.A, {
                                className: T.Xh,
                                user: n,
                                guildId: F,
                                nickname: B,
                                pronouns: null == V ? void 0 : V.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, l.jsx)(A.A, {
                                    displayProfile: V,
                                    themeType: N.d.MODAL,
                                    onClose: U
                                })
                            }), (0, l.jsxs)("div", {
                                className: C.kL,
                                children: [(0, l.jsx)(r.VQ0, {
                                    className: C.$H,
                                    type: "top",
                                    selectedItem: _.RP.BOT_INFO,
                                    onItemSelect: O.tEg,
                                    children: (0, l.jsx)(r.VQ0.Item, {
                                        className: C.YU,
                                        id: _.RP.BOT_INFO,
                                        "aria-label": E.intl.string(E.t.jGoPJT),
                                        children: (0, l.jsx)(r.Text, {
                                            variant: "text-sm/normal",
                                            children: E.intl.string(E.t.jGoPJT)
                                        })
                                    }, _.RP.BOT_INFO)
                                }), (0, l.jsxs)(r.IpV, {
                                    fade: !0,
                                    className: P.XG,
                                    children: [(0, l.jsx)(j.A, {
                                        userId: n.id,
                                        userBio: null == V ? void 0 : V.bio,
                                        setLineClamp: !1
                                    }), (0, l.jsx)(g.A, {
                                        heading: E.intl.string(E.t["A//N4k"]),
                                        children: (0, l.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: F,
                                            tooltipDelay: _.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), (null == V ? void 0 : V.profileEffect) != null && (0, l.jsx)(d.A, {
                    skuId: null == V || null == (t = V.profileEffect) ? void 0 : t.skuId,
                    isHovering: Y
                })]
            })
        })
    })
}