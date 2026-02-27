/** chunk id: 916217, original params: e,n,t (module,exports,require) **/
t.d(n, {
    A: () => O
});
var i = t(627968),
    s = t(64700),
    l = t(397927),
    a = t(793574),
    r = t(688810),
    d = t(915089),
    c = t(713517),
    o = t(182592),
    u = t(562153),
    A = t(183555),
    x = t(950191),
    m = t(718019),
    _ = t(31432),
    p = t(915614),
    f = t(389996),
    h = t(743987),
    I = t(900179),
    j = t(946356),
    g = t(810396),
    b = t(35241),
    N = t(587168),
    v = t(518477),
    T = t(652215),
    E = t(996988),
    y = t(985018),
    C = t(763563),
    L = t(195723),
    S = t(368519);

function O(e) {
    let {
        user: n,
        guildId: t,
        channelId: O,
        messageId: P,
        roleId: R,
        sessionId: M,
        transitionState: G,
        openedAt: D,
        onClose: U,
        sourceAnalyticsLocations: k = []
    } = e, B = t === T.ME ? void 0 : t, F = (0, x.Ay)(n.id, B), V = u.Ay.getName(B, O, n), w = (0, d.GV)(), {
        analyticsLocations: z
    } = (0, r.Ay)([...k, a.A.USER_PROFILE_MODAL]), W = (0, A.pb)({
        layout: "MODAL",
        userId: n.id,
        sourceSessionId: M,
        guildId: B,
        channelId: O,
        messageId: P,
        roleId: R
    }), H = s.useRef(null), Y = (0, c.M)(H);
    return (0, i.jsx)(r.f5, {
        value: z,
        children: (0, i.jsx)(A.of, {
            value: W,
            openedAt: D,
            fetchStartedAt: F?.fetchStartedAt,
            fetchEndedAt: F?.fetchEndedAt,
            isLoaded: F?.isLoaded,
            children: (0, i.jsxs)(l.EOs, {
                "data-migration-pending": !0,
                transitionState: G,
                className: C.zr,
                hideShadow: !0,
                "aria-labelledby": w,
                parentComponent: "NonUserBotProfileModal",
                children: [(0, i.jsx)(l.Fmo, {
                    component: (0, i.jsx)(l.AC4, {
                        children: (0, i.jsx)(l.H, {
                            id: w,
                            children: y.intl.format(y.t.KRe1Fk, {
                                name: V
                            })
                        })
                    }),
                    children: (0, i.jsxs)(j.A, {
                        user: n,
                        displayProfile: F,
                        themeType: E.d.MODAL,
                        ref: F?.profileEffect != null ? H : void 0,
                        children: [(0, i.jsx)(N.A, {
                            children: (0, i.jsx)(b.A, {
                                user: n
                            })
                        }), (0, i.jsxs)("div", {
                            children: [(0, i.jsx)(p.A, {
                                user: n,
                                displayProfile: F,
                                themeType: E.d.MODAL
                            }), (0, i.jsx)("div", {
                                className: C.El,
                                children: (0, i.jsx)(m.A, {
                                    user: n,
                                    displayProfile: F,
                                    guildId: B,
                                    channelId: O,
                                    themeType: E.d.MODAL
                                })
                            })]
                        }), (0, i.jsxs)("div", {
                            className: C.rf,
                            children: [(0, i.jsx)(g.A, {
                                className: C.Xh,
                                user: n,
                                guildId: B,
                                nickname: V,
                                pronouns: F?.pronouns,
                                nicknameVariant: "heading-xl/bold",
                                tags: (0, i.jsx)(_.A, {
                                    displayProfile: F,
                                    themeType: E.d.MODAL,
                                    onClose: U
                                })
                            }), (0, i.jsxs)("div", {
                                className: S.kL,
                                children: [(0, i.jsx)(l.VQ0, {
                                    className: S.$H,
                                    type: "top",
                                    selectedItem: v.RP.BOT_INFO,
                                    onItemSelect: T.tEg,
                                    children: (0, i.jsx)(l.VQ0.Item, {
                                        className: S.YU,
                                        id: v.RP.BOT_INFO,
                                        "aria-label": y.intl.string(y.t.ZzAR2Y),
                                        children: (0, i.jsx)(l.Text, {
                                            variant: "text-sm/normal",
                                            children: y.intl.string(y.t.ZzAR2Y)
                                        })
                                    }, v.RP.BOT_INFO)
                                }), (0, i.jsxs)(l.IpV, {
                                    fade: !0,
                                    className: L.XG,
                                    children: [(0, i.jsx)(f.A, {
                                        userId: n.id,
                                        userBio: F?.bio,
                                        setLineClamp: !1
                                    }), (0, i.jsx)(I.A, {
                                        heading: y.intl.string(y.t["A//N4k"]),
                                        children: (0, i.jsx)(h.A, {
                                            userId: n.id,
                                            guildId: B,
                                            tooltipDelay: v.In
                                        })
                                    })]
                                })]
                            })]
                        })]
                    })
                }), F?.profileEffect != null && (0, i.jsx)(o.A, {
                    skuId: F?.profileEffect?.skuId,
                    isHovering: Y
                })]
            })
        })
    })
}