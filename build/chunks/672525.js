/** chunk id: 672525 params = (module,exports,require) **/
e.d(i, {
    Ay: () => g,
    D3: () => u,
    Ls: () => d,
    yS: () => I
});
var n = e(627968);
e(64700);
var a = e(503698),
    s = e.n(a),
    l = e(397927),
    r = e(407775),
    o = e(788868),
    c = e(271057);

function u(t) {
    let {
        onClick: i,
        isGift: e,
        priceOptions: a,
        showPromotionalGiftBanner: o,
        narrowLayout: u,
        wumpusPosition: d,
        className: I
    } = t;
    return (0, n.jsx)(l.DUT, {
        onClick: i,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(r.KV, {
            ctaButton: null,
            showPromotionalGiftBanner: o,
            showYearlyPrice: !0,
            isGift: e,
            isModal: !0,
            priceOptions: a,
            className: s()(I, {
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
        priceOptions: a,
        removeTopMargin: o,
        narrowLayout: u,
        className: d
    } = t;
    return (0, n.jsx)(l.DUT, {
        onClick: i,
        style: {
            cursor: "pointer"
        },
        children: (0, n.jsx)(r.AP, {
            className: s()(d, {
                [c.ym]: !o,
                [c.gH]: u
            }),
            ctaButton: null,
            showYearlyPrice: !0,
            isGift: e,
            priceOptions: a,
            useShortTitle: u
        })
    })
}

function I(t) {
    let {
        onSelectSku: i,
        onSelectPremiumGroup: e,
        priceOptions: a,
        showPromotionalGiftBanner: s
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(d, {
            onClick: () => i(o.pe.TIER_0),
            isGift: !1,
            priceOptions: a,
            narrowLayout: !0,
            removeTopMargin: !0
        }), (0, n.jsx)(u, {
            onClick: () => i(o.pe.TIER_2),
            isGift: !1,
            priceOptions: a,
            showPromotionalGiftBanner: s,
            narrowLayout: !0
        }), (0, n.jsx)(l.DUT, {
            onClick: e,
            style: {
                cursor: "pointer"
            },
            children: (0, n.jsx)(r.r6, {
                priceOptions: a,
                className: c.gH
            })
        })]
    })
}
let g = function(t) {
    let {
        onSelectSku: i,
        isGift: e,
        priceOptions: a,
        showPromotionalGiftBanner: s
    } = t;
    return (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(u, {
            onClick: () => i(o.pe.TIER_2),
            isGift: e,
            priceOptions: a,
            showPromotionalGiftBanner: s
        }), (0, n.jsx)(d, {
            onClick: () => i(o.pe.TIER_0),
            isGift: e,
            priceOptions: a
        })]
    })
}