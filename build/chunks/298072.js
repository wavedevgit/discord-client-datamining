/** chunk id: 298072 params = (module,exports,require) **/
a.d(t, {
    Q: () => o,
    n: () => d
});
var l = a(942381),
    n = a(265690),
    r = a(312852),
    s = a(623373);
let i = (0, n.h)(() => ({
        selectionStates: new Map
    }), l.x),
    o = e => {
        let t = (0, r.K)(e),
            a = i(t => null != e && (0, s.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != a ? Math.max(0, a) : t
    },
    d = (e, t) => {
        i.setState(a => {
            let l = a.selectionStates.get(e.storeListingId);
            return l?.selectedVariantIndex === t ? a : {
                selectionStates: new Map(a.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }