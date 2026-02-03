/** chunk id: 542535, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => V
}), n(228524);
var r = n(627968),
    i = n(64700),
    a = n(503698),
    o = n.n(a),
    s = n(990078),
    l = n(397927),
    c = n(352423),
    u = n(793574),
    d = n(688810),
    f = n(979286),
    p = n(508591),
    _ = n(603538),
    h = n(30084),
    m = n(341915),
    g = n(590202),
    E = n(976860),
    y = n(305003),
    b = n(588455),
    O = n(287809),
    v = n(954571),
    A = n(474090),
    I = n(439174),
    S = n(183555),
    T = n(672385),
    C = n(262),
    N = n(950191),
    w = n(518477),
    R = n(652215),
    P = n(758836),
    D = n(788868),
    L = n(854232),
    x = n(985018),
    M = n(448263);

function j(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function k(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            j(e, t, n[t])
        })
    }
    return e
}

function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
        })), n.push.apply(n, r)
    }
    return n
}

function G(e, t) {
    return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : U(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
    }), e
}
let F = e => {
    let {
        badge: t,
        tieredTenureBadge: n,
        currentUserOwnsOrbBadge: i
    } = e;
    return t.id === y.A.ORB_PROFILE_BADGE ? (0, r.jsx)(b.A, {
        showSubtext: !i && !t.isPreviewMode
    }) : void 0 !== n && t.id !== L.K ? (0, r.jsx)(_.A, {
        profileBadge: t,
        tenureBadge: n
    }) : t.description
};

function V(e) {
    var t;
    let {
        badges: n,
        className: a,
        badgeClassName: _,
        displayProfile: b,
        onClose: j,
        shouldOpenBadgeTooltip: U,
        shouldGlowTenureBadge: V
    } = e, B = i.useRef(null), {
        analyticsLocations: H
    } = (0, d.Ay)(u.A.BADGE), {
        context: Y,
        trackUserProfileAction: W
    } = (0, S.NJ)(), K = O.default.getCurrentUser(), z = (0, A.CC)(null == K ? void 0 : K.premiumType, D.PremiumTypes.TIER_2), q = (0, N.AP)(null != (t = null == K ? void 0 : K.id) ? t : null), Z = (0, C.A)(q).some(e => e.id === y.A.ORB_PROFILE_BADGE);
    return (0, r.jsx)("div", {
        className: o()(M.k, a),
        "aria-label": x.intl.string(x.t.VWV0y5),
        role: "group",
        children: n.map((e, t) => {
            var n;
            let i = e.id === y.A.ORB_PROFILE_BADGE,
                a = (0, I.e0)(e.id),
                d = null != a || e.id === L.K,
                O = (null == b ? void 0 : b.userId) === (null == K ? void 0 : K.id),
                A = t => {
                    if (W({
                            action: "PRESS_BADGE"
                        }), (0, T.R9)(k({
                            badge: e.id,
                            analyticsLocations: H
                        }, Y)), i) return void(0, f.Cz)({
                        tab: P.G2.ORBS,
                        analyticsLocations: H,
                        analyticsSource: u.A.VIRTUAL_CURRENCY_ORB_PROFILE_BADGE
                    });
                    if (d) {
                        if (t.preventDefault(), v.default.track(R.HAw.TIERED_TENURE_BADGE_CLICKED, {
                                badge: e.id,
                                premium_type: z,
                                viewed_user_id: null == b ? void 0 : b.userId
                            }), z) {
                            O ? (0, E.pX)(R.BVt.NITRO_HOME) : (0, h.D)({
                                analyticsLocations: H,
                                displayProfile: b
                            }), null == j || j();
                            return
                        }
                        if (O) {
                            let n = null != e.link ? (0, c.default)(e.link, {
                                analyticsLocations: H
                            }) : null;
                            if (null == n) return;
                            return null == j || j(), n(t)
                        }
                        return (0, h.D)({
                            analyticsLocations: H,
                            displayProfile: b
                        }), void(null == j || j())
                    }
                    let n = null != e.link ? (0, c.default)(e.link, {
                        analyticsLocations: H
                    }) : null;
                    if (null != n) return null == j || j(), n(t)
                },
                S = () => {
                    e.id === C.h && v.default.track(R.HAw.QUEST_CONTENT_VIEWED, G(k({}, (0, g.fF)(m.uF.QUEST_BADGE)), {
                        is_targeted: !1
                    })), W({
                        action: "HOVER_BADGE"
                    }), (0, T.sQ)(k({
                        badge: e.id,
                        analyticsLocations: H
                    }, Y))
                },
                N = void 0 !== a && e.id !== L.K,
                D = (0, r.jsx)("img", {
                    alt: " ",
                    "aria-hidden": !0,
                    src: null != (n = e.iconSrc) ? n : (0, w.L7)(e.icon),
                    className: o()(M.q, _)
                }),
                x = {
                    onClick: A,
                    onMouseEnter: S,
                    href: e.link,
                    "aria-label": e.description,
                    style: {
                        filter: V && null != a ? "drop-shadow(0 0 5px ".concat(a.glowColor, ")") : void 0
                    }
                };
            if (N) {
                let n = (0, r.jsx)(l.MzZ, G(k({}, x), {
                    ref: B,
                    children: D
                }));
                return (0, r.jsx)("div", {
                    children: (0, r.jsx)(p.A, {
                        badgeId: e.id,
                        targetElementRef: B,
                        mode: "tooltip",
                        tooltipDelay: w.In,
                        body: e.description,
                        onShow: () => {
                            v.default.track(R.HAw.TOOLTIP_VIEWED, {
                                type: "tiered_tenure_badge_profile_" + (O ? "self" : "other")
                            })
                        },
                        estimatedTooltipHeight: 220,
                        children: n
                    })
                }, "".concat(e.id, "-").concat(t))
            }
            let q = (0, r.jsx)(l.MzZ, G(k({}, x), {
                    children: D
                })),
                Q = F({
                    badge: e,
                    tieredTenureBadge: d && e.id !== L.K ? a : void 0,
                    currentUserOwnsOrbBadge: Z
                });
            return (0, r.jsx)(s.m, {
                __unsupportedReactNodeAsText: Q,
                forceOpen: null != U && U(e.id),
                delay: w.In,
                ariaHidden: !0,
                children: q
            }, "".concat(e.id, "-").concat(t))
        })
    })
}