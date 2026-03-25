/** chunk id: 672525 params = (module,exports,require) **/
i.d(e, {
    Ay: () => I,
    D3: () => u,
    Ls: () => d,
    yS: () => g
});
var n = i(627968);
i(64700);
var r = i(503698),
    a = i.n(r),
    l = i(397927),
    s = i(407775),
    o = i(788868),
    c = i(271057);

function u(t) {
    let {
        onClick: e,
        isGift: i,
        priceOptions: r,
        showPromotionalGiftBanner: o,
        narrowLayout: u,
        wumpusPosition: d,
        className: g
    } = t;
    return (0, n.jsx)(l.DUT, {
        onClick: e,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(s.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: i,
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
        onClick: e,
        isGift: i,
        priceOptions: r,
        removeTopMargin: o,
        narrowLayout: u,
        className: d
    } = t;
    return (0, n.jsx)(l.DUT, {
        onClick: e,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(s.AP, {
            className: a()(d, {
                [c.ym]: !o,
                [c.gH]: u
            }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: i,
            priceOptions: r,
            useShortTitle: u
        })
    })
}

function g(t) {
    let {
        onSelectSku: e,
        onSelectPremiumGroup: i,
        priceOptions: r,
        showPromotionalGiftBanner: a
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d, {
            onClick: () => e(o.pe.TIER_0),
            isGift: !1,
            priceOptions: r,
            narrowLayout: !0,
            removeTopMargin: !0
        }), (0, n.jsx)(u, {
            onClick: () => e(o.pe.TIER_2),
            isGift: !1,
            priceOptions: r,
            showPromotionalGiftBanner: a,
            narrowLayout: !0
        }), (0, n.jsx)(l.DUT, {
            onClick: i,
            style: {
                cursor: "pointer"
            },
            children: (0, n.jsx)(s.r6, {
                priceOptions: r,
                className: c.gH
            })
        })]
    })
}
let I = function(t) {
    let {
        onSelectSku: e,
        isGift: i,
        priceOptions: r,
        showPromotionalGiftBanner: a
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {
            onClick: () => e(o.pe.TIER_2),
            isGift: i,
            priceOptions: r,
            showPromotionalGiftBanner: a
        }), (0, n.jsx)(d, {
            onClick: () => e(o.pe.TIER_0),
            isGift: i,
            priceOptions: r
        })]
    })
}