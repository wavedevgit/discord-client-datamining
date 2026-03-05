/** chunk id: 309954 params = (module,exports,require) **/
n.d(t, {
    W: () => l
});
var s = n(64700),
    a = n(311907),
    i = n(786953),
    r = n(505274);

function l() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, a.cf)([r.A], () => ({
        balance: r.A.balance,
        isFetching: r.A.isFetchingBalance,
        error: r.A.fetchBalanceError
    }));
    return (0, s.useEffect)(() => {
        null !== e || null !== n || t || (0, i.Bf)()
    }, [e, n, t]), {
        balance: e,
        isFetching: t,
        error: n
    }
}