/** chunk id: 155984, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    l: () => f
});
var r = n(989349),
    i = n.n(r),
    a = n(311907),
    o = n(295405),
    s = n(97352),
    l = n(166403),
    c = n(927578),
    u = n(652215),
    d = n(818348);

function f() {
    let e = (0, a.bG)([l.A], () => l.A.getPremiumTypeSubscription()),
        t = (0, a.bG)([s.A], () => null != e && null != e.planIdFromItems ? s.A.get(null == e ? void 0 : e.planIdFromItems) : null),
        n = (0, a.bG)([o.A], () => null != e && null != e.paymentSourceId ? o.A.getPaymentSource(e.paymentSourceId) : null, [e]),
        r = null != n && d.AD.has(n.type),
        f = (null == e ? void 0 : e.status) === u.Dmq.PAST_DUE ? i()().diff(i()(e.currentPeriodStart), "days") : 0;
    return !!(null != e && null != t && (0, c.xq)(t.id)) && r && f >= 0 && f <= (0, c.ji)(e).days && e.status === u.Dmq.PAST_DUE && !e.isPurchasedExternally
}