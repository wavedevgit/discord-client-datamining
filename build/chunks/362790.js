/** chunk id: 362790 params = (module,exports,require) **/
"use strict";
n.d(t, {
    A: () => _
});
var i = n(311907),
    r = n(73153),
    s = n(927813),
    a = n(661191),
    l = n(961350),
    o = n(994500);
let c = 180 * s.A.Millis.DAY,
    u = !1;
class d extends i.Ay.Store {
    static displayName = "PremiumPromoStore";
    initialize() {
        this.waitFor(o.A, l.default)
    }
    isEligible() {
        return u
    }
}
let _ = new d(r.h, {
    CONNECTION_OPEN: function() {
        return u !== (u = o.A.getFriendIDs().length >= 10 && a.default.extractTimestamp(l.default.getId()) < Date.now() - c)
    }
})