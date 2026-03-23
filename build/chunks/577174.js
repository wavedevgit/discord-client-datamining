/** chunk id: 577174 params = (module,exports,require) **/
n.d(t, {
    A: () => x
});
var i = n(627968),
    s = n(64700),
    l = n(311907),
    a = n(397927),
    r = n(742589),
    o = n(909536),
    d = n(287809),
    c = n(65470),
    u = n(400669),
    m = n(736455),
    _ = n(876587),
    g = n(985018),
    A = n(731176);
let x = e => {
    let {
        navBarSections: t,
        activeSectionId: n
    } = e, x = {
        [m.k.HOME]: g.intl.string(g.t.uGRXjS),
        [m.k.WHATS_NEW]: g.intl.string(g.t["mfcR/v"]),
        [m.k.BEST_OF_NITRO]: g.intl.string(g.t.xQKkE8),
        [m.k.PLANS]: g.intl.string(g.t.wyNMnm),
        [m.k.COMPARE]: g.intl.string(g.t.pwD7If)
    }, p = (0, l.bG)([d.default], () => d.default.getCurrentUser()), h = (0, o.Gh)("premium_marketing_nav_bar") && null != p, T = s.useRef(null), E = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsxs)(r.A, {
        className: A.TQ,
        transparent: !0,
        children: [(0, i.jsxs)("div", {
            className: A.Wc,
            children: [(0, i.jsxs)("div", {
                className: A.wG,
                children: [(0, i.jsx)(a.tvc, {
                    className: A.nE,
                    colorClass: A.oG
                }), (0, i.jsx)("div", {
                    className: A.zc,
                    children: E.map(e => {
                        let t = n === e.id,
                            s = x[e.id];
                        return (0, i.jsxs)(a.DUT, {
                            className: A.S0,
                            onClick: e.scrollToSection,
                            children: [(0, i.jsx)(a.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: s
                            }), t && (0, i.jsx)("div", {
                                className: A.W0
                            })]
                        }, s)
                    })
                })]
            }), (0, i.jsxs)("div", {
                className: A.MQ,
                children: [h && (0, i.jsx)(u.l, {
                    ref: T,
                    size: "sm"
                }), (0, i.jsx)(c.A, {
                    size: "sm",
                    variant: "overlay-secondary"
                })]
            })]
        }), h && (0, i.jsx)(_.O, {
            targetElementRef: T
        })]
    })
}