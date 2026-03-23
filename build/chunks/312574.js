/** chunk id: 312574 params = (module,exports,require) **/
n.d(t, {
    u: () => b
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
    _ = n(682262),
    g = n(694202),
    A = n(50847),
    x = n(606275),
    p = n(879545),
    h = n(49999),
    T = n(985018),
    E = n(696952),
    f = n(130324),
    S = n(966040);
let C = (0, c.t_)(m.X.OVERLAY_PANEL, {
        useTitle: () => T.intl.string(T.t["9cb1Uz"]),
        decoration: {
            type: u.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function() {
                let [e, t] = (0, o.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(h.i.AUTO_DISMISS)
                }), e !== r.M.OVERLAY_OOP_SETTINGS_NUX) ? null : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: E.xC,
                        children: [(0, i.jsx)("div", {
                            children: (0, i.jsx)("img", {
                                src: f.A,
                                alt: T.intl.string(T.t.mdXZh1),
                                className: E.tl
                            })
                        }), (0, i.jsx)("div", {
                            children: (0, i.jsxs)("div", {
                                className: E.vJ,
                                children: [(0, i.jsx)(a.DZT, {
                                    variant: "heading-xl/medium",
                                    color: "text-strong",
                                    children: T.intl.string(T.t.jzjJQg)
                                }), (0, i.jsx)(a.EYj, {
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
                            children: (0, i.jsx)(a.$nd, {
                                variant: "primary",
                                text: T.intl.string(T.t.Q26diF),
                                onClick: () => void t(h.i.DISMISS)
                            })
                        })]
                    }), (0, i.jsx)(d.A, {
                        className: E.yF
                    })]
                })
            }
        },
        buildLayout: () => [g.u, A.X, p.D, x.h]
    }),
    b = (0, c.i4)(m.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => T.intl.string(T.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: _.b_,
        buildLayout: () => [C]
    })