/** chunk id: 138175 params = (module,exports,require) **/
n.d(t, {
    b: () => o
});
var i = n(64700),
    r = n(311907),
    a = n(354138),
    l = n(212534),
    s = n(611010);

function o(e) {
    let {
        id: t,
        isDiscoverable: n
    } = e, [o, d, c] = (0, r.yK)([l.A], () => [l.A.getApplication(t), l.A.isInvalidApplication(t), l.A.getApplicationFetchState(t)], [t]);
    return i.useEffect(() => {
        !1 === n || d || c === l.e.FETCHED || c === l.e.FETCHING || (0, a.eP)(t)
    }, [t, c, n, d]), i.useMemo(() => null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e, [e, o])
}