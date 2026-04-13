/** chunk id: 83942 params = (module,exports,require) **/
n.d(t, {
    c: () => o,
    w: () => c
});
var i = n(311907),
    a = n(961350),
    l = n(383501),
    s = n(162605);

function r(e, t) {
    return 0 === e.size || 1 === e.size && e.has(t)
}

function c(e) {
    return (0, i.bG)([s.A, a.default], () => {
        if (null == e) return !0;
        let t = s.A.getUserIds(e);
        return null == t || r(t, a.default.getId())
    })
}

function o() {
    return (0, i.bG)([l.A, a.default], () => {
        let e = l.A.getUserIds();
        return null == e || r(e, a.default.getId())
    })
}