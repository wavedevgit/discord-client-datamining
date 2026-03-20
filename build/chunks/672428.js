/** chunk id: 672428 params = (module,exports,require) **/
r.d(t, {
    D: () => o
});
var l = r(64700),
    n = r(575593),
    a = r(417597),
    s = r(67480),
    c = r(979286),
    i = r(590180),
    d = r(652215);

function o(e, t) {
    let r = (0, a.yK)([s.A], () => e.map(e => s.A.get(e))),
        o = (0, a.yK)([i.A], () => e.map(e => i.A.isFetchingProduct(e))),
        u = (0, a.yK)([i.A], () => e.map(e => i.A.getProduct(e))),
        m = (0, a.yK)([i.A], () => e.map(e => i.A.getProductFetchError(e))),
        h = (0, a.yK)([i.A], () => e.map(e => i.A.getProductFetchErrorTimestamp(e)));
    return (0, l.useEffect)(() => {
        let l = Date.now();
        for (let [a, s] of e.entries()) {
            let e = r[a],
                i = u[a],
                p = o[a],
                A = m[a],
                g = h[a],
                f = !0 === t && i?.type === n.R.BUNDLE && 0 === i.items.length,
                E = null != A && null != g && l - g < 36e5;
            null != i && !f || null != e && e.productLine !== d.EZt.COLLECTIBLES || p || E || (0, c.Jp)(s, {
                includeBundles: t
            })
        }
    }, [e, r, o, u, m, h, t]), u.some((e, t) => o[t] || null == e && null == m[t])
}