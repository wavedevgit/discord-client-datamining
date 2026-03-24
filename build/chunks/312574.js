/** chunk id: 312574 params = (module,exports,require) **/
n.d(t, {
    u: () => C
});
var i = n(627968),
    s = n(935399),
    l = n(934551),
    a = n(158954),
    r = n(554146),
    o = n(932001),
    d = n(46373),
    c = n(419954),
    u = n(933297),
    m = n(780964),
    g = n(682262),
    _ = n(694202),
    x = n(50847),
    A = n(606275),
    h = n(879545),
    p = n(49999),
    f = n(985018),
    T = n(696952),
    E = n(130324),
    S = n(966040);
let b = (0, c.t_)(m.X.OVERLAY_PANEL, {
        useTitle: () => f.intl.string(f.t["9cb1Uz"]),
        decoration: {
            type: u.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function() {
                let [e, t] = (0, o.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(p.i.AUTO_DISMISS)
                }), e !== r.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: T.xC,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)("img", {
                                src: E.A,
                                alt: f.intl.string(f.t.mdXZh1),
                                className: T.tl
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: T.vJ,
                                children: [(0, i.jsx)(a.DZT, {
                                    variant: "heading-xl/medium",
                                    color: "text-strong",
                                    children: f.intl.string(f.t.jzjJQg)
                                }), (0, i.jsx)(a.EYj, {
                                    variant: "text-md/normal",
                                    color: "text-muted",
                                    children: f.intl.string(f.t["5dOfxb"])
                                })]
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsx)("img", {
                                src: S.A,
                                alt: f.intl.string(f.t.mdXZh1),
                                className: T.lh
                            })
                        }), (0, i.jsx)("div", {
                            "data-button-hoisted-classname-wrapper": !0,
                            className: T.VV,
                            children: (0, i.jsx)(a.$nd, {
                                variant: "primary",
                                text: f.intl.string(f.t.Q26diF),
                                onClick: () => void t(p.i.DISMISS)
                            })
                        })]
                    }), (0, i.jsx)(d.A, {
                        className: T.yF
                    })]
                })
            }
        },
        buildLayout: () => [_.u, x.X, h.D, A.h]
    }),
    C = (0, c.i4)(m.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => f.intl.string(f.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: g.b_,
        buildLayout: () => [b]
    })