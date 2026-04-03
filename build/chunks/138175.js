/** chunk id: 138175 params = (module,exports,require) **/
n.d(t, {
    b: () => o
});
var i = n(64700),
    l = n(311907),
    r = n(354138),
    s = n(212534),
    a = n(611010);

function o(e) {
    let {
        id: t,
        isDiscoverable: n
    } = e, [o, d, c] = (0, l.yK)([s.A], () => [s.A.getApplication(t), s.A.isInvalidApplication(t), s.A.getApplicationFetchState(t)], [t]);
    return i.useEffect(() => {
        !1 === n || d || c === s.e.FETCHED || c === s.e.FETCHING || (0, r.eP)(t)
    }, [t, c, n, d]), i.useMemo(() => null != o ? e.mergeFromApplicationUpdate(a.Ay.createFromServer(o)) : e, [e, o])
}