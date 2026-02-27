/** chunk id: 251191, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => C
});
var n = s(627968),
    l = s(64700),
    r = s(503698),
    a = s.n(r),
    i = s(311907),
    o = s(397927),
    c = s(720462),
    d = s(287809),
    u = s(440938),
    g = s(590180),
    _ = s(313276),
    m = s(206077),
    h = s(751304),
    p = s(561769),
    f = s(758836),
    x = s(985018),
    E = s(201073);
let C = e => {
    let {
        shelf: t,
        handleTransition: s,
        tab: r
    } = e, C = (0, i.bG)([d.default], () => d.default.getCurrentUser()), A = (0, i.bG)([g.A], () => g.A.getCategory(t.categorySkuId)), b = (0, u.uM)(), S = (0, _.A)(), v = l.useMemo(() => S(t.rankedSkuIds), [t.rankedSkuIds, S]), L = (0, m.X)(v);
    return null == C ? null : (0, n.jsxs)("div", {
        className: a()(E.Vp, E.YB),
        children: [(0, n.jsxs)("div", {
            className: E.$6,
            children: [(0, n.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: t.name
            }), (0, n.jsx)(o.Button, {
                variant: "secondary",
                text: x.intl.formatToPlainString(x.t.bc9RBE, {
                    category_name: t.name
                }),
                onClick: () => {
                    s({
                        sourceButton: "shelf block see all",
                        categorySkuId: t.categorySkuId,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: A?.isOrbsExclusive && r !== f.G2.ORBS
                    })
                }
            })]
        }), (0, n.jsx)(c.A, {
            gap: "xl",
            children: (0, n.jsx)(n.Fragment, {
                children: L.map((e, s) => {
                    if (null == g.A.getCategoryForProduct(e.skuId) || null == e) return null;
                    let l = e.skuId;
                    return (0, n.jsx)(u.R9, {
                        newValue: {
                            tilePosition: s,
                            pageSection: t.name,
                            categoryPosition: 2
                        },
                        children: (0, n.jsx)(h.A, {
                            skuId: l,
                            prioritizedCurrency: r === f.G2.ORBS ? p.Hi.ORBS : void 0,
                            onClickAnalytics: (0, p.UU)(e, r, b)
                        }, l)
                    }, l)
                })
            })
        })]
    })
}