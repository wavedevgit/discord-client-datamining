/** Chunk was on 59275 **/
/** chunk id: 716633, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    x: () => a
}), n(896048), n(321073);
var r = n(64700),
    l = n(417597),
    s = n(4227);
let a = e => {
    let t = (0, l.bG)([s.A], () => s.A.purchases);
    return (0, r.useMemo)(() => {
        let n = [],
            r = [];
        for (let l of e.values()) l.products.every(e => !!t.get(e.skuId)) ? n.push(l) : r.push(l);
        return r.concat(n)
    }, [e, t])
}