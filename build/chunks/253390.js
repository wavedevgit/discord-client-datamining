/** Chunk was on 60667 **/
/** chunk id: 253390, original params: e,t,n (module,exports,require) **/
n.d(t, {
    v: () => c
}), n(65821), n(896048);
var r = n(284009),
    i = n.n(r),
    l = n(97352),
    s = n(927578),
    a = n(788868),
    o = n(652215);

function c(e, t) {
    let n = l.A.get(e.planId);
    i()(null != n, "missing premium subscription plan");
    let r = l.A.getForSkuAndInterval((0, s.mH)(a.pe.GUILD), n.interval, n.intervalCount);
    i()(null != r, "missing premium guild plan");
    let c = null != e.renewalMutations ? e.renewalMutations.additionalPlans : e.additionalPlans,
        d = (e.status === o.Dmq.CANCELED ? 0 : (0, s.bx)(c)) + t,
        u = c.filter(e => e.planId !== r.id);
    if (d < 0) throw Error("Invalid adjustment");
    return 0 === d ? u : [...u, {
        planId: r.id,
        quantity: d
    }]
}