/** chunk id: 206077, original params: e,t,s (module,exports,require) **/
"use strict";
s.d(t, {
    X: () => c
});
var n = s(64700),
    r = s(575593),
    l = s(417597),
    i = s(4227),
    a = s(623373);
let o = (e, t) => e.type === r.R.BUNDLE && e.items.some(e => t.includes(e.skuId)) ? 1 : (0, a.B1)(e) ? 2 * !!e.variants.every(e => t.includes(e.skuId)) : 2 * !!t.includes(e.skuId),
    c = e => {
        let t = (0, l.bG)([i.A], () => i.A.purchases),
            s = (0, n.useMemo)(() => [...t].map(e => {
                let [t] = e;
                return t
            }), [t]);
        return (0, n.useMemo)(() => [...e].sort((e, t) => o(e, s) - o(t, s)), [e, s])
    }