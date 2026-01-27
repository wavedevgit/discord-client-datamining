/** Chunk was on web.js **/
/** chunk id: 650218, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => I
}), n(896048);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    o = n(397927),
    s = n(793574),
    l = n(688810),
    c = n(994500),
    u = n(562153),
    d = n(183555),
    f = n(672385),
    p = n(950191),
    _ = n(249790),
    h = n(946356),
    m = n(254828),
    g = n(783123),
    E = n(996988),
    y = n(985018),
    b = n(612704),
    O = n(911850);

function v(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e
}

function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            v(e, t, n[t])
        })
    }
    return e
}

function I(e) {
    let {
        user: t,
        guildId: n,
        setPopoutRef: v,
        channelId: I,
        messageId: S,
        roleId: T,
        openedAt: C,
        onHide: N,
        newAnalyticsLocations: w = [],
        disableAutoFocus: R = !1,
        onClickContainer: P
    } = e, D = (0, a.bG)([c.A], () => c.A.isBlocked(t.id)), {
        analyticsLocations: L
    } = (0, l.Ay)([...w, D ? s.A.BLOCKED_PROFILE_POPOUT : s.A.IGNORED_PROFILE_POPOUT]), x = (0, d.pb)({
        layout: "POPOUT",
        userId: t.id,
        guildId: n,
        channelId: I,
        messageId: S,
        roleId: T
    }), M = i.useRef(null), j = (0, p.Ay)(t.id, n);
    i.useEffect(() => {
        null == v || v(null == M ? void 0 : M.current)
    }, [M, v]);
    let k = D ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
        U = R ? "div" : o.lGe;
    return (0, r.jsx)(l.f5, {
        value: L,
        children: (0, r.jsx)(d.of, {
            value: x,
            openedAt: C,
            fetchStartedAt: null == j ? void 0 : j.fetchStartedAt,
            fetchEndedAt: null == j ? void 0 : j.fetchEndedAt,
            isLoaded: null == j ? void 0 : j.isLoaded,
            children: (0, r.jsx)(U, {
                ref: M,
                "aria-label": t.username,
                onClick: P,
                children: (0, r.jsx)(h.A, {
                    user: t,
                    displayProfile: j,
                    themeType: E.d.POPOUT,
                    children: (0, r.jsxs)("div", {
                        className: b.kL,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: O,
                            className: b.VH,
                            "aria-hidden": !0
                        }), (0, r.jsxs)("div", {
                            className: b.rf,
                            children: [(0, r.jsxs)("div", {
                                className: b.N1,
                                children: [(0, r.jsx)(_.A, {
                                    user: t,
                                    guildId: n
                                }), (0, r.jsx)(o.Heading, {
                                    variant: "heading-lg/bold",
                                    children: y.intl.string(y.t.b33pLD)
                                }), (0, r.jsx)(o.Text, {
                                    variant: "text-sm/medium",
                                    children: y.intl.format(D ? y.t["8F+WNz"] : y.t["/cZp5s"], {
                                        username: u.Ay.getName(n, I, t)
                                    })
                                })]
                            }), (0, r.jsxs)(o.BJc, {
                                align: "center",
                                children: [(0, r.jsx)(g.A, {
                                    isBlocked: D,
                                    onClick: () => {
                                        N(), (0, f.Wn)(A({
                                            action: k,
                                            analyticsLocations: L
                                        }, x))
                                    }
                                }), (0, r.jsx)(m.A, {
                                    userId: t.id,
                                    onClick: () => {
                                        N(), (0, f.Wn)(A({
                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                            analyticsLocations: L
                                        }, x))
                                    }
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    })
}