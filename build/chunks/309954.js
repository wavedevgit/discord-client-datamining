/** chunk id: 309954 params = (module,exports,require) **/
n.d(t, {
    W: () => l
});
var r = n(64700),
    a = n(311907),
    i = n(786953),
    s = n(505274);

function l(e) {
    let {
        balance: t,
        isFetching: n,
        error: l
    } = (0, a.cf)([s.A], () => ({
        balance: s.A.balance,
        isFetching: s.A.isFetchingBalance,
        error: s.A.fetchBalanceError
    }));
    return (0, r.useEffect)(() => {
        e?.disableFetch || null !== t || null !== l || s.A.isFetchingBalance || (0, i.Bf)()
    }, [t, l, e?.disableFetch]), {
        balance: t,
        isFetching: n,
        error: l
    }
}