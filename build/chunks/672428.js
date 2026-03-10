/** chunk id: 672428 params = (module,exports,require) **/
t.d(l, {
    D: () => c
});
var r = t(64700),
    n = t(575593),
    o = t(417597),
    i = t(67480),
    a = t(979286),
    s = t(590180),
    d = t(652215);

function c(e, l) {
    let t = (0, o.yK)([i.A], () => e.map(e => i.A.get(e))),
        c = (0, o.yK)([s.A], () => e.map(e => s.A.isFetchingProduct(e))),
        u = (0, o.yK)([s.A], () => e.map(e => s.A.getProduct(e))),
        h = (0, o.yK)([s.A], () => e.map(e => s.A.getProductFetchError(e))),
        m = (0, o.yK)([s.A], () => e.map(e => s.A.getProductFetchErrorTimestamp(e)));
    return (0, r.useEffect)(() => {
        let r = Date.now();
        for (let [o, i] of e.entries()) {
            let e = t[o],
                s = u[o],
                p = c[o],
                _ = h[o],
                T = m[o],
                S = !0 === l && s?.type === n.R.BUNDLE && 0 === s.items.length,
                A = null != _ && null != T && r - T < 36e5;
            null != s && !S || null != e && e.productLine !== d.EZt.COLLECTIBLES || p || A || (0, a.Jp)(i, {
                includeBundles: l
            })
        }
    }, [e, t, c, u, h, m, l]), u.some((e, l) => c[l] || null == e && null == h[l])
}