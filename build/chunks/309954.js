/** chunk id: 309954 params = (module,exports,require) **/
a.d(t, {
    W: () => l
});
var n = a(64700),
    r = a(311907),
    i = a(786953),
    s = a(505274);

function l(e) {
    let {
        balance: t,
        isFetching: a,
        error: l
    } = (0, r.cf)([s.A], () => ({
        balance: s.A.balance,
        isFetching: s.A.isFetchingBalance,
        error: s.A.fetchBalanceError
    }));
    return (0, n.useEffect)(() => {
        e?.disableFetch || null !== t || null !== l || s.A.isFetchingBalance || (0, i.Bf)()
    }, [t, l, e?.disableFetch]), {
        balance: t,
        isFetching: a,
        error: l
    }
}