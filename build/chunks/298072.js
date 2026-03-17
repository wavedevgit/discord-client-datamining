/** chunk id: 298072 params = (module,exports,require) **/
a.d(t, {
    Q: () => d,
    n: () => i
});
var l = a(942381),
    r = a(265690),
    n = a(312852),
    o = a(623373);
let s = (0, r.h)(() => ({
        selectionStates: new Map
    }), l.x),
    d = e => {
        let t = (0, n.K)(e),
            a = s(t => null != e && (0, o.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != a ? Math.max(0, a) : t
    },
    i = (e, t) => {
        s.setState(a => {
            let l = a.selectionStates.get(e.storeListingId);
            return l?.selectedVariantIndex === t ? a : {
                selectionStates: new Map(a.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }