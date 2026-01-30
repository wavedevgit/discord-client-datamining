/** chunk id: 651410, original params: e,l,s (module,exports,require) **/
s.d(l, {
    default: () => j
});
var t = s(627968),
    a = s(64700),
    r = s(789645),
    i = s(732955),
    n = s(397927),
    d = s(688810),
    c = s(590180),
    o = s(379177),
    u = s(102666),
    x = s(751304),
    h = s(561769),
    b = s(758836),
    _ = s(985018),
    p = s(477920);
let j = e => {
    let {
        analyticsLocations: l,
        transitionState: s,
        onClose: j
    } = e, m = (0, o.eJ)("CollectiblesRentalsModal"), g = a.useMemo(() => b.Vk.map(e => c.A.getProduct(e)).filter(e => null != e), []), v = (0, u.m)(g);
    return (0, t.jsx)(d.f5, {
        value: l,
        children: (0, t.jsx)(i.dWK, {
            size: "xl",
            onClose: j,
            transitionState: s,
            children: (0, t.jsxs)("div", {
                className: p.yl,
                children: [(0, t.jsxs)("div", {
                    className: p.wx,
                    children: [(0, t.jsxs)("div", {
                        className: p.gn,
                        children: [(0, t.jsx)(n.Heading, {
                            variant: "heading-xl/bold",
                            children: _.intl.string(_.t.bfXHLB)
                        }), (0, t.jsx)(n.LpS, {
                            text: _.intl.string(_.t.oW0eUd),
                            disableColor: !0
                        })]
                    }), (0, t.jsx)("button", {
                        className: p.b,
                        onClick: j,
                        "aria-label": _.intl.string(_.t.cpT0Cq),
                        children: (0, t.jsx)(r.P, {})
                    })]
                }), (0, t.jsx)(n.T7Y, {
                    className: p.XG,
                    children: (0, t.jsx)("div", {
                        className: p.Vg,
                        children: (0, t.jsx)(h.v3.Provider, {
                            value: {
                                rentalDuration: m,
                                flattenProductVariants: !0
                            },
                            children: v.map(e => (0, t.jsx)(x.A, {
                                skuId: null == e ? void 0 : e.skuId,
                                prioritizedCurrency: h.Hi.ORBS
                            }, "rental_inner_".concat(e.skuId)))
                        })
                    })
                })]
            })
        })
    })
}