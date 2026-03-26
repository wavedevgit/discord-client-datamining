/** chunk id: 253390 params = (module,exports,require) **/
t.d(n, {
    v: () => c
});
var l = t(284009),
    i = t.n(l),
    r = t(97352),
    s = t(927578),
    a = t(788868),
    o = t(652215);

function c(e, n) {
    let t = r.A.get(e.planId);
    i()(null != t, "missing premium subscription plan");
    let l = r.A.getForSkuAndInterval((0, s.mH)(a.pe.GUILD), t.interval, t.intervalCount);
    i()(null != l, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === o.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + n,
        p = c.filter(e => e.planId !== l.id);
    if (u < 0) throw Error("Invalid adjustment");
    return 0 === u ? p : [...p, {
        planId: l.id,
        quantity: u
    }]
}