/** chunk id: 131168 params = (module,exports,require) **/
n.d(t, {
    p: () => o
});
var i = n(311907),
    r = n(166403),
    a = n(816733),
    s = n(694080),
    l = n(432779),
    c = n(788868);

function o() {
    let e = (0, i.bG)([r.A], () => r.A.getPremiumTypeSubscription()),
        t = a.A.isFetchingOffer(),
        n = a.A.hasFetchedOffer(),
        o = (0, l.A)(c.q),
        d = (0, l.A)(c.EG),
        u = o ?? d ?? null;
    return e?.canceledAt == null ? null : null != u ? u : (t || n || (0, s.Vn)(), null)
}