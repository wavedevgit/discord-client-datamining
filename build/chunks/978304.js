/** Chunk was on 2827 **/
/** chunk id: 978304, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var r = n(64700),
    i = n(311907),
    l = n(824552),
    s = n(875444),
    a = n(546183);

function o(e, t) {
    let n = (0, i.bG)([a.default], () => a.default.getFetchState()),
        o = (0, i.bG)([a.default], () => e ? a.default.getNewestTokensForNonChildrenApplications() : a.default.getNewestTokens()),
        c = r.useMemo(() => null == o ? [] : o.filter(e => (0, s.A)(e.application)).map(e => e.application), [o]);
    return r.useEffect(() => {
        t || l.A.fetch()
    }, [t]), {
        showLoadingIndicator: n !== a.FetchState.FETCHED && (null == o || 0 === o.length),
        slayerSdkApplications: c
    }
}