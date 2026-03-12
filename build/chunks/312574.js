/** chunk id: 312574 params = (module,exports,require) **/
n.d(t, {
    u: () => N
});
var i = n(627968),
    s = n(935399),
    l = n(934551),
    r = n(158954),
    a = n(554146),
    o = n(932001),
    d = n(46373),
    c = n(419954),
    u = n(933297),
    _ = n(780964),
    m = n(682262),
    g = n(694202),
    A = n(50847),
    h = n(606275),
    x = n(879545),
    p = n(49999),
    T = n(985018),
    E = n(696030),
    C = n(130324),
    S = n(966040);
let f = (0, c.t_)(_.X.OVERLAY_PANEL, {
        useTitle: () => T.intl.string(T.t["9cb1Uz"]),
        decoration: {
            type: u.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function() {
                let [e, t] = (0, o.kn)([a.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(p.i.AUTO_DISMISS)
                }), e !== a.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: E.xC,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)("img", {
                                src: C.A,
                                alt: T.intl.string(T.t.mdXZh1),
                                className: E.tl
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: E.vJ,
                                children: [(0, i.jsx)(r.DZT, {
                                    variant: "heading-xl/medium",
                                    color: "text-strong",
                                    children: T.intl.string(T.t.jzjJQg)
                                }), (0, i.jsx)(r.EYj, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: T.intl.string(T.t["5dOfxb"])
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)("img", {
                                src: S.A,
                                alt: T.intl.string(T.t.mdXZh1),
                                className: E.lh
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: E.VV,
                            children: (0, i.jsx)(r.$nd, {
                                variant: "primary",
                                text: T.intl.string(T.t.Q26diF),
                                onClick: () => void t(p.i.DISMISS)
                            })
                        })]
                    }), (0, i.jsx)(d.A, {
                        className: E.yF
                    })]
                })
            }
        },
        buildLayout: () => [g.u, A.X, x.D, h.h]
    }),
    N = (0, c.i4)(_.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: m.b_,
        buildLayout: () => [f]
    })