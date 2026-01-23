/** Chunk was on 59275 **/
/** chunk id: 251191, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => h
});
var r = n(627968),
    l = n(64700),
    s = n(503698),
    a = n.n(s),
    i = n(311907),
    o = n(397927),
    c = n(287809),
    u = n(440938),
    d = n(590180),
    g = n(206077),
    f = n(751304),
    m = n(561769),
    p = n(758836),
    _ = n(985018),
    b = n(201073);
let h = e => {
    let {
        shelf: t,
        handleTransition: n,
        tab: s
    } = e, h = (0, i.bG)([c.default], () => c.default.getCurrentUser()), E = (0, i.bG)([d.A], () => d.A.getCategory(t.categorySkuId)), v = (0, u.uM)(), C = l.useMemo(() => t.rankedSkuIds.map(e => d.A.getProduct(e)).filter(e => null != e), [t.rankedSkuIds]), A = (0, g.X)(C).slice(0, 4);
    return null == h ? null : (0, r.jsxs)("div", {
        className: a()(b.Vp, b.YB),
        children: [(0, r.jsxs)("div", {
            className: b.$6,
            children: [(0, r.jsx)(o.Heading, {
                variant: "heading-lg/semibold",
                children: t.name
            }), (0, r.jsx)(o.Button, {
                variant: "secondary",
                text: _.intl.formatToPlainString(_.t.bc9RBE, {
                    category_name: t.name
                }),
                onClick: () => {
                    n({
                        sourceButton: "shelf block see all",
                        categorySkuId: t.categorySkuId,
                        isInternalShopDeeplink: !0,
                        isOrbsExclusive: (null == E ? void 0 : E.isOrbsExclusive) && s !== p.G2.ORBS
                    })
                }
            })]
        }), (0, r.jsx)("div", {
            className: b.hm,
            children: (0, r.jsx)(r.Fragment, {
                children: A.map((e, n) => {
                    if (null == d.A.getCategoryForProduct(e.skuId) || null == e) return null;
                    let l = e.skuId;
                    return (0, r.jsx)(u.R9, {
                        newValue: {
                            tilePosition: n,
                            pageSection: t.name,
                            categoryPosition: 2
                        },
                        children: (0, r.jsx)(f.A, {
                            skuId: l,
                            prioritizedCurrency: s === p.G2.ORBS ? m.Hi.ORBS : void 0,
                            onClickAnalytics: (0, m.UU)(e, s, v)
                        }, l)
                    }, l)
                })
            })
        })]
    })
}