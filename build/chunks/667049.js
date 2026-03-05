/** chunk id: 667049 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    l = n(961350),
    a = n(622543),
    s = n(61881);

function r(e) {
    let t = (0, i.bG)([l.default], () => {
            let t = l.default.getId();
            return null != e && t === e
        }, [e]),
        n = (0, i.bG)([s.A], () => s.A.getPendingWidgets()),
        r = (0, i.yK)([a.A], () => {
            if (null == e) return [];
            let t = a.A.getUserProfile(e);
            return t?.widgets ?? []
        }, [e]);
    return t && null !== n ? n : r
}