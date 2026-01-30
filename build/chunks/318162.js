/** chunk id: 318162, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => E
});
var r = n(627968),
    l = n(64700),
    i = n(158954),
    s = n(311907),
    a = n(397927),
    o = n(736653),
    c = n(793574),
    u = n(688810),
    d = n(994500),
    h = n(562153),
    p = n(183555),
    g = n(672385),
    f = n(950191),
    m = n(249790),
    b = n(946356),
    A = n(254828),
    y = n(783123),
    O = n(996988),
    _ = n(985018),
    j = n(226632),
    x = n(724693);

function v(e) {
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

function E(e) {
    let {
        user: t,
        channel: n,
        onHide: E
    } = e, C = (0, f.Ay)(t.id), S = (0, o.Ay)(), I = (0, s.bG)([d.A], () => d.A.isBlocked(t.id)), {
        analyticsLocations: N
    } = (0, u.Ay)(I ? c.A.BLOCKED_PROFILE_PANEL : c.A.IGNORED_PROFILE_PANEL), T = (0, p.pb)({
        layout: "SIDEBAR",
        userId: t.id,
        channelId: n.id
    }), P = l.useRef(null);
    return (0, r.jsx)(u.f5, {
        value: N,
        children: (0, r.jsx)(p.of, {
            value: T,
            fetchStartedAt: null == C ? void 0 : C.fetchStartedAt,
            fetchEndedAt: null == C ? void 0 : C.fetchEndedAt,
            isLoaded: null == C ? void 0 : C.isLoaded,
            children: (0, r.jsx)(b.A, {
                ref: P,
                user: t,
                displayProfile: C,
                themeType: O.d.SIDEBAR,
                themeOverride: S,
                children: (0, r.jsx)(i.d_W, {
                    children: (0, r.jsxs)("div", {
                        className: j.kL,
                        children: [(0, r.jsx)("img", {
                            alt: "",
                            src: x,
                            className: j.VH,
                            "aria-hidden": !0
                        }), (0, r.jsxs)("div", {
                            className: j.rf,
                            children: [(0, r.jsxs)("div", {
                                className: j.N1,
                                children: [(0, r.jsx)(m.A, {
                                    user: t
                                }), (0, r.jsx)(a.Heading, {
                                    variant: "heading-lg/bold",
                                    children: _.intl.string(_.t.b33pLD)
                                }), (0, r.jsx)(a.Text, {
                                    variant: "text-sm/medium",
                                    children: _.intl.format(I ? _.t["8F+WNz"] : _.t["/cZp5s"], {
                                        username: h.Ay.getName(n.guild_id, n.id, t)
                                    })
                                })]
                            }), (0, r.jsxs)(a.BJc, {
                                align: "center",
                                children: [(0, r.jsx)(y.A, {
                                    isBlocked: I,
                                    onClick: () => {
                                        E(), (0, g.Wn)(v({
                                            action: I ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                            analyticsLocations: N
                                        }, T))
                                    }
                                }), (0, r.jsx)(A.A, {
                                    userId: t.id,
                                    onClick: () => {
                                        E(), (0, g.Wn)(v({
                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                            analyticsLocations: N
                                        }, T))
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