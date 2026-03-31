/** chunk id: 251191 params = (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => C
});
var n = s(627968),
    r = s(64700),
    l = s(503698),
    a = s.n(l),
    i = s(311907),
    o = s(397927),
    c = s(951707),
    d = s(287809),
    u = s(440938),
    _ = s(590180),
    g = s(940980),
    m = s(313276),
    h = s(206077),
    p = s(751304),
    f = s(561769),
    x = s(758836),
    E = s(985018),
    b = s(572199);
let C = e => {
    let {
        shelf: t,
        handleTransition: s,
        tab: l
    } = e, C = (0, i.bG)([d.default], () => d.default.getCurrentUser()), A = (0, g.W)("ShelfBlock"), S = (0, i.bG)([_.A], () => _.A.getCategory(t.categorySkuId)), v = (0, m.A)(), I = r.useMemo(() => v(t.rankedSkuIds), [t.rankedSkuIds, v]), L = (0, h.X)(I);
    return null == C ? null : (0, n.jsxs)("div", {
        className: a()(b.Vp, b.YB),
        children: [(0, n.jsxs)("div", {
            className: b.$6,
            children: [(0, n.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: t.name
            }), (0, n.jsx)(o.Button, {
                variant: "secondary",
                text: E.intl.formatToPlainString(E.t.bc9RBE, {
                    category_name: t.name
                }),
                onClick: () => {
                    s({
                        sourceButton: "shelf block see all",
                        categorySkuId: t.categorySkuId,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: S?.isOrbsExclusive && l !== x.G2.ORBS
                    })
                }
            })]
        }), (0, n.jsx)(c.A, {
            gap: "xl",
            children: (0, n.jsx)(n.Fragment, {
                children: L.map((e, s) => {
                    if (null == _.A.getCategoryForProduct(e.skuId) || null == e) return null;
                    let r = e.skuId;
                    return (0, n.jsx)(u.R9, {
                        newValue: {
                            tilePosition: s,
                            pageSection: t.name,
                            categoryPosition: 2
                        },
                        children: (0, n.jsx)(p.A, {
                            skuId: r,
                            prioritizedCurrency: l === x.G2.ORBS ? f.Hi.ORBS : A ? f.Hi.FIAT : void 0
                        }, r)
                    }, r)
                })
            })
        })]
    })
}