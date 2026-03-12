/** chunk id: 131168 params = (module,exports,require) **/
n.d(t, {
    p: () => d
});
var i = n(311907),
    s = n(166403),
    l = n(816733),
    r = n(694080),
    a = n(432779),
    o = n(788868);

function d() {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = l.A.isFetchingOffer(),
        n = l.A.hasFetchedOffer(),
        d = (0, a.A)(o.q),
        c = (0, a.A)(o.EG),
        u = d ?? c ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, r.Vn)(), null)
}