/** chunk id: 672525 params = (module,exports,require) **/
e.d(i, {
    Ay: () => I,
    D3: () => u,
    Ls: () => d,
    yS: () => g
});
var n = e(627968);
e(64700);
var r = e(503698),
    a = e.n(r),
    s = e(397927),
    l = e(407775),
    o = e(788868),
    c = e(271057);

function u(t) {
    let {
        onClick: i,
        isGift: e,
        priceOptions: r,
        showPromotionalGiftBanner: o,
        narrowLayout: u,
        wumpusPosition: d,
        className: g
    } = t;
    return (0, n.jsx)(s.DUT, {
        onClick: i,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(l.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: e,
            isModal: !0,
            priceOptions: r,
            className: a()(g, {
                [c.gH]: u
            }),
            showWumpus: !u,
            showPill: !u,
            wumpusPosition: d
        })
    })
}

function d(t) {
    let {
        onClick: i,
        isGift: e,
        priceOptions: r,
        removeTopMargin: o,
        narrowLayout: u,
        className: d
    } = t;
    return (0, n.jsx)(s.DUT, {
        onClick: i,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(l.AP, {
            className: a()(d, {
                [c.ym]: !o,
                [c.gH]: u
            }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: e,
            priceOptions: r,
            useShortTitle: u
        })
    })
}

function g(t) {
    let {
        onSelectSku: i,
        onSelectPremiumGroup: e,
        priceOptions: r,
        showPromotionalGiftBanner: a
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d, {
            onClick: () => i(o.pe.TIER_0),
            isGift: !1,
            priceOptions: r,
            narrowLayout: !0,
            removeTopMargin: !0
        }), (0, n.jsx)(u, {
            onClick: () => i(o.pe.TIER_2),
            isGift: !1,
            priceOptions: r,
            showPromotionalGiftBanner: a,
            narrowLayout: !0
        }), (0, n.jsx)(s.DUT, {
            onClick: e,
            style: {
                cursor: "pointer"
            },
            children: (0, n.jsx)(l.r6, {
                priceOptions: r,
                className: c.gH
            })
        })]
    })
}
let I = function(t) {
    let {
        onSelectSku: i,
        isGift: e,
        priceOptions: r,
        showPromotionalGiftBanner: a
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {
            onClick: () => i(o.pe.TIER_2),
            isGift: e,
            priceOptions: r,
            showPromotionalGiftBanner: a
        }), (0, n.jsx)(d, {
            onClick: () => i(o.pe.TIER_0),
            isGift: e,
            priceOptions: r
        })]
    })
}