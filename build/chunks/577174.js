/** chunk id: 577174, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => c
});
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(742589),
    a = n(65470),
    r = n(736455),
    o = n(985018),
    d = n(798294);
let c = e => {
    let {
        navBarSections: t,
        activeSectionId: n
    } = e, c = {
        [r.k.HOME]: o.intl.string(o.t.uGRXjS),
        [r.k.WHATS_NEW]: o.intl.string(o.t["mfcR/v"]),
        [r.k.BEST_OF_NITRO]: o.intl.string(o.t.xQKkE8),
        [r.k.PLANS]: o.intl.string(o.t.wyNMnm),
        [r.k.COMPARE]: o.intl.string(o.t.pwD7If)
    }, u = Object.values(t).sort((e, t) => e.order - t.order);
    return (0, i.jsx)(l.A, {
        className: d.TQ,
        transparent: !0,
        children: (0, i.jsxs)("div", {
            className: d.Wc,
            children: [(0, i.jsxs)("div", {
                className: d.wG,
                children: [(0, i.jsx)(s.tvc, {
                    className: d.nE,
                    colorClass: d.oG
                }), (0, i.jsx)("div", {
                    className: d.zc,
                    children: u.map(e => {
                        let t = n === e.id,
                            l = c[e.id];
                        return (0, i.jsxs)(s.DUT, {
                            className: d.S0,
                            onClick: e.scrollToSection,
                            children: [(0, i.jsx)(s.Text, {
                                variant: "text-sm/medium",
                                color: "text-strong",
                                children: l
                            }), t && (0, i.jsx)("div", {
                                className: d.W0
                            })]
                        }, l)
                    })
                })]
            }), (0, i.jsx)(a.A, {
                size: "sm",
                variant: "overlay-secondary"
            })]
        })
    })
}