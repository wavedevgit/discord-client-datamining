/** Chunk was on 1113 **/
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
    h = n(182592),
    p = n(562153),
    g = n(183555),
    f = n(672385),
    m = n(950191),
    b = n(657331),
    A = n(718019),
    y = n(31432),
    O = n(915614),
    _ = n(389996),
    x = n(743987),
    j = n(900179),
    v = n(946356),
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
    } = e, D = __OVERLAY__ || !(0, u.A)(n.id), L = (0, m.Ay)(n.id), M = (0, a.Ay)(), k = l.useRef(Date.now()), {
        analyticsLocations: G
    } = (0, c.Ay)(o.A.USER_PROFILE_SIDEBAR), U = (0, g.pb)({
        layout: "SIDEBAR",
        userId: n.id,
        channelId: R.id
    }), V = l.useRef(null), {
        isHoveringOrFocusing: B,
        isHovering: H
    } = (0, d.A)(V), F = () => {
        (0, b.openUserProfileModal)(w({
            sourceAnalyticsLocations: G,
            hideRestrictedProfile: !0
        }, U))
    };
    return (0, r.jsx)(c.f5, {
        value: G,
        children: (0, r.jsx)(g.of, {
            value: U,
            openedAt: k.current,
            fetchStartedAt: null == L ? void 0 : L.fetchStartedAt,
            fetchEndedAt: null == L ? void 0 : L.fetchEndedAt,
            isLoaded: null == L ? void 0 : L.isLoaded,
            children: (0, r.jsxs)(v.A, {
                ref: V,
                user: n,
                displayProfile: L,
                themeType: I.d.SIDEBAR,
                themeOverride: M,
                children: [(0, r.jsxs)(i.d_W, {
                    children: [(0, r.jsx)(S.A, {
                        children: (0, r.jsx)(C.A, {
                            user: n
                        })
                    }), (0, r.jsxs)("div", {
                        className: T.wx,
                        children: [(0, r.jsx)(O.A, {
                            user: n,
                            displayProfile: L,
                            themeType: I.d.SIDEBAR,
                            animateOnHoverOrFocusOnly: !B
                        }), (0, r.jsx)(A.A, {
                            user: n,
                            displayProfile: L,
                            channelId: R.id,
                            themeType: I.d.SIDEBAR,
                            onOpenProfile: D ? void 0 : F
                        })]
                    }), (0, r.jsxs)("div", {
                        className: P.rf,
                        children: [(0, r.jsx)(E.A, {
                            user: n,
                            guildId: R.guild_id,
                            nickname: p.Ay.getName(null, R.id, n),
                            pronouns: null == L ? void 0 : L.pronouns,
                            onOpenProfile: D ? void 0 : F,
                            tags: (0, r.jsx)(y.A, {
                                displayProfile: L,
                                themeType: I.d.SIDEBAR
                            })
                        }), (0, r.jsxs)(v.A.Overlay, {
                            className: P.Lw,
                            children: [(0, r.jsx)(j.A, {
                                heading: N.intl.string(N.t["61W33d"]),
                                headingColor: "text-strong",
                                children: (0, r.jsx)(_.A, {
                                    userBio: null == L ? void 0 : L.bio,
                                    userId: n.id,
                                    animateOnHoverOrFocusOnly: !0,
                                    isHoveringOrFocusing: B
                                })
                            }), (0, r.jsx)(j.A, {
                                heading: N.intl.string(N.t["A//N4k"]),
                                headingColor: "text-strong",
                                children: (0, r.jsx)(x.A, {
                                    userId: n.id
                                })
                            })]
                        })]
                    })]
                }), !D && (0, r.jsx)("div", {
                    className: T.qr,
                    children: (0, r.jsx)(s.DUT, {
                        onClick: () => {
                            F(), (0, f.Wn)(w({
                                action: "PRESS_VIEW_PROFILE",
                                analyticsLocations: G
                            }, U))
                        },
                        className: T.wC,
                        children: N.intl.string(N.t["+Xp3hq"])
                    })
                }), (null == L ? void 0 : L.profileEffect) != null && (0, r.jsx)(h.A, {
                    skuId: null == L || null == (t = L.profileEffect) ? void 0 : t.skuId,
                    isHovering: H
                })]
            })
        })
    })
}