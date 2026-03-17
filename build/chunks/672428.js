/** chunk id: 672428 params = (module,exports,require) **/
l.d(t, {
    D: () => c
});
var r = l(64700),
    n = l(575593),
    i = l(417597),
    o = l(67480),
    a = l(979286),
    s = l(590180),
    d = l(652215);

function c(e, t) {
    let l = (0, i.yK)([o.A], () => e.map(e => o.A.get(e))),
        c = (0, i.yK)([s.A], () => e.map(e => s.A.isFetchingProduct(e))),
        u = (0, i.yK)([s.A], () => e.map(e => s.A.getProduct(e))),
        h = (0, i.yK)([s.A], () => e.map(e => s.A.getProductFetchError(e))),
        m = (0, i.yK)([s.A], () => e.map(e => s.A.getProductFetchErrorTimestamp(e)));
    return (0, r.useEffect)(() => {
        let r = Date.now();
        for (let [i, o] of e.entries()) {
            let e = l[i],
                s = u[i],
                p = c[i],
                _ = h[i],
                T = m[i],
                g = !0 === t && s?.type === n.R.BUNDLE && 0 === s.items.length,
                S = null != _ && null != T && r - T < 36e5;
            null != s && !g || null != e && e.productLine !== d.EZt.COLLECTIBLES || p || S || (0, a.Jp)(o, {
                includeBundles: t
            })
        }
    }, [e, l, c, u, h, m, t]), u.some((e, t) => c[t] || null == e && null == h[t])
}