/** chunk id: 298072 params = (module,exports,require) **/
n.d(e, {
    Q: () => d,
    n: () => u
});
var i = n(942381),
    r = n(265690),
    a = n(312852),
    l = n(623373);
let s = (0, r.h)(() => ({
        selectionStates: new Map
    }), i.x),
    d = t => {
        let e = (0, a.K)(t),
            n = s(e => null != t && (0, l.B1)(t) ? e.selectionStates.get(t.storeListingId)?.selectedVariantIndex : null);
        return null != n ? Math.max(0, n) : e
    },
    u = (t, e) => {
        s.setState(n => {
            let i = n.selectionStates.get(t.storeListingId);
            return i?.selectedVariantIndex === e ? n : {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    selectedVariantIndex: e
                })
            }
        })
    }