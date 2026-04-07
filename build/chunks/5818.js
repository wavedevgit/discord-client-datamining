/** chunk id: 5818 params = (module,exports,require) **/
s.d(t, {
    A: () => l
});
var a = s(64700),
    i = s(677185);
let l = e => {
    let {
        subscriptionId: t,
        searchQuery: s
    } = e, [l, r] = a.useState([]), [n, d] = a.useState(0), [c, u] = a.useState(!1), [o, m] = a.useState(!1), x = async e => {
        if (!c && null != e) try {
            u(!0), m(!1);
            let a = await (0, i.EQ)(t, e, s);
            r(t => 0 === e ? a.users : [...t, ...a.users]), d(a.nextIndex)
        } catch (e) {
            m(!0)
        } finally {
            u(!1)
        }
    };
    return (0, a.useEffect)(() => {
        d(0), x(0)
    }, [t, s]), {
        eligibleUsers: l,
        isFetching: c,
        hasError: o,
        getNextRows: () => x(n)
    }
}