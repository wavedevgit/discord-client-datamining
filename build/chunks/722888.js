/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    a = n(311907),
    r = n(599941),
    l = n(544199),
    s = n(697627);

function o(e, t) {
    let n = (0, a.bG)([s.A], () => s.A.getPriceTiersForGuildAndType(e, t)),
        r = (0, a.bG)([s.A], () => s.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        r === s.e.NOT_FETCHED && (0, l.F)(e, t)
    }, [e, r, t]), {
        loading: r === s.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: a
    } = (0, r.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let l = (0, r.Tq)(e);
    return {
        loaded: null != l && !n,
        subscriptionsSettings: l,
        loading: n,
        error: a
    }
}