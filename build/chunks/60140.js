/** Chunk was on 59275 **/
/** chunk id: 60140, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => y
}), n(896048);
var r = n(627968),
    l = n(64700),
    s = n(397927),
    a = n(770178),
    i = n(765548),
    o = n(124300),
    c = n(440938),
    u = n(590180),
    d = n(379177),
    g = n(511265),
    f = n(313276),
    m = n(206077),
    p = n(751304),
    _ = n(561769),
    b = n(484469),
    h = n(940622),
    E = n(758836),
    v = n(201073);

function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
        }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = r
        })
    }
    return e
}
let A = e => {
        var t, n;
        let {
            cardContainerRef: o,
            totalCards: c
        } = (() => {
            let [e, t] = l.useState(1), n = (0, s.rdh)(s.LU0.space.SPACE_XL), r = (0, i.A)(() => {
                (null == o ? void 0 : o.current) == null || t(Math.max(1, Math.floor((o.current.offsetWidth + n) / (246 + n))))
            }), o = (0, a.w)(r, [n], {
                fireOnMount: !0,
                fireOnDepsChange: !0
            });
            return {
                cardContainerRef: l.useCallback(e => {
                    o.current = e, null != e && r()
                }, [r, o]),
                totalCards: e
            }
        })();
        return (0, r.jsx)("div", {
            className: v.nM,
            ref: o,
            children: (0, r.jsx)(O, (t = C({}, e), n = n = {
                totalCards: c
            }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                }
                return n
            })(Object(n)).forEach(function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }), t))
        })
    },
    S = e => (0, r.jsx)("div", {
        className: v.hm,
        children: (0, r.jsx)(O, C({}, e))
    }),
    x = e => (0, r.jsx)(o.A, {
        gap: "xl",
        children: (0, r.jsx)(O, C({}, e))
    }),
    O = e => {
        let {
            heroBlockRecord: t,
            isLoading: n,
            products: l,
            tab: s,
            totalCards: a
        } = e, i = (0, c.uM)(), o = (0, d.rR)("HeroBlockCards") && t.categorySkuId === E.op, g = (0, d.eJ)("HeroBlockCards");
        if (n) return (0, r.jsx)(r.Fragment, {
            children: [...Array(null != a ? a : 4)].map((e, t) => (0, r.jsx)(b.A, {}, t))
        });
        let f = null != a ? l.slice(0, a) : l;
        return (0, r.jsx)(_.v3.Provider, {
            value: {
                rentalDuration: o ? g : void 0,
                flattenProductVariants: o
            },
            children: f.map((e, t) => {
                let n = u.A.getCategoryForProduct(e.skuId);
                return null == e || null == n ? null : (0, r.jsx)(c.R9, {
                    newValue: {
                        tilePosition: t,
                        pageSection: "top 4",
                        categoryPosition: 0
                    },
                    children: (0, r.jsx)(p.A, {
                        skuId: null == e ? void 0 : e.skuId,
                        prioritizedCurrency: s === E.G2.ORBS ? _.Hi.ORBS : void 0,
                        onClickAnalytics: (0, _.UU)(e, s, i)
                    }, e.skuId)
                }, e.skuId)
            })
        })
    },
    y = e => {
        let t, n, s, a, {
                heroBlockRecord: i,
                layout: o,
                tab: c,
                isBlockLoading: d = !1
            } = e,
            {
                products: p
            } = (t = (0, f.A)(), n = l.useMemo(() => d ? [] : t(i.rankedSkuIds), [d, t, i.rankedSkuIds]), s = (0, g.p)()(n), a = (0, m.X)(s), {
                products: (0, h.od)(a)
            }),
            _ = l.useMemo(() => !d && 0 !== i.rankedSkuIds.length && !(p.length > 0) && i.rankedSkuIds.every(e => {
                var t;
                return (null == (t = u.A.getProduct(e)) ? void 0 : t.variantGroupStoreListingId) != null
            }), [d, i.rankedSkuIds, p.length]),
            b = d || _;
        switch (o) {
            case "row":
                return (0, r.jsx)(A, {
                    heroBlockRecord: i,
                    isLoading: b,
                    products: p,
                    tab: c
                });
            case "feed":
                return (0, r.jsx)(S, {
                    heroBlockRecord: i,
                    isLoading: b,
                    products: p,
                    tab: c
                });
            case "hscroll":
                return (0, r.jsx)(x, {
                    heroBlockRecord: i,
                    isLoading: b,
                    products: p,
                    tab: c
                })
        }
    }