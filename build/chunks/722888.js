/** chunk id: 722888 params = (module,exports,require) **/
n.d(t, {
    G: () => d,
    _: () => o
});
var i = n(64700),
    l = n(311907),
    s = n(599941),
    r = n(544199),
    a = n(697627);

function o(e, t) {
    let n = (0, l.bG)([a.A], () => a.A.getPriceTiersForGuildAndType(e, t)),
        s = (0, l.bG)([a.A], () => a.A.getPriceTiersFetchStateForGuildAndType(e, t));
    return i.useEffect(() => {
        s === a.e.NOT_FETCHED && (0, r.F)(e, t)
    }, [e, s, t]), {
        loading: s === a.e.FETCHING,
        priceTiers: n
    }
}

function d(e) {
    let {
        fetchSubscriptionsSettings: t,
        loading: n,
        error: l
    } = (0, s.XE)();
    i.useEffect(() => {
        t(e)
    }, [t, e]);
    let r = (0, s.Tq)(e);
    return {
        loaded: null != r && !n,
        subscriptionsSettings: r,
        loading: n,
        error: l
    }
}