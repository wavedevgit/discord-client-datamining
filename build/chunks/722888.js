/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    a = n(311907),
    l = n(599941),
    r = n(544199),
    s = n(697627);

function o(e, t) {
    let n = (0, a.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        l = (0, a.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        l === s.e.NOT_FETCHED && (0, r.F)(e, t)
    }, [e, l, t]), {
        loading: l === s.e.FETCHING,
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
    let r = (0, l.Tq)(e);
    return {
        loaded: null != r && !n,
        subscriptionsSettings: r,
        loading: n,
        error: a
    }
}