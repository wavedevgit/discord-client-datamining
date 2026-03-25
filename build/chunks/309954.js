/** chunk id: 309954 params = (module,exports,require) **/
a.d(t, {
    W: () => r
});
var n = a(64700),
    s = a(311907),
    o = a(786953),
    c = a(505274);

function r() {
    let {
        balance: e,
        isFetching: t,
        error: a
    } = (0, s.cf)([c.A], () => ({
        balance: c.A.balance,
        isFetching: c.A.isFetchingBalance,
        error: c.A.fetchBalanceError
    }));
    return (0, n.useEffect)(() => {
        null !== e || null !== a || t || (0, o.Bf)()
    }, [e, a, t]), {
        balance: e,
        isFetching: t,
        error: a
    }
}