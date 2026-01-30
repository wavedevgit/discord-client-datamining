/** chunk id: 131168, original params: e,t,n (module,exports,require) **/
n.d(t, {
    p: () => c
});
var r = n(311907),
    i = n(166403),
    l = n(816733),
    s = n(694080),
    a = n(432779),
    o = n(788868);

function c() {
    var e;
    let t = (0, r.bG)([i.A], () => i.A.getPremiumTypeSubscription()),
        n = l.A.isFetchingOffer(),
        c = l.A.hasFetchedOffer(),
        d = (0, a.A)(o.q),
        u = (0, a.A)(o.EG),
        _ = null != (e = null != d ? d : u) ? e : null;
    return (null == t ? void 0 : t.canceledAt) == null ? null : null != _ ? _ : (n || c || (0, s.Vn)(), null)
}