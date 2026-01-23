/** Chunk was on 42944 **/
/** chunk id: 667049, original params: e,a,n (module,exports,require) **/
n.d(a, {
    A: () => s
});
var t = n(311907),
    l = n(961350),
    i = n(622543),
    r = n(61881);

function s(e) {
    let a = (0, t.bG)([l.default], () => {
            let a = l.default.getId();
            return null != e && a === e
        }, [e]),
        n = (0, t.bG)([r.A], () => r.A.getPendingWidgets()),
        s = (0, t.yK)([i.A], () => {
            var a;
            if (null == e) return [];
            let n = i.A.getUserProfile(e);
            return null != (a = null == n ? void 0 : n.widgets) ? a : []
        }, [e]);
    return a && null !== n ? n : s
}