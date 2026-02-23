/** chunk id: 978304, original params: e,t,n (module,exports,require) **/
n.d(t, {
    A: () => o
});
var i = n(64700),
    s = n(311907),
    a = n(824552),
    l = n(875444),
    r = n(546183);

function o(e, t) {
    let n = (0, s.bG)([r.default], () => r.default.getFetchState()),
        o = (0, s.bG)([r.default], () => e ? r.default.getNewestTokensForNonChildrenApplications() : r.default.getNewestTokens()),
        c = i.useMemo(() => null == o ? [] : o.filter(e => (0, l.A)(e.application)).map(e => e.application), [o]);
    return i.useEffect(() => {
        t || a.A.fetch()
    }, [t]), {
        showLoadingIndicator: n !== r.FetchState.FETCHED && (null == o || 0 === o.length),
        slayerSdkApplications: c
    }
}