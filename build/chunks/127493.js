/** chunk id: 127493, original params: e,t,n (module,exports,require) **/
n.d(t, {
    Ct: () => m,
    oO: () => A
});
var i = n(627968),
    s = n(64700),
    l = n(503698),
    a = n.n(l),
    r = n(397927),
    o = n(750338),
    d = n(23003),
    c = n(985018),
    u = n(498868),
    _ = n(150605);

function g(e) {
    let {
        className: t,
        boxLayout: n,
        title: s,
        shouldLoadVideo: l,
        isReducedMotion: c,
        includeSideGradient: g = !1,
        startLeftAligned: m = !1,
        enablePremiumBrandRefreshDesign: A
    } = e, h = A ? _ : u;
    return (0, i.jsxs)("div", {
        className: a()(h.boxBackdrop, t),
        children: [(0, i.jsx)(r.Heading, {
            className: h.bentoSectionHeader,
            variant: "display-md",
            color: "text-strong",
            children: s
        }), (0, i.jsx)("div", {
            className: h.bentoBoxesGrid,
            children: n.map((e, t) => {
                let n;
                switch (e.length) {
                    case 3:
                        n = d.A0.SMALL;
                        break;
                    case 2:
                        n = d.A0.MEDIUM;
                        break;
                    default:
                        n = d.A0.LARGE
                }
                return (0, i.jsx)(i.Fragment, {
                    children: e.map(e => (0, i.jsx)(o.A, {
                        index: t + +!!m,
                        ...e,
                        size: n,
                        shouldLoadVideo: l,
                        isReducedMotion: c
                    }, e.name))
                })
            })
        }), g && (0, i.jsx)("div", {
            className: u.bentoSideGradient
        })]
    })
}
let m = s.memo(function(e) {
        let {
            whatsNewBoxes: t
        } = (0, d.Ay)();
        return (0, i.jsx)(g, {
            boxLayout: t,
            title: c.intl.string(c.t.LRmNAl),
            startLeftAligned: e.enablePremiumBrandRefreshDesign,
            ...e
        })
    }),
    A = s.memo(function(e) {
        let {
            bestOfBoxes: t
        } = (0, d.Ay)();
        return (0, i.jsx)(g, {
            boxLayout: t,
            title: c.intl.string(c.t.EnzW2H),
            includeSideGradient: !e.enablePremiumBrandRefreshDesign,
            startLeftAligned: !0,
            ...e
        })
    })