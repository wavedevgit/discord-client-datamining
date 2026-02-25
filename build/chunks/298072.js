/** chunk id: 298072, original params: e,t,l (module,exports,require) **/
"use strict";
l.d(t, {
    Q: () => o,
    n: () => d
});
var r = l(942381),
    a = l(265690),
    n = l(312852),
    s = l(623373);
let i = (0, a.h)(() => ({
        selectionStates: new Map
    }), r.x),
    o = e => {
        let t = (0, n.K)(e),
            l = i(t => null != e && (0, s.B1)(e) ? t.selectionStates.get(e.storeListingId)?.selectedVariantIndex : null);
        return null != l ? Math.max(0, l) : t
    },
    d = (e, t) => {
        i.setState(l => {
            let r = l.selectionStates.get(e.storeListingId);
            return r?.selectedVariantIndex === t ? l : {
                selectionStates: new Map(l.selectionStates).set(e.storeListingId, {
                    selectedVariantIndex: t
                })
            }
        })
    }