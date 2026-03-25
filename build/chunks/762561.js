/** chunk id: 762561 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
});
var i = n(627968),
    s = n(64700),
    l = n(497766),
    a = n(158954),
    r = n(311907),
    o = n(397927),
    c = n(736653),
    d = n(793574),
    u = n(688810),
    h = n(713517),
    A = n(182592),
    m = n(594832),
    _ = n(183555),
    p = n(672385),
    g = n(622543),
    f = n(950191),
    x = n(679492),
    C = n(657331),
    E = n(718019),
    I = n(915614),
    N = n(439053),
    b = n(312381),
    S = n(379654),
    T = n(946356),
    v = n(490752),
    y = n(587168),
    j = n(193738),
    R = n(615952),
    O = n(853397),
    L = n(159218),
    M = n(534189),
    D = n(179242),
    G = n(968975),
    U = n(518477),
    P = n(996988),
    k = n(985018),
    w = n(743789);

function V(e) {
    let {
        user: t,
        currentUser: n,
        channel: p
    } = e, V = __OVERLAY__, H = (0, f.Ay)(t.id), F = (0, c.Ay)(), {
        analyticsLocations: K
    } = (0, u.Ay)(d.A.USER_PROFILE_SIDEBAR), W = (0, _.pb)({
        layout: "SIDEBAR",
        userId: t.id,
        channelId: p.id
    }), Y = s.useRef(null), {
        isHoveringOrFocusing: z,
        isHovering: q
    } = (0, h.A)(Y), X = (0, x.fC)(), J = (0, o.zhh)({
        opacity: +(null != X.interactionType),
        config: {
            duration: 150
        }
    }), Q = e => {
        (0, C.openUserProfileModal)({
            sourceAnalyticsLocations: K,
            hideRestrictedProfile: !0,
            ...W,
            ...e
        })
    }, $ = H?.widgets != null && H.widgets.length > 0, {
        defaultWishlistId: Z
    } = (0, r.cf)([g.A], () => ({
        defaultWishlistId: g.A.getFirstWishlistId(t.id)
    })), {
        wishlist: ee
    } = (0, m.fw)({
        wishlistId: Z,
        userId: t.id
    }), et = s.useMemo(() => null == ee ? null : ee.items.filter(e => !e.isOwned), [ee]);
    return (0, i.jsx)(u.f5, {
        value: K,
        children: (0, i.jsx)(_.of, {
            value: W,
            isLoaded: H?.isLoaded,
            children: (0, i.jsx)(x.Hl, {
                value: X,
                children: (0, i.jsxs)(T.A, {
                    ref: Y,
                    user: t,
                    displayProfile: H,
                    themeType: P.d.SIDEBAR,
                    themeOverride: F,
                    privateBanner: H?.private === !0 ? (0, i.jsx)(b.A, {}) : void 0,
                    children: [null != X.interactionType && (0, i.jsx)(l.animated.div, {
                        style: J,
                        className: w.tB
                    }), (0, i.jsxs)(a.d_W, {
                        children: [(0, i.jsxs)(y.A, {
                            children: [(0, i.jsx)(j.A, {
                                user: t,
                                themeType: P.d.SIDEBAR
                            }), (0, i.jsx)(R.A, {
                                user: t
                            }), t.bot ? (0, i.jsx)(v.A, {
                                user: t
                            }) : (0, i.jsx)(O.yo, {
                                user: t
                            })]
                        }), (0, i.jsxs)("div", {
                            className: w.wx,
                            children: [(0, i.jsx)(I.A, {
                                user: t,
                                displayProfile: H,
                                themeType: P.d.SIDEBAR,
                                animateOnHoverOrFocusOnly: !z,
                                className: w.vK
                            }), (0, i.jsx)(N.A, {
                                userId: t.id,
                                className: w.oR
                            }), (0, i.jsx)(E.A, {
                                user: t,
                                displayProfile: H,
                                channelId: p.id,
                                themeType: P.d.SIDEBAR,
                                onOpenProfile: V ? void 0 : Q
                            }), (0, i.jsx)(L.A, {
                                user: t,
                                channelId: p.id,
                                themeType: P.d.SIDEBAR,
                                disableToolbar: t.bot
                            })]
                        }), (0, i.jsx)(M.A, {
                            user: t,
                            currentUser: n,
                            displayProfile: H,
                            channel: p,
                            isHoveringOrFocusing: null == X.interactionType && z,
                            onOpenProfile: V ? void 0 : Q
                        }), $ && (0, i.jsx)("div", {
                            className: w.sJ,
                            children: (0, i.jsx)(S.A, {
                                user: t,
                                widgets: H.widgets,
                                onOpenUserProfileModal: Q
                            })
                        }), null != et && et.length > 0 && (0, i.jsx)("div", {
                            className: w.vS,
                            children: (0, i.jsx)(G.A, {
                                profileOwner: t,
                                unownedWishlistItems: et,
                                wishlistId: Z,
                                title: k.intl.string(k.t["7lZ31J"]),
                                onClick: () => {
                                    Q?.({
                                        tabSection: U.RP.WISHLIST
                                    })
                                }
                            })
                        }), (0, i.jsx)(D.A, {
                            user: t,
                            channelId: p.id
                        })]
                    }), !V && (0, i.jsx)(B, {
                        handleOpenProfile: Q,
                        analyticsLocations: K,
                        context: W
                    }), H?.profileEffect != null && (0, i.jsx)(A.A, {
                        skuId: H?.profileEffect?.skuId,
                        isHovering: q
                    })]
                })
            })
        })
    })
}
let B = e => {
    let {
        handleOpenProfile: t,
        analyticsLocations: n,
        context: l
    } = e, [a, r] = s.useState("interactive-text-default");
    return (0, i.jsx)("div", {
        className: w.qr,
        children: (0, i.jsx)(o.DUT, {
            onMouseEnter: () => r("interactive-text-hover"),
            onMouseLeave: () => r("interactive-text-default"),
            onClick: () => {
                t(), (0, p.Wn)({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: n,
                    ...l
                })
            },
            className: w.wC,
            children: (0, i.jsx)(o.Text, {
                color: a,
                variant: "text-sm/normal",
                children: k.intl.string(k.t["+Xp3hq"])
            })
        })
    })
}