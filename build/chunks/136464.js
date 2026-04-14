/** chunk id: 136464 params = (module,exports,require) **/
r.d(t, {
    Ay: () => x,
    ZK: () => m,
    dP: () => u,
    wn: () => d
}), r(321073);
var s, n = r(64700),
    i = r(417597),
    a = r(590180),
    l = r(4227),
    o = r(993408),
    c = r(985018),
    d = ((s = {}).PURCHASE = "purchase", s.PREMIUM_PURCHASE = "premium_purchase", s.PREVIEW = "preview", s);
let u = {
        skuId: "None"
    },
    m = {
        skuId: "Shop"
    },
    x = () => {
        let e = (0, i.bG)([l.A], () => l.A.purchases),
            [t, r] = (0, i.yK)([a.A], () => [a.A.categories, a.A.products]);
        return (0, n.useMemo)(() => {
            let s = (0, o.ps)(e, t).reduce((t, s) => {
                let n = e.get(s.skuId);
                return (null != n ? (0, o.gA)(n) : (0, o.G0)(r.get(s.skuId))) ? t.premium_purchase.push(s) : null != n ? t.purchase.push(s) : t.preview.push(s), t
            }, {
                purchase: [],
                premium_purchase: [],
                preview: []
            });
            return [{
                section: "purchase",
                items: [u, m, ...s.purchase],
                height: 12,
                header: c.intl.string(c.t.VqmVqE)
            }, {
                section: "premium_purchase",
                items: s.premium_purchase,
                height: 12,
                header: c.intl.string(c.t.TiLCgw)
            }, {
                section: "preview",
                items: s.preview,
                height: 12,
                header: c.intl.string(c.t["1vbbee"])
            }].filter(e => {
                let {
                    items: t
                } = e;
                return t.length > 0
            })
        }, [t, r, e])
    }