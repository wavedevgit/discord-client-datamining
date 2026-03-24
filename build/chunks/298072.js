/** chunk id: 298072 params = (module,exports,require) **/
"use strict";
r.d(t, {
    Q: () => c,
    n: () => o
});
var n = r(942381),
    i = r(265690),
    s = r(312852),
    a = r(623373);
let l = (0, i.h)(() => ({
        selectionStates: new Map
    }), n.x),
    c = e => {
        let t = (0, s.K)(e),
            r = l(t => null != e && (0, a.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != r ? Math.max(0, r) : t
    },
    o = (e, t) => {
        l.setState(r => {
            let n = r.selectionStates.get(e.storeListingId);
            return n?.selectedVariantIndex === t ? r : {
                selectionStates: new Map(r.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }