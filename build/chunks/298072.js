/** chunk id: 298072, original params: t,e,n (module,exports,require) **/
n.d(e, {
    Q: () => s,
    n: () => o
});
var i = n(942381),
    a = n(265690),
    l = n(312852),
    r = n(623373);
let d = (0, a.h)(() => ({
        selectionStates: new Map
    }), i.x),
    s = t => {
        let e = (0, l.K)(t),
            n = d(e => null != t && (0, r.B1)(t) ? e.selectionStates.get(t.storeListingId)?.selectedVariantIndex : null);
        return null != n ? Math.max(0, n) : e
    },
    o = (t, e) => {
        d.setState(n => {
            let i = n.selectionStates.get(t.storeListingId);
            return i?.selectedVariantIndex === e ? n : {
                selectionStates: new Map(n.selectionStates).set(t.storeListingId, {
                    selectedVariantIndex: e
                })
            }
        })
    }