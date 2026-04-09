/** chunk id: 309954 params = (module,exports,require) **/
a.d(t, {
    W: () => r
});
var n = a(64700),
    s = a(311907),
    o = a(786953),
    c = a(505274);

function r(e) {
    let {
        balance: t,
        isFetching: a,
        error: r
    } = (0, s.cf)([c.A], () => ({
        balance: c.A.balance,
        isFetching: c.A.isFetchingBalance,
        error: c.A.fetchBalanceError
    }));
    return (0, n.useEffect)(() => {
        e?.disableFetch || null !== t || null !== r || c.A.isFetchingBalance || (0, o.Bf)()
    }, [t, r, e?.disableFetch]), {
        balance: t,
        isFetching: a,
        error: r
    }
}