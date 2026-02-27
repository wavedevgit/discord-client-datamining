/** chunk id: 60140, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    A: () => E
});
var n = s(627968),
    l = s(64700),
    r = s(720462),
    a = s(440938),
    i = s(590180),
    o = s(511265),
    c = s(313276),
    d = s(206077),
    u = s(751304),
    g = s(561769),
    _ = s(484469),
    m = s(758836),
    h = s(201073);
let p = e => (0, n.jsx)("div", {
        className: h.hm,
        children: (0, n.jsx)(x, {
            ...e
        })
    }),
    f = e => (0, n.jsx)(r.A, {
        gap: "xl",
        children: (0, n.jsx)(x, {
            ...e
        })
    }),
    x = e => {
        let {
            isLoading: t,
            products: s,
            tab: l,
            totalCards: r
        } = e, o = (0, a.uM)();
        if (t) return (0, n.jsx)(n.Fragment, {
            children: [...Array(r ?? 4)].map((e, t) => (0, n.jsx)(_.A, {}, t))
        });
        let c = null != r ? s.slice(0, r) : s;
        return (0, n.jsx)(g.v3.Provider, {
            value: {
                flattenProductVariants: !1
            },
            children: c.map((e, t) => {
                let s = i.A.getCategoryForProduct(e.skuId);
                return null == e || null == s ? null : (0, n.jsx)(a.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, n.jsx)(u.A, {
                        skuId: e?.skuId,
                        prioritizedCurrency: l === m.G2.ORBS ? g.Hi.ORBS : void 0,
                        onClickAnalytics: (0, g.UU)(e, l, o)
                    }, e.skuId)
                }, e.skuId)
            })
        })
    },
    E = e => {
        let t, s, r, {
                heroBlockRecord: a,
                layout: u,
                tab: g,
                isBlockLoading: _ = !1
            } = e,
            {
                products: m
            } = (t = (0, c.A)(), s = l.useMemo(() => _ ? [] : t(a.rankedSkuIds), [_, t, a.rankedSkuIds]), r = (0, o.p)()(s), {
                products: (0, d.X)(r)
            }),
            h = l.useMemo(() => !_ && 0 !== a.rankedSkuIds.length && !(m.length > 0) && a.rankedSkuIds.every(e => i.A.getProduct(e)?.variantGroupStoreListingId != null), [_, a.rankedSkuIds, m.length]),
            x = _ || h;
        switch (u) {
            case "feed":
                return (0, n.jsx)(p, {
                    heroBlockRecord: a,
                    isLoading: x,
                    products: m,
                    tab: g
                });
            case "hscroll":
                return (0, n.jsx)(f, {
                    heroBlockRecord: a,
                    isLoading: x,
                    products: m,
                    tab: g
                })
        }
    }