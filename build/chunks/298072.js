/** chunk id: 298072 params = (module,exports,require) **/
a.d(t, {
    Q: () => o,
    n: () => i
});
var l = a(942381),
    r = a(265690),
    n = a(312852),
    s = a(623373);
let d = (0, r.h)(() => ({
        selectionStates: new Map
    }), l.x),
    o = e => {
        let t = (0, n.K)(e),
            a = d(t => null != e && (0, s.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != a ? Math.max(0, a) : t
    },
    i = (e, t) => {
        d.setState(a => {
            let l = a.selectionStates.get(e.storeListingId);
            return l?.selectedVariantIndex === t ? a : {
                selectionStates: new Map(a.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }