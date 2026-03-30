/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    r = n(311907),
    a = n(599941),
    l = n(544199),
    s = n(697627);

function o(e, t) {
    let n = (0, r.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        a = (0, r.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        a === s.e.NOT_FETCHED && (0, l.F)(e, t)
    }, [e, a, t]), {
        loading: a === s.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: r
    } = (0, a.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let l = (0, a.Tq)(e);
    return {
        loaded: null != l && !n,
        subscriptionsSettings: l,
        loading: n,
        error: r
    }
}