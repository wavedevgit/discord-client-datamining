/** chunk id: 318162 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => S
});
var i = n(627968),
    s = n(64700),
    l = n(158954),
    a = n(311907),
    r = n(397927),
    o = n(736653),
    c = n(793574),
    d = n(688810),
    u = n(994500),
    h = n(562153),
    A = n(183555),
    m = n(672385),
    _ = n(950191),
    g = n(249790),
    p = n(946356),
    f = n(254828),
    x = n(783123),
    E = n(996988),
    C = n(985018),
    I = n(38351),
    N = n(724693);

function S(e) {
    let {
        user: t,
        channel: n,
        onHide: S
    } = e, b = (0, _.Ay)(t.id), T = (0, o.Ay)(), v = (0, a.bG)([u.A], () => u.A.isBlocked(t.id)), {
        analyticsLocations: y
    } = (0, d.Ay)(v ? c.A.BLOCKED_PROFILE_PANEL : c.A.IGNORED_PROFILE_PANEL), j = (0, A.pb)({
        layout: "SIDEBAR",
        userId: t.id,
        channelId: n.id
    }), R = s.useRef(null);
    return (0, i.jsx)(d.f5, {
        value: y,
        children: (0, i.jsx)(A.of, {
            value: j,
            isLoaded: b?.isLoaded,
            children: (0, i.jsx)(p.A, {
                ref: R,
                user: t,
                displayProfile: b,
                themeType: E.d.SIDEBAR,
                themeOverride: T,
                children: (0, i.jsx)(l.d_W, {
                    children: (0, i.jsxs)("div", {
                        className: I.kL,
                        children: [(0, i.jsx)("img", {
                            alt: "",
                            src: N,
                            className: I.VH,
                            "aria-hidden": !0
                        }), (0, i.jsxs)("div", {
                            className: I.rf,
                            children: [(0, i.jsxs)("div", {
                                className: I.N1,
                                children: [(0, i.jsx)(g.A, {
                                    user: t
                                }), (0, i.jsx)(r.Heading, {
                                    variant: "heading-lg/bold",
                                    children: C.intl.string(C.t.b33pLD)
                                }), (0, i.jsx)(r.Text, {
                                    variant: "text-sm/medium",
                                    children: C.intl.format(v ? C.t["8F+WNz"] : C.t["/cZp5s"], {
                                        username: h.Ay.getName(n.guild_id, n.id, t)
                                    })
                                })]
                            }), (0, i.jsxs)(r.BJc, {
                                align: "center",
                                children: [(0, i.jsx)(x.A, {
                                    isBlocked: v,
                                    onClick: () => {
                                        S(), (0, m.Wn)({
                                            action: v ? "VIEW_BLOCKED_PROFILE" : "VIEW_IGNORED_PROFILE",
                                            analyticsLocations: y,
                                            ...j
                                        })
                                    }
                                }), (0, i.jsx)(f.A, {
                                    userId: t.id,
                                    onClick: () => {
                                        S(), (0, m.Wn)({
                                            action: "DONT_SHOW_AGAIN_IGNORED_PROFILE",
                                            analyticsLocations: y,
                                            ...j
                                        })
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