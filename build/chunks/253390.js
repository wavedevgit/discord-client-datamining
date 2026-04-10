/** chunk id: 253390 params = (module,exports,require) **/
t.d(n, {
    v: () => c
});
var i = t(284009),
    l = t.n(i),
    r = t(97352),
    s = t(927578),
    a = t(788868),
    o = t(652215);

function c(e, n) {
    let t = r.A.get(e.planId);
    l()(null != t, "missing premium subscription plan");
    let i = r.A.getForSkuAndInterval((0, s.mH)(a.pe.GUILD), t.interval, t.intervalCount);
    l()(null != i, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        u = (e.status === o.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + n,
        d = c.filter(e => e.planId !== i.id);
    if (u < 0) throw Error("Invalid adjustment");
    return 0 === u ? d : [...d, {
        planId: i.id,
        quantity: u
    }]
}