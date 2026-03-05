/** chunk id: 298072, original params: e,t,a (module,exports,require) **/
a.d(t, {
    Q: () => c,
    n: () => o
});
var n = a(942381),
    r = a(265690),
    i = a(312852),
    s = a(623373);
let l = (0, r.h)(() => ({
        selectionStates: new Map
    }), n.x),
    c = e => {
        let t = (0, i.K)(e),
            a = l(t => null != e && (0, s.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != a ? Math.max(0, a) : t
    },
    o = (e, t) => {
        l.setState(a => {
            let n = a.selectionStates.get(e.storeListingId);
            return n?.selectedVariantIndex === t ? a : {
                selectionStates: new Map(a.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }