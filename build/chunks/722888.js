/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    l = n(311907),
    r = n(599941),
    s = n(544199),
    a = n(697627);

function o(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getPriceTiersForGuildAndType(e, t)),
        r = (0, l.bG)([a.A], () => a.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        r === a.e.NOT_FETCHED && (0, s.F)(e, t)
    }, [e, r, t]), {
        loading: r === a.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: l
    } = (0, r.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let s = (0, r.Tq)(e);
    return {
        loaded: null != s && !n,
        subscriptionsSettings: s,
        loading: n,
        error: l
    }
}