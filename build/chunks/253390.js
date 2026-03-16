/** chunk id: 253390 params = (module,exports,require) **/
n.d(t, {
    v: () => d
});
var i = n(284009),
    s = n.n(i),
    l = n(97352),
    a = n(927578),
    r = n(788868),
    o = n(652215);

function d(e, t) {
    let n = l.A.get(e.planId);
    s()(null != n, "missing premium subscription plan");
    let i = l.A.getForSkuAndInterval((0, a.mH)(r.pe.GUILD), n.interval, n.intervalCount);
    s()(null != i, "missing premium guild plan");
    let d = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        c = (e.status === o.Dmq.CANCELED ? 0 : (0, a.bx)(d)) + t,
        u = d.filter(e => e.planId !== i.id);
    if (c < 0) throw Error("Invalid adjustment");
    return 0 === c ? u : [...u, {
        planId: i.id,
        quantity: c
    }]
}