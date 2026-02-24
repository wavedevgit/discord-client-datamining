/** chunk id: 131168, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => c
});
var i = n(311907),
    s = n(166403),
    a = n(816733),
    l = n(694080),
    r = n(432779),
    o = n(788868);

function c() {
    let e = (0, i.bG)([s.A], () => s.A.getPremiumTypeSubscription()),
        t = a.A.isFetchingOffer(),
        n = a.A.hasFetchedOffer(),
        c = (0, r.A)(o.q),
        d = (0, r.A)(o.EG),
        u = c ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, l.Vn)(), null)
}