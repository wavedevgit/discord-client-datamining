/** chunk id: 840411, original params: e,t,n (module,exports,require) **/
function r(e, t, n, r) {
    var l, i, a, o, s, c, u, d;
    let f = null,
        p = null;
    n < r ? (f = null != (l = null == (a = t[r]) ? void 0 : a.skuId) ? l : null, p = null != (i = null == (o = t[r + 1]) ? void 0 : o.skuId) ? i : null) : (f = null != (s = null == (u = t[r - 1]) ? void 0 : u.skuId) ? s : null, p = null != (c = null == (d = t[r]) ? void 0 : d.skuId) ? c : null);
    let g = [...t],
        [m] = g.splice(n, 1);
    return g.splice(r, 0, m), {
        newWishlistData: e.set("items", g),
        previousSkuId: f,
        nextSkuId: p
    }
}
n.d(t, {
    A: () => r
}), n(896048)