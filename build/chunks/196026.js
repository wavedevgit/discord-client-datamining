/** Chunk was on 68406 **/
/** chunk id: 196026, original params: e,t,r (module,exports,require) **/
r.d(t, {
    Ay: () => p,
    ZK: () => m,
    dP: () => d,
    wn: () => u
}), r(896048), r(321073);
var n, l = r(64700),
    i = r(417597),
    s = r(590180),
    a = r(4227),
    o = r(993408),
    c = r(985018),
    u = ((n = {}).PURCHASE = "purchase", n.PREMIUM_PURCHASE = "premium_purchase", n.PREVIEW = "preview", n);
let d = {
        skuId: "None"
    },
    m = {
        skuId: "Shop"
    },
    p = () => {
        let e = (0, i.bG)([a.A], () => a.A.purchases),
            [t, r] = (0, i.yK)([s.A], () => [s.A.categories, s.A.products]);
        return (0, l.useMemo)(() => {
            let n = (0, o.ps)(e, t).reduce((t, n) => {
                let l = e.get(n.skuId);
                return (null != l ? (0, o.gA)(l) : (0, o.G0)(r.get(n.skuId))) ? t.premium_purchase.push(n) : null != l ? t.purchase.push(n) : t.preview.push(n), t
            }, {
                purchase: [],
                premium_purchase: [],
                preview: []
            });
            return [{
                section: "purchase",
                items: [d, m, ...n.purchase],
                height: 12,
                header: c.intl.string(c.t.VqmVqE)
            }, {
                section: "premium_purchase",
                items: n.premium_purchase,
                height: 12,
                header: c.intl.string(c.t.TiLCgw)
            }, {
                section: "preview",
                items: n.preview,
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