/** chunk id: 659503 params = (module,exports,require) **/
l.d(t, {
    Ay: () => p,
    wn: () => u
}), l(321073);
var s, n = l(64700),
    i = l(417597),
    r = l(590180),
    a = l(4227),
    c = l(993408),
    o = l(985018),
    u = ((s = {}).PURCHASE = "purchase", s.PREMIUM_PURCHASE = "premium_purchase", s.PREVIEW = "preview", s);
let d = {
        skuId: "None"
    },
    m = {
        skuId: "Shop"
    },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, l] = (0, i.yK)([r.A], () => [r.A.categories, r.A.products]);
        return (0, n.useMemo)(() => {
            let s = (0, c.zd)(e, t).reduce((t, s) => {
                let n = e.get(s.skuId),
                    i = l.get(s.skuId),
                    r = null != n ? (0, c.gA)(n) : (0, c.G0)(i),
                    a = i?.isCategoryReward ?? !1;
                return r ? t.premium_purchase.push(s) : null != n ? t.purchase.push(s) : r || a || t.preview.push(s), t
            }, {
                purchase: [],
                premium_purchase: [],
                preview: []
            });
            return [{
                section: "purchase",
                items: [d, m, ...s.purchase],
                height: 12,
                header: o.intl.string(o.t.WfGV52)
            }, {
                section: "premium_purchase",
                items: s.premium_purchase,
                height: 12,
                header: o.intl.string(o.t.TiLCgw)
            }, {
                section: "preview",
                items: s.preview,
                height: 12,
                header: o.intl.string(o.t["1vbbee"])
            }].filter(e => {
                let {
                    items: t
                } = e;
                return t.length > 0
            })
        }, [t, e, l])
    }