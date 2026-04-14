/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    a = n(311907),
    l = n(599941),
    s = n(544199),
    r = n(697627);

function o(e, t) {
    let n = (0, a.bG)([r.A], () => r.A.getPriceTiersForGuildAndType(e, t)),
        l = (0, a.bG)([r.A], () => r.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        l === r.e.NOT_FETCHED && (0, s.F)(e, t)
    }, [e, l, t]), {
        loading: l === r.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: a
    } = (0, l.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let s = (0, l.Tq)(e);
    return {
        loaded: null != s && !n,
        subscriptionsSettings: s,
        loading: n,
        error: a
    }
}