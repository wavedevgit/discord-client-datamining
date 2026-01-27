/** Chunk was on 77870 **/
/** chunk id: 762561, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => G
}), n(896048);
var r = n(627968),
    l = n(64700),
    i = n(108531),
    s = n(158954),
    a = n(397927),
    o = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(713517),
    p = n(182592),
    h = n(594832),
    f = n(996353),
    g = n(183555),
    m = n(672385),
    b = n(950191),
    A = n(679492),
    y = n(657331),
    _ = n(718019),
    O = n(915614),
    j = n(439053),
    v = n(379654),
    x = n(946356),
    E = n(490752),
    C = n(587168),
    S = n(193738),
    I = n(853397),
    N = n(159218),
    T = n(534189),
    P = n(179242),
    w = n(968975),
    R = n(518477),
    D = n(996988),
    M = n(985018),
    L = n(743789);

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}

function G(e) {
    var t;
    let {
        user: n,
        currentUser: m,
        channel: M
    } = e, G = __OVERLAY__, B = (0, b.Ay)(n.id), V = (0, o.Ay)(), F = l.useRef(Date.now()), {
        analyticsLocations: H
    } = (0, u.Ay)(c.A.USER_PROFILE_SIDEBAR), K = (0, g.pb)({
        layout: "SIDEBAR",
        userId: n.id,
        channelId: M.id
    }), W = l.useRef(null), {
        isHoveringOrFocusing: z,
        isHovering: Y
    } = (0, d.A)(W), q = (0, A.fC)(), X = (0, a.zhh)({
        opacity: +(null != q.interactionType),
        config: {
            duration: 150
        }
    }), J = e => {
        (0, y.openUserProfileModal)(k({
            sourceAnalyticsLocations: H,
            hideRestrictedProfile: !0
        }, K, e))
    }, Q = (null == B ? void 0 : B.widgets) != null && B.widgets.length > 0, {
        displayedWishlistItems: Z,
        defaultWishlistId: $,
        title: ee
    } = (0, f.aO)({
        user: n,
        numItems: f.h,
        source: h.mQ.DM_SIDE_PANEL,
        location: "UserProfileSidebar"
    }), et = null != Z && Z.length > 0;
    return (0, r.jsx)(u.f5, {
        value: H,
        children: (0, r.jsx)(g.of, {
            value: K,
            openedAt: F.current,
            fetchStartedAt: null == B ? void 0 : B.fetchStartedAt,
            fetchEndedAt: null == B ? void 0 : B.fetchEndedAt,
            isLoaded: null == B ? void 0 : B.isLoaded,
            children: (0, r.jsx)(A.Hl, {
                value: q,
                children: (0, r.jsxs)(x.A, {
                    ref: W,
                    user: n,
                    displayProfile: B,
                    themeType: D.d.SIDEBAR,
                    themeOverride: V,
                    children: [null != q.interactionType && (0, r.jsx)(i.animated.div, {
                        style: X,
                        className: L.tB
                    }), (0, r.jsxs)(s.d_W, {
                        children: [(0, r.jsxs)(C.A, {
                            children: [(0, r.jsx)(S.A, {
                                user: n,
                                themeType: D.d.SIDEBAR
                            }), n.bot ? (0, r.jsx)(E.A, {
                                user: n
                            }) : (0, r.jsx)(I.yo, {
                                user: n
                            })]
                        }), (0, r.jsxs)("div", {
                            className: L.wx,
                            children: [(0, r.jsx)(O.A, {
                                user: n,
                                displayProfile: B,
                                themeType: D.d.SIDEBAR,
                                animateOnHoverOrFocusOnly: !z,
                                className: L.vK
                            }), (0, r.jsx)(j.A, {
                                userId: n.id,
                                className: L.oR
                            }), (0, r.jsx)(_.A, {
                                user: n,
                                displayProfile: B,
                                channelId: M.id,
                                themeType: D.d.SIDEBAR,
                                onOpenProfile: G ? void 0 : J
                            }), (0, r.jsx)(N.A, {
                                user: n,
                                channelId: M.id,
                                themeType: D.d.SIDEBAR,
                                disableToolbar: n.bot
                            })]
                        }), (0, r.jsx)(T.A, {
                            user: n,
                            currentUser: m,
                            displayProfile: B,
                            channel: M,
                            isHoveringOrFocusing: null == q.interactionType && z,
                            onOpenProfile: G ? void 0 : J
                        }), Q && (0, r.jsx)("div", {
                            className: L.sJ,
                            children: (0, r.jsx)(v.A, {
                                user: n,
                                widgets: B.widgets,
                                onOpenUserProfileModal: J
                            })
                        }), et && (0, r.jsx)("div", {
                            className: L.vS,
                            children: (0, r.jsx)(w.A, {
                                profileOwner: n,
                                wishlistItems: Z,
                                wishlistId: $,
                                title: ee,
                                onClick: () => {
                                    null == J || J({
                                        tabSection: R.RP.WISHLIST
                                    })
                                }
                            })
                        }), (0, r.jsx)(P.A, {
                            user: n,
                            channelId: M.id
                        })]
                    }), !G && (0, r.jsx)(U, {
                        handleOpenProfile: J,
                        analyticsLocations: H,
                        context: K
                    }), (null == B ? void 0 : B.profileEffect) != null && (0, r.jsx)(p.A, {
                        skuId: null == B || null == (t = B.profileEffect) ? void 0 : t.skuId,
                        isHovering: Y
                    })]
                })
            })
        })
    })
}
let U = e => {
    let {
        handleOpenProfile: t,
        analyticsLocations: n,
        context: i
    } = e, [s, o] = l.useState("interactive-text-default");
    return (0, r.jsx)("div", {
        className: L.qr,
        children: (0, r.jsx)(a.DUT, {
            onMouseEnter: () => o("interactive-text-hover"),
            onMouseLeave: () => o("interactive-text-default"),
            onClick: () => {
                t(), (0, m.Wn)(k({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: n
                }, i))
            },
            className: L.wC,
            children: (0, r.jsx)(a.Text, {
                color: s,
                variant: "text-sm/normal",
                children: M.intl.string(M.t["+Xp3hq"])
            })
        })
    })
}