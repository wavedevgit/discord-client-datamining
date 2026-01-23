/** Chunk was on 59275 **/
/** chunk id: 206077, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    X: () => o
}), n(896048), n(638769);
var r = n(64700),
    l = n(575593),
    s = n(417597),
    a = n(4227);
let i = (e, t) => {
        if (e.type === l.R.BUNDLE && e.items.some(e => t.includes(e.skuId))) return 2;
        if (e.type === l.R.VARIANTS_GROUP) {
            var n, r;
            if (null != (n = null == (r = e.variants) ? void 0 : r.some(e => t.includes(e.skuId))) && n) return 1
        }
        return 3 * !!t.includes(e.skuId)
    },
    o = e => {
        let t = (0, s.bG)([a.A], () => a.A.purchases),
            n = (0, r.useMemo)(() => [...t].map(e => {
                let [t] = e;
                return t
            }), [t]);
        return (0, r.useMemo)(() => [...e].sort((e, t) => i(e, n) - i(t, n)), [e, n])
    }