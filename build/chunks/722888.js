/** Chunk was on 92917 **/
/** chunk id: 722888, original params: e,t,n (module,exports,require) **/
n.d(t, {
    G: () => c,
    _: () => o
});
var r = n(64700),
    i = n(311907),
    l = n(599941),
    a = n(544199),
    s = n(697627);

function o(e, t) {
    let n = (0, i.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        l = (0, i.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return r.useEffect(() => {
        l === s.e.NOT_FETCHED && (0, a.F)(e, t)
    }, [e, l, t]), {
        loading: l === s.e.FETCHING,
        priceTiers: n
    }
}

function c(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: i
    } = (0, l.XE)();
    r.useEffect(() => {
        t(e)
    }, [t, e]);
    let a = (0, l.Tq)(e);
    return {
        loaded: null != a && !n,
        subscriptionsSettings: a,
        loading: n,
        error: i
    }
}