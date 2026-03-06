/** chunk id: 672525 params = (module,exports,require) **/
"use strict";
i.d(e, {
    Ay: () => I,
    D3: () => u,
    Ls: () => d,
    yS: () => g
});
var n = i(627968);
i(64700);
var r = i(503698),
    s = i.n(r),
    a = i(397927),
    l = i(407775),
    o = i(788868),
    c = i(532211);

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
    return (0, n.jsx)(a.DUT, {
        onClick: e,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(l.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: i,
            isModal: !0,
            priceOptions: r,
            className: s()(g, {
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
    return (0, n.jsx)(a.DUT, {
        onClick: e,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(l.AP, {
            className: s()(d, {
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
        showPromotionalGiftBanner: s
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
            showPromotionalGiftBanner: s,
            narrowLayout: !0
        }), (0, n.jsx)(a.DUT, {
            onClick: i,
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
        onSelectSku: e,
        isGift: i,
        priceOptions: r,
        showPromotionalGiftBanner: s
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {
            onClick: () => e(o.pe.TIER_2),
            isGift: i,
            priceOptions: r,
            showPromotionalGiftBanner: s
        }), (0, n.jsx)(d, {
            onClick: () => e(o.pe.TIER_0),
            isGift: i,
            priceOptions: r
        })]
    })
}