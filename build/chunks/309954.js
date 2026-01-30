/** chunk id: 309954, original params: e,t,n (module,exports,require) **/
"use strict";
n.d(t, {
    W: () => s
});
var r = n(64700),
    i = n(311907),
    a = n(786953),
    o = n(505274);

function s() {
    let {
        balance: e,
        isFetching: t,
        error: n
    } = (0, i.cf)([o.A], () => ({
        balance: o.A.balance,
        isFetching: o.A.isFetchingBalance,
        error: o.A.fetchBalanceError
    }));
    return (0, r.useEffect)(() => {
        null !== e || null !== n || t || (0, a.Bf)()
    }, [e, n, t]), {
        balance: e,
        isFetching: t,
        error: n
    }
}