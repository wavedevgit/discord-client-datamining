/** chunk id: 667049 params = (module,exports,require) **/
n.d(t, {
    A: () => r
});
var i = n(311907),
    a = n(961350),
    l = n(622543),
    s = n(61881);

function r(e) {
    let t = (0, i.bG)([a.default], () => {
            let t = a.default.getId();
            return null != e && t === e
        }, [e]),
        n = (0, i.bG)([s.A], () => s.A.getPendingWidgets()),
        r = (0, i.yK)([l.A], () => {
            if (null == e) return [];
            let t = l.A.getUserProfile(e);
            return t?.widgets ?? []
        }, [e]);
    return t && null !== n ? n : r
}