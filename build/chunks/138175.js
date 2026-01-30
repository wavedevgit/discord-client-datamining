/** Chunk was on 64935 **/
/** chunk id: 138175, original params: e,t,n (module,exports,require) **/
n.d(t, {
    b: () => o
}), n(896048);
var r = n(64700),
    i = n(311907),
    l = n(354138),
    a = n(212534),
    s = n(611010);

function o(e) {
    let {
        id: t,
        isDiscoverable: n
    } = e, [o, c, u] = (0, i.yK)([a.A], () => [a.A.getApplication(t), a.A.isInvalidApplication(t), a.A.getApplicationFetchState(t)], [t]);
    return r.useEffect(() => {
        !1 === n || c || u === a.e.FETCHED || u === a.e.FETCHING || (0, l.eP)(t)
    }, [t, u, n, c]), r.useMemo(() => null != o ? e.mergeFromApplicationUpdate(s.Ay.createFromServer(o)) : e, [e, o])
}