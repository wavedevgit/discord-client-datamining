/** chunk id: 298072 params = (module,exports,require) **/
n.d(t, {
    Q: () => d,
    n: () => s
});
var i = n(942381),
    a = n(265690),
    l = n(312852),
    r = n(623373);
let o = (0, a.h)(() => ({
        selectionStates: new Map
    }), i.x),
    d = e => {
        let t = (0, l.K)(e),
            n = o(t => null != e && (0, r.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != n ? Math.max(0, n) : t
    },
    s = (e, t) => {
        o.setState(n => {
            let i = n.selectionStates.get(e.storeListingId);
            return i?.selectedVariantIndex === t ? n : {
                selectionStates: new Map(n.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }