/** Chunk was on 77870 **/
/** chunk id: 10635, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => R
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(397927),
    a = n(736653),
    o = n(793574),
    c = n(688810),
    u = n(311016),
    d = n(713517),
    p = n(182592),
    h = n(562153),
    f = n(183555),
    g = n(672385),
    m = n(950191),
    b = n(657331),
    A = n(718019),
    y = n(31432),
    _ = n(915614),
    O = n(389996),
    j = n(743987),
    v = n(900179),
    x = n(946356),
    E = n(810396),
    C = n(35241),
    S = n(587168),
    I = n(996988),
    N = n(985018),
    T = n(743789),
    P = n(673721);

function w(e) {
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

function R(e) {
    var t;
    let {
        user: n,
        channel: R
    } = e, D = __OVERLAY__ || !(0, u.A)(n.id), M = (0, m.Ay)(n.id), L = (0, a.Ay)(), k = l.useRef(Date.now()), {
        analyticsLocations: G
    } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR), U = (0, f.pb)({
        layout: "SIDEBAR",
        userId: n.id,
        channelId: R.id
    }), B = l.useRef(null), {
        isHoveringOrFocusing: V,
        isHovering: F
    } = (0, d.A)(B), H = () => {
        (0, b.openUserProfileModal)(w({
            sourceAnalyticsLocations: G,
            hideRestrictedProfile: !0
        }, U))
    };
    return (0, r.jsx)(c.f5, {
        value: G,
        children: (0, r.jsx)(f.of, {
            value: U,
            openedAt: k.current,
            fetchStartedAt: null == M ? void 0 : M.fetchStartedAt,
            fetchEndedAt: null == M ? void 0 : M.fetchEndedAt,
            isLoaded: null == M ? void 0 : M.isLoaded,
            children: (0, r.jsxs)(x.A, {
                ref: B,
                user: n,
                displayProfile: M,
                themeType: I.d.SIDEBAR,
                themeOverride: L,
                children: [(0, r.jsxs)(i.d_W, {
                    children: [(0, r.jsx)(S.A, {
                        children: (0, r.jsx)(C.A, {
                            user: n
                        })
                    }), (0, r.jsxs)("div", {
                        className: T.wx,
                        children: [(0, r.jsx)(_.A, {
                            user: n,
                            displayProfile: M,
                            themeType: I.d.SIDEBAR,
                            animateOnHoverOrFocusOnly: !V
                        }), (0, r.jsx)(A.A, {
                            user: n,
                            displayProfile: M,
                            channelId: R.id,
                            themeType: I.d.SIDEBAR,
                            onOpenProfile: D ? void 0 : H
                        })]
                    }), (0, r.jsxs)("div", {
                        className: P.rf,
                        children: [(0, r.jsx)(E.A, {
                            user: n,
                            guildId: R.guild_id,
                            nickname: h.Ay.getName(null, R.id, n),
                            pronouns: null == M ? void 0 : M.pronouns,
                            onOpenProfile: D ? void 0 : H,
                            tags: (0, r.jsx)(y.A, {
                                displayProfile: M,
                                themeType: I.d.SIDEBAR
                            })
                        }), (0, r.jsxs)(x.A.Overlay, {
                            className: P.Lw,
                            children: [(0, r.jsx)(v.A, {
                                heading: N.intl.string(N.t["61W33d"]),
                                headingColor: "text-strong",
                                children: (0, r.jsx)(O.A, {
                                    userBio: null == M ? void 0 : M.bio,
                                    userId: n.id,
                                    animateOnHoverOrFocusOnly: !0,
                                    isHoveringOrFocusing: V
                                })
                            }), (0, r.jsx)(v.A, {
                                heading: N.intl.string(N.t["A//N4k"]),
                                headingColor: "text-strong",
                                children: (0, r.jsx)(j.A, {
                                    userId: n.id
                                })
                            })]
                        })]
                    })]
                }), !D && (0, r.jsx)("div", {
                    className: T.qr,
                    children: (0, r.jsx)(s.DUT, {
                        onClick: () => {
                            H(), (0, g.Wn)(w({
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: G
                            }, U))
                        },
                        className: T.wC,
                        children: N.intl.string(N.t["+Xp3hq"])
                    })
                }), (null == M ? void 0 : M.profileEffect) != null && (0, r.jsx)(p.A, {
                    skuId: null == M || null == (t = M.profileEffect) ? void 0 : t.skuId,
                    isHovering: F
                })]
            })
        })
    })
}