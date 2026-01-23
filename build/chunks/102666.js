/** Chunk was on 83855 **/
/** chunk id: 102666, original params: e,l,s (module,exports,require) **/
s.d(l, {
    m: () => n
}), s(896048), s(638769);
var t = s(64700),
    a = s(417597),
    r = s(4227);
let i = (e, l) => {
        let s = l.get(e.skuId);
        return null == s ? 0 : null != s.expiresAt ? 1 : 2
    },
    n = e => {
        let l = (0, a.bG)([r.A], () => r.A.purchases);
        return (0, t.useMemo)(() => [...e].sort((e, s) => i(e, l) - i(s, l)), [e, l])
    }