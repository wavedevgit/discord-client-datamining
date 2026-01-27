/** Chunk was on 41727 **/
/** chunk id: 477654, original params: e,t,n (module,exports,require) **/
n.d(t, {
    o: () => a
}), n(896048);
var r = n(64700);
n(309613);
var l = n(652215);
let i = 9975 + l.T_y,
    s = 9975 / l.T_y;

function a(e) {
    let {
        totalResults: t,
        isSearching: n
    } = e, [a, o] = r.useState(t);
    return r.useEffect(() => {
        n || o(t)
    }, [t, n]), {
        isPaginationTotalCountLimited: a > 9975 + l.T_y,
        paginationTotalCount: Math.min(a, i),
        paginationMaxIndex: s
    }
}