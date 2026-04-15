/** chunk id: 83942 params = (module,exports,require) **/
n.d(t, {
    c: () => o,
    w: () => c
});
var a = n(311907),
    i = n(961350),
    l = n(383501),
    s = n(162605);

function r(e, t) {
    return 0 === e.size || 1 === e.size && e.has(t)
}

function c(e) {
    return (0, a.bG)([s.A, i.default], () => {
        if (null == e) return !0;
        let t = s.A.getUserIds(e);
        return null == t || r(t, i.default.getId())
    })
}

function o() {
    return (0, a.bG)([l.A, i.default], () => {
        let e = l.A.getUserIds();
        return null == e || r(e, i.default.getId())
    })
}