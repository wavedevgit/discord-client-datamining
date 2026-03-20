/** chunk id: 298072 params = (module,exports,require) **/
n.d(t, {
    Q: () => c,
    n: () => o
});
var r = n(942381),
    a = n(265690),
    i = n(312852),
    l = n(623373);
let s = (0, a.h)(() => ({
        selectionStates: new Map
    }), r.x),
    c = e => {
        let t = (0, i.K)(e),
            n = s(t => null != e && (0, l.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != n ? Math.max(0, n) : t
    },
    o = (e, t) => {
        s.setState(n => {
            let r = n.selectionStates.get(e.storeListingId);
            return r?.selectedVariantIndex === t ? n : {
                selectionStates: new Map(n.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }