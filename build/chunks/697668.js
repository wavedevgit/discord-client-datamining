/** Chunk was on web.js **/
/** chunk id: 697668, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => D
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(793574),
    l = n(688810),
    c = n(915089),
    u = n(713517),
    d = n(267102),
    f = n(71393),
    p = n(562153),
    _ = n(183555),
    h = n(672385),
    m = n(950191),
    g = n(657331),
    E = n(718019),
    y = n(915614),
    b = n(946356),
    O = n(490752),
    v = n(587168),
    A = n(159218),
    I = n(666388),
    S = n(848674),
    T = n(652215),
    C = n(996988),
    N = n(985018),
    w = n(183959);

function R(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            R(e, t, n[t])
        })
    }
    return e
}

function D(e) {
    let {
        user: t,
        currentUser: n,
        guildId: R,
        channelId: D,
        messageId: L,
        roleId: x,
        openedAt: M,
        closePopout: j,
        setPopoutRef: k,
        disableUserProfileLink: U = __OVERLAY__,
        newAnalyticsLocations: G = [],
        disableAutoFocus: F = !1,
        onClickContainer: V
    } = e, {
        analyticsLocations: B
    } = (0, l.Ay)([...G, s.A.USER_PROFILE_POPOUT]), H = (0, d.aL)(), Y = (0, _.pb)({
        layout: "POPOUT",
        userId: t.id,
        guildId: R,
        channelId: D,
        messageId: L,
        roleId: x
    }), W = (0, m.Ay)(t.id, R), K = (0, a.bG)([f.A], () => null != R ? f.A.getGuild(R) : null), z = i.useRef(null), {
        isHoveringOrFocusing: q
    } = (0, u.A)(z);
    i.useEffect(() => {
        null == k || k(null == z ? void 0 : z.current)
    }, [z, k]);
    let Z = e => {
            null == j || j(), H.dispatch(T.jej.POPOUT_CLOSE), (0, g.openUserProfileModal)(P({
                sourceAnalyticsLocations: B,
                hideRestrictedProfile: !0
            }, Y, e))
        },
        Q = () => U ? null : (0, r.jsx)(o.Drp, {
            id: "view-profile",
            label: N.intl.string(N.t["+Xp3hq"]),
            action: () => {
                Z(), (0, h.Wn)(P({
                    action: "PRESS_VIEW_PROFILE",
                    analyticsLocations: B
                }, Y))
            }
        }),
        X = F ? "div" : o.lGe,
        J = (0, c.GV)(),
        $ = p.Ay.useName(R, D, t);
    return (0, r.jsx)(l.f5, {
        value: B,
        children: (0, r.jsx)(_.of, {
            value: Y,
            openedAt: M,
            fetchStartedAt: null == W ? void 0 : W.fetchStartedAt,
            fetchEndedAt: null == W ? void 0 : W.fetchEndedAt,
            isLoaded: null == W ? void 0 : W.isLoaded,
            children: (0, r.jsxs)(X, {
                ref: z,
                "aria-labelledby": J,
                onClick: V,
                children: [(0, r.jsx)(o.AC4, {
                    children: (0, r.jsx)(o.H, {
                        id: J,
                        children: N.intl.format(N.t.KRe1Fk, {
                            name: $
                        })
                    })
                }), (0, r.jsxs)(b.A, {
                    user: t,
                    displayProfile: W,
                    themeType: C.d.POPOUT,
                    children: [(0, r.jsx)(v.A, {
                        children: (0, r.jsx)(O.A, {
                            user: t,
                            guildId: R,
                            viewProfileItem: Q()
                        })
                    }), (0, r.jsxs)("div", {
                        className: w.wx,
                        children: [(0, r.jsx)(y.A, {
                            user: t,
                            displayProfile: W,
                            guildId: R,
                            themeType: C.d.POPOUT
                        }), (0, r.jsx)(E.A, {
                            user: t,
                            displayProfile: W,
                            guildId: R,
                            channelId: D,
                            themeType: C.d.POPOUT,
                            onOpenProfile: U ? void 0 : Z
                        }), (0, r.jsx)(A.A, {
                            user: t,
                            themeType: C.d.POPOUT,
                            onCloseProfile: j,
                            disableToolbar: !0
                        })]
                    }), (0, r.jsx)(I.A, {
                        user: t,
                        currentUser: n,
                        displayProfile: W,
                        guild: K,
                        isHoveringOrFocusing: q,
                        onOpenProfile: U ? void 0 : Z,
                        channelId: D,
                        onClose: j
                    }), (0, r.jsx)(S.A, {
                        user: t,
                        guildId: R,
                        channelId: D,
                        onClose: j,
                        disableAutoFocus: F
                    })]
                })]
            })
        })
    })
}