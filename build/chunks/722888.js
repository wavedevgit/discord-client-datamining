/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    r = n(311907),
    l = n(599941),
    a = n(544199),
    s = n(697627);

function o(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        l = (0, r.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        l === s.e.NOT_FETCHED && (0, a.F)(e, t)
    }, [e, l, t]), {
        loading: l === s.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: r
    } = (0, l.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let a = (0, l.Tq)(e);
    return {
        loaded: null != a && !n,
        subscriptionsSettings: a,
        loading: n,
        error: r
    }
}