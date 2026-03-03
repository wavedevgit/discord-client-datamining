/** chunk id: 672428, original params: e,l,t (module,exports,require) **/
t.d(l, {
    D: () => s
});
var r = t(64700),
    o = t(575593),
    n = t(417597),
    a = t(67480),
    i = t(979286),
    d = t(590180),
    c = t(652215);

function s(e, l) {
    let t = (0, n.yK)([a.A], () => e.map(e => a.A.get(e))),
        s = (0, n.yK)([d.A], () => e.map(e => d.A.isFetchingProduct(e))),
        u = (0, n.yK)([d.A], () => e.map(e => d.A.getProduct(e))),
        h = (0, n.yK)([d.A], () => e.map(e => d.A.getProductFetchError(e))),
        p = (0, n.yK)([d.A], () => e.map(e => d.A.getProductFetchErrorTimestamp(e)));
    return (0, r.useEffect)(() => {
        let r = Date.now();
        for (let [n, a] of e.entries()) {
            let e = t[n],
                d = u[n],
                m = s[n],
                _ = h[n],
                b = p[n],
                S = !0 === l && d?.type === o.R.BUNDLE && 0 === d.items.length,
                T = null != _ && null != b && r - b < 36e5;
            null != d && !S || null != e && e.productLine !== c.EZt.COLLECTIBLES || m || T || (0, i.Jp)(a, {
                includeBundles: l
            })
        }
    }, [e, t, s, u, h, p, l]), u.some((e, l) => s[l] || null == e && null == h[l])
}