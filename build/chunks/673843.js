/** chunk id: 673843 params = (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    a = n(311907),
    l = n(73825),
    s = n(97352),
    r = n(394300);

function o(e) {
    let t = i.useMemo(() => e?.items.find(e => (0, r.P)(e))?.skuId ?? null, [e]),
        {
            isLoaded: n,
            isFetching: o
        } = (0, a.cf)([s.A], () => ({
            isLoaded: null == t || s.A.isLoadedForSKU(t),
            isFetching: null != t && s.A.isFetchingForSKU(t)
        })),
        d = i.useRef(!1);
    i.useEffect(() => {
        null == t || n || o || d.current || (d.current = !0, (0, l.ur)(t).catch(() => {}))
    }, [t, n, o])
}